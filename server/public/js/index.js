/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/js/class/lesson3.js":
/*!*********************************!*\
  !*** ./app/js/class/lesson3.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n{\n  {\n    //图片加载\n    //1. 加载图片\n    var loadImg = function loadImg(src) {\n      return new Promise(function (resolve, reject) {\n        var img = document.createElement('img');\n        img.src = src;\n\n        img.onload = function () {\n          resolve(img);\n        };\n\n        img.onerror = function (err) {\n          reject(err);\n        };\n      });\n    };\n\n    var showImg = function showImg(imgs) {\n      imgs.forEach(function (img) {\n        document.body.appendChild(img);\n      });\n    };\n\n    Promise.all([loadImg('https://img1.doubanio.com/view/photo/l/public/p647348019.webp'), loadImg('https://img1.doubanio.com/view/photo/raw/public/p2203008659.jpg'), loadImg('https://img3.doubanio.com/view/photo/l/public/p2171942433.webp')]).then(showImg);\n  }\n  {} //图片加载\n  //1. 加载图片\n  // function loadImg(src) {\n  //     return new Promise((resolve, reject)=>{\n  //         var img = document.createElement('img');\n  //         img.src = src;\n  //         img.onload = ()=>{resolve(img)};\n  //         img.onerror = err=>{reject(err)};\n  //     });\n  // }\n  // function showImg(imgs) {\n  //     imgs.forEach((img)=>{document.body.appendChild(img)});\n  // }\n  // Promise.race([\n  //     loadImg('https://img1.doubanio.com/view/photo/l/public/p647348019.webp'),\n  //     loadImg('https://img1.doubanio.com/view/photo/raw/public/p2203008659.jpg'),\n  //     loadImg('https://img3.doubanio.com/view/photo/l/public/p2171942433.webp')\n  // ]).then(showImg);\n  // {\n  //     let ajax = (callback) => {\n  //         return new Promise((resolve, reject) => {\n  //             console.log('开始');\n  //             setTimeout(() => {\n  //                 callback && callback.call();\n  //             }, 1000);\n  //         })\n  //     }\n  //     ajax(() => {\n  //         console.log('执行1');\n  //     });\n  // } \n  // {    let ajax = (value)=>{\n  //         return new Promise((resolve, reject)=>{\n  //             if(value <= 5) {\n  //                 resolve(value);\n  //             } else {\n  //                 reject('ERROR');\n  //             }\n  //         })\n  //     }\n  //     ajax(6).then((value)=>{\n  //         console.log('log',value);\n  //     },(err)=>{\n  //         console.log(err); \n  //     });\n  // }\n\n  {// let state = function* () {\n    //     while(1) {\n    //         yield 'A';\n    //         yield 'B';\n    //         yield 'C';\n    //     }\n    // }\n    // let status = state();\n    // console.log(status.next());\n    // console.log(status.next());\n    // console.log(status.next());\n    // console.log(status.next());\n  }\n  {// let draw = function (count) { \n    //     //具体抽奖逻辑\n    //     console.info(`剩余${count}次`);\n    // }\n    // let residue = function* (count) {\n    //     while(count > 0) {\n    //         yield draw(count);\n    //     }\n    // }\n    // let start = residue(5);\n    // let btn = document.createElement('button');\n    // btn.id = 'start';\n    // btn.textContent='抽奖';\n    // document.body.appendChild(btn);\n    // document.getElementById('start').addEventListener('click', function() {\n    //     start.next();\n    // },false);\n  }\n  {\n    var ajax =\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function ajax() {\n      return regeneratorRuntime.wrap(function ajax$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return new Promise(function (resolve, reject) {\n                setTimeout(function () {\n                  resolve({\n                    code: 1\n                  });\n                }, 200);\n              });\n\n            case 2:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, ajax, this);\n    });\n\n    var pull = function pull() {\n      var gengerate = ajax();\n      var state = gengerate.next();\n      console.info(state, state.value);\n      state.value.then(function (d) {\n        if (d.code != 1) {\n          setTimeout(function () {\n            console.info('wait');\n            poll();\n          }, 1200);\n        }\n      });\n    };\n\n    pull();\n  }\n}\n\n//# sourceURL=webpack:///./app/js/class/lesson3.js?");

/***/ }),

/***/ "./app/js/index.js":
/*!*************************!*\
  !*** ./app/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _class_lesson3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class/lesson3.js */ \"./app/js/class/lesson3.js\");\n/* harmony import */ var _class_lesson3_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_class_lesson3_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack:///./app/js/index.js?");

/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./app/js/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! F:\\00_document\\01_DEMO\\ES6\\app\\js\\index.js */\"./app/js/index.js\");\n\n\n//# sourceURL=webpack:///multi_./app/js/index.js?");

/***/ })

/******/ });