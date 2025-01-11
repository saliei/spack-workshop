```ts {monaco-run}{lineNumbers:'on'}
import { version } from 'vue'
import { emptyArray, sayHello } from './external'

sayHello()
console.log(`vue ${version}`)
console.log(emptyArray<number>(10).reduce(fib => [...fib, fib.at(-1)! + fib.at(-2)!], [1, 1]))
```

```python {monaco-run}{lineNumbers:'on'}
print("Hello from Python!")
x = 10
y = 20
print(f"Sum: {x + y}")
```

