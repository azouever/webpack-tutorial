/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_code_split"] = self["webpackChunkwebpack_code_split"] || []).push([["index"],{

/***/ 138:
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// import _ from \"lodash\";\n\nfunction component() {\n  const element = document.createElement(\"div\");\n  const button = document.createElement(\"button\");\n  const br = document.createElement(\"br\");\n\n  button.innerHTML = \"Click me and look at the console!1\";\n  // element.innerHTML = _.join([\"Hello\", \"webpack\"], \" \");\n  element.appendChild(br);\n  element.appendChild(button);\n\n  // Note that because a network request is involved, some indication\n  // of loading would need to be shown in a production-level site/app.\n  button.onclick = (e) =>\n    __webpack_require__.e(/*! import() | print */ \"print\").then(__webpack_require__.bind(__webpack_require__, /*! ./print */ 569)).then((module) => {\n      const print = module.default;\n\n      print();\n    });\n\n  return element;\n}\n\ndocument.body.appendChild(component());\n\n\n//# sourceURL=webpack://webpack-code-split/./src/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(138));
/******/ }
]);