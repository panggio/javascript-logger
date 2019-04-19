# javascript-logger
Conditional javascript console logger

## Installation
```ts
npm i javascript-logger --save
```

## Enabling logging/tracing by querystring
Add 'jsDebug' to your url querystring

* To enable logging: http://localhost?jsDebug=1
* To enable tracing: http://localhost?jsDebug=2
* To enable logging and tracing: http://localhost?jsDebug=3

## Enabling logging/tracing by localStorage
Add 'jsDebug' key to the localstorage object
```ts
localStorage.setItem("jsDebug", "1") // To enable logging
localStorage.setItem("jsDebug", "2") // To enable tracing
localStorage.setItem("jsDebug", "3") // To enable logging and tracing


```

## jsDebug values
* jsDebug = 1 enables displaying of logs in the console window
* jsDebug = 2 enables displaying of trace commands in the console window
* jsDebug = 3 enables displaying of log and trace commands in the console window

## TypeScript
```ts
import { Logger } from 'javascript-logger';

Logger.log("Logging test 1");
Logger.log('%s, %s', var1, var2);
Logger.log(`Logging test 3: ${this.properties.value1}`);

Logger.trace(`Tracing test 1: ${this.properties.value1}`);
```