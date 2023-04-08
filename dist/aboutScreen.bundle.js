"use strict";
(self["webpackChunkodin_restaurant"] = self["webpackChunkodin_restaurant"] || []).push([["aboutScreen"],{

/***/ "./src/aboutScreen.js":
/*!****************************!*\
  !*** ./src/aboutScreen.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ aboutScreen)
/* harmony export */ });
/* harmony import */ var _images_location_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/location.png */ "./src/images/location.png");


function aboutScreen() {
  const contentBox = document.querySelector(".contentBox");
  contentBox.innerHTML = "";

  const location = document.createElement("div");
  location.classList.add("location");
  location.textContent = "Location - Golden, CO";

  const locationpng = new Image();
  locationpng.src = _images_location_png__WEBPACK_IMPORTED_MODULE_0__;
  locationpng.classList.add("heroShot");

  contentBox.appendChild(location);
  contentBox.appendChild(locationpng);
}


/***/ }),

/***/ "./src/images/location.png":
/*!*********************************!*\
  !*** ./src/images/location.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5e794df6f8a83566925a.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/aboutScreen.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXRTY3JlZW4uYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWdEOztBQUVqQztBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLGlEQUFXO0FBQy9COztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9hYm91dFNjcmVlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbG9jYXRpb25QTkcgZnJvbSBcIi4vaW1hZ2VzL2xvY2F0aW9uLnBuZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhYm91dFNjcmVlbigpIHtcbiAgY29uc3QgY29udGVudEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudEJveFwiKTtcbiAgY29udGVudEJveC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbG9jYXRpb24uY2xhc3NMaXN0LmFkZChcImxvY2F0aW9uXCIpO1xuICBsb2NhdGlvbi50ZXh0Q29udGVudCA9IFwiTG9jYXRpb24gLSBHb2xkZW4sIENPXCI7XG5cbiAgY29uc3QgbG9jYXRpb25wbmcgPSBuZXcgSW1hZ2UoKTtcbiAgbG9jYXRpb25wbmcuc3JjID0gbG9jYXRpb25QTkc7XG4gIGxvY2F0aW9ucG5nLmNsYXNzTGlzdC5hZGQoXCJoZXJvU2hvdFwiKTtcblxuICBjb250ZW50Qm94LmFwcGVuZENoaWxkKGxvY2F0aW9uKTtcbiAgY29udGVudEJveC5hcHBlbmRDaGlsZChsb2NhdGlvbnBuZyk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=