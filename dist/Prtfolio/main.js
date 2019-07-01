(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Prtfolio';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _body_body_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./body/body.component */ "./src/app/body/body.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _body_body_component__WEBPACK_IMPORTED_MODULE_6__["BodyComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _body_body_component__WEBPACK_IMPORTED_MODULE_6__["BodyComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/body/body.component.css":
/*!*****************************************!*\
  !*** ./src/app/body/body.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.about-section {\r\n  font-family: 'Montserrat';\r\n\r\n    padding-top: 10rem;\r\n    background: linear-gradient(to bottom, #161616 , #666666 );\r\n  }\r\n  \r\n  .about-section p {\r\n    margin-bottom: 1rem;\r\n  }\r\n  \r\n  .parallax{\r\n    background: #666666;\r\n  }\r\n  \r\n  .parr_div{\r\n\r\n    background-image: url('big-code.jpg');\r\n\r\n    /* Set a specific height */\r\n    /* Create the parallax scrolling effect */\r\n    background-size:cover;\r\n    background-position: center;\r\n    background-attachment: fixed;\r\n    }\r\n  \r\n  .na{\r\n  display:none;\r\n}\r\n  \r\n  .projects-hover:hover +.na{\r\n  display:block;\r\n}\r\n  \r\n  .projects-section {\r\n  padding: 5rem 0;\r\n}\r\n  \r\n  .projects-section .featured-text {\r\n  padding: 2rem;\r\n  font-family: 'Montserrat';\r\n\r\n}\r\n  \r\n  .about-text{\r\n  padding-bottom:2rem;\r\n  padding-top:0.5rem;\r\n\r\n}\r\n  \r\n  @media (min-width: 992px) {\r\n  .projects-section .featured-text {\r\n    padding: 0 0 0 2rem;\r\n    border-left: 0.5rem solid #666666;\r\n    font-family: 'Montserrat';\r\n\r\n  }\r\n}\r\n  \r\n  .nav-pills .nav-link.active, .nav-pills .show>.nav-link {\r\n  color: #161616;\r\n  background-color: #F4F4F4;\r\n  border-left: 1rem solid #111111;\r\n\r\n}\r\n  \r\n  .nav-pills .nav-link {\r\n  display: block;\r\npadding: 50px;\r\n  color: #161616;\r\n  text-decoration: none;\r\n  transition: all 0.5s;\r\n  border-radius: 0;\r\n\r\n\r\n  background-color: transparent;\r\n  white-space: nowrap;\r\n\r\n}\r\n  \r\n  .nav-pills .nav-link:hover{\r\n  background-color: #f8f8f8;\r\n}\r\n  \r\n  .tab-icon{\r\ndisplay: inline-block;\r\npadding-right: 20px;\r\nmax-width: 80px;\r\nbackground: transparent;\r\n}\r\n  \r\n  .tab-group{\r\n  \r\n  display:inline-block;\r\n  font-family: 'Montserrat';\r\n  font-size: 14px;\r\n  font-weight: 300;\r\n  letter-spacing: 0.2px;\r\n  line-height: 1.8em;\r\n}\r\n  \r\n  .tab-info{\r\n  display:inline-block;\r\n  font-family: 'Montserrat';\r\n    color: #111;\r\n    font-size: 1.07em;\r\n    letter-spacing: 3px;\r\n    text-transform: uppercase;\r\n    text-align: left;\r\n}\r\n  \r\n  .tab-content>.active{\r\n  height:100%;\r\n\r\n}\r\n  \r\n  .tab-content{\r\n  background-color: #F4F4F4;\r\n\r\n}\r\n  \r\n  .fade:not(.show) {\r\n  display: none;\r\n}\r\n  \r\n  .tab-content-text {\r\n  font-family: 'Montserrat';\r\n\r\n  display:inline-block;\r\n  position:relative;\r\n  top:20%;\r\n\r\n}\r\n  \r\n  .p-text{\r\n  font-family: 'Montserrat';\r\n\r\n}\r\n  \r\n  .btn-txt{\r\n  \r\n    position: relative;\r\n      padding: 8px 38px;\r\n    background: #111;\r\n    color: #ececec;\r\n    text-transform: uppercase;\r\n    letter-spacing: 2.5px;\r\n    font-size: 0.9em;\r\n    line-height: 1.8em;\r\n    border-radius: 0;\r\n    transition: all 0.5s;\r\n    margin-bottom: 0;\r\n    font-weight: normal;\r\n    vertical-align: middle;\r\n    touch-action: manipulation;\r\n    white-space: nowrap;\r\n    cursor: pointer;\r\n    font-family: 'Montserrat';\r\n\r\n\r\n\r\n}\r\n  \r\n  .btn-c{\r\n  background:#ececec;\r\n  color:#111;\r\n}\r\n  \r\n  .btn-c:hover:hover{\r\n  opacity:0.5;\r\n\r\n\r\n}\r\n  \r\n  .desc-heading{\r\n  margin: 0;\r\n  padding-bottom: 25px;\r\n  font-family: 'Montserrat';\r\n\r\n}\r\n  \r\n  .tab-image{\r\n  display: block;\r\n  max-width: 100%;\r\n  float:right;\r\n  left: 100%;\r\nposition: absolute;\r\n  -webkit-animation: slide 1s forwards;\r\n  animation: slide 1s forwards;\r\n\r\n}\r\n  \r\n  .tab-content-image{\r\n  display:inline-block;\r\n  float: right;\r\n  position:relative;\r\n  top:15%;\r\n  \r\n}\r\n  \r\n  @-webkit-keyframes slide {\r\n  100% { left: 0; }\r\n}\r\n  \r\n  @keyframes slide {\r\n  100% { left: 0; }\r\n}\r\n  \r\n  .icons-parallax{\r\n  background:linear-gradient(to bottom, rgba(22, 22, 22, 0.3) 0%, rgba(22, 22, 22, 0.7) 90%), url('bg-photo.jpg');\r\n  background-attachment: fixed;\r\n  background-size:cover;\r\n  background-position: center;\r\n  \r\n}\r\n  \r\n  .icon-container{\r\n  display: inline-block;\r\n  padding-bottom: 5px;\r\n  text-align: center;\r\n\r\n}\r\n  \r\n  .incons-text{\r\n  padding-top:1rem;\r\n  text-align: center;\r\n  letter-spacing: 3px;\r\n  text-transform: uppercase;\r\n  color: #F4F4F4;\r\n  font-family: 'Montserrat';\r\n\r\n}\r\n  \r\n  .icon{\r\n  display: block;\r\n  -webkit-filter: invert(100%);\r\n          filter: invert(100%);\r\n  margin:auto;\r\n  height: 100px;\r\n}\r\n  \r\n  .gear{\r\n  transition:         -webkit-transform .8s ease-in-out;\r\n  transition:         transform .8s ease-in-out;\r\n  transition:         transform .8s ease-in-out, -webkit-transform .8s ease-in-out;\r\n\r\n}\r\n  \r\n  .gear:hover{\r\n  -webkit-transform: rotate(180deg);\r\n          transform: rotate(180deg);}\r\n  \r\n  .icons-heading{\r\n  text-align: center;\r\n  font-size: 2em;\r\n  letter-spacing: 3px;\r\n  text-transform: uppercase;\r\n  color: #F4F4F4;\r\n  margin:0 0 0 0;\r\n\r\n}\r\n  \r\n  .mouse:hover{ \r\n  -webkit-animation: wiggle 1s infinite; \r\n          animation: wiggle 1s infinite;\r\n  -webkit-animation-timing-function:linear;\r\n          animation-timing-function:linear;   \r\n}\r\n  \r\n  @-webkit-keyframes wiggle {\r\n  0% { -webkit-transform: translate(10px, 0); transform: translate(10px, 0); }\r\n  25% { -webkit-transform: translate(0, 10px); transform: translate(0, 10px); }\r\n  50% { -webkit-transform: translate(-10px, 0); transform: translate(-10px, 0); }\r\n  75% { -webkit-transform: translate(0, -10px); transform: translate(0, -10px); }\r\n  100% { -webkit-transform: translate(10px, 0); transform: translate(10px, 0); }\r\n}\r\n  \r\n  @keyframes wiggle {\r\n  0% { -webkit-transform: translate(10px, 0); transform: translate(10px, 0); }\r\n  25% { -webkit-transform: translate(0, 10px); transform: translate(0, 10px); }\r\n  50% { -webkit-transform: translate(-10px, 0); transform: translate(-10px, 0); }\r\n  75% { -webkit-transform: translate(0, -10px); transform: translate(0, -10px); }\r\n  100% { -webkit-transform: translate(10px, 0); transform: translate(10px, 0); }\r\n}\r\n  \r\n  .gym{\r\n  max-width: 100px;\r\n}\r\n  \r\n  .contact-section {\r\n  padding: 5rem 0 0;\r\n  font-family: 'Montserrat';\r\n\r\n}\r\n  \r\n  .contact-section .card {\r\n  border: 0;\r\n  border-bottom: 0.25rem solid #666666;\r\n}\r\n  \r\n  .contact-section .card h4 {\r\n  font-size: 0.8rem;\r\n  font-family: 'Montserrat';\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.15rem;\r\n}\r\n  \r\n  .contact-section .card hr {\r\n  border-color: #666666;\r\n  border-width: 0.25rem;\r\n  width: 3rem;\r\n}\r\n  \r\n  .bg-black {\r\n  background-color: #161616!important;\r\n}\r\n  \r\n  footer {\r\n  padding: 5rem 0;\r\n}\r\n  \r\n  .half{\r\n  display:inline-block;\r\n}\r\n  \r\n  .form-btn{\r\n  float:right;\r\n}\r\n  \r\n  .message{\r\nmax-height: 115px;\r\n}\r\n  \r\n  .signup-section{\r\n  padding-top: 3rem;\r\n  padding-bottom: 1rem;\r\n  font-family: 'Montserrat';\r\n\r\n}\r\n  \r\n  .form-text{\r\n  font-size: .8em;\r\n  text-transform: uppercase;\r\n  letter-spacing: 2px;\r\n  color: #111;\r\n  margin-bottom:1rem;\r\n\r\n\r\n}\r\n  \r\n  .formheading{\r\n  padding-bottom:2rem;\r\n  text-align: center;\r\n}\r\n  \r\n  .form-control:focus{\r\n  border-color: #666666;\r\n  box-shadow:none ;\r\n}\r\n  \r\n  .cv_button{\r\n  margin: 0 auto;\r\n  max-width: 100% \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS9ib2R5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UseUJBQXlCOztJQUV2QixrQkFBa0I7SUFDbEIsMERBQTBEO0VBQzVEOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBOztJQUVFLHFDQUFrRDs7SUFFbEQsMEJBQTBCO0lBQzFCLHlDQUF5QztJQUN6QyxxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1Qjs7RUFDSjtFQUNFLFlBQVk7QUFDZDs7RUFDQTtFQUNFLGFBQWE7QUFDZjs7RUFFQTtFQUNFLGVBQWU7QUFDakI7O0VBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCOztBQUUzQjs7RUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7O0FBRXBCOztFQUVBO0VBQ0U7SUFDRSxtQkFBbUI7SUFDbkIsaUNBQWlDO0lBQ2pDLHlCQUF5Qjs7RUFFM0I7QUFDRjs7RUFDQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsK0JBQStCOztBQUVqQzs7RUFDQTtFQUNFLGNBQWM7QUFDaEIsYUFBYTtFQUNYLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLGdCQUFnQjs7O0VBR2hCLDZCQUE2QjtFQUM3QixtQkFBbUI7O0FBRXJCOztFQUNBO0VBQ0UseUJBQXlCO0FBQzNCOztFQUVBO0FBQ0EscUJBQXFCO0FBQ3JCLG1CQUFtQjtBQUNuQixlQUFlO0FBQ2YsdUJBQXVCO0FBQ3ZCOztFQUNBOztFQUVFLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztFQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLHlCQUF5QjtJQUN2QixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCOztFQUNBO0VBQ0UsV0FBVzs7QUFFYjs7RUFDQTtFQUNFLHlCQUF5Qjs7QUFFM0I7O0VBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0VBQ0E7RUFDRSx5QkFBeUI7O0VBRXpCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsT0FBTzs7QUFFVDs7RUFDQTtFQUNFLHlCQUF5Qjs7QUFFM0I7O0VBQ0E7O0lBRUksa0JBQWtCO01BQ2hCLGlCQUFpQjtJQUNuQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFFaEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHlCQUF5Qjs7OztBQUk3Qjs7RUFDQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0VBQ0E7RUFDRSxXQUFXOzs7QUFHYjs7RUFDQTtFQUNFLFNBQVM7RUFDVCxvQkFBb0I7RUFDcEIseUJBQXlCOztBQUUzQjs7RUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsV0FBVztFQUNYLFVBQVU7QUFDWixrQkFBa0I7RUFDaEIsb0NBQW9DO0VBQ3BDLDRCQUE0Qjs7QUFFOUI7O0VBRUE7RUFDRSxvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixPQUFPOztBQUVUOztFQUNBO0VBQ0UsT0FBTyxPQUFPLEVBQUU7QUFDbEI7O0VBRUE7RUFDRSxPQUFPLE9BQU8sRUFBRTtBQUNsQjs7RUFDQTtFQUNFLCtHQUE0SDtFQUM1SCw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLDJCQUEyQjs7QUFFN0I7O0VBQ0E7RUFDRSxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGtCQUFrQjs7QUFFcEI7O0VBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsY0FBYztFQUNkLHlCQUF5Qjs7QUFFM0I7O0VBRUE7RUFDRSxjQUFjO0VBQ2QsNEJBQW9CO1VBQXBCLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsYUFBYTtBQUNmOztFQUNBO0VBR0UscURBQTZDO0VBQTdDLDZDQUE2QztFQUE3QyxnRkFBNkM7O0FBRS9DOztFQUNBO0VBQ0UsaUNBQWlDO1VBQ3pCLHlCQUF5QixDQUFDOztFQUNwQztFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsY0FBYzs7QUFFaEI7O0VBQ0E7RUFDRSxxQ0FBNkI7VUFBN0IsNkJBQTZCO0VBQzdCLHdDQUFnQztVQUFoQyxnQ0FBZ0M7QUFDbEM7O0VBRUE7RUFDRSxLQUFLLHFDQUE2QixFQUE3Qiw2QkFBNkIsRUFBRTtFQUNwQyxNQUFNLHFDQUE2QixFQUE3Qiw2QkFBNkIsRUFBRTtFQUNyQyxNQUFNLHNDQUE4QixFQUE5Qiw4QkFBOEIsRUFBRTtFQUN0QyxNQUFNLHNDQUE4QixFQUE5Qiw4QkFBOEIsRUFBRTtFQUN0QyxPQUFPLHFDQUE2QixFQUE3Qiw2QkFBNkIsRUFBRTtBQUN4Qzs7RUFOQTtFQUNFLEtBQUsscUNBQTZCLEVBQTdCLDZCQUE2QixFQUFFO0VBQ3BDLE1BQU0scUNBQTZCLEVBQTdCLDZCQUE2QixFQUFFO0VBQ3JDLE1BQU0sc0NBQThCLEVBQTlCLDhCQUE4QixFQUFFO0VBQ3RDLE1BQU0sc0NBQThCLEVBQTlCLDhCQUE4QixFQUFFO0VBQ3RDLE9BQU8scUNBQTZCLEVBQTdCLDZCQUE2QixFQUFFO0FBQ3hDOztFQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztFQUlBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5Qjs7QUFFM0I7O0VBRUE7RUFDRSxTQUFTO0VBQ1Qsb0NBQW9DO0FBQ3RDOztFQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsdUJBQXVCO0FBQ3pCOztFQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixXQUFXO0FBQ2I7O0VBQ0E7RUFDRSxtQ0FBbUM7QUFDckM7O0VBQ0E7RUFDRSxlQUFlO0FBQ2pCOztFQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCOztFQUNBO0VBQ0UsV0FBVztBQUNiOztFQUdBO0FBQ0EsaUJBQWlCO0FBQ2pCOztFQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQix5QkFBeUI7O0FBRTNCOztFQUNBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGtCQUFrQjs7O0FBR3BCOztFQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7RUFDQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0VBRUE7RUFDRSxjQUFjO0VBQ2Q7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2JvZHkvYm9keS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5hYm91dC1zZWN0aW9uIHtcclxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG5cclxuICAgIHBhZGRpbmctdG9wOiAxMHJlbTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMxNjE2MTYgLCAjNjY2NjY2ICk7XHJcbiAgfVxyXG4gIFxyXG4gIC5hYm91dC1zZWN0aW9uIHAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcbiAgLnBhcmFsbGF4e1xyXG4gICAgYmFja2dyb3VuZDogIzY2NjY2NjtcclxuICB9XHJcblxyXG4gIC5wYXJyX2RpdntcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvYmlnLWNvZGUuanBnXCIpO1xyXG5cclxuICAgIC8qIFNldCBhIHNwZWNpZmljIGhlaWdodCAqL1xyXG4gICAgLyogQ3JlYXRlIHRoZSBwYXJhbGxheCBzY3JvbGxpbmcgZWZmZWN0ICovXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgfVxyXG4ubmF7XHJcbiAgZGlzcGxheTpub25lO1xyXG59XHJcbi5wcm9qZWN0cy1ob3Zlcjpob3ZlciArLm5he1xyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbn1cclxuICAgIFxyXG4ucHJvamVjdHMtc2VjdGlvbiB7XHJcbiAgcGFkZGluZzogNXJlbSAwO1xyXG59XHJcblxyXG4ucHJvamVjdHMtc2VjdGlvbiAuZmVhdHVyZWQtdGV4dCB7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG5cclxufVxyXG4uYWJvdXQtdGV4dHtcclxuICBwYWRkaW5nLWJvdHRvbToycmVtO1xyXG4gIHBhZGRpbmctdG9wOjAuNXJlbTtcclxuXHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gIC5wcm9qZWN0cy1zZWN0aW9uIC5mZWF0dXJlZC10ZXh0IHtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDJyZW07XHJcbiAgICBib3JkZXItbGVmdDogMC41cmVtIHNvbGlkICM2NjY2NjY7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG5cclxuICB9XHJcbn1cclxuLm5hdi1waWxscyAubmF2LWxpbmsuYWN0aXZlLCAubmF2LXBpbGxzIC5zaG93Pi5uYXYtbGluayB7XHJcbiAgY29sb3I6ICMxNjE2MTY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGNDtcclxuICBib3JkZXItbGVmdDogMXJlbSBzb2xpZCAjMTExMTExO1xyXG5cclxufVxyXG4ubmF2LXBpbGxzIC5uYXYtbGluayB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbnBhZGRpbmc6IDUwcHg7XHJcbiAgY29sb3I6ICMxNjE2MTY7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcblxyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cclxufVxyXG4ubmF2LXBpbGxzIC5uYXYtbGluazpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xyXG59XHJcblxyXG4udGFiLWljb257XHJcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcclxucGFkZGluZy1yaWdodDogMjBweDtcclxubWF4LXdpZHRoOiA4MHB4O1xyXG5iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG4udGFiLWdyb3Vwe1xyXG4gIFxyXG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjhlbTtcclxufVxyXG4udGFiLWluZm97XHJcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcclxuICAgIGNvbG9yOiAjMTExO1xyXG4gICAgZm9udC1zaXplOiAxLjA3ZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLnRhYi1jb250ZW50Pi5hY3RpdmV7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcblxyXG59XHJcbi50YWItY29udGVudHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEY0O1xyXG5cclxufVxyXG4uZmFkZTpub3QoLnNob3cpIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi50YWItY29udGVudC10ZXh0IHtcclxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG5cclxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICB0b3A6MjAlO1xyXG5cclxufVxyXG4ucC10ZXh0e1xyXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XHJcblxyXG59XHJcbi5idG4tdHh0e1xyXG4gIFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBwYWRkaW5nOiA4cHggMzhweDtcclxuICAgIGJhY2tncm91bmQ6ICMxMTE7XHJcbiAgICBjb2xvcjogI2VjZWNlYztcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMi41cHg7XHJcbiAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuOGVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XHJcblxyXG5cclxuXHJcbn1cclxuLmJ0bi1je1xyXG4gIGJhY2tncm91bmQ6I2VjZWNlYztcclxuICBjb2xvcjojMTExO1xyXG59XHJcbi5idG4tYzpob3Zlcjpob3ZlcntcclxuICBvcGFjaXR5OjAuNTtcclxuXHJcblxyXG59XHJcbi5kZXNjLWhlYWRpbmd7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmctYm90dG9tOiAyNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XHJcblxyXG59XHJcbi50YWItaW1hZ2V7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGZsb2F0OnJpZ2h0O1xyXG4gIGxlZnQ6IDEwMCU7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogc2xpZGUgMXMgZm9yd2FyZHM7XHJcbiAgYW5pbWF0aW9uOiBzbGlkZSAxcyBmb3J3YXJkcztcclxuXHJcbn1cclxuXHJcbi50YWItY29udGVudC1pbWFnZXtcclxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgdG9wOjE1JTtcclxuICBcclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUge1xyXG4gIDEwMCUgeyBsZWZ0OiAwOyB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGUge1xyXG4gIDEwMCUgeyBsZWZ0OiAwOyB9XHJcbn1cclxuLmljb25zLXBhcmFsbGF4e1xyXG4gIGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyMiwgMjIsIDIyLCAwLjMpIDAlLCByZ2JhKDIyLCAyMiwgMjIsIDAuNykgOTAlKSwgdXJsKFwiLi4vLi4vYXNzZXRzL2JnLXBob3RvLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgXHJcbn1cclxuLmljb24tY29udGFpbmVye1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuLmluY29ucy10ZXh0e1xyXG4gIHBhZGRpbmctdG9wOjFyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjb2xvcjogI0Y0RjRGNDtcclxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG5cclxufVxyXG5cclxuLmljb257XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSk7XHJcbiAgbWFyZ2luOmF1dG87XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG4uZ2VhcntcclxuXHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuOHMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogICAgICAgICB0cmFuc2Zvcm0gLjhzIGVhc2UtaW4tb3V0O1xyXG5cclxufVxyXG4uZ2Vhcjpob3ZlcntcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO31cclxuLmljb25zLWhlYWRpbmd7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMmVtO1xyXG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjb2xvcjogI0Y0RjRGNDtcclxuICBtYXJnaW46MCAwIDAgMDtcclxuXHJcbn1cclxuLm1vdXNlOmhvdmVyeyBcclxuICBhbmltYXRpb246IHdpZ2dsZSAxcyBpbmZpbml0ZTtcclxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcjsgICBcclxufVxyXG5cclxuQGtleWZyYW1lcyB3aWdnbGUge1xyXG4gIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTBweCwgMCk7IH1cclxuICAyNSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxMHB4KTsgfVxyXG4gIDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMHB4LCAwKTsgfVxyXG4gIDc1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xMHB4KTsgfVxyXG4gIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMHB4LCAwKTsgfVxyXG59XHJcbi5neW17XHJcbiAgbWF4LXdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuXHJcblxyXG4uY29udGFjdC1zZWN0aW9uIHtcclxuICBwYWRkaW5nOiA1cmVtIDAgMDtcclxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG5cclxufVxyXG5cclxuLmNvbnRhY3Qtc2VjdGlvbiAuY2FyZCB7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJvcmRlci1ib3R0b206IDAuMjVyZW0gc29saWQgIzY2NjY2NjtcclxufVxyXG5cclxuLmNvbnRhY3Qtc2VjdGlvbiAuY2FyZCBoNCB7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjE1cmVtO1xyXG59XHJcblxyXG4uY29udGFjdC1zZWN0aW9uIC5jYXJkIGhyIHtcclxuICBib3JkZXItY29sb3I6ICM2NjY2NjY7XHJcbiAgYm9yZGVyLXdpZHRoOiAwLjI1cmVtO1xyXG4gIHdpZHRoOiAzcmVtO1xyXG59XHJcbi5iZy1ibGFjayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2MTYxNiFpbXBvcnRhbnQ7XHJcbn1cclxuZm9vdGVyIHtcclxuICBwYWRkaW5nOiA1cmVtIDA7XHJcbn1cclxuLmhhbGZ7XHJcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbn1cclxuLmZvcm0tYnRue1xyXG4gIGZsb2F0OnJpZ2h0O1xyXG59XHJcblxyXG5cclxuLm1lc3NhZ2V7XHJcbm1heC1oZWlnaHQ6IDExNXB4O1xyXG59XHJcbi5zaWdudXAtc2VjdGlvbntcclxuICBwYWRkaW5nLXRvcDogM3JlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG5cclxufVxyXG4uZm9ybS10ZXh0e1xyXG4gIGZvbnQtc2l6ZTogLjhlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgY29sb3I6ICMxMTE7XHJcbiAgbWFyZ2luLWJvdHRvbToxcmVtO1xyXG5cclxuXHJcbn1cclxuLmZvcm1oZWFkaW5ne1xyXG4gIHBhZGRpbmctYm90dG9tOjJyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5mb3JtLWNvbnRyb2w6Zm9jdXN7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNjY2NjY2O1xyXG4gIGJveC1zaGFkb3c6bm9uZSA7XHJcbn0gXHJcblxyXG4uY3ZfYnV0dG9ue1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1heC13aWR0aDogMTAwJSBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/body/body.component.html":
/*!******************************************!*\
  !*** ./src/app/body/body.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"about\" class=\"about-section \">\n  <div class=\"container \">\n    <div class=\"row \">\n      <div class=\"col-lg-10 mx-auto text-center \">\n        <h2 class=\"text-white mb-4 text-center\">About me</h2>\n        <p class=\"text-white-50 text-left about-text  \"> I am a responsible, ambitious person and I have the capacity to absorb and assimilate new ideas fast. \n          In addition, I am a very punctual person and I approach tasks and situations in a mature way. \n          Besides, I am a team player, working well and comfortably with others, contributing to positive morale in the workplace. \n          I am accustomed to work in a busy environment and I am unflappable under pressure. \n          My practical experience and my personal characteristics such as flexibility, cooperation and dedication can contribute for you to have an excellent work with me.\n          For more about my background and past studies please have a look over my cv </p>\n          <button type=\"button\" class=\"btn btn-c btn-txt\" data-toggle=\"modal\" data-target=\"#myModal\">CV</button>\n\n        </div>\n    </div>\n\n  </div>\n  <div id=\"myModal\" class=\"modal fade\"  role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\" style=\"max-width:794px;\"  >\n        <div class=\"modal-content\"  >\n           \n                <img src=\"../../assets/CV.jpg\" class=\"img-responsive cv_button\">\n          \n        </div>\n      </div>\n    </div>\n\n</section>\n<section id=\"about\" class=\"parallax\">\n  <div class=\"container\">\n    <div class=\"parr_div \">\n    <img class=\"img-fluid\" src=\"../../assets/laptop.png\" alt=\"\">\n  </div>\n  </div>\n</section>\n<section id=\"projects\" class=\"projects-section bg-light\">\n    <div class=\"container\">\n\n      <!-- Featured Project Row -->\n      <div class=\"row align-items-center no-gutters\">\n        <div class=\"col-xl-6 col-lg-6\">\n          <img class=\"img-fluid mb-3 mb-lg-0\" src=\"../../assets/profile.jpg\" alt=\"\">\n        </div>\n        <div class=\"col-xl-6 col-lg-6\">\n          <div class=\"featured-text text-center text-lg-left\">\n            <h4>Motivation</h4>\n            <p class=\"text-black-50 mb-0\">It can be said that I am a perfectionist just by putting in extra hours when the need arises just to get my work properly done.\n               What is more, socially, I have an outgoing personality and I like to take part in different voluntary activities whenever I can.\n               With their help I am able to develop my communication skills by interacting with people when involved in different situations which required initiative and team spirit</p>\n          </div>\n        </div>\n      </div>\n      </div>\n </section>\n <section class=\"icons-parallax\">\n    <div class=\"container \">\n        <p class=\"icons-heading\">Passions</p>\n\n\n      <div class=\"row justify-content-center\">\n          <div class=\"col-sm-6 col-lg-3 icon-container\" >\n            \n            <div class=\"icons-icon\">\n                <img src=\"../../assets/aperture-initial.png\" onmouseover=\"this.src='../../assets/aperture-final.png';\" onmouseout=\"this.src='../../assets/aperture-initial.png';\" class=\"icon aperture\">\n                <p class=\"incons-text \">PHOTOGRAPHY</p>\n              </div>\n\n          </div>\n          <div class=\"col-sm-6 col-lg-3 icon-container\" >\n              <div class=\"icons-icon\">\n                  <img src=\"../../assets/bench-initial.png\" onmouseover=\"this.src='../../assets/bench-final.png';\" onmouseout=\"this.src='../../assets/bench-initial.png';\" class=\"icon gym\">\n\n                  <p class=\"incons-text gymtext\">GYM</p>\n              </div>\n\n              </div>\n              <div class=\"col-sm-6 col-lg-3 icon-container\" >\n                  <div class=\"icons-icon\">\n                    <img src=\"../../assets/mouse-icon.png\" class=\"icon mouse\">\n                  <p class=\"incons-text\">gaming</p>\n                </div>\n\n              </div>\n              <div class=\"col-sm-6 col-lg-3 icon-container\" >\n                  <div class=\"icons-icon\">\n                      <img src=\"../../assets/basic_gear.png\" class=\"icon gear\">\n                    <p class=\"incons-text\">developing</p>\n                  </div>\n  \n                </div>\n\n                \n      </div>\n    </div>\n    </section>\n <section id=\"vertical_tabs\" >\n   \n    <div class=\"row\" style=\"margin:0;\">\n      <div class=\"col-lg-4\" style=\"padding:0 0 0 0;\">\n      <div class=\"nav flex-column nav-pills\" id=\"v-pills-tab\" role=\"tablist\">\n        <a class=\"nav-link active\" id=\"v-pills-tab1-tab\" data-toggle=\"tab\" href=\"#v-pills-tab1\" role=\"tab\" aria-controls=\"v-pills-tab1\" aria-expanded=\"true\">\n            <img src=\"../../assets/frontend.png\" class=\"tab-icon\">\n          \n          <div class=\"tab-group\">\n              <span class=\"tab-info\">Front-End Skills </span>\n          </div>\n        </a>\n        <a class=\"nav-link\" id=\"v-pills-tab2-tab\" data-toggle=\"tab\" href=\"#v-pills-tab2\" role=\"tab\" aria-controls=\"v-pills-tab2\" aria-expanded=\"true\">    \n                 <img src=\"../../assets/backend.png\" class=\"tab-icon\">\n          \n          <div class=\"tab-group\">\n              <span class=\"tab-info\">Back-End Skills</span>\n          </div></a>\n        <a class=\"nav-link\" id=\"v-pills-tab3-tab\" data-toggle=\"tab\" href=\"#v-pills-tab3\" role=\"tab\" aria-controls=\"v-pills-tab3\" aria-expanded=\"true\">  \n                   <img src=\"../../assets/database-512.png\" class=\"tab-icon\">\n          \n          <div class=\"tab-group\">\n              <span class=\"tab-info\">Database Skills</span>\n          </div></a>\n      </div>\n      </div>\n      <div class=\"col-lg-8 tab-content \" id=\"v-pills-tabContent\">\n        <div class=\"tab-panel fade show  active\" id=\"v-pills-tab1\" role=\"tabpanel\" aria-labelledby=\"v-pills-home-tab\">\n            <div class=\"col-md-8 tab-content-text\">\n                <h4 class=\"desc-heading\">FRONT-END</h4>\n                <p class=\"p-text\">I could say that out of all three layers of web development, the front end part is the one i am most familiar with. Most projects i have worked on \n                  had to be developed in HTML mainly because that is the first thing that i had to learn toghether with CSS. I am also familiar with various CSS frameworks such as Bootstrap and TailWind.\n                  Another skillset concerning Front-End development are JavaScript frameworks. Out of all the frameworks i am most skilled in Angular, but I have also taken a course in Vue and React so i can \n                  definetly say that i am aware of their characteristics and i can make a decision of which one to use depending on the requirements needed. \n                </p>\n                <button class=\"btn-txt projects-hover\">See projects</button> \n                <h4 class=\"desc-heading na\">Under Development</h4> \n              </div>\n              <div class=\"col-md-4 tab-content-image\">\n                  <img src=\"../../assets/frontend-big.png\" alt=\"Tab Image\" class=\"tab-image\"  >\n                </div>\n        </div>\n        <div class=\"tab-panel fade\" id=\"v-pills-tab2\" role=\"tabpanel\" aria-labelledby=\"v-pills-tab2-tab\">\n          <div class=\"col-md-8 tab-content-text\">\n            <h4 class=\"desc-heading\">BACK-END</h4>\n            <p>Concerning back-end, ASP.NET is the platform i have worked with before. I have worked with MVC in order to have a clean and easy way to manage all the data and i have \n              also worked with plain Web API app with no templates in order to learn more about manipulating the data coming from the APIs and creating the controllers with the help of Entity Framework.</p>\n          </div>\n          <div class=\"col-md-4 tab-content-image\">\n              <img src=\"../../assets/backend-big.png\" alt=\"Tab Image\" class=\"tab-image wow fadeInRight\" data-wow-duration=\".8s\" >\n            </div>\n        </div>\n        <div class=\"tab-panel fade\" id=\"v-pills-tab3\" role=\"tabpanel\" aria-labelledby=\"v-pills-tab3-tab\">\n          <div class=\"col-md-8 tab-content-text\">\n            <h4 class=\"desc-heading\">DATABASES</h4>\n            <p>Out of the two types of databases i am mare skilled in SQL after having to work with SQL  databases for most of my College projects. That is mainly because we did not need to have a  large database\n              so SQL did just fine. But in the case of a No-SQL database i have the basic knowledge about most of its types including MongoDB, Node and of course, Firebase being the one i am used to.\n            </p>\n          </div>\n          <div class=\"col-md-4 tab-content-image\">\n              <img src=\"../../assets/DATABASE-BIG.png\" alt=\"Tab Image\" class=\"tab-image wow fadeInRight\" data-wow-duration=\".8s\" >\n            </div>\n        </div>\n      </div>\n  </div>\n</section>\n<section id=\"contact-s\" class=\"signup-section\">\n    \n  <div class=\"container \">\n      <div class=\"row justify-content-center\">\n          <h4 class=\"form-btn formheading\">GET IN TOUCH WITH ME</h4>\n\n      </div>\n        <div class=\"row justify-content-center\">\n          \n            <div class=\"media-container-column col-lg-10\" data-form-type=\"formoid\">\n                    <form class=\"gform\" action=\"https://script.google.com/macros/s/AKfycbx6IEVffOeMisjDJqNaHxghu_j0jZrtk6OFc-nSumA9uib0XDYg/exec\" method=\"POST\" data-email=\"florinmihalcea96@gmail.com\" >\n                        <div class=\"col-lg-6 half\">\n                            <div class=\" col-lg-12 multi-horizontal\" data-for=\"name\">\n                                <div class=\"form-group\">\n                                    <input type=\"text\" class=\"form-control\" name=\"name\" data-form-field=\"Name\" required=\"\" id=\"name-form1-2w\">\n                                    <label class=\"form-control-label  form-text display-7\" for=\"name-form1-2w\">Name</label>\n\n                                </div>\n                            </div>\n                            <div class=\"col-lg-12 multi-horizontal\" data-for=\"email\">\n                                <div class=\"form-group\">\n                                    <input type=\"email\" class=\"form-control\" name=\"email\" data-form-field=\"Email\" required=\"\" id=\"email-form1-2w\">\n                                    <label class=\"form-control-label  form-text display-7\" for=\"email-form1-2w\">Email</label>\n\n                                </div>\n                            </div>\n\n                        </div>\n                        <div class=\" col-lg-6 half form-group\" data-for=\"message\">\n                            <textarea type=\"text\" class=\"form-control message\" name=\"message\" rows=\"7\" data-form-field=\"Message\" id=\"message-form1-2w\"></textarea>\n                                                        <label class=\"form-control-label  form-text  display-7\" for=\"message-form1-2w\">Message</label>\n                                                        <span class=\"input-group-btn\">\n                                                            <button class=\"btn-txt form-btn\">SEND MESSAGE</button>  \n                                                          </span>\n                        </div>\n                        <div class=\"thankyou_message \" style=\"display:none\">\n                          <h4 class=\"formheading\">Thanks for contacting me!\n                            I will get back to you soon!</h4>\n                        </div>\n                    </form>\n\n            </div>\n        </div>\n\n    </div>\n</section>\n  <!-- Contact Section -->\n  <section class=\"contact-section bg-black\">\n      <div class=\"container\">\n  \n        <div class=\"row\">\n  \n          <div class=\"col-md-4 mb-3 mb-md-0\">\n            <div class=\"card py-4 h-100\">\n              <div class=\"card-body text-center\">\n                <i class=\"fas fa-map-marked-alt text-primary mb-2\"></i>\n                <h4 class=\"text-uppercase m-0\">Address</h4>\n                <hr class=\"my-4\">\n                <div class=\"small text-black-50\">Badehusvej 14, 9</div>\n                <div class=\"small text-black-50\">Aalborg, Denmark</div>\n\n\n              </div>\n            </div>\n          </div>\n  \n          <div class=\"col-md-4 mb-3 mb-md-0\">\n            <div class=\"card py-4 h-100\">\n              <div class=\"card-body text-center\">\n                <i class=\"fas fa-envelope text-primary mb-2\"></i>\n                <h4 class=\"text-uppercase m-0\">Email</h4>\n                <hr class=\"my-4\">\n                <div class=\"small text-black-50\">\n                  <a href=\"#\">florinmihalcea96@gmail.com</a>\n                </div>\n              </div>\n            </div>\n          </div>\n  \n          <div class=\"col-md-4 mb-3 mb-md-0\">\n            <div class=\"card py-4 h-100\">\n              <div class=\"card-body text-center\">\n                <i class=\"fas fa-mobile-alt text-primary mb-2\"></i>\n                <h4 class=\"text-uppercase m-0\">Phone</h4>\n                <hr class=\"my-4\">\n                <div class=\"small text-black-50\">+45 52828460</div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n  \n"

/***/ }),

