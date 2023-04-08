"use strict";
(self["webpackChunkodin_restaurant"] = self["webpackChunkodin_restaurant"] || []).push([["homeScreen"],{

/***/ "./src/homeScreen.js":
/*!***************************!*\
  !*** ./src/homeScreen.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ homeScreen)
/* harmony export */ });
/* harmony import */ var _images_coffeePour_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/coffeePour.jpg */ "./src/images/coffeePour.jpg");


function homeScreen() {
  const contentBox = document.querySelector(".contentBox");

  contentBox.innerHTML = "";

  const headerLine = document.createElement("div");
  headerLine.classList.add("headerLine");
  headerLine.textContent = "Best coffee in Golden";

  const subtext = document.createElement("div");
  subtext.classList.add("subtext");
  subtext.textContent = "Handmade by the best Barista's";

  const heroShot = new Image();
  heroShot.src = _images_coffeePour_jpg__WEBPACK_IMPORTED_MODULE_0__;
  heroShot.classList.add("heroShot");

  contentBox.appendChild(headerLine);
  contentBox.appendChild(subtext);
  contentBox.appendChild(heroShot);
}


/***/ }),

/***/ "./src/images/coffeePour.jpg":
/*!***********************************!*\
  !*** ./src/images/coffeePour.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bee5db61e111a7ce0092.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/homeScreen.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZVNjcmVlbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBb0Q7O0FBRXJDO0FBQ2Y7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixtREFBYTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9ob21lU2NyZWVuLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb2ZmZWVQb3VySlBHIGZyb20gXCIuL2ltYWdlcy9jb2ZmZWVQb3VyLmpwZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lU2NyZWVuKCkge1xuICBjb25zdCBjb250ZW50Qm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50Qm94XCIpO1xuXG4gIGNvbnRlbnRCb3guaW5uZXJIVE1MID0gXCJcIjtcblxuICBjb25zdCBoZWFkZXJMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyTGluZS5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyTGluZVwiKTtcbiAgaGVhZGVyTGluZS50ZXh0Q29udGVudCA9IFwiQmVzdCBjb2ZmZWUgaW4gR29sZGVuXCI7XG5cbiAgY29uc3Qgc3VidGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHN1YnRleHQuY2xhc3NMaXN0LmFkZChcInN1YnRleHRcIik7XG4gIHN1YnRleHQudGV4dENvbnRlbnQgPSBcIkhhbmRtYWRlIGJ5IHRoZSBiZXN0IEJhcmlzdGEnc1wiO1xuXG4gIGNvbnN0IGhlcm9TaG90ID0gbmV3IEltYWdlKCk7XG4gIGhlcm9TaG90LnNyYyA9IGNvZmZlZVBvdXJKUEc7XG4gIGhlcm9TaG90LmNsYXNzTGlzdC5hZGQoXCJoZXJvU2hvdFwiKTtcblxuICBjb250ZW50Qm94LmFwcGVuZENoaWxkKGhlYWRlckxpbmUpO1xuICBjb250ZW50Qm94LmFwcGVuZENoaWxkKHN1YnRleHQpO1xuICBjb250ZW50Qm94LmFwcGVuZENoaWxkKGhlcm9TaG90KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==