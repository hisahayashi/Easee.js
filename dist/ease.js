(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Ease"] = factory();
	else
		root["Ease"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ease.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ease.js":
/*!*********************!*\
  !*** ./src/ease.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * Ease.js v0.1.0\n * easing animation helper\n * MIT license\n */\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar EASING = __webpack_require__(/*! ./easing.js */ \"./src/easing.js\");\n\nvar Timer = __webpack_require__(/*! ./timer.js */ \"./src/timer.js\");\n\nvar EaseItem = __webpack_require__(/*! ./easeItem.js */ \"./src/easeItem.js\");\n\nvar Ease =\n/*#__PURE__*/\nfunction () {\n  /**\n   * [constructor description]\n   * @return {[type]} [description]\n   */\n  function Ease() {\n    _classCallCheck(this, Ease);\n\n    // variables\n    this.easeList = {};\n    this.easeListCount = 0;\n    this.timer = new Timer();\n  }\n  /**\n   * [add description]\n   * @param {[type]} _duration [description]\n   * @param {[type]} _from     [description]\n   * @param {[type]} _to       [description]\n   * @param {[type]} _easing   [description]\n   */\n\n\n  _createClass(Ease, [{\n    key: \"add\",\n    value: function add(_duration, _from, _to, _easing) {\n      var id = this.getListId();\n      var duration = Number(_duration);\n      var from = Number(_from);\n      var to = Number(_to - _from);\n      var easing = typeof EASING[_easing] == 'function' ? _easing : 'Linear';\n      var item = new EaseItem(id, duration, from, to, easing);\n      this.easeList[id] = item;\n      this.easeListCount++;\n      return item;\n    }\n    /**\n     * [remove description]\n     * @param  {[type]} item [description]\n     * @return {[type]}      [description]\n     */\n\n  }, {\n    key: \"remove\",\n    value: function remove(item) {\n      var id = item.id;\n      this.easeList[id].remove();\n      delete this.easeList[id];\n    }\n    /**\n     * [update description]\n     * @return {[type]} [description]\n     */\n\n  }, {\n    key: \"update\",\n    value: function update() {\n      var time = this.timer.time;\n\n      var _arr = Object.keys(this.easeList);\n\n      for (var _i = 0; _i < _arr.length; _i++) {\n        var key = _arr[_i];\n        this.easeList[key].update(time);\n      }\n    }\n    /**\n     * [getListId description]\n     * @return {[type]} [description]\n     */\n\n  }, {\n    key: \"getListId\",\n    value: function getListId() {\n      return this.easeListCount;\n    }\n  }]);\n\n  return Ease;\n}();\n\nmodule.exports = Ease;\n\n//# sourceURL=webpack://Ease/./src/ease.js?");

/***/ }),

/***/ "./src/easeItem.js":
/*!*************************!*\
  !*** ./src/easeItem.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar EASING = __webpack_require__(/*! ./easing.js */ \"./src/easing.js\");\n\nvar Timer = __webpack_require__(/*! ./timer.js */ \"./src/timer.js\");\n\nvar EaseItem =\n/*#__PURE__*/\nfunction () {\n  /**\n   * [constructor description]\n   * @param  {[type]} _id       [description]\n   * @param  {[type]} _duration [description]\n   * @param  {[type]} _from     [description]\n   * @param  {[type]} _to       [description]\n   * @param  {[type]} _easing   [description]\n   * @return {[type]}           [description]\n   */\n  function EaseItem(_id, _duration, _from, _to, _easing) {\n    _classCallCheck(this, EaseItem);\n\n    this.id = _id;\n    this.duration = _duration;\n    this.from = _from;\n    this.to = _to;\n    this.easing = _easing;\n    this.value = this.from;\n    this.timer = new Timer();\n    this.startTime = 0;\n    this.currentTime = 0;\n    this.steppingTime = 0;\n    this.isActive = false;\n  }\n  /**\n   * [remove description]\n   * @return {[type]} [description]\n   */\n\n\n  _createClass(EaseItem, [{\n    key: \"remove\",\n    value: function remove() {\n      this.isActive = false;\n      delete this.timer;\n    }\n    /**\n     * [get description]\n     * @return {[type]} [description]\n     */\n\n  }, {\n    key: \"get\",\n    value: function get() {\n      return this.value;\n    }\n    /**\n     * [run description]\n     * @return {[type]} [description]\n     */\n\n  }, {\n    key: \"run\",\n    value: function run() {\n      this.isActive = true;\n\n      try {\n        if (this.steppingTime === 0) {\n          this.startTime = this.timer.time;\n        } else {\n          this.startTime = this.timer.time - this.steppingTime;\n        }\n      } catch (e) {\n        console.error('Deleted.');\n      }\n\n      return this;\n    }\n    /**\n     * [stop description]\n     * @return {[type]} [description]\n     */\n\n  }, {\n    key: \"stop\",\n    value: function stop() {\n      this.isActive = false;\n      this.steppingTime = this.timer.time - this.startTime;\n      return this;\n    }\n    /**\n     * [reset description]\n     * @return {[type]} [description]\n     */\n\n  }, {\n    key: \"reset\",\n    value: function reset() {\n      this.isActive = true;\n      this.startTime = this.timer.time;\n      return this;\n    }\n    /**\n     * [update description]\n     * @param  {[type]} _time [description]\n     * @return {[type]}       [description]\n     */\n\n  }, {\n    key: \"update\",\n    value: function update(_time) {\n      if (this.isActive) {\n        this.currentTime = _time - this.startTime;\n\n        if (this.currentTime > this.duration) {\n          this.currentTime = this.duration;\n          this.isActive = false;\n        }\n\n        this.value = EASING[this.easing](this.currentTime, this.from, this.to, this.duration);\n      }\n    }\n  }]);\n\n  return EaseItem;\n}();\n\nmodule.exports = EaseItem;\n\n//# sourceURL=webpack://Ease/./src/easeItem.js?");

