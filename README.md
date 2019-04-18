# javascript-logger
Conditional javascript logger

## Installation
```ts
npm i javascript-logger --save
```

## Enabling logging by querystring
Add 'jsDebug' to your url querystring
```ts
e.g.: http://localhost?jsDebug=1
```

## Enabling logging by localStorage
Add 'jsDebug' key to the localstorage object
```ts
localStorage.setItem("jsDebug", 1)
```

## jsDebug values
jsDebug = 1 enables log only
jsDebug = 2 enables trace only
jsDebug = 3 enables log & trace

## TypeScript
```ts
import { Logger } from 'javascript-logger';

Logger.log("Logging test 1");
Logger.log('%s, %s', var1, var2);
Logger.log(`Logging test 3: ${this.properties.value1}`);

Logger.trace(`Tracing test 1: ${this.properties.value1}`);
```