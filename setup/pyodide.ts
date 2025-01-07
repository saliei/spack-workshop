import { loadPyodide } from 'pyodide'
import type { PyodideInterface } from 'pyodide'

let pyodide: PyodideInterface | null = null
let initPromise: Promise<PyodideInterface> | null = null

export async function initPyodide() {
  if (pyodide) return pyodide
  if (initPromise) return initPromise

  initPromise = (async () => {
    try {
      // Initialize Pyodide
      pyodide = await loadPyodide({
        indexURL: '/node_modules/pyodide'
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

export async function executePythonCode(code: string) {
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
