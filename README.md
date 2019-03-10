# javascript-logger
Conditional javascript logger

## Installation
```ts
npm i javascript-logger --save
```

## Enabling logging by querystring
Add 'jsDebug' to your url querystring
```ts
e.g. 1: http://localhost?jsDebug
e.g. 2: http://localhost?jsDebug=123
```

## Enabling logging by localStorage
Add 'jsDebug' key to the localstorage object
```ts
localStorage.setItem("jsDebug",1)
```

## TypeScript
```ts
import { Logger } from 'javascript-logger';
Logger.log("Logging test 1");
Logger.log('%s, %s', var1, var2);
Logger.log(`Logging test 3: ${this.properties.value1}`);
```