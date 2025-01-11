<<< @/snippets/package.py py {monaco}{lineNumbers:'on'}

another

```ts {monaco}{lineNumbers:'on'}
editableEditor.addAction({
id: 'slidev-save',
label: 'Save',
keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS],
run: () => {
  if (!isWritable.value || !import.meta.hot?.send) {
    console.warn('[Slidev] this monaco editor is not writable, save action is ignored.')
    return
  }
  import.meta.hot.send('slidev:monaco-write', {
    file: props.writable!,
    content: editableEditor.getValue(),
  })
},
})
```
