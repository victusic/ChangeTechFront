"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/ui/buttons/Button.tsx":
/*!***********************************!*\
  !*** ./src/ui/buttons/Button.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Button: function() { return /* binding */ Button; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _button_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button.module.scss */ \"./src/ui/buttons/button.module.scss\");\n/* harmony import */ var _button_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_button_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst Button = (param)=>{\n    let { as, variant = \"startPlate\", disabled, type, children, className, to, ...rest } = param;\n    const buttonClasses = {\n        [(_button_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button)]: true,\n        [(_button_module_scss__WEBPACK_IMPORTED_MODULE_2___default().variant)]: true\n    };\n    return to ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: to,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: \"\".concat(Object.values(buttonClasses).join(\" \"), \" \").concat(className),\n            disabled: disabled,\n            type: type,\n            ...rest,\n            children: children\n        }, void 0, false, {\n            fileName: \"G:\\\\web 2.0\\\\change\\\\code\\\\change-tech-front\\\\src\\\\ui\\\\buttons\\\\Button.tsx\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"G:\\\\web 2.0\\\\change\\\\code\\\\change-tech-front\\\\src\\\\ui\\\\buttons\\\\Button.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"\".concat(Object.values(buttonClasses).join(\" \"), \" \").concat(className),\n        disabled: disabled,\n        type: type,\n        ...rest,\n        children: children\n    }, void 0, false, {\n        fileName: \"G:\\\\web 2.0\\\\change\\\\code\\\\change-tech-front\\\\src\\\\ui\\\\buttons\\\\Button.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Button;\nvar _c;\n$RefreshReg$(_c, \"Button\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdWkvYnV0dG9ucy9CdXR0b24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQzBDO0FBQ2I7QUFjdEIsTUFBTUUsU0FBZ0M7UUFBQyxFQUM1Q0MsRUFBRSxFQUNGQyxVQUFVLFlBQVksRUFDdEJDLFFBQVEsRUFDUkMsSUFBSSxFQUNKQyxRQUFRLEVBQ1JDLFNBQVMsRUFDVEMsRUFBRSxFQUNGLEdBQUdDLE1BQ0o7SUFFQyxNQUFNQyxnQkFBZ0I7UUFDcEIsQ0FBQ1gsbUVBQWEsQ0FBQyxFQUFFO1FBQ2pCLENBQUNBLG9FQUFjLENBQUMsRUFBRTtJQUNwQjtJQUVBLE9BQU9TLG1CQUNMLDhEQUFDUixrREFBSUE7UUFBQ1ksTUFBTUo7a0JBQ1YsNEVBQUNHO1lBQ0NKLFdBQVcsR0FBNkNBLE9BQTFDTSxPQUFPQyxNQUFNLENBQUNKLGVBQWVLLElBQUksQ0FBQyxNQUFLLEtBQWEsT0FBVlI7WUFDeERILFVBQVVBO1lBQ1ZDLE1BQU1BO1lBQ0wsR0FBSUksSUFBSTtzQkFFUkg7Ozs7Ozs7Ozs7a0NBSUwsOERBQUNLO1FBQ0RKLFdBQVcsR0FBNkNBLE9BQTFDTSxPQUFPQyxNQUFNLENBQUNKLGVBQWVLLElBQUksQ0FBQyxNQUFLLEtBQWEsT0FBVlI7UUFDdERILFVBQVVBO1FBQ1ZDLE1BQU1BO1FBQ0wsR0FBSUksSUFBSTtrQkFFUkg7Ozs7OztBQUdQLEVBQUM7S0FyQ1lMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy91aS9idXR0b25zL0J1dHRvbi50c3g/MmY3NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFjdE5vZGUsIEVsZW1lbnRUeXBlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vYnV0dG9uLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmludGVyZmFjZSBCdXR0b25Qcm9wczxUIGV4dGVuZHMgRWxlbWVudFR5cGUgPSAnYnV0dG9uJz4ge1xyXG4gIGFzPzogVFxyXG4gIHZhcmlhbnQ/OlxyXG4gICAgfCAnc3RhcnRQbGF0ZSdcclxuICAgIHwgJ2hlYWRlcidcclxuICBkaXNhYmxlZD86IGJvb2xlYW5cclxuICB0eXBlPzogJ3N1Ym1pdCcgfCAncmVzZXQnIHwgJ2J1dHRvbicgfCB1bmRlZmluZWRcclxuICBjaGlsZHJlbj86IFJlYWN0Tm9kZVxyXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xyXG4gIHRvPzogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b246IFJlYWN0LkZDPEJ1dHRvblByb3BzPiA9ICh7XHJcbiAgYXMsXHJcbiAgdmFyaWFudCA9ICdzdGFydFBsYXRlJyxcclxuICBkaXNhYmxlZCxcclxuICB0eXBlLFxyXG4gIGNoaWxkcmVuLFxyXG4gIGNsYXNzTmFtZSxcclxuICB0byxcclxuICAuLi5yZXN0XHJcbn0pID0+IHtcclxuXHJcbiAgY29uc3QgYnV0dG9uQ2xhc3NlcyA9IHtcclxuICAgIFtzdHlsZXMuYnV0dG9uXTogdHJ1ZSxcclxuICAgIFtzdHlsZXMudmFyaWFudF06IHRydWUsXHJcbiAgfVxyXG5cclxuICByZXR1cm4gdG8gPyAoXHJcbiAgICA8TGluayBocmVmPXt0byBhcyBzdHJpbmd9PlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtPYmplY3QudmFsdWVzKGJ1dHRvbkNsYXNzZXMpLmpvaW4oJyAnKX0gJHtjbGFzc05hbWV9YH0gXHJcbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfSBcclxuICAgICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICAgIHsuLi4ocmVzdCBhcyBCdXR0b25Qcm9wcyl9IFxyXG4gICAgICA+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvTGluaz5cclxuICApIDogKFxyXG4gICAgPGJ1dHRvblxyXG4gICAgY2xhc3NOYW1lPXtgJHtPYmplY3QudmFsdWVzKGJ1dHRvbkNsYXNzZXMpLmpvaW4oJyAnKX0gJHtjbGFzc05hbWV9YH0gXHJcbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH0gXHJcbiAgICAgIHR5cGU9e3R5cGV9XHJcbiAgICAgIHsuLi4ocmVzdCBhcyBCdXR0b25Qcm9wcyl9XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvYnV0dG9uPlxyXG4gIClcclxufSJdLCJuYW1lcyI6WyJzdHlsZXMiLCJMaW5rIiwiQnV0dG9uIiwiYXMiLCJ2YXJpYW50IiwiZGlzYWJsZWQiLCJ0eXBlIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJ0byIsInJlc3QiLCJidXR0b25DbGFzc2VzIiwiYnV0dG9uIiwiaHJlZiIsIk9iamVjdCIsInZhbHVlcyIsImpvaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ui/buttons/Button.tsx\n"));

/***/ })

});