/***/ }),

/***/ "./src/easing.js":
/*!***********************!*\
  !*** ./src/easing.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar EASING = {\n  Linear: function Linear(t, b, c, d) {\n    return c * t / d + b;\n  },\n  InQuad: function InQuad(t, b, c, d) {\n    return c * (t /= d) * t + b;\n  },\n  OutQuad: function OutQuad(t, b, c, d) {\n    return -c * (t /= d) * (t - 2) + b;\n  },\n  InOutQuad: function InOutQuad(t, b, c, d) {\n    if ((t /= d / 2) < 1) return c / 2 * t * t + b;\n    return -c / 2 * (--t * (t - 2) - 1) + b;\n  },\n  InCubic: function InCubic(t, b, c, d) {\n    return c * (t /= d) * t * t + b;\n  },\n  OutCubic: function OutCubic(t, b, c, d) {\n    return c * ((t = t / d - 1) * t * t + 1) + b;\n  },\n  InOutCubic: function InOutCubic(t, b, c, d) {\n    if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;\n    return c / 2 * ((t -= 2) * t * t + 2) + b;\n  },\n  InQuart: function InQuart(t, b, c, d) {\n    return c * (t /= d) * t * t * t + b;\n  },\n  OutQuart: function OutQuart(t, b, c, d) {\n    return -c * ((t = t / d - 1) * t * t * t - 1) + b;\n  },\n  InOutQuart: function InOutQuart(t, b, c, d) {\n    if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;\n    return -c / 2 * ((t -= 2) * t * t * t - 2) + b;\n  },\n  InQuint: function InQuint(t, b, c, d) {\n    return c * (t /= d) * t * t * t * t + b;\n  },\n  OutQuint: function OutQuint(t, b, c, d) {\n    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;\n  },\n  InOutQuint: function InOutQuint(t, b, c, d) {\n    if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;\n    return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;\n  },\n  InSine: function InSine(t, b, c, d) {\n    return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;\n  },\n  OutSine: function OutSine(t, b, c, d) {\n    return c * Math.sin(t / d * (Math.PI / 2)) + b;\n  },\n  InOutSine: function InOutSine(t, b, c, d) {\n    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;\n  },\n  InExpo: function InExpo(t, b, c, d) {\n    return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;\n  },\n  OutExpo: function OutExpo(t, b, c, d) {\n    return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;\n  },\n  InOutExpo: function InOutExpo(t, b, c, d) {\n    if (t == 0) return b;\n    if (t == d) return b + c;\n    if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;\n    return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;\n  },\n  InCirc: function InCirc(t, b, c, d) {\n    return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;\n  },\n  OutCirc: function OutCirc(t, b, c, d) {\n    return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;\n  },\n  InOutCirc: function InOutCirc(t, b, c, d) {\n    if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;\n    return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;\n  },\n  InElastic: function InElastic(t, b, c, d) {\n    var s = 1.70158;\n    var p = 0;\n    var a = c;\n    if (t == 0) return b;\n    if ((t /= d) == 1) return b + c;\n    if (!p) p = d * .3;\n\n    if (a < Math.abs(c)) {\n      a = c;\n      var s = p / 4;\n    } else var s = p / (2 * Math.PI) * Math.asin(c / a);\n\n    return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;\n  },\n  OutElastic: function OutElastic(t, b, c, d) {\n    var s = 1.70158;\n    var p = 0;\n    var a = c;\n    if (t == 0) return b;\n    if ((t /= d) == 1) return b + c;\n    if (!p) p = d * .3;\n\n    if (a < Math.abs(c)) {\n      a = c;\n      var s = p / 4;\n    } else var s = p / (2 * Math.PI) * Math.asin(c / a);\n\n    return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;\n  },\n  InOutElastic: function InOutElastic(t, b, c, d) {\n    var s = 1.70158;\n    var p = 0;\n    var a = c;\n    if (t == 0) return b;\n    if ((t /= d / 2) == 2) return b + c;\n    if (!p) p = d * (.3 * 1.5);\n\n    if (a < Math.abs(c)) {\n      a = c;\n      var s = p / 4;\n    } else var s = p / (2 * Math.PI) * Math.asin(c / a);\n\n    if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;\n    return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;\n  },\n  InBack: function InBack(t, b, c, d, s) {\n    if (s == undefined) s = 1.70158;\n    return c * (t /= d) * t * ((s + 1) * t - s) + b;\n  },\n  OutBack: function OutBack(t, b, c, d, s) {\n    if (s == undefined) s = 1.70158;\n    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;\n  },\n  InOutBack: function InOutBack(t, b, c, d, s) {\n    if (s == undefined) s = 1.70158;\n    if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;\n    return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;\n  },\n  InBounce: function InBounce(t, b, c, d) {\n    return c - Easing.OutBounce(d - t, 0, c, d) + b;\n  },\n  OutBounce: function OutBounce(t, b, c, d) {\n    if ((t /= d) < 1 / 2.75) {\n      return c * (7.5625 * t * t) + b;\n    } else if (t < 2 / 2.75) {\n      return c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b;\n    } else if (t < 2.5 / 2.75) {\n      return c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b;\n    } else {\n      return c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b;\n    }\n  },\n  InOutBounce: function InOutBounce(t, b, c, d) {\n    if (t < d / 2) return Easing.InBounce(t * 2, 0, c, d) * .5 + b;\n    return Easing.OutBounce(t * 2 - d, 0, c, d) * .5 + c * .5 + b;\n  }\n};\nmodule.exports = EASING;\n/*\n *\n * TERMS OF USE - EASING EQUATIONS\n *\n * Open source under the BSD License.\n *\n * Copyright © 2001 Robert Penner\n * All rights reserved.\n *\n * Redistribution and use in source and binary forms, with or without modification,\n * are permitted provided that the following conditions are met:\n *\n * Redistributions of source code must retain the above copyright notice, this list of\n * conditions and the following disclaimer.\n * Redistributions in binary form must reproduce the above copyright notice, this list\n * of conditions and the following disclaimer in the documentation and/or other materials\n * provided with the distribution.\n *\n * Neither the name of the author nor the names of contributors may be used to endorse\n * or promote products derived from this software without specific prior written permission.\n *\n * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS \"AS IS\" AND ANY\n * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF\n * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE\n *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,\n *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE\n *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED\n * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING\n *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED\n * OF THE POSSIBILITY OF SUCH DAMAGE.\n *\n */\n\n//# sourceURL=webpack://Ease/./src/easing.js?");

/***/ }),

/***/ "./src/timer.js":
/*!**********************!*\
  !*** ./src/timer.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Timer =\n/*#__PURE__*/\nfunction () {\n  /**\n   * [constructor description]\n   * @return {[type]} [description]\n   */\n  function Timer() {\n    _classCallCheck(this, Timer);\n  }\n  /**\n   * [time description]\n   * @return {[type]} [description]\n   */\n\n\n  _createClass(Timer, [{\n    key: \"time\",\n    get: function get() {\n      return Date.now() || +new Date();\n    }\n  }]);\n\n  return Timer;\n}();\n\nmodule.exports = Timer;\n\n//# sourceURL=webpack://Ease/./src/timer.js?");

/***/ })

/******/ });
});