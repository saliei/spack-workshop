```ts {monaco-run}{lineNumbers:true}
import { version } from 'vue'
import { emptyArray, sayHello } from './external'

sayHello()
console.log(`vue ${version}`)
console.log(emptyArray<number>(10).reduce(fib => [...fib, fib.at(-1)! + fib.at(-2)!], [1, 1]))
```

```python {monaco-run}
print("Hello from Python!")
x = 10
y = 20
print(f"Sum: {x + y}")

# You can even use numpy!
import numpy as np
arr = np.array([1, 2, 3, 4, 5])
print(f"NumPy array mean: {arr.mean()}")
```

