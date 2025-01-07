import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup(async (monaco) => {
  return {
    editorOptions: {
      fontSize: 8,
      lineHeight: 1.5,
      minimap: { enabled: false },
    },
    containerOptions: {
        styles: {
            border: '1px solid black',
        }
    }
  }
})

