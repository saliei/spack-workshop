import { defineCodeRunnersSetup } from '@slidev/types'
import { executePythonCode } from './pyodide'

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
