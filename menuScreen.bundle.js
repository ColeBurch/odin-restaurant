"use strict";
(self["webpackChunkodin_restaurant"] = self["webpackChunkodin_restaurant"] || []).push([["menuScreen"],{

/***/ "./src/menuScreen.js":
/*!***************************!*\
  !*** ./src/menuScreen.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menuScreen)
/* harmony export */ });
/* harmony import */ var _images_coffeeMenu_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/coffeeMenu.jpg */ "./src/images/coffeeMenu.jpg");


function menuScreen() {
  const contentBox = document.querySelector(".contentBox");
  contentBox.innerHTML = "";

  const coffeeMenuJpg = new Image();
  coffeeMenuJpg.src = _images_coffeeMenu_jpg__WEBPACK_IMPORTED_MODULE_0__;
  coffeeMenuJpg.classList.add("heroShot");

  const espresso = document.createElement("div");
  espresso.classList.add("menuItem");
  espresso.textContent = "espresso -   $2.00";

  const cortado = document.createElement("div");
  cortado.classList.add("menuItem");
  cortado.textContent = "cortado -   $3.00";

  const cappuccino = document.createElement("div");
  cappuccino.classList.add("menuItem");
  cappuccino.textContent = "cappuccino -   $4.00";

  const latte = document.createElement("div");
  latte.classList.add("menuItem");
  latte.textContent = "latte -   $5.00";

  const coldBrew = document.createElement("div");
  coldBrew.classList.add("menuItem");
  coldBrew.textContent = "cold brew -   $6.00";

  contentBox.appendChild(coffeeMenuJpg);
  contentBox.appendChild(espresso);
  contentBox.appendChild(cortado);
  contentBox.appendChild(cappuccino);
  contentBox.appendChild(latte);
  contentBox.appendChild(coldBrew);
}


/***/ }),

/***/ "./src/images/coffeeMenu.jpg":
/*!***********************************!*\
  !*** ./src/images/coffeeMenu.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f702a290cc1b23586784.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/menuScreen.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudVNjcmVlbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBb0Q7O0FBRXJDO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixtREFBYTtBQUNuQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL21lbnVTY3JlZW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvZmZlZU1lbnVKUEcgZnJvbSBcIi4vaW1hZ2VzL2NvZmZlZU1lbnUuanBnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnVTY3JlZW4oKSB7XG4gIGNvbnN0IGNvbnRlbnRCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRCb3hcIik7XG4gIGNvbnRlbnRCb3guaW5uZXJIVE1MID0gXCJcIjtcblxuICBjb25zdCBjb2ZmZWVNZW51SnBnID0gbmV3IEltYWdlKCk7XG4gIGNvZmZlZU1lbnVKcGcuc3JjID0gY29mZmVlTWVudUpQRztcbiAgY29mZmVlTWVudUpwZy5jbGFzc0xpc3QuYWRkKFwiaGVyb1Nob3RcIik7XG5cbiAgY29uc3QgZXNwcmVzc28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlc3ByZXNzby5jbGFzc0xpc3QuYWRkKFwibWVudUl0ZW1cIik7XG4gIGVzcHJlc3NvLnRleHRDb250ZW50ID0gXCJlc3ByZXNzbyAtICAgJDIuMDBcIjtcblxuICBjb25zdCBjb3J0YWRvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29ydGFkby5jbGFzc0xpc3QuYWRkKFwibWVudUl0ZW1cIik7XG4gIGNvcnRhZG8udGV4dENvbnRlbnQgPSBcImNvcnRhZG8gLSAgICQzLjAwXCI7XG5cbiAgY29uc3QgY2FwcHVjY2lubyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNhcHB1Y2Npbm8uY2xhc3NMaXN0LmFkZChcIm1lbnVJdGVtXCIpO1xuICBjYXBwdWNjaW5vLnRleHRDb250ZW50ID0gXCJjYXBwdWNjaW5vIC0gICAkNC4wMFwiO1xuXG4gIGNvbnN0IGxhdHRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGF0dGUuY2xhc3NMaXN0LmFkZChcIm1lbnVJdGVtXCIpO1xuICBsYXR0ZS50ZXh0Q29udGVudCA9IFwibGF0dGUgLSAgICQ1LjAwXCI7XG5cbiAgY29uc3QgY29sZEJyZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb2xkQnJldy5jbGFzc0xpc3QuYWRkKFwibWVudUl0ZW1cIik7XG4gIGNvbGRCcmV3LnRleHRDb250ZW50ID0gXCJjb2xkIGJyZXcgLSAgICQ2LjAwXCI7XG5cbiAgY29udGVudEJveC5hcHBlbmRDaGlsZChjb2ZmZWVNZW51SnBnKTtcbiAgY29udGVudEJveC5hcHBlbmRDaGlsZChlc3ByZXNzbyk7XG4gIGNvbnRlbnRCb3guYXBwZW5kQ2hpbGQoY29ydGFkbyk7XG4gIGNvbnRlbnRCb3guYXBwZW5kQ2hpbGQoY2FwcHVjY2lubyk7XG4gIGNvbnRlbnRCb3guYXBwZW5kQ2hpbGQobGF0dGUpO1xuICBjb250ZW50Qm94LmFwcGVuZENoaWxkKGNvbGRCcmV3KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==