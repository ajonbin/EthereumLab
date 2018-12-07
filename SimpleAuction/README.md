# SimpleAuction With Node #

## Setup ##

### Install Ethereum Modules ###

~~~shell
$npm init
$npm install --save solc@0.4.25 ganache-cli web3
~~~

### Install Test Framework ###

~~~shell
$npm install --save-dev mocha chai
~~~

### Setup Babel ###

1. Install Babel 7

~~~shell
$npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/node
$npm install --save-dev @babel/plugin-transform-runtime
$npm install --save @babel/runtime
~~~

2. Setup Babel

~~~shell
$ cat .babelrc
{
    "presets":[
        "@babel/preset-env"
    ],
    "plugins": [
        "@babel/plugin-transform-runtime"
    ]
}
~~~

## Run Test ##

~~~shell
$npm npm run build; npm run test;
~~~

## Issues ##

Q:When use babel 6, get "regeneratorRuntime is not defined" error

~~~js
> simpleauction@1.0.0 test /Users/haimhuan/workspace/EthereumLab/SimpleAuction
> mocha es6/test/*.js

/Users/haimhuan/workspace/EthereumLab/SimpleAuction/node_modules/solc/soljson.js:1
(function (exports, require, module, __filename, __dirname) { var Module;if(!Module)Module=(typeof Module!=="undefined"?Module:null)||{};var moduleOverrides={};for(var key in Module){if(Module.hasOwnProperty(key)){moduleOverrides[key]=Module[key]}}var ENVIRONMENT_IS_WEB=typeof window==="object";var ENVIRONMENT_IS_WORKER=typeof importScripts==="function";var ENVIRONMENT_IS_NODE=typeof process==="object"&&typeof require==="function"&&!ENVIRONMENT_IS_WEB&&!ENVIRONMENT_IS_WORKER;var ENVIRONMENT_IS_SHELL=!ENVIRONMENT_IS_WEB&&!ENVIRONMENT_IS_NODE&&!ENVIRONMENT_IS_WORKER;if(ENVIRONMENT_IS_NODE){if(!Module["print"])Module["print"]=function print(x){process["stdout"].write(x+"\n")};if(!Module["printErr"])Module["printErr"]=function printErr(x){process["stderr"].write(x+"\n")};var nodeFS=require("fs");var nodePath=require("path");Module["read"]=function read(filename,binary){filename=nodePath["normalize"](filename);var ret=nodeFS["read

ReferenceError: regeneratorRuntime is not defined
    at Object.<anonymous> (/Users/haimhuan/workspace/EthereumLab/SimpleAuction/es6/test/TestSimpleAuction.js:17:44)
    at Module._compile (module.js:660:30)
    at Object.Module._extensions..js (module.js:671:10)
    at Module.load (module.js:573:32)
    at tryModuleLoad (module.js:513:12)
    at Function.Module._load (module.js:505:3)
    at Module.require (module.js:604:17)
    at require (internal/module.js:11:18)
    at /Users/haimhuan/workspace/EthereumLab/SimpleAuction/node_modules/mocha/lib/mocha.js:250:27
    at Array.forEach (<anonymous>)
    at Mocha.loadFiles (/Users/haimhuan/workspace/EthereumLab/SimpleAuction/node_modules/mocha/lib/mocha.js:247:14)
    at Mocha.run (/Users/haimhuan/workspace/EthereumLab/SimpleAuction/node_modules/mocha/lib/mocha.js:576:10)
    at Object.<anonymous> (/Users/haimhuan/workspace/EthereumLab/SimpleAuction/node_modules/mocha/bin/_mocha:637:18)
    at Module._compile (module.js:660:30)
    at Object.Module._extensions..js (module.js:671:10)
    at Module.load (module.js:573:32)
    at tryModuleLoad (module.js:513:12)
    at Function.Module._load (module.js:505:3)
    at Function.Module.runMain (module.js:701:10)
    at startup (bootstrap_node.js:190:16)
    at bootstrap_node.js:662:3
npm ERR! code ELIFECYCLE
npm ERR! errno 7
npm ERR! simpleauction@1.0.0 test: `mocha es6/test/*.js`
npm ERR! Exit status 7
npm ERR! 
npm ERR! Failed at the simpleauction@1.0.0 test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/haimhuan/.npm/_logs/2018-12-07T02_53_18_460Z-debug.log
~~~

A: Use Babel 7 and transform-runtime plugin
[@babel/plugin-transform-runtime](https://babeljs.io/docs/en/next/babel-plugin-transform-runtime)

## Reference ##

* [web3js document](https://web3js.readthedocs.io/en/1.0/)
  * [web3.utils.toBN](https://web3js.readthedocs.io/en/1.0/web3-utils.html#tobn)
  * [web3.eth.getGasPrice](https://web3js.readthedocs.io/en/1.0/web3-eth.html#getgasprice)
  * [web3.utils.toWei](https://web3js.readthedocs.io/en/1.0/web3-utils.html#towei)
* [Using babel 7 with node](https://hackernoon.com/using-babel-7-with-node-7e401bc28b04)
* [@babel/plugin-transform-runtime](https://babeljs.io/docs/en/next/babel-plugin-transform-runtime)
* [Three methods to send ether by means of Solidity](https://medium.com/daox/three-methods-to-transfer-funds-in-ethereum-by-means-of-solidity-5719944ed6e9)
* [Mocha Timeout](https://mochajs.org/#timeouts)