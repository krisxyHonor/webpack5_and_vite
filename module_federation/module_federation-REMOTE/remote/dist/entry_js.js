"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["entry_js"],{

/***/ "./createElem.js":
/*!***********************!*\
  !*** ./createElem.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createElem\": () => (/* binding */ createElem)\n/* harmony export */ });\nfunction createElem(tag,innerText){\n    let elem = document.createElement(tag)\n    elem.innerText = innerText\n    document.body.append(elem)\n}\n\n//# sourceURL=webpack:///./createElem.js?");

/***/ }),

/***/ "./entry.js":
/*!******************!*\
  !*** ./entry.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _info_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info.js */ \"./info.js\");\n/* harmony import */ var _createElem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createElem.js */ \"./createElem.js\");\n\n\n\n(0,_createElem_js__WEBPACK_IMPORTED_MODULE_1__.createElem)('h1',_info_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n\n//# sourceURL=webpack:///./entry.js?");

/***/ }),

/***/ "./info.js":
/*!*****************!*\
  !*** ./info.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ('inner text from REMOTE pkg');\n\n//# sourceURL=webpack:///./info.js?");

/***/ })

}]);