(self["webpackChunkmain_app"] = self["webpackChunkmain_app"] || []).push([["bootstrap_js"],{

/***/ "./App.jsx":
/*!*****************!*\
  !*** ./App.jsx ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var lib_app_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lib-app/react */ "webpack/container/remote/lib-app/react");
/* harmony import */ var lib_app_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lib_app_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var component_app_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! component-app/Button */ "webpack/container/remote/component-app/Button");
/* harmony import */ var component_app_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(component_app_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var component_app_Dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! component-app/Dialog */ "webpack/container/remote/component-app/Dialog");
/* harmony import */ var component_app_Dialog__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(component_app_Dialog__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var component_app_ToolTip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! component-app/ToolTip */ "webpack/container/remote/component-app/ToolTip");
/* harmony import */ var component_app_ToolTip__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(component_app_ToolTip__WEBPACK_IMPORTED_MODULE_3__);




class App extends (lib_app_react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
    this.state = {
      dialogVisible: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.HanldeSwitchVisible = this.HanldeSwitchVisible.bind(this);
  }

  handleClick(ev) {
    console.log(ev);
    this.setState({
      dialogVisible: true
    });
  }

  HanldeSwitchVisible(visible) {
    this.setState({
      dialogVisible: visible
    });
  }

  render() {
    return /*#__PURE__*/lib_app_react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/lib_app_react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Buttons:"), /*#__PURE__*/lib_app_react__WEBPACK_IMPORTED_MODULE_0___default().createElement((component_app_Button__WEBPACK_IMPORTED_MODULE_1___default()), {
      type: "primary"
    }), /*#__PURE__*/lib_app_react__WEBPACK_IMPORTED_MODULE_0___default().createElement((component_app_Button__WEBPACK_IMPORTED_MODULE_1___default()), {
      type: "warning"
    }), /*#__PURE__*/lib_app_react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Dialog:"), /*#__PURE__*/lib_app_react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: this.handleClick
    }, "click me to open Dialog"), /*#__PURE__*/lib_app_react__WEBPACK_IMPORTED_MODULE_0___default().createElement((component_app_Dialog__WEBPACK_IMPORTED_MODULE_2___default()), {
      switchVisible: this.HanldeSwitchVisible,
      visible: this.state.dialogVisible
    }), /*#__PURE__*/lib_app_react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "ToolTip"), /*#__PURE__*/lib_app_react__WEBPACK_IMPORTED_MODULE_0___default().createElement((component_app_ToolTip__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "ToolTip",
      message: "hover content"
    }));
  }

}

/***/ }),

/***/ "./bootstrap.js":
/*!**********************!*\
  !*** ./bootstrap.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.jsx */ "./App.jsx");
/* harmony import */ var lib_app_react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lib-app/react-dom */ "webpack/container/remote/lib-app/react-dom");
/* harmony import */ var lib_app_react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lib_app_react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_app_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib-app/react */ "webpack/container/remote/lib-app/react");
/* harmony import */ var lib_app_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lib_app_react__WEBPACK_IMPORTED_MODULE_2__);



lib_app_react_dom__WEBPACK_IMPORTED_MODULE_1___default().render( /*#__PURE__*/lib_app_react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_App_jsx__WEBPACK_IMPORTED_MODULE_0__.default, null), document.getElementById("app"));

/***/ })

}]);