(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/handler/uwer.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/entity/Rating.ts":
/*!******************************!*\
  !*** ./src/entity/Rating.ts ***!
  \******************************/
/*! exports provided: RatingHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RatingHandler\", function() { return RatingHandler; });\nconst RatingHandler = {\n    get(params) {\n        return {\n            url: params.url,\n            averageRate: 2.5,\n            totalRate: 100,\n        };\n    },\n    post(params) {\n        return {\n            url: params.url,\n            averageRate: params.rate,\n            totalRate: 100,\n        };\n    },\n};\n\n\n//# sourceURL=webpack:///./src/entity/Rating.ts?");

/***/ }),

/***/ "./src/entity/entityTypes.ts":
/*!***********************************!*\
  !*** ./src/entity/entityTypes.ts ***!
  \***********************************/
/*! exports provided: entityTypeHandlers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"entityTypeHandlers\", function() { return entityTypeHandlers; });\n/* harmony import */ var _Rating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rating */ \"./src/entity/Rating.ts\");\n\nconst entityTypeHandlers = {\n    rating: _Rating__WEBPACK_IMPORTED_MODULE_0__[\"RatingHandler\"],\n};\n\n\n//# sourceURL=webpack:///./src/entity/entityTypes.ts?");

/***/ }),

/***/ "./src/handler/uwer.ts":
/*!*****************************!*\
  !*** ./src/handler/uwer.ts ***!
  \*****************************/
/*! exports provided: handler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handler\", function() { return handler; });\n/* harmony import */ var _entity_entityTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entity/entityTypes */ \"./src/entity/entityTypes.ts\");\n/* harmony import */ var _utils_exceptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/exceptions */ \"./src/utils/exceptions.ts\");\n/* harmony import */ var _utils_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/response */ \"./src/utils/response.ts\");\n\n\n\nconst handler = async (event) => {\n    try {\n        switch (event.httpMethod) {\n            case 'GET':\n                return get(event);\n            case 'POST':\n                return post(event);\n            default:\n                throw new _utils_exceptions__WEBPACK_IMPORTED_MODULE_1__[\"Exception500\"]('Http method not implemented');\n        }\n    }\n    catch (e) {\n        console.log(e.statusCode);\n        return Object(_utils_response__WEBPACK_IMPORTED_MODULE_2__[\"handleErrorResponse\"])(e);\n    }\n};\nconst get = (event) => {\n    try {\n        const entityTypeHandler = _entity_entityTypes__WEBPACK_IMPORTED_MODULE_0__[\"entityTypeHandlers\"][event.queryStringParameters.entityType];\n        return Object(_utils_response__WEBPACK_IMPORTED_MODULE_2__[\"handleResponse\"])(entityTypeHandler.get(event.queryStringParameters));\n    }\n    catch (e) {\n        throw new _utils_exceptions__WEBPACK_IMPORTED_MODULE_1__[\"Exception500\"](`Error on get method: ${e.message}`);\n    }\n};\nconst post = (event) => {\n    try {\n        const entityTypeHandler = _entity_entityTypes__WEBPACK_IMPORTED_MODULE_0__[\"entityTypeHandlers\"][event.queryStringParameters.entityType];\n        return Object(_utils_response__WEBPACK_IMPORTED_MODULE_2__[\"handleResponse\"])(entityTypeHandler.post(JSON.parse(event.body)));\n    }\n    catch (e) {\n        throw new _utils_exceptions__WEBPACK_IMPORTED_MODULE_1__[\"Exception500\"](`Error on post method: ${e.message}`);\n    }\n};\n\n\n//# sourceURL=webpack:///./src/handler/uwer.ts?");

/***/ }),

/***/ "./src/utils/exceptions.ts":
/*!*********************************!*\
  !*** ./src/utils/exceptions.ts ***!
  \*********************************/
/*! exports provided: Exception, Exception422, Exception500 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Exception\", function() { return Exception; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Exception422\", function() { return Exception422; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Exception500\", function() { return Exception500; });\nclass Exception extends Error {\n}\nclass Exception422 extends Exception {\n    constructor() {\n        super(...arguments);\n        this.statusCode = 422;\n    }\n}\nclass Exception500 extends Exception {\n    constructor() {\n        super(...arguments);\n        this.statusCode = 500;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/utils/exceptions.ts?");

/***/ }),

/***/ "./src/utils/response.ts":
/*!*******************************!*\
  !*** ./src/utils/response.ts ***!
  \*******************************/
/*! exports provided: handleResponse, handleErrorResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleResponse\", function() { return handleResponse; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleErrorResponse\", function() { return handleErrorResponse; });\nconst handleResponse = (payload) => {\n    console.log(`test fred ${JSON.stringify(payload)}`);\n    return {\n        statusCode: 200,\n        body: JSON.stringify(Object.assign({}, payload)),\n    };\n};\nconst handleErrorResponse = (error) => {\n    console.log(error);\n    return {\n        statusCode: error.statusCode,\n        body: JSON.stringify({\n            errorMesssage: error.message,\n        }),\n    };\n};\n\n\n//# sourceURL=webpack:///./src/utils/response.ts?");

/***/ })

/******/ })));