/***/ "./src/app/body/body.component.ts":
/*!****************************************!*\
  !*** ./src/app/body/body.component.ts ***!
  \****************************************/
/*! exports provided: BodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyComponent", function() { return BodyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// const laptop = require('@/app/body/laptop.png');
var BodyComponent = /** @class */ (function () {
    function BodyComponent() {
    }
    BodyComponent.prototype.ngOnInit = function () {
    };
    BodyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-body',
            template: __webpack_require__(/*! ./body.component.html */ "./src/app/body/body.component.html"),
            styles: [__webpack_require__(/*! ./body.component.css */ "./src/app/body/body.component.css")]
        })
    ], BodyComponent);
    return BodyComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\r\n    padding: 5rem 0;\r\n  }\r\n  .bg-black {\r\n    background-color: #161616!important;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtFQUNqQjtFQUNBO0lBQ0UsbUNBQW1DO0VBQ3JDIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcclxuICAgIHBhZGRpbmc6IDVyZW0gMDtcclxuICB9XHJcbiAgLmJnLWJsYWNrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNjE2MTYhaW1wb3J0YW50O1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"bg-black small text-center text-white-50\">\n    <div class=\"container\">\n      Developed with <s>Angular</s> Love\n    </div>\n  </footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n#mainNav {\r\n  max-height: 50px;\r\n  background-color: white;\r\n}\r\n\r\n#mainNav .navbar-toggler {\r\n  font-size: 80%;\r\n  padding: 0.75rem;\r\n  color: #fff;\r\n  border: 1px solid #fff;\r\n}\r\n\r\n#mainNav .navbar-toggler:focus {\r\n  outline: none;\r\n}\r\n\r\n#mainNav .navbar-brand .nav-logo {\r\n  max-width: 150px;\r\n\r\n}\r\n\r\n#mainNav .navbar-nav .nav-item:hover {\r\n  color: fade(white, 80%);\r\n  outline: none;\r\n  background-color: transparent;\r\n}\r\n\r\n#mainNav .navbar-nav .nav-item:active, #mainNav .navbar-nav .nav-item:focus {\r\n  outline: none;\r\n  background-color: black;\r\n}\r\n\r\n#mainNav .navbar-nav{\r\n  background-color: white;\r\n\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  #mainNav {\r\n    padding-top: 0;\r\n    padding-bottom: 0;\r\n    border-bottom: none;\r\n    transition: background-color 0.3s ease-in-out;\r\n    background-color: transparent;\r\n  }\r\n  #mainNav .navbar-brand {\r\n    max-width: 150px;\r\n  }\r\n  #mainNav .nav-link {\r\n    transition: none;\r\n    padding: 2rem 1.5rem;\r\n    font-family: 'Montserrat';\r\n\r\n    color: rgba(255, 255, 255, 0.5);\r\n  }\r\n  #mainNav .nav-link:hover {\r\n    color: rgba(255, 255, 255, 0.75);\r\n  }\r\n  #mainNav .nav-link:active {\r\n    color: white;\r\n  }\r\n  #mainNav.navbar-shrink {\r\n    background-color: transparent;\r\n    max-height: 50px;\r\n  }\r\n  #mainNav.navbar-shrink .navbar-brand {\r\n    -webkit-filter: invert(100%);\r\n            filter: invert(100%);\r\n  }\r\n  #mainNav.navbar-shrink .nav-link {\r\n    color: #161616;\r\n    padding: 1.5rem 1.5rem 1.25rem;\r\n    border-bottom: 0.25rem solid transparent;\r\n  }\r\n  #mainNav.navbar-shrink .nav-link:hover {\r\n    color: #64a19d;\r\n  }\r\n  #mainNav.navbar-shrink .nav-link:active {\r\n    color: #467370;\r\n  }\r\n  #mainNav.navbar-shrink .nav-link.active {\r\n    color: #64a19d;\r\n    outline: none;\r\n    border-bottom: 0.25rem solid #64a19d;\r\n  }\r\n}\r\n\r\n.masthead {\r\n  width: 100%;\r\n  height: auto;\r\n  min-height: 35rem;\r\n  padding: 15rem 0;\r\n  ;\r\n  background: linear-gradient(to bottom, rgba(22, 22, 22, 0.3) 0%, rgba(22, 22, 22, 0.7) 90%, #161616 100%), url('bg-photo.jpg');\r\n  ;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-attachment: scroll;\r\n  background-size: cover;\r\n}\r\n\r\n.masthead h1 {\r\n  font-family: 'Montserrat';\r\n  color: #fff;\r\n  text-align: center;  \r\n}\r\n\r\n.masthead h2 {\r\n  max-width: 20rem;\r\n  font-size: 1rem;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .masthead h1 {\r\n    font-size: 4rem;\r\n    line-height: 4rem;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .masthead {\r\n    height: 100vh;\r\n    padding: 0;\r\n  }\r\n  .masthead h1 {\r\n    font-size: 3.99rem;\r\n    line-height: 6.5rem;\r\n    letter-spacing: 0.5rem;\r\n  }\r\n  .masthead h2 {\r\n    max-width: 30rem;\r\n    font-size: 1.25rem;\r\n    font-family: 'Montserrat';\r\n\r\n  }\r\n}\r\n\r\n.scroll-downs {\r\n  margin: auto;\r\n  width :34px;\r\n  height: 55px;\r\n  position: absolute;\r\n  \r\n  bottom:1rem;\r\n  left: calc(50% - 19px);\r\n  \r\n}\r\n\r\n.scroll-downs:hover ~.headings-container{\r\n  visibility: visible;\r\n  opacity: 1;\r\n  font-family: 'Montserrat';\r\n}\r\n\r\n.headings-container{\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  transition: visibility 0s, opacity 0.5s linear;\r\n  bottom:2rem;\r\n  position:absolute;\r\n  left: calc(50% - 55px);\r\n  width:110px;\r\n  }\r\n\r\n.mousey {\r\n  width: 3px;\r\n  padding: 10px 15px;\r\n  height: 35px;\r\n  border: 2px solid #fff;\r\n  border-radius: 25px;\r\n  opacity: 0.75;\r\n  box-sizing: content-box;\r\n}\r\n\r\n.scroller {\r\n  width: 3px;\r\n  height: 10px;\r\n  border-radius: 25%;\r\n  background-color: #fff;\r\n  -webkit-animation-name: scroll;\r\n          animation-name: scroll;\r\n  -webkit-animation-duration: 2.2s;\r\n          animation-duration: 2.2s;\r\n  -webkit-animation-timing-function: cubic-bezier(.15,.41,.69,.94);\r\n          animation-timing-function: cubic-bezier(.15,.41,.69,.94);\r\n  -webkit-animation-iteration-count: infinite;\r\n          animation-iteration-count: infinite;\r\n}\r\n\r\n@-webkit-keyframes scroll {\r\n  0% { opacity: 0; }\r\n  10% { -webkit-transform: translateY(0); transform: translateY(0); opacity: 1; }\r\n  100% { -webkit-transform: translateY(15px); transform: translateY(15px); opacity: 0;}\r\n}\r\n\r\n@keyframes scroll {\r\n  0% { opacity: 0; }\r\n  10% { -webkit-transform: translateY(0); transform: translateY(0); opacity: 1; }\r\n  100% { -webkit-transform: translateY(15px); transform: translateY(15px); opacity: 0;}\r\n}\r\n\r\n.btn-txt{\r\n  font-family: 'Montserrat';\r\n\r\n  position: relative;\r\n  padding: 8px 38px;\r\n  background: #fff;\r\n  color: #161616;\r\n  text-transform: uppercase;\r\n  letter-spacing: 2.5px;\r\n  font-size: 0.9em;\r\n  line-height: 1.8em;\r\n  border-radius: 0;\r\n  transition: all 0.5s;\r\n  margin-bottom: 0;\r\n  font-weight: normal;\r\n  vertical-align: middle;\r\n  touch-action: manipulation;\r\n  white-space: nowrap;\r\n  cursor: pointer;\r\n\r\n\r\n}\r\n\r\n.btn-txt:hover{\r\n  opacity:0.5;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7O0FBRWxCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0UsdUJBQXVCOztBQUV6Qjs7QUFFQTtFQUNFO0lBQ0UsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFFbkIsNkNBQTZDO0lBQzdDLDZCQUE2QjtFQUMvQjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFFRSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLHlCQUF5Qjs7SUFFekIsK0JBQStCO0VBQ2pDO0VBQ0E7SUFDRSxnQ0FBZ0M7RUFDbEM7RUFDQTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0UsNkJBQTZCO0lBQzdCLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsNEJBQW9CO1lBQXBCLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UsY0FBYztJQUNkLDhCQUE4QjtJQUM5Qix3Q0FBd0M7RUFDMUM7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGNBQWM7SUFDZCxhQUFhO0lBQ2Isb0NBQW9DO0VBQ3RDO0FBQ0Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0I7O0VBR2hCLDhIQUF5STs7RUFFekksMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsVUFBVTtFQUNaO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix5QkFBeUI7O0VBRTNCO0FBQ0Y7O0FBS0E7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7O0VBRWxCLFdBQVc7RUFDWCxzQkFBc0I7O0FBRXhCOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVix5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLDhDQUE4QztFQUM5QyxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1g7O0FBQ0Y7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsOEJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixnQ0FBd0I7VUFBeEIsd0JBQXdCO0VBQ3hCLGdFQUF3RDtVQUF4RCx3REFBd0Q7RUFDeEQsMkNBQW1DO1VBQW5DLG1DQUFtQztBQUNyQzs7QUFDQTtFQUNFLEtBQUssVUFBVSxFQUFFO0VBQ2pCLE1BQU0sZ0NBQXdCLEVBQXhCLHdCQUF3QixFQUFFLFVBQVUsRUFBRTtFQUM1QyxPQUFPLG1DQUEyQixFQUEzQiwyQkFBMkIsRUFBRSxVQUFVLENBQUM7QUFDakQ7O0FBSkE7RUFDRSxLQUFLLFVBQVUsRUFBRTtFQUNqQixNQUFNLGdDQUF3QixFQUF4Qix3QkFBd0IsRUFBRSxVQUFVLEVBQUU7RUFDNUMsT0FBTyxtQ0FBMkIsRUFBM0IsMkJBQTJCLEVBQUUsVUFBVSxDQUFDO0FBQ2pEOztBQUNBO0VBQ0UseUJBQXlCOztFQUV6QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUVoQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixlQUFlOzs7QUFHakI7O0FBQ0E7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuI21haW5OYXYge1xyXG4gIG1heC1oZWlnaHQ6IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiNtYWluTmF2IC5uYXZiYXItdG9nZ2xlciB7XHJcbiAgZm9udC1zaXplOiA4MCU7XHJcbiAgcGFkZGluZzogMC43NXJlbTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG59XHJcblxyXG4jbWFpbk5hdiAubmF2YmFyLXRvZ2dsZXI6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbiNtYWluTmF2IC5uYXZiYXItYnJhbmQgLm5hdi1sb2dvIHtcclxuICBtYXgtd2lkdGg6IDE1MHB4O1xyXG5cclxufVxyXG5cclxuI21haW5OYXYgLm5hdmJhci1uYXYgLm5hdi1pdGVtOmhvdmVyIHtcclxuICBjb2xvcjogZmFkZSh3aGl0ZSwgODAlKTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4jbWFpbk5hdiAubmF2YmFyLW5hdiAubmF2LWl0ZW06YWN0aXZlLCAjbWFpbk5hdiAubmF2YmFyLW5hdiAubmF2LWl0ZW06Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuI21haW5OYXYgLm5hdmJhci1uYXZ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAjbWFpbk5hdiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gICNtYWluTmF2IC5uYXZiYXItYnJhbmQge1xyXG4gICAgbWF4LXdpZHRoOiAxNTBweDtcclxuICB9XHJcbiAgI21haW5OYXYgLm5hdi1saW5rIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAycmVtIDEuNXJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XHJcblxyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICB9XHJcbiAgI21haW5OYXYgLm5hdi1saW5rOmhvdmVyIHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xyXG4gIH1cclxuICAjbWFpbk5hdiAubmF2LWxpbms6YWN0aXZlIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgI21haW5OYXYubmF2YmFyLXNocmluayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIG1heC1oZWlnaHQ6IDUwcHg7XHJcbiAgfVxyXG4gICNtYWluTmF2Lm5hdmJhci1zaHJpbmsgLm5hdmJhci1icmFuZCB7XHJcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKTtcclxuICB9XHJcbiAgI21haW5OYXYubmF2YmFyLXNocmluayAubmF2LWxpbmsge1xyXG4gICAgY29sb3I6ICMxNjE2MTY7XHJcbiAgICBwYWRkaW5nOiAxLjVyZW0gMS41cmVtIDEuMjVyZW07XHJcbiAgICBib3JkZXItYm90dG9tOiAwLjI1cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICAjbWFpbk5hdi5uYXZiYXItc2hyaW5rIC5uYXYtbGluazpob3ZlciB7XHJcbiAgICBjb2xvcjogIzY0YTE5ZDtcclxuICB9XHJcbiAgI21haW5OYXYubmF2YmFyLXNocmluayAubmF2LWxpbms6YWN0aXZlIHtcclxuICAgIGNvbG9yOiAjNDY3MzcwO1xyXG4gIH1cclxuICAjbWFpbk5hdi5uYXZiYXItc2hyaW5rIC5uYXYtbGluay5hY3RpdmUge1xyXG4gICAgY29sb3I6ICM2NGExOWQ7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMC4yNXJlbSBzb2xpZCAjNjRhMTlkO1xyXG4gIH1cclxufVxyXG5cclxuLm1hc3RoZWFkIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWluLWhlaWdodDogMzVyZW07XHJcbiAgcGFkZGluZzogMTVyZW0gMDtcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKHJnYmEoMjIsIDIyLCAyMiwgMC4zKSksIGNvbG9yLXN0b3AoNzUlLCByZ2JhKDIyLCAyMiwgMjIsIDAuNykpLCB0bygjMTYxNjE2KSksIHVybCguLi8uLi9hc3NldHMvYmctcGhvdG8uanBnKTtcclxuICA7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyMiwgMjIsIDIyLCAwLjMpIDAlLCByZ2JhKDIyLCAyMiwgMjIsIDAuNykgOTAlLCAjMTYxNjE2IDEwMCUpLCB1cmwoLi4vLi4vYXNzZXRzL2JnLXBob3RvLmpwZyk7XHJcbiAgO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogc2Nyb2xsO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5tYXN0aGVhZCBoMSB7XHJcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7ICBcclxufVxyXG5cclxuLm1hc3RoZWFkIGgyIHtcclxuICBtYXgtd2lkdGg6IDIwcmVtO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLm1hc3RoZWFkIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiA0cmVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgLm1hc3RoZWFkIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICAubWFzdGhlYWQgaDEge1xyXG4gICAgZm9udC1zaXplOiAzLjk5cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDYuNXJlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVyZW07XHJcbiAgfVxyXG4gIC5tYXN0aGVhZCBoMiB7XHJcbiAgICBtYXgtd2lkdGg6IDMwcmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcclxuXHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4uc2Nyb2xsLWRvd25zIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgd2lkdGggOjM0cHg7XHJcbiAgaGVpZ2h0OiA1NXB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBcclxuICBib3R0b206MXJlbTtcclxuICBsZWZ0OiBjYWxjKDUwJSAtIDE5cHgpO1xyXG4gIFxyXG59XHJcbi5zY3JvbGwtZG93bnM6aG92ZXIgfi5oZWFkaW5ncy1jb250YWluZXJ7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XHJcbn1cclxuLmhlYWRpbmdzLWNvbnRhaW5lcntcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzLCBvcGFjaXR5IDAuNXMgbGluZWFyO1xyXG4gIGJvdHRvbToycmVtO1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIGxlZnQ6IGNhbGMoNTAlIC0gNTVweCk7XHJcbiAgd2lkdGg6MTEwcHg7XHJcbiAgfVxyXG4ubW91c2V5IHtcclxuICB3aWR0aDogM3B4O1xyXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIG9wYWNpdHk6IDAuNzU7XHJcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbn1cclxuLnNjcm9sbGVyIHtcclxuICB3aWR0aDogM3B4O1xyXG4gIGhlaWdodDogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAyNSU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBhbmltYXRpb24tbmFtZTogc2Nyb2xsO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMi4ycztcclxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoLjE1LC40MSwuNjksLjk0KTtcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxufVxyXG5Aa2V5ZnJhbWVzIHNjcm9sbCB7XHJcbiAgMCUgeyBvcGFjaXR5OiAwOyB9XHJcbiAgMTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyBvcGFjaXR5OiAxOyB9XHJcbiAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNXB4KTsgb3BhY2l0eTogMDt9XHJcbn1cclxuLmJ0bi10eHR7XHJcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcclxuXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDhweCAzOHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgY29sb3I6ICMxNjE2MTY7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMi41cHg7XHJcbiAgZm9udC1zaXplOiAwLjllbTtcclxuICBsaW5lLWhlaWdodDogMS44ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuXHJcbn1cclxuLmJ0bi10eHQ6aG92ZXJ7XHJcbiAgb3BhY2l0eTowLjU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light fixed-top\" id=\"mainNav\">\n    <div class=\"container\">\n      <a class=\"navbar-brand js-scroll-trigger\" href=\"#\"><img class=\"nav-logo\"src=\"../../assets/Logo-white.png\"></a>\n      <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        Menu\n        <i class=\"fas fa-bars\"></i>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n        <ul class=\"navbar-nav ml-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link js-scroll-trigger\" href=\"#about\">About</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link js-scroll-trigger\" href=\"\">Projects</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link js-scroll-trigger\" href=\"#contact-s\">Contact</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n\n  <!-- Header -->\n  <header class=\"masthead\">\n    <div class=\"container d-flex h-100 align-items-center position-relative\">\n      <div class=\"mx-auto text-center\">\n        <h1 class=\" text-uppercase\">Junior Web Developer</h1>\n        <h2 class=\"text-white-50 mx-auto mt-2 mb-5\">Front-End Back-End Full-Stack</h2>\n        <a href=\"#about\" class=\"btn-txt btn js-scroll-trigger\">Find out more</a>\n      </div>\n\n\n      <div class=\"scroll-downs\">\n        <div  class=\"mousey\">\n          <div class=\"scroller\"></div>\n        </div>\n\n      </div>\n      <div class=\"mx-auto text-center headings-container\">\n\n          <h2 class=\"text-white-50 mx-auto mt-2 mb-5 scrolltext\"> Scroll Down </h2>\n          </div>\n    </div>\n\n  </header>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
        function scrollNav() {
            jquery__WEBPACK_IMPORTED_MODULE_2__('.js-scroll-trigger').click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_2__('html, body').stop().animate({
                    scrollTop: jquery__WEBPACK_IMPORTED_MODULE_2__(jquery__WEBPACK_IMPORTED_MODULE_2__(this).attr('href')).offset().top - 160
                }, 400);
                return false;
            });
            jquery__WEBPACK_IMPORTED_MODULE_2__('.scrollTop a').scrollTop();
        }
        scrollNav();
        var navbarCollapse = function () {
            if (jquery__WEBPACK_IMPORTED_MODULE_2__("#mainNav").offset().top > 100) {
                jquery__WEBPACK_IMPORTED_MODULE_2__("#mainNav").addClass("navbar-shrink");
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_2__("#mainNav").removeClass("navbar-shrink");
            }
        };
        // Collapse now if page is not at top
        navbarCollapse();
        // Collapse the navbar when page is scrolled
        jquery__WEBPACK_IMPORTED_MODULE_2__(window).scroll(navbarCollapse);
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\florin\Desktop\School\Prtfolio - Copy (2)\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map