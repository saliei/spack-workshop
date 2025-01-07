import { defineCodeRunnersSetup } from '@slidev/types'

declare global {
  interface Window {
    loadPyodide: (config: any) => Promise<any>
  }
}

let pyodide: any = null
let initPromise: Promise<any> | null = null

async function initPyodide() {
  if (pyodide) return pyodide
  if (initPromise) return initPromise

  initPromise = (async () => {
    try {
      // Load Pyodide script if not already loaded
      if (!window.loadPyodide) {
        await new Promise<void>((resolve, reject) => {
          const script = document.createElement('script')
          script.src = 'https://cdn.jsdelivr.net/pyodide/v0.27.0/full/pyodide.js'
          script.onload = () => resolve()
          script.onerror = () => reject(new Error('Failed to load Pyodide'))
          document.head.appendChild(script)
        })
      }

      // Initialize Pyodide
      pyodide = await window.loadPyodide({
        indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.27.0/full/'
      })

      // Set up stdout/stderr capturing
      await pyodide.runPythonAsync(`
        import sys
        from io import StringIO
        class OutputCatcher:
            def __init__(self):
                self.value = ''
            def write(self, txt):
                self.value += txt
            def flush(self):
                pass
        sys.stdout = OutputCatcher()
        sys.stderr = OutputCatcher()
      `)

      return pyodide
    } catch (error) {
      initPromise = null
      throw error
    }
  })()

  return initPromise
}

async function executePythonCode(code: string) {
  const py = await initPyodide()
  
  try {
    // Reset stdout and stderr
    await py.runPythonAsync(`
      sys.stdout.value = ''
      sys.stderr.value = ''
    `)

    // Execute the code
    await py.runPythonAsync(code)

    // Get stdout and stderr content
    const stdout = await py.runPythonAsync('sys.stdout.value')
    const stderr = await py.runPythonAsync('sys.stderr.value')

    return {
      stdout,
      stderr
    }
  } catch (error: any) {
    return {
      stdout: '',
      stderr: error.message || 'An error occurred while executing the code'
    }
  }
}

export default defineCodeRunnersSetup(() => {
  return {
    async python(code, ctx) {
      try {
        const { stdout, stderr } = await executePythonCode(code)
        
        const output = []
        
        // Process stdout if present
        if (stdout.trim()) {
          stdout.split('\n')
            .filter(Boolean)
            .forEach(line => {
              output.push({
                text: line,
                class: 'log-type LOG'
              })
            })
        }

        // Process stderr if present
        if (stderr.trim()) {
          stderr.split('\n')
            .filter(Boolean)
            .forEach(line => {
              // If it's a traceback, highlight it as Python code
              if (line.includes('Traceback')) {
                output.push({
                  text: stderr,
                  highlightLang: 'python'
                })
              } else {
                output.push({
                  text: line,
                  class: 'log-type ERR'
                })
              }
            })
        }

        // If no output was generated, show a message
        if (output.length === 0) {
          output.push({
            text: '(No output)',
            class: 'opacity-50'
          })
        }

        return output
      } catch (error: any) {
        return [{
          error: error.message || 'An error occurred while executing the code'
        }]
      }
    }
  }
})
