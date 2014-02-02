break-js
========

Set breakpoint before function call from console, this could potentially be implementation of `console.break()`. 

Script makes global function `__break`.

Parameters:

1. Function name
    - Mandatory
    - Type: string
2. Remove breakpoint
    - [Optional]
    - Type: boolean

Details on implementation:
// TODO: add blog post url

Usage
-

To set the breakpoint:
```javascript
__break('foo.bar.func');
```
To remove the breakpoint:
```javascript
__break('foo.bar.func', true);
```

Potentially, we could assign `__break` function to `console` object: <br />
*Note: this is now added to script*
```javascript
if(!console.break) {
  console.break = __break;
}
```