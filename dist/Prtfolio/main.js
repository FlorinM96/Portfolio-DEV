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

module.exports = "\r\n.about-section {\r\n  font-family: 'Montserrat';\r\n\r\n    padding-top: 10rem;\r\n    background: linear-gradient(to bottom, #161616 , #666666 );\r\n  }\r\n  \r\n  .about-section p {\r\n    margin-bottom: 1rem;\r\n  }\r\n  \r\n  .parallax{\r\n    background: #666666;\r\n  }\r\n  \r\n  .parr_div{\r\n\r\n    background-image: url('big-code.jpg');\r\n\r\n    /* Set a specific height */\r\n    /* Create the parallax scrolling effect */\r\n    background-size:cover;\r\n    background-position: center;\r\n    background-attachment: fixed;\r\n    }\r\n  \r\n  .na{\r\n  display:none;\r\n}\r\n  \r\n  .projects-hover:hover +.na{\r\n  display:block;\r\n}\r\n  \r\n  .projects-section {\r\n  padding: 5rem 0;\r\n}\r\n  \r\n  .projects-section .featured-text {\r\n  padding: 2rem;\r\n  font-family: 'Montserrat';\r\n\r\n}\r\n  \r\n  .about-text{\r\n  padding-bottom:2rem;\r\n  padding-top:0.5rem;\r\n\r\n}\r\n  \r\n  @media (min-width: 992px) {\r\n  .projects-section .featured-text {\r\n    padding: 0 0 0 2rem;\r\n    border-left: 0.5rem solid #666666;\r\n    font-family: 'Montserrat';\r\n\r\n  }\r\n}\r\n  \r\n  .nav-pills .nav-link.active, .nav-pills .show>.nav-link {\r\n  color: #161616;\r\n  background-color: #F4F4F4;\r\n  border-left: 1rem solid #111111;\r\n\r\n}\r\n  \r\n  .nav-pills .nav-link {\r\n  display: block;\r\n  padding: 50px;\r\n  color: #161616;\r\n  text-decoration: none;\r\n  transition: all 0.5s;\r\n  border-radius: 0;\r\n\r\n\r\n  background-color: transparent;\r\n  white-space: nowrap;\r\n\r\n}\r\n  \r\n  .nav-pills .nav-link:hover{\r\n  background-color: #f8f8f8;\r\n}\r\n  \r\n  .tab-icon{\r\ndisplay: inline-block;\r\npadding-right: 20px;\r\nmax-width: 80px;\r\nbackground: transparent;\r\n}\r\n  \r\n  .tab-group{\r\n  \r\n  display:inline-block;\r\n  font-family: 'Montserrat';\r\n  font-size: 14px;\r\n  font-weight: 300;\r\n  letter-spacing: 0.2px;\r\n  line-height: 1.8em;\r\n}\r\n  \r\n  .tab-info{\r\n  display:inline-block;\r\n  font-family: 'Montserrat';\r\n    color: #111;\r\n    font-size: 1.07em;\r\n    letter-spacing: 3px;\r\n    text-transform: uppercase;\r\n    text-align: left;\r\n}\r\n  \r\n  .tab-content>.active{\r\n  height:100%;\r\n\r\n}\r\n  \r\n  .tab-content{\r\n  background-color: #F4F4F4;\r\n\r\n}\r\n  \r\n  .fade:not(.show) {\r\n  display: none;\r\n}\r\n  \r\n  .tab-content-text {\r\n  font-family: 'Montserrat';\r\n\r\n  display:inline-block;\r\n  position:relative;\r\n  top:20%;\r\n\r\n}\r\n  \r\n  .p-text{\r\n  font-family: 'Montserrat';\r\n\r\n}\r\n  \r\n  .btn-txt{\r\n  \r\n    position: relative;\r\n      padding: 8px 38px;\r\n    background: #111;\r\n    color: #ececec;\r\n    text-transform: uppercase;\r\n    letter-spacing: 2.5px;\r\n    font-size: 0.9em;\r\n    line-height: 1.8em;\r\n    border-radius: 0;\r\n    transition: all 0.5s;\r\n    margin-bottom: 0;\r\n    font-weight: normal;\r\n    vertical-align: middle;\r\n    touch-action: manipulation;\r\n    white-space: nowrap;\r\n    cursor: pointer;\r\n    font-family: 'Montserrat';\r\n\r\n\r\n\r\n}\r\n  \r\n  .btn-c{\r\n  background:#ececec;\r\n  color:#111;\r\n}\r\n  \r\n  .btn-c:hover:hover{\r\n  opacity:0.5;\r\n\r\n\r\n}\r\n  \r\n  .desc-heading{\r\n  margin: 0;\r\n  padding-bottom: 25px;\r\n  font-family: 'Montserrat';\r\n\r\n}\r\n  \r\n  .tab-image{\r\n  display: block;\r\n  max-width: 100%;\r\n  float:right;\r\n  left: 100%;\r\nposition: absolute;\r\n  -webkit-animation: slide 1s forwards;\r\n  animation: slide 1s forwards;\r\n\r\n}\r\n  \r\n  .tab-content-image{\r\n  display:inline-block;\r\n  float: right;\r\n  position:relative;\r\n  top:15%;\r\n  \r\n}\r\n  \r\n  @-webkit-keyframes slide {\r\n  100% { left: 0; }\r\n}\r\n  \r\n  @keyframes slide {\r\n  100% { left: 0; }\r\n}\r\n  \r\n  .icons-parallax{\r\n  background:linear-gradient(to bottom, rgba(22, 22, 22, 0.3) 0%, rgba(22, 22, 22, 0.7) 90%), url('bg-photo-small.jpg');\r\n  background-attachment: fixed;\r\n  background-size:cover;\r\n  background-position: center;\r\n  \r\n}\r\n  \r\n  .icon-container{\r\n  display: inline-block;\r\n  padding-bottom: 5px;\r\n  text-align: center;\r\n\r\n}\r\n  \r\n  .incons-text{\r\n  padding-top:1rem;\r\n  text-align: center;\r\n  letter-spacing: 3px;\r\n  text-transform: uppercase;\r\n  color: #F4F4F4;\r\n  font-family: 'Montserrat';\r\n\r\n}\r\n  \r\n  .icon{\r\n  display: block;\r\n  -webkit-filter: invert(100%);\r\n          filter: invert(100%);\r\n  margin:auto;\r\n  height: 100px;\r\n}\r\n  \r\n  .gear{\r\n  transition:         -webkit-transform .8s ease-in-out;\r\n  transition:         transform .8s ease-in-out;\r\n  transition:         transform .8s ease-in-out, -webkit-transform .8s ease-in-out;\r\n\r\n}\r\n  \r\n  .gear:hover{\r\n  -webkit-transform: rotate(180deg);\r\n          transform: rotate(180deg);}\r\n  \r\n  .icons-heading{\r\n  text-align: center;\r\n  font-size: 2em;\r\n  letter-spacing: 3px;\r\n  text-transform: uppercase;\r\n  color: #F4F4F4;\r\n  margin:0 0 0 0;\r\n\r\n}\r\n  \r\n  .mouse:hover{ \r\n  -webkit-animation: wiggle 1s infinite; \r\n          animation: wiggle 1s infinite;\r\n  -webkit-animation-timing-function:linear;\r\n          animation-timing-function:linear;   \r\n}\r\n  \r\n  @-webkit-keyframes wiggle {\r\n  0% { -webkit-transform: translate(10px, 0); transform: translate(10px, 0); }\r\n  25% { -webkit-transform: translate(0, 10px); transform: translate(0, 10px); }\r\n  50% { -webkit-transform: translate(-10px, 0); transform: translate(-10px, 0); }\r\n  75% { -webkit-transform: translate(0, -10px); transform: translate(0, -10px); }\r\n  100% { -webkit-transform: translate(10px, 0); transform: translate(10px, 0); }\r\n}\r\n  \r\n  @keyframes wiggle {\r\n  0% { -webkit-transform: translate(10px, 0); transform: translate(10px, 0); }\r\n  25% { -webkit-transform: translate(0, 10px); transform: translate(0, 10px); }\r\n  50% { -webkit-transform: translate(-10px, 0); transform: translate(-10px, 0); }\r\n  75% { -webkit-transform: translate(0, -10px); transform: translate(0, -10px); }\r\n  100% { -webkit-transform: translate(10px, 0); transform: translate(10px, 0); }\r\n}\r\n  \r\n  .gym{\r\n  max-width: 100px;\r\n}\r\n  \r\n  .contact-section {\r\n  padding: 5rem 0 0;\r\n  font-family: 'Montserrat';\r\n\r\n}\r\n  \r\n  .contact-section .card {\r\n  border: 0;\r\n  border-bottom: 0.25rem solid #666666;\r\n}\r\n  \r\n  .contact-section .card h4 {\r\n  font-size: 0.8rem;\r\n  font-family: 'Montserrat';\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.15rem;\r\n}\r\n  \r\n  .contact-section .card hr {\r\n  border-color: #666666;\r\n  border-width: 0.25rem;\r\n  width: 3rem;\r\n}\r\n  \r\n  .bg-black {\r\n  background-color: #161616!important;\r\n}\r\n  \r\n  footer {\r\n  padding: 5rem 0;\r\n}\r\n  \r\n  .half{\r\n  display:inline-block;\r\n}\r\n  \r\n  .form-btn{\r\n  float:right;\r\n}\r\n  \r\n  .message{\r\nmax-height: 115px;\r\n}\r\n  \r\n  .signup-section{\r\n  padding-top: 3rem;\r\n  padding-bottom: 1rem;\r\n  font-family: 'Montserrat';\r\n\r\n}\r\n  \r\n  .form-text{\r\n  font-size: .8em;\r\n  text-transform: uppercase;\r\n  letter-spacing: 2px;\r\n  color: #111;\r\n  margin-bottom:1rem;\r\n\r\n\r\n}\r\n  \r\n  .formheading{\r\n  padding-bottom:2rem;\r\n  text-align: center;\r\n}\r\n  \r\n  .form-control:focus{\r\n  border-color: #666666;\r\n  box-shadow:none ;\r\n}\r\n  \r\n  .cv_button{\r\n  margin: 0 auto;\r\n  max-width: 100% \r\n}\r\n  \r\n  @media (max-width: 700px){\r\n  .nav-pills .nav-link.active, .nav-pills .show>.nav-link{\r\n    border-left:0rem;\r\n  }\r\n  .nav-pills .nav-link {\r\n    display: block;\r\n    padding: 10px;\r\n    color: #161616;\r\n    text-decoration: none;\r\n    transition: all 0.5s;\r\n    border-radius: 0;\r\n  \r\n  \r\n    background-color: transparent;\r\n    white-space: nowrap;\r\n  \r\n  }\r\n  .nav-pills .nav-link:hover{\r\n    background-color: #f8f8f8;\r\n  }\r\n  .tab-content-text {\r\n    font-family: 'Montserrat';\r\n  \r\n    display:block;\r\n    position:relative;\r\n    top:0;\r\n  \r\n  }\r\n  .desc-heading, .projects-hover , .na, .tab-content-image{\r\n    display:none;\r\n  }\r\n  .icon-container{\r\n    width: 50%;\r\n  }\r\n\r\n  .icons-heading{\r\n    text-align: center;\r\n    font-size: 1.5em;\r\n    letter-spacing: 3px;\r\n    text-transform: uppercase;\r\n    color: #F4F4F4;\r\n    margin:0 0 0 0;\r\n  \r\n  }\r\n  .featured-text-p{\r\n  text-align:left;\r\n  padding-top:10px;\r\n}\r\n.scroll-downs{\r\n  bottom: -300px;\r\n}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS9ib2R5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UseUJBQXlCOztJQUV2QixrQkFBa0I7SUFDbEIsMERBQTBEO0VBQzVEOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBOztJQUVFLHFDQUFrRDs7SUFFbEQsMEJBQTBCO0lBQzFCLHlDQUF5QztJQUN6QyxxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1Qjs7RUFDSjtFQUNFLFlBQVk7QUFDZDs7RUFDQTtFQUNFLGFBQWE7QUFDZjs7RUFFQTtFQUNFLGVBQWU7QUFDakI7O0VBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCOztBQUUzQjs7RUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7O0FBRXBCOztFQUVBO0VBQ0U7SUFDRSxtQkFBbUI7SUFDbkIsaUNBQWlDO0lBQ2pDLHlCQUF5Qjs7RUFFM0I7QUFDRjs7RUFFQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsK0JBQStCOztBQUVqQzs7RUFDQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIsZ0JBQWdCOzs7RUFHaEIsNkJBQTZCO0VBQzdCLG1CQUFtQjs7QUFFckI7O0VBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0VBRUE7QUFDQSxxQkFBcUI7QUFDckIsbUJBQW1CO0FBQ25CLGVBQWU7QUFDZix1QkFBdUI7QUFDdkI7O0VBQ0E7O0VBRUUsb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0VBQ0E7RUFDRSxvQkFBb0I7RUFDcEIseUJBQXlCO0lBQ3ZCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixnQkFBZ0I7QUFDcEI7O0VBQ0E7RUFDRSxXQUFXOztBQUViOztFQUNBO0VBQ0UseUJBQXlCOztBQUUzQjs7RUFDQTtFQUNFLGFBQWE7QUFDZjs7RUFDQTtFQUNFLHlCQUF5Qjs7RUFFekIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixPQUFPOztBQUVUOztFQUNBO0VBQ0UseUJBQXlCOztBQUUzQjs7RUFDQTs7SUFFSSxrQkFBa0I7TUFDaEIsaUJBQWlCO0lBQ25CLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUVoQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YseUJBQXlCOzs7O0FBSTdCOztFQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7RUFDQTtFQUNFLFdBQVc7OztBQUdiOztFQUNBO0VBQ0UsU0FBUztFQUNULG9CQUFvQjtFQUNwQix5QkFBeUI7O0FBRTNCOztFQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixXQUFXO0VBQ1gsVUFBVTtBQUNaLGtCQUFrQjtFQUNoQixvQ0FBb0M7RUFDcEMsNEJBQTRCOztBQUU5Qjs7RUFFQTtFQUNFLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLE9BQU87O0FBRVQ7O0VBQ0E7RUFDRSxPQUFPLE9BQU8sRUFBRTtBQUNsQjs7RUFFQTtFQUNFLE9BQU8sT0FBTyxFQUFFO0FBQ2xCOztFQUNBO0VBQ0UscUhBQWtJO0VBQ2xJLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsMkJBQTJCOztBQUU3Qjs7RUFDQTtFQUNFLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsa0JBQWtCOztBQUVwQjs7RUFDQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QseUJBQXlCOztBQUUzQjs7RUFFQTtFQUNFLGNBQWM7RUFDZCw0QkFBb0I7VUFBcEIsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0VBQ0E7RUFHRSxxREFBNkM7RUFBN0MsNkNBQTZDO0VBQTdDLGdGQUE2Qzs7QUFFL0M7O0VBQ0E7RUFDRSxpQ0FBaUM7VUFDekIseUJBQXlCLENBQUM7O0VBQ3BDO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxjQUFjOztBQUVoQjs7RUFDQTtFQUNFLHFDQUE2QjtVQUE3Qiw2QkFBNkI7RUFDN0Isd0NBQWdDO1VBQWhDLGdDQUFnQztBQUNsQzs7RUFFQTtFQUNFLEtBQUsscUNBQTZCLEVBQTdCLDZCQUE2QixFQUFFO0VBQ3BDLE1BQU0scUNBQTZCLEVBQTdCLDZCQUE2QixFQUFFO0VBQ3JDLE1BQU0sc0NBQThCLEVBQTlCLDhCQUE4QixFQUFFO0VBQ3RDLE1BQU0sc0NBQThCLEVBQTlCLDhCQUE4QixFQUFFO0VBQ3RDLE9BQU8scUNBQTZCLEVBQTdCLDZCQUE2QixFQUFFO0FBQ3hDOztFQU5BO0VBQ0UsS0FBSyxxQ0FBNkIsRUFBN0IsNkJBQTZCLEVBQUU7RUFDcEMsTUFBTSxxQ0FBNkIsRUFBN0IsNkJBQTZCLEVBQUU7RUFDckMsTUFBTSxzQ0FBOEIsRUFBOUIsOEJBQThCLEVBQUU7RUFDdEMsTUFBTSxzQ0FBOEIsRUFBOUIsOEJBQThCLEVBQUU7RUFDdEMsT0FBTyxxQ0FBNkIsRUFBN0IsNkJBQTZCLEVBQUU7QUFDeEM7O0VBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0VBSUE7RUFDRSxpQkFBaUI7RUFDakIseUJBQXlCOztBQUUzQjs7RUFFQTtFQUNFLFNBQVM7RUFDVCxvQ0FBb0M7QUFDdEM7O0VBRUE7RUFDRSxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6Qix1QkFBdUI7QUFDekI7O0VBRUE7RUFDRSxxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLFdBQVc7QUFDYjs7RUFDQTtFQUNFLG1DQUFtQztBQUNyQzs7RUFDQTtFQUNFLGVBQWU7QUFDakI7O0VBQ0E7RUFDRSxvQkFBb0I7QUFDdEI7O0VBQ0E7RUFDRSxXQUFXO0FBQ2I7O0VBR0E7QUFDQSxpQkFBaUI7QUFDakI7O0VBQ0E7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLHlCQUF5Qjs7QUFFM0I7O0VBQ0E7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsa0JBQWtCOzs7QUFHcEI7O0VBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztFQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjs7RUFFQTtFQUNFLGNBQWM7RUFDZDtBQUNGOztFQUNBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGNBQWM7SUFDZCxhQUFhO0lBQ2IsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsZ0JBQWdCOzs7SUFHaEIsNkJBQTZCO0lBQzdCLG1CQUFtQjs7RUFFckI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UseUJBQXlCOztJQUV6QixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLEtBQUs7O0VBRVA7RUFDQTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxjQUFjOztFQUVoQjtFQUNBO0VBQ0EsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBIiwiZmlsZSI6InNyYy9hcHAvYm9keS9ib2R5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmFib3V0LXNlY3Rpb24ge1xyXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XHJcblxyXG4gICAgcGFkZGluZy10b3A6IDEwcmVtO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzE2MTYxNiAsICM2NjY2NjYgKTtcclxuICB9XHJcbiAgXHJcbiAgLmFib3V0LXNlY3Rpb24gcCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuICAucGFyYWxsYXh7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNjY2NjY2O1xyXG4gIH1cclxuXHJcbiAgLnBhcnJfZGl2e1xyXG5cclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9iaWctY29kZS5qcGdcIik7XHJcblxyXG4gICAgLyogU2V0IGEgc3BlY2lmaWMgaGVpZ2h0ICovXHJcbiAgICAvKiBDcmVhdGUgdGhlIHBhcmFsbGF4IHNjcm9sbGluZyBlZmZlY3QgKi9cclxuICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICB9XHJcbi5uYXtcclxuICBkaXNwbGF5Om5vbmU7XHJcbn1cclxuLnByb2plY3RzLWhvdmVyOmhvdmVyICsubmF7XHJcbiAgZGlzcGxheTpibG9jaztcclxufVxyXG4gICAgXHJcbi5wcm9qZWN0cy1zZWN0aW9uIHtcclxuICBwYWRkaW5nOiA1cmVtIDA7XHJcbn1cclxuXHJcbi5wcm9qZWN0cy1zZWN0aW9uIC5mZWF0dXJlZC10ZXh0IHtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XHJcblxyXG59XHJcbi5hYm91dC10ZXh0e1xyXG4gIHBhZGRpbmctYm90dG9tOjJyZW07XHJcbiAgcGFkZGluZy10b3A6MC41cmVtO1xyXG5cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgLnByb2plY3RzLXNlY3Rpb24gLmZlYXR1cmVkLXRleHQge1xyXG4gICAgcGFkZGluZzogMCAwIDAgMnJlbTtcclxuICAgIGJvcmRlci1sZWZ0OiAwLjVyZW0gc29saWQgIzY2NjY2NjtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XHJcblxyXG4gIH1cclxufVxyXG5cclxuLm5hdi1waWxscyAubmF2LWxpbmsuYWN0aXZlLCAubmF2LXBpbGxzIC5zaG93Pi5uYXYtbGluayB7XHJcbiAgY29sb3I6ICMxNjE2MTY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGNDtcclxuICBib3JkZXItbGVmdDogMXJlbSBzb2xpZCAjMTExMTExO1xyXG5cclxufVxyXG4ubmF2LXBpbGxzIC5uYXYtbGluayB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogNTBweDtcclxuICBjb2xvcjogIzE2MTYxNjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuXHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblxyXG59XHJcbi5uYXYtcGlsbHMgLm5hdi1saW5rOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XHJcbn1cclxuXHJcbi50YWItaWNvbntcclxuZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5wYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG5tYXgtd2lkdGg6IDgwcHg7XHJcbmJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcbi50YWItZ3JvdXB7XHJcbiAgXHJcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuOGVtO1xyXG59XHJcbi50YWItaW5mb3tcclxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG4gICAgY29sb3I6ICMxMTE7XHJcbiAgICBmb250LXNpemU6IDEuMDdlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4udGFiLWNvbnRlbnQ+LmFjdGl2ZXtcclxuICBoZWlnaHQ6MTAwJTtcclxuXHJcbn1cclxuLnRhYi1jb250ZW50e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNEY0RjQ7XHJcblxyXG59XHJcbi5mYWRlOm5vdCguc2hvdykge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnRhYi1jb250ZW50LXRleHQge1xyXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XHJcblxyXG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIHRvcDoyMCU7XHJcblxyXG59XHJcbi5wLXRleHR7XHJcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcclxuXHJcbn1cclxuLmJ0bi10eHR7XHJcbiAgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHBhZGRpbmc6IDhweCAzOHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzExMTtcclxuICAgIGNvbG9yOiAjZWNlY2VjO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAyLjVweDtcclxuICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS44ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcclxuXHJcblxyXG5cclxufVxyXG4uYnRuLWN7XHJcbiAgYmFja2dyb3VuZDojZWNlY2VjO1xyXG4gIGNvbG9yOiMxMTE7XHJcbn1cclxuLmJ0bi1jOmhvdmVyOmhvdmVye1xyXG4gIG9wYWNpdHk6MC41O1xyXG5cclxuXHJcbn1cclxuLmRlc2MtaGVhZGluZ3tcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcclxuXHJcbn1cclxuLnRhYi1pbWFnZXtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgZmxvYXQ6cmlnaHQ7XHJcbiAgbGVmdDogMTAwJTtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzbGlkZSAxcyBmb3J3YXJkcztcclxuICBhbmltYXRpb246IHNsaWRlIDFzIGZvcndhcmRzO1xyXG5cclxufVxyXG5cclxuLnRhYi1jb250ZW50LWltYWdle1xyXG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICB0b3A6MTUlO1xyXG4gIFxyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZSB7XHJcbiAgMTAwJSB7IGxlZnQ6IDA7IH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzbGlkZSB7XHJcbiAgMTAwJSB7IGxlZnQ6IDA7IH1cclxufVxyXG4uaWNvbnMtcGFyYWxsYXh7XHJcbiAgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDIyLCAyMiwgMjIsIDAuMykgMCUsIHJnYmEoMjIsIDIyLCAyMiwgMC43KSA5MCUpLCB1cmwoXCIuLi8uLi9hc3NldHMvYmctcGhvdG8tc21hbGwuanBnXCIpO1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBcclxufVxyXG4uaWNvbi1jb250YWluZXJ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG4uaW5jb25zLXRleHR7XHJcbiAgcGFkZGluZy10b3A6MXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGNvbG9yOiAjRjRGNEY0O1xyXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XHJcblxyXG59XHJcblxyXG4uaWNvbntcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmaWx0ZXI6IGludmVydCgxMDAlKTtcclxuICBtYXJnaW46YXV0bztcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcbi5nZWFye1xyXG5cclxuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC44cyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiAgICAgICAgIHRyYW5zZm9ybSAuOHMgZWFzZS1pbi1vdXQ7XHJcblxyXG59XHJcbi5nZWFyOmhvdmVye1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7fVxyXG4uaWNvbnMtaGVhZGluZ3tcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGNvbG9yOiAjRjRGNEY0O1xyXG4gIG1hcmdpbjowIDAgMCAwO1xyXG5cclxufVxyXG4ubW91c2U6aG92ZXJ7IFxyXG4gIGFuaW1hdGlvbjogd2lnZ2xlIDFzIGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyOyAgIFxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHdpZ2dsZSB7XHJcbiAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMHB4LCAwKTsgfVxyXG4gIDI1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDEwcHgpOyB9XHJcbiAgNTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwcHgsIDApOyB9XHJcbiAgNzUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTEwcHgpOyB9XHJcbiAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwcHgsIDApOyB9XHJcbn1cclxuLmd5bXtcclxuICBtYXgtd2lkdGg6IDEwMHB4O1xyXG59XHJcblxyXG5cclxuXHJcbi5jb250YWN0LXNlY3Rpb24ge1xyXG4gIHBhZGRpbmc6IDVyZW0gMCAwO1xyXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XHJcblxyXG59XHJcblxyXG4uY29udGFjdC1zZWN0aW9uIC5jYXJkIHtcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMC4yNXJlbSBzb2xpZCAjNjY2NjY2O1xyXG59XHJcblxyXG4uY29udGFjdC1zZWN0aW9uIC5jYXJkIGg0IHtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTVyZW07XHJcbn1cclxuXHJcbi5jb250YWN0LXNlY3Rpb24gLmNhcmQgaHIge1xyXG4gIGJvcmRlci1jb2xvcjogIzY2NjY2NjtcclxuICBib3JkZXItd2lkdGg6IDAuMjVyZW07XHJcbiAgd2lkdGg6IDNyZW07XHJcbn1cclxuLmJnLWJsYWNrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTYxNjE2IWltcG9ydGFudDtcclxufVxyXG5mb290ZXIge1xyXG4gIHBhZGRpbmc6IDVyZW0gMDtcclxufVxyXG4uaGFsZntcclxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxufVxyXG4uZm9ybS1idG57XHJcbiAgZmxvYXQ6cmlnaHQ7XHJcbn1cclxuXHJcblxyXG4ubWVzc2FnZXtcclxubWF4LWhlaWdodDogMTE1cHg7XHJcbn1cclxuLnNpZ251cC1zZWN0aW9ue1xyXG4gIHBhZGRpbmctdG9wOiAzcmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XHJcblxyXG59XHJcbi5mb3JtLXRleHR7XHJcbiAgZm9udC1zaXplOiAuOGVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICBjb2xvcjogIzExMTtcclxuICBtYXJnaW4tYm90dG9tOjFyZW07XHJcblxyXG5cclxufVxyXG4uZm9ybWhlYWRpbmd7XHJcbiAgcGFkZGluZy1ib3R0b206MnJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmZvcm0tY29udHJvbDpmb2N1c3tcclxuICBib3JkZXItY29sb3I6ICM2NjY2NjY7XHJcbiAgYm94LXNoYWRvdzpub25lIDtcclxufSBcclxuXHJcbi5jdl9idXR0b257XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWF4LXdpZHRoOiAxMDAlIFxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCl7XHJcbiAgLm5hdi1waWxscyAubmF2LWxpbmsuYWN0aXZlLCAubmF2LXBpbGxzIC5zaG93Pi5uYXYtbGlua3tcclxuICAgIGJvcmRlci1sZWZ0OjByZW07XHJcbiAgfVxyXG4gIC5uYXYtcGlsbHMgLm5hdi1saW5rIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGNvbG9yOiAjMTYxNjE2O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIFxyXG4gIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIFxyXG4gIH1cclxuICAubmF2LXBpbGxzIC5uYXYtbGluazpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XHJcbiAgfVxyXG4gIC50YWItY29udGVudC10ZXh0IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XHJcbiAgXHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICB0b3A6MDtcclxuICBcclxuICB9XHJcbiAgLmRlc2MtaGVhZGluZywgLnByb2plY3RzLWhvdmVyICwgLm5hLCAudGFiLWNvbnRlbnQtaW1hZ2V7XHJcbiAgICBkaXNwbGF5Om5vbmU7XHJcbiAgfVxyXG4gIC5pY29uLWNvbnRhaW5lcntcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG5cclxuICAuaWNvbnMtaGVhZGluZ3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGNvbG9yOiAjRjRGNEY0O1xyXG4gICAgbWFyZ2luOjAgMCAwIDA7XHJcbiAgXHJcbiAgfVxyXG4gIC5mZWF0dXJlZC10ZXh0LXB7XHJcbiAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gIHBhZGRpbmctdG9wOjEwcHg7XHJcbn1cclxuLnNjcm9sbC1kb3duc3tcclxuICBib3R0b206IC0zMDBweDtcclxufVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/body/body.component.html":
/*!******************************************!*\
  !*** ./src/app/body/body.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"about\" class=\"about-section \">\r\n  <div class=\"container \">\r\n    <div class=\"row \">\r\n      <div class=\"col-lg-10 mx-auto text-center \">\r\n        <h2 class=\"text-white mb-4 text-center\">About me</h2>\r\n        <p class=\"text-white-50 text-left about-text  \"> I am a responsible, ambitious person and I have the capacity to absorb and assimilate new ideas fast. \r\n          In addition, I am a very punctual person and I approach tasks and situations in a mature way. \r\n          Besides, I am a team player, working well and comfortably with others, contributing to positive morale in the workplace. \r\n          I am accustomed to work in a busy environment and I am unflappable under pressure. \r\n          My practical experience and my personal characteristics such as flexibility, cooperation and dedication can contribute for you to have an excellent work with me.\r\n          For more about my background and past studies please have a look over my cv </p>\r\n          <button type=\"button\" class=\"btn btn-c btn-txt\" data-toggle=\"modal\" data-target=\"#myModal\">CV</button>\r\n\r\n        </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div id=\"myModal\" class=\"modal fade\"  role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n      <div class=\"modal-dialog\" style=\"max-width:794px;\"  >\r\n        <div class=\"modal-content\"  >\r\n           \r\n                <img src=\"../../assets/CV.jpg\" class=\"img-responsive cv_button\">\r\n          \r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n</section>\r\n<section id=\"about\" class=\"parallax\">\r\n  <div class=\"container\">\r\n    <div class=\"parr_div \">\r\n    <img class=\"img-fluid\" src=\"../../assets/laptop.png\" alt=\"\">\r\n  </div>\r\n  </div>\r\n</section>\r\n<section id=\"projects\" class=\"projects-section bg-light\">\r\n    <div class=\"container\">\r\n\r\n      <!-- Featured Project Row -->\r\n      <div class=\"row align-items-center no-gutters\">\r\n        <div class=\"col-xl-6 col-lg-6\">\r\n          <img class=\"img-fluid mb-3 mb-lg-0\" src=\"../../assets/profile.jpg\" alt=\"\">\r\n        </div>\r\n        <div class=\"col-xl-6 col-lg-6\">\r\n          <div class=\"featured-text text-center text-lg-left\">\r\n            <h4>Motivation</h4>\r\n            <p class=\"text-black-50 mb-0 featured-text-p\">It can be said that I am a perfectionist just by putting in extra hours when the need arises just to get my work properly done.\r\n               What is more, socially, I have an outgoing personality and I like to take part in different voluntary activities whenever I can.\r\n               With their help I am able to develop my communication skills by interacting with people when involved in different situations which required initiative and team spirit</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      </div>\r\n </section>\r\n <section class=\"icons-parallax\">\r\n    <div class=\"container \">\r\n        <p class=\"icons-heading\">Passions</p>\r\n\r\n\r\n      <div class=\"row justify-content-center\">\r\n          <div class=\"col-sm-3 col-lg-3 icon-container\" >\r\n            \r\n            <div class=\"icons-icon\">\r\n                <img src=\"../../assets/aperture-initial.png\" onmouseover=\"this.src='../../assets/aperture-final.png';\" onmouseout=\"this.src='../../assets/aperture-initial.png';\" class=\"icon aperture\">\r\n                <p class=\"incons-text \">PHOTOGRAPHY</p>\r\n              </div>\r\n\r\n          </div>\r\n          <div class=\"col-sm-3 col-lg-3 icon-container\" >\r\n              <div class=\"icons-icon\">\r\n                  <img src=\"../../assets/bench-initial.png\" onmouseover=\"this.src='../../assets/bench-final.png';\" onmouseout=\"this.src='../../assets/bench-initial.png';\" class=\"icon gym\">\r\n\r\n                  <p class=\"incons-text gymtext\">GYM</p>\r\n              </div>\r\n\r\n              </div>\r\n              <div class=\" col-lg-3 icon-container\" >\r\n                  <div class=\"icons-icon\">\r\n                    <img src=\"../../assets/mouse-icon.png\" class=\"icon mouse\">\r\n                  <p class=\"incons-text\">gaming</p>\r\n                </div>\r\n\r\n              </div>\r\n              <div class=\"col-sm-3 col-lg-3 icon-container\" >\r\n                  <div class=\"icons-icon\">\r\n                      <img src=\"../../assets/basic_gear.png\" class=\"icon gear\">\r\n                    <p class=\"incons-text\">developing</p>\r\n                  </div>\r\n  \r\n                </div>\r\n\r\n                \r\n      </div>\r\n    </div>\r\n    </section>\r\n <section id=\"vertical_tabs\" >\r\n   \r\n    <div class=\"row\" style=\"margin:0;\">\r\n      <div class=\"col-lg-4\" style=\"padding:0 0 0 0;\">\r\n      <div class=\"nav flex-column nav-pills\" id=\"v-pills-tab\" role=\"tablist\">\r\n        <a class=\"nav-link active\" id=\"v-pills-tab1-tab\" data-toggle=\"tab\" href=\"#v-pills-tab1\" role=\"tab\" aria-controls=\"v-pills-tab1\" aria-expanded=\"true\">\r\n            <img src=\"../../assets/frontend.png\" class=\"tab-icon\">\r\n          \r\n          <div class=\"tab-group\">\r\n              <span class=\"tab-info\">Front-End Skills </span>\r\n          </div>\r\n        </a>\r\n        <a class=\"nav-link\" id=\"v-pills-tab2-tab\" data-toggle=\"tab\" href=\"#v-pills-tab2\" role=\"tab\" aria-controls=\"v-pills-tab2\" aria-expanded=\"true\">    \r\n                 <img src=\"../../assets/backend.png\" class=\"tab-icon\">\r\n          \r\n          <div class=\"tab-group\">\r\n              <span class=\"tab-info\">Back-End Skills</span>\r\n          </div></a>\r\n        <a class=\"nav-link\" id=\"v-pills-tab3-tab\" data-toggle=\"tab\" href=\"#v-pills-tab3\" role=\"tab\" aria-controls=\"v-pills-tab3\" aria-expanded=\"true\">  \r\n                   <img src=\"../../assets/database-512.png\" class=\"tab-icon\">\r\n          \r\n          <div class=\"tab-group\">\r\n              <span class=\"tab-info\">Database Skills</span>\r\n          </div></a>\r\n      </div>\r\n      </div>\r\n      <div class=\"col-lg-8 tab-content \" id=\"v-pills-tabContent\">\r\n        <div class=\"tab-panel fade show  active\" id=\"v-pills-tab1\" role=\"tabpanel\" aria-labelledby=\"v-pills-home-tab\">\r\n            <div class=\"col-md-8 tab-content-text\">\r\n                <h4 class=\"desc-heading\">FRONT-END</h4>\r\n                <p class=\"p-text\">I could say that out of all three layers of web development, the front end part is the one i am most familiar with. Most projects i have worked on \r\n                  had to be developed in HTML mainly because that is the first thing that i had to learn toghether with CSS. I am also familiar with various CSS frameworks such as Bootstrap and TailWind.\r\n                  Another skillset concerning Front-End development are JavaScript frameworks. Out of all the frameworks i am most skilled in Angular, but I have also taken a course in Vue and React so i can \r\n                  definetly say that i am aware of their characteristics and i can make a decision of which one to use depending on the requirements needed. \r\n                </p>\r\n                <button class=\"btn-txt projects-hover\">See projects</button> \r\n                <h4 class=\"desc-heading na\">Under Development</h4> \r\n              </div>\r\n              <div class=\"col-md-4 tab-content-image\">\r\n                  <img src=\"../../assets/frontend-big.png\" alt=\"Tab Image\" class=\"tab-image\"  >\r\n                </div>\r\n        </div>\r\n        <div class=\"tab-panel fade\" id=\"v-pills-tab2\" role=\"tabpanel\" aria-labelledby=\"v-pills-tab2-tab\">\r\n          <div class=\"col-md-8 tab-content-text\">\r\n            <h4 class=\"desc-heading\">BACK-END</h4>\r\n            <p>Concerning back-end, ASP.NET is the platform i have worked with before. I have worked with MVC in order to have a clean and easy way to manage all the data and i have \r\n              also worked with plain Web API app with no templates in order to learn more about manipulating the data coming from the APIs and creating the controllers with the help of Entity Framework.</p>\r\n          </div>\r\n          <div class=\"col-md-4 tab-content-image\">\r\n              <img src=\"../../assets/backend-big.png\" alt=\"Tab Image\" class=\"tab-image wow fadeInRight\" data-wow-duration=\".8s\" >\r\n            </div>\r\n        </div>\r\n        <div class=\"tab-panel fade\" id=\"v-pills-tab3\" role=\"tabpanel\" aria-labelledby=\"v-pills-tab3-tab\">\r\n          <div class=\"col-md-8 tab-content-text\">\r\n            <h4 class=\"desc-heading\">DATABASES</h4>\r\n            <p>Out of the two types of databases i am mare skilled in SQL after having to work with SQL  databases for most of my College projects. That is mainly because we did not need to have a  large database\r\n              so SQL did just fine. But in the case of a No-SQL database i have the basic knowledge about most of its types including MongoDB, Node and of course, Firebase being the one i am used to.\r\n            </p>\r\n          </div>\r\n          <div class=\"col-md-4 tab-content-image\">\r\n              <img src=\"../../assets/DATABASE-BIG.png\" alt=\"Tab Image\" class=\"tab-image wow fadeInRight\" data-wow-duration=\".8s\" >\r\n            </div>\r\n        </div>\r\n      </div>\r\n  </div>\r\n</section>\r\n<section id=\"contact-s\" class=\"signup-section\">\r\n    \r\n  <div class=\"container \">\r\n      <div class=\"row justify-content-center\">\r\n          <h4 class=\"form-btn formheading\">GET IN TOUCH WITH ME</h4>\r\n\r\n      </div>\r\n        <div class=\"row justify-content-center\">\r\n          \r\n            <div class=\"media-container-column col-lg-10\" data-form-type=\"formoid\">\r\n                    <form class=\"gform\" action=\"https://script.google.com/macros/s/AKfycbx6IEVffOeMisjDJqNaHxghu_j0jZrtk6OFc-nSumA9uib0XDYg/exec\" method=\"POST\" data-email=\"florinmihalcea96@gmail.com\" >\r\n                        <div class=\"col-lg-6 half\">\r\n                            <div class=\" col-lg-12 multi-horizontal\" data-for=\"name\">\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"text\" class=\"form-control\" name=\"name\" data-form-field=\"Name\" required=\"\" id=\"name-form1-2w\">\r\n                                    <label class=\"form-control-label  form-text display-7\" for=\"name-form1-2w\">Name</label>\r\n\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-lg-12 multi-horizontal\" data-for=\"email\">\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"email\" class=\"form-control\" name=\"email\" data-form-field=\"Email\" required=\"\" id=\"email-form1-2w\">\r\n                                    <label class=\"form-control-label  form-text display-7\" for=\"email-form1-2w\">Email</label>\r\n\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n                        <div class=\" col-lg-6 half form-group\" data-for=\"message\">\r\n                            <textarea type=\"text\" class=\"form-control message\" name=\"message\" rows=\"7\" data-form-field=\"Message\" id=\"message-form1-2w\"></textarea>\r\n                                                        <label class=\"form-control-label  form-text  display-7\" for=\"message-form1-2w\">Message</label>\r\n                                                        <span class=\"input-group-btn\">\r\n                                                            <button class=\"btn-txt form-btn\">SEND MESSAGE</button>  \r\n                                                          </span>\r\n                        </div>\r\n                        <div class=\"thankyou_message \" style=\"display:none\">\r\n                          <h4 class=\"formheading\">Thanks for contacting me!\r\n                            I will get back to you soon!</h4>\r\n                        </div>\r\n                    </form>\r\n\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</section>\r\n  <!-- Contact Section -->\r\n  <section class=\"contact-section bg-black\">\r\n      <div class=\"container\">\r\n  \r\n        <div class=\"row\">\r\n  \r\n          <div class=\"col-md-4 mb-3 mb-md-0\">\r\n            <div class=\"card py-4 h-100\">\r\n              <div class=\"card-body text-center\">\r\n                <i class=\"fas fa-map-marked-alt text-primary mb-2\"></i>\r\n                <h4 class=\"text-uppercase m-0\">Address</h4>\r\n                <hr class=\"my-4\">\r\n                <div class=\"small text-black-50\">Badehusvej 14, 9</div>\r\n                <div class=\"small text-black-50\">Aalborg, Denmark</div>\r\n\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n  \r\n          <div class=\"col-md-4 mb-3 mb-md-0\">\r\n            <div class=\"card py-4 h-100\">\r\n              <div class=\"card-body text-center\">\r\n                <i class=\"fas fa-envelope text-primary mb-2\"></i>\r\n                <h4 class=\"text-uppercase m-0\">Email</h4>\r\n                <hr class=\"my-4\">\r\n                <div class=\"small text-black-50\">\r\n                  <a href=\"#\">florinmihalcea96@gmail.com</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n  \r\n          <div class=\"col-md-4 mb-3 mb-md-0\">\r\n            <div class=\"card py-4 h-100\">\r\n              <div class=\"card-body text-center\">\r\n                <i class=\"fas fa-mobile-alt text-primary mb-2\"></i>\r\n                <h4 class=\"text-uppercase m-0\">Phone</h4>\r\n                <hr class=\"my-4\">\r\n                <div class=\"small text-black-50\">+45 52828460</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n  \r\n"

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

module.exports = "<footer class=\"bg-black small text-center text-white-50\">\r\n    <div class=\"container\">\r\n      Developed with <s>Angular</s> Love\r\n    </div>\r\n  </footer>\r\n"

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

module.exports = "\r\n#mainNav {\r\n  max-height: 50px;\r\n  background-color: white;\r\n}\r\n\r\n\r\n#mainNav .navbar-toggler {\r\n  font-size: 80%;\r\n  padding: 0.75rem;\r\n  border: 1px solid;\r\n}\r\n\r\n\r\n#mainNav .navbar-toggler:focus {\r\n  outline: none;\r\n}\r\n\r\n\r\n#mainNav .navbar-brand .nav-logo {\r\n  max-width: 150px;\r\n\r\n}\r\n\r\n\r\n#mainNav .navbar-nav .nav-item:hover {\r\n  color: fade(white, 80%);\r\n  outline: none;\r\n  background-color: transparent;\r\n}\r\n\r\n\r\n#mainNav .navbar-nav .nav-item:active, #mainNav .navbar-nav .nav-item:focus {\r\n  outline: none;\r\n  background-color: black;\r\n}\r\n\r\n\r\n@media (min-width: 992px) {\r\n  #mainNav {\r\n    padding-top: 0;\r\n    padding-bottom: 0;\r\n    border-bottom: none;\r\n    transition: background-color 0.3s ease-in-out;\r\n    background-color: transparent;\r\n  }\r\n  #mainNav.navbar-shrink .navbar-brand {\r\n    -webkit-filter: invert(100%);\r\n            filter: invert(100%);\r\n  }\r\n  #mainNav .navbar-brand {\r\n    max-width: 150px;\r\n  }\r\n  #mainNav .nav-link {\r\n    transition: none;\r\n    padding: 2rem 1.5rem;\r\n    font-family: 'Montserrat';\r\n\r\n    color: rgba(255, 255, 255, 0.5);\r\n  }\r\n  #mainNav .nav-link:hover {\r\n    color: rgba(255, 255, 255, 0.75);\r\n  }\r\n  #mainNav .nav-link:active {\r\n    color: white;\r\n  }\r\n  #mainNav.navbar-shrink {\r\n    background-color: white;\r\n    max-height: 50px;\r\n  }\r\n\r\n  #mainNav.navbar-shrink .nav-link {\r\n    color: #161616;\r\n    padding: 1.5rem 1.5rem 1.25rem;\r\n    border-bottom: 0.25rem solid transparent;\r\n  }\r\n  #mainNav.navbar-shrink .nav-link:hover {\r\n    color: #64a19d;\r\n  }\r\n  #mainNav.navbar-shrink .nav-link:active {\r\n    color: #467370;\r\n  }\r\n  #mainNav.navbar-shrink .nav-link.active {\r\n    color: #64a19d;\r\n    outline: none;\r\n    border-bottom: 0.25rem solid #64a19d;\r\n  }\r\n}\r\n\r\n\r\n.masthead {\r\n  width: 100%;\r\n  height: auto;\r\n  min-height: 35rem;\r\n  padding: 15rem 0;\r\n\r\n  background: linear-gradient(to bottom, rgba(22, 22, 22, 0.3) 0%, rgba(22, 22, 22, 0.7) 90%, #161616 100%), url('bg-photo-small.jpg');\r\n  ;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-attachment: scroll;\r\n  background-size: cover;\r\n}\r\n\r\n\r\n.masthead h1 {\r\n  font-family: 'Montserrat';\r\n  color: #fff;\r\n  text-align: center;  \r\n}\r\n\r\n\r\n.masthead h2 {\r\n  max-width: 20rem;\r\n  font-size: 1rem;\r\n}\r\n\r\n\r\n@media (min-width: 768px) {\r\n  .masthead h1 {\r\n    font-size: 4rem;\r\n    line-height: 4rem;\r\n  }\r\n}\r\n\r\n\r\n@media (min-width: 992px) {\r\n  .masthead {\r\n    height: 100vh;\r\n    padding: 0;\r\n  }\r\n  .masthead h1 {\r\n    font-size: 3.99rem;\r\n    line-height: 6.5rem;\r\n    letter-spacing: 0.5rem;\r\n  }\r\n  .masthead h2 {\r\n    max-width: 30rem;\r\n    font-size: 1.25rem;\r\n    font-family: 'Montserrat';\r\n\r\n  }\r\n}\r\n\r\n\r\n.scroll-downs {\r\n  margin: auto;\r\n  width :34px;\r\n  height: 55px;\r\n  position: absolute;\r\n  \r\n  bottom:1rem;\r\n  left: calc(50% - 19px);\r\n  \r\n}\r\n\r\n\r\n.scroll-downs:hover ~.headings-container{\r\n  visibility: visible;\r\n  opacity: 1;\r\n  font-family: 'Montserrat';\r\n}\r\n\r\n\r\n.headings-container{\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  transition: visibility 0s, opacity 0.5s linear;\r\n  bottom:2rem;\r\n  position:absolute;\r\n  left: calc(50% - 55px);\r\n  width:110px;\r\n  }\r\n\r\n\r\n.mousey {\r\n  width: 3px;\r\n  padding: 10px 15px;\r\n  height: 35px;\r\n  border: 2px solid #fff;\r\n  border-radius: 25px;\r\n  opacity: 0.75;\r\n  box-sizing: content-box;\r\n}\r\n\r\n\r\n.scroller {\r\n  width: 3px;\r\n  height: 10px;\r\n  border-radius: 25%;\r\n  background-color: #fff;\r\n  -webkit-animation-name: scroll;\r\n          animation-name: scroll;\r\n  -webkit-animation-duration: 2.2s;\r\n          animation-duration: 2.2s;\r\n  -webkit-animation-timing-function: cubic-bezier(.15,.41,.69,.94);\r\n          animation-timing-function: cubic-bezier(.15,.41,.69,.94);\r\n  -webkit-animation-iteration-count: infinite;\r\n          animation-iteration-count: infinite;\r\n}\r\n\r\n\r\n@-webkit-keyframes scroll {\r\n  0% { opacity: 0; }\r\n  10% { -webkit-transform: translateY(0); transform: translateY(0); opacity: 1; }\r\n  100% { -webkit-transform: translateY(15px); transform: translateY(15px); opacity: 0;}\r\n}\r\n\r\n\r\n@keyframes scroll {\r\n  0% { opacity: 0; }\r\n  10% { -webkit-transform: translateY(0); transform: translateY(0); opacity: 1; }\r\n  100% { -webkit-transform: translateY(15px); transform: translateY(15px); opacity: 0;}\r\n}\r\n\r\n\r\n.btn-txt{\r\n  font-family: 'Montserrat';\r\n\r\n  position: relative;\r\n  padding: 8px 38px;\r\n  background: #fff;\r\n  color: #161616;\r\n  text-transform: uppercase;\r\n  letter-spacing: 2.5px;\r\n  font-size: 0.9em;\r\n  line-height: 1.8em;\r\n  border-radius: 0;\r\n  transition: all 0.5s;\r\n  margin-bottom: 0;\r\n  font-weight: normal;\r\n  vertical-align: middle;\r\n  touch-action: manipulation;\r\n  white-space: nowrap;\r\n  cursor: pointer;\r\n\r\n\r\n}\r\n\r\n\r\n.btn-txt:hover{\r\n  opacity:0.5;\r\n}\r\n\r\n\r\n@media (max-width: 700px){\r\n#mainNav{\r\n  background-color: transparent;\r\n  padding-top: 0.2rem;\r\n}\r\n.navbar-toggler{\r\n  color:white;\r\n}\r\n#navbarResponsive {\r\nbackground-color: #fff;\r\ntext-align: center;\r\n\r\n  }\r\n  .scroll-downs{\r\n    bottom: -300px;\r\n  }\r\n  #mainNav.navbar-shrink {\r\n    background-color: white;\r\n    max-height: 50px;\r\n    \r\n  }\r\n  #mainNav.navbar-shrink .navbar-toggler {\r\n    color: black; \r\n    \r\n  }\r\n  #mainNav.navbar-shrink .navbar-brand {\r\n    -webkit-filter: invert(100%);\r\n            filter: invert(100%);\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7OztBQUdBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7OztBQUVBO0VBQ0UsYUFBYTtBQUNmOzs7QUFFQTtFQUNFLGdCQUFnQjs7QUFFbEI7OztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7OztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7O0FBR0E7RUFDRTtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsbUJBQW1CO0lBRW5CLDZDQUE2QztJQUM3Qyw2QkFBNkI7RUFDL0I7RUFDQTtJQUNFLDRCQUFvQjtZQUFwQixvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBRUUsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQix5QkFBeUI7O0lBRXpCLCtCQUErQjtFQUNqQztFQUNBO0lBQ0UsZ0NBQWdDO0VBQ2xDO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLHVCQUF1QjtJQUN2QixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsOEJBQThCO0lBQzlCLHdDQUF3QztFQUMxQztFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsY0FBYztJQUNkLGFBQWE7SUFDYixvQ0FBb0M7RUFDdEM7QUFDRjs7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0I7O0VBRWhCLG9JQUErSTs7RUFFL0ksMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0Isc0JBQXNCO0FBQ3hCOzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOzs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtFQUNuQjtBQUNGOzs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLFVBQVU7RUFDWjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIseUJBQXlCOztFQUUzQjtBQUNGOzs7QUFLQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjs7RUFFbEIsV0FBVztFQUNYLHNCQUFzQjs7QUFFeEI7OztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVix5QkFBeUI7QUFDM0I7OztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDViw4Q0FBOEM7RUFDOUMsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYOzs7QUFDRjtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsOEJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixnQ0FBd0I7VUFBeEIsd0JBQXdCO0VBQ3hCLGdFQUF3RDtVQUF4RCx3REFBd0Q7RUFDeEQsMkNBQW1DO1VBQW5DLG1DQUFtQztBQUNyQzs7O0FBQ0E7RUFDRSxLQUFLLFVBQVUsRUFBRTtFQUNqQixNQUFNLGdDQUF3QixFQUF4Qix3QkFBd0IsRUFBRSxVQUFVLEVBQUU7RUFDNUMsT0FBTyxtQ0FBMkIsRUFBM0IsMkJBQTJCLEVBQUUsVUFBVSxDQUFDO0FBQ2pEOzs7QUFKQTtFQUNFLEtBQUssVUFBVSxFQUFFO0VBQ2pCLE1BQU0sZ0NBQXdCLEVBQXhCLHdCQUF3QixFQUFFLFVBQVUsRUFBRTtFQUM1QyxPQUFPLG1DQUEyQixFQUEzQiwyQkFBMkIsRUFBRSxVQUFVLENBQUM7QUFDakQ7OztBQUNBO0VBQ0UseUJBQXlCOztFQUV6QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUVoQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixlQUFlOzs7QUFHakI7OztBQUNBO0VBQ0UsV0FBVztBQUNiOzs7QUFFQTtBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsa0JBQWtCOztFQUVoQjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGdCQUFnQjs7RUFFbEI7RUFDQTtJQUNFLFlBQVk7O0VBRWQ7RUFDQTtJQUNFLDRCQUFvQjtZQUFwQixvQkFBb0I7RUFDdEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4jbWFpbk5hdiB7XHJcbiAgbWF4LWhlaWdodDogNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcbiNtYWluTmF2IC5uYXZiYXItdG9nZ2xlciB7XHJcbiAgZm9udC1zaXplOiA4MCU7XHJcbiAgcGFkZGluZzogMC43NXJlbTtcclxuICBib3JkZXI6IDFweCBzb2xpZDtcclxufVxyXG5cclxuI21haW5OYXYgLm5hdmJhci10b2dnbGVyOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4jbWFpbk5hdiAubmF2YmFyLWJyYW5kIC5uYXYtbG9nbyB7XHJcbiAgbWF4LXdpZHRoOiAxNTBweDtcclxuXHJcbn1cclxuXHJcbiNtYWluTmF2IC5uYXZiYXItbmF2IC5uYXYtaXRlbTpob3ZlciB7XHJcbiAgY29sb3I6IGZhZGUod2hpdGUsIDgwJSk7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuI21haW5OYXYgLm5hdmJhci1uYXYgLm5hdi1pdGVtOmFjdGl2ZSwgI21haW5OYXYgLm5hdmJhci1uYXYgLm5hdi1pdGVtOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgI21haW5OYXYge1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICAjbWFpbk5hdi5uYXZiYXItc2hyaW5rIC5uYXZiYXItYnJhbmQge1xyXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSk7XHJcbiAgfVxyXG4gICNtYWluTmF2IC5uYXZiYXItYnJhbmQge1xyXG4gICAgbWF4LXdpZHRoOiAxNTBweDtcclxuICB9XHJcbiAgI21haW5OYXYgLm5hdi1saW5rIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAycmVtIDEuNXJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XHJcblxyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICB9XHJcbiAgI21haW5OYXYgLm5hdi1saW5rOmhvdmVyIHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xyXG4gIH1cclxuICAjbWFpbk5hdiAubmF2LWxpbms6YWN0aXZlIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgI21haW5OYXYubmF2YmFyLXNocmluayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIG1heC1oZWlnaHQ6IDUwcHg7XHJcbiAgfVxyXG5cclxuICAjbWFpbk5hdi5uYXZiYXItc2hyaW5rIC5uYXYtbGluayB7XHJcbiAgICBjb2xvcjogIzE2MTYxNjtcclxuICAgIHBhZGRpbmc6IDEuNXJlbSAxLjVyZW0gMS4yNXJlbTtcclxuICAgIGJvcmRlci1ib3R0b206IDAuMjVyZW0gc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gICNtYWluTmF2Lm5hdmJhci1zaHJpbmsgLm5hdi1saW5rOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjNjRhMTlkO1xyXG4gIH1cclxuICAjbWFpbk5hdi5uYXZiYXItc2hyaW5rIC5uYXYtbGluazphY3RpdmUge1xyXG4gICAgY29sb3I6ICM0NjczNzA7XHJcbiAgfVxyXG4gICNtYWluTmF2Lm5hdmJhci1zaHJpbmsgLm5hdi1saW5rLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogIzY0YTE5ZDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAwLjI1cmVtIHNvbGlkICM2NGExOWQ7XHJcbiAgfVxyXG59XHJcblxyXG4ubWFzdGhlYWQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtaW4taGVpZ2h0OiAzNXJlbTtcclxuICBwYWRkaW5nOiAxNXJlbSAwO1xyXG5cclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDIyLCAyMiwgMjIsIDAuMykgMCUsIHJnYmEoMjIsIDIyLCAyMiwgMC43KSA5MCUsICMxNjE2MTYgMTAwJSksIHVybCguLi8uLi9hc3NldHMvYmctcGhvdG8tc21hbGwuanBnKTtcclxuICA7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBzY3JvbGw7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLm1hc3RoZWFkIGgxIHtcclxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgIFxyXG59XHJcblxyXG4ubWFzdGhlYWQgaDIge1xyXG4gIG1heC13aWR0aDogMjByZW07XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAubWFzdGhlYWQgaDEge1xyXG4gICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDRyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAubWFzdGhlYWQge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIC5tYXN0aGVhZCBoMSB7XHJcbiAgICBmb250LXNpemU6IDMuOTlyZW07XHJcbiAgICBsaW5lLWhlaWdodDogNi41cmVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXJlbTtcclxuICB9XHJcbiAgLm1hc3RoZWFkIGgyIHtcclxuICAgIG1heC13aWR0aDogMzByZW07XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG5cclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5zY3JvbGwtZG93bnMge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aCA6MzRweDtcclxuICBoZWlnaHQ6IDU1cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIFxyXG4gIGJvdHRvbToxcmVtO1xyXG4gIGxlZnQ6IGNhbGMoNTAlIC0gMTlweCk7XHJcbiAgXHJcbn1cclxuLnNjcm9sbC1kb3duczpob3ZlciB+LmhlYWRpbmdzLWNvbnRhaW5lcntcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcclxufVxyXG4uaGVhZGluZ3MtY29udGFpbmVye1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMsIG9wYWNpdHkgMC41cyBsaW5lYXI7XHJcbiAgYm90dG9tOjJyZW07XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgbGVmdDogY2FsYyg1MCUgLSA1NXB4KTtcclxuICB3aWR0aDoxMTBweDtcclxuICB9XHJcbi5tb3VzZXkge1xyXG4gIHdpZHRoOiAzcHg7XHJcbiAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gIGhlaWdodDogMzVweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgb3BhY2l0eTogMC43NTtcclxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxufVxyXG4uc2Nyb2xsZXIge1xyXG4gIHdpZHRoOiAzcHg7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBzY3JvbGw7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyLjJzO1xyXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllciguMTUsLjQxLC42OSwuOTQpO1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG59XHJcbkBrZXlmcmFtZXMgc2Nyb2xsIHtcclxuICAwJSB7IG9wYWNpdHk6IDA7IH1cclxuICAxMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IG9wYWNpdHk6IDE7IH1cclxuICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE1cHgpOyBvcGFjaXR5OiAwO31cclxufVxyXG4uYnRuLXR4dHtcclxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG5cclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogOHB4IDM4cHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBjb2xvcjogIzE2MTYxNjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAyLjVweDtcclxuICBmb250LXNpemU6IDAuOWVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjhlbTtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG5cclxufVxyXG4uYnRuLXR4dDpob3ZlcntcclxuICBvcGFjaXR5OjAuNTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KXtcclxuI21haW5OYXZ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgcGFkZGluZy10b3A6IDAuMnJlbTtcclxufVxyXG4ubmF2YmFyLXRvZ2dsZXJ7XHJcbiAgY29sb3I6d2hpdGU7XHJcbn1cclxuI25hdmJhclJlc3BvbnNpdmUge1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIH1cclxuICAuc2Nyb2xsLWRvd25ze1xyXG4gICAgYm90dG9tOiAtMzAwcHg7XHJcbiAgfVxyXG4gICNtYWluTmF2Lm5hdmJhci1zaHJpbmsge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBtYXgtaGVpZ2h0OiA1MHB4O1xyXG4gICAgXHJcbiAgfVxyXG4gICNtYWluTmF2Lm5hdmJhci1zaHJpbmsgLm5hdmJhci10b2dnbGVyIHtcclxuICAgIGNvbG9yOiBibGFjazsgXHJcbiAgICBcclxuICB9XHJcbiAgI21haW5OYXYubmF2YmFyLXNocmluayAubmF2YmFyLWJyYW5kIHtcclxuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpO1xyXG4gIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light fixed-top\" id=\"mainNav\">\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand js-scroll-trigger\" href=\"#\"><img class=\"nav-logo\"src=\"../../assets/Logo-white.png\"></a>\r\n      <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        Menu\r\n      </button>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\r\n        <ul class=\"navbar-nav ml-auto\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link js-scroll-trigger\" href=\"#about\">About</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link js-scroll-trigger\" href=\"\">Projects</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link js-scroll-trigger\" href=\"#contact-s\">Contact</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n\r\n  <!-- Header -->\r\n  <header class=\"masthead\">\r\n    <div class=\"container d-flex h-100 align-items-center position-relative\">\r\n      <div class=\"mx-auto text-center\">\r\n        <h1 class=\" text-uppercase\">Junior Web Developer</h1>\r\n        <h2 class=\"text-white-50 mx-auto mt-2 mb-5\">Front-End Back-End Full-Stack</h2>\r\n        <a href=\"#about\" class=\"btn-txt btn js-scroll-trigger\">Find out more</a>\r\n      </div>\r\n\r\n\r\n      <div class=\"scroll-downs\">\r\n        <div  class=\"mousey\">\r\n          <div class=\"scroller\"></div>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"mx-auto text-center headings-container\">\r\n\r\n          <h2 class=\"text-white-50 mx-auto mt-2 mb-5 scrolltext\"> Scroll Down </h2>\r\n          </div>\r\n    </div>\r\n\r\n  </header>"

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

module.exports = __webpack_require__(/*! D:\Projects\Portfolio-DEV\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map