# garbage-factory

## Requirements

`GarbageFactory` is a class which produces a finite and deterministic sequence of JavaScript objects ("garbage") in an asynchronous manner.

Your task is to implement a React application which uses the `GarbageFactory` to satisfy the following requirements:

1. The `GarbageFactory` must be started one second after the `App` component mounts.
2. When the `GarbageFactory` starts, the background color of the **entire** page must be set to `PALE_YELLOW`. When the `GarbageFactory` finishes generating values, the background color must be set to `PALE_GREEN`. Both `PALE_YELLOW` and `PALE_GREEN` are predefined constants. (Feel free to change them if you are colorblind.)
3. The application must display the values produced by `GarbageFactory` in a bulleted list. The list must update as new garbage is produced.
4. The application must display the sum of the **even** numbers contained within the garbage. The sum must also update as new garbage is produced.

You are free to inspect `GarbageFactory.ts`, but do not modify it.

## Example of Summing Behavior

If the `GarbageFactory` produces the objects

```js
2
{ x: -4 }
[3, 8]
```

then the sum of even numbers is `2 + (-4) + 8 = 6`.