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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-search-form></app-search-form>\n<app-result-container></app-result-container>"

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
        this.title = 'app';
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _search_form_search_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-form/search-form.component */ "./src/app/search-form/search-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _geolocation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./geolocation.service */ "./src/app/geolocation.service.ts");
/* harmony import */ var _search_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search.service */ "./src/app/search.service.ts");
/* harmony import */ var _result_table_result_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./result-table/result-table.component */ "./src/app/result-table/result-table.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _details_info_tab_info_tab_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./details/info-tab/info-tab.component */ "./src/app/details/info-tab/info-tab.component.ts");
/* harmony import */ var _details_photos_tab_photos_tab_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./details/photos-tab/photos-tab.component */ "./src/app/details/photos-tab/photos-tab.component.ts");
/* harmony import */ var _details_reviews_tab_reviews_tab_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./details/reviews-tab/reviews-tab.component */ "./src/app/details/reviews-tab/reviews-tab.component.ts");
/* harmony import */ var _details_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./details.service */ "./src/app/details.service.ts");
/* harmony import */ var _window_ref_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./window-ref.service */ "./src/app/window-ref.service.ts");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./loader/loader.component */ "./src/app/loader/loader.component.ts");
/* harmony import */ var _loader_loader_interceptor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./loader/loader.interceptor */ "./src/app/loader/loader.interceptor.ts");
/* harmony import */ var _loader_loader_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./loader/loader.service */ "./src/app/loader/loader.service.ts");
/* harmony import */ var _result_container_result_container_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./result-container/result-container.component */ "./src/app/result-container/result-container.component.ts");
/* harmony import */ var _favorite_favorite_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./favorite/favorite.component */ "./src/app/favorite/favorite.component.ts");
/* harmony import */ var _favorite_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./favorite.service */ "./src/app/favorite.service.ts");
/* harmony import */ var _whitespace_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./whitespace.directive */ "./src/app/whitespace.directive.ts");
/* harmony import */ var _details_seller_tab_seller_tab_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./details/seller-tab/seller-tab.component */ "./src/app/details/seller-tab/seller-tab.component.ts");
/* harmony import */ var _details_shipping_tab_shipping_tab_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./details/shipping-tab/shipping-tab.component */ "./src/app/details/shipping-tab/shipping-tab.component.ts");
/* harmony import */ var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! angular-svg-round-progressbar */ "./node_modules/angular-svg-round-progressbar/dist/index.js");
/* harmony import */ var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ngx_facebook__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-facebook */ "./node_modules/ngx-facebook/dist/esm/index.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';






// import { AgmCoreModule } from '@agm/core';











//import { BrowserAnimationsModule } from "@angular/platform-browser/animations";







 // <-- import the module



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _search_form_search_form_component__WEBPACK_IMPORTED_MODULE_4__["SearchFormComponent"],
                _result_table_result_table_component__WEBPACK_IMPORTED_MODULE_9__["ResultTableComponent"],
                _details_details_component__WEBPACK_IMPORTED_MODULE_10__["DetailsComponent"],
                _details_info_tab_info_tab_component__WEBPACK_IMPORTED_MODULE_11__["InfoTabComponent"],
                _details_photos_tab_photos_tab_component__WEBPACK_IMPORTED_MODULE_12__["PhotosTabComponent"],
                _details_reviews_tab_reviews_tab_component__WEBPACK_IMPORTED_MODULE_13__["ReviewsTabComponent"],
                _loader_loader_component__WEBPACK_IMPORTED_MODULE_16__["LoaderComponent"],
                _result_container_result_container_component__WEBPACK_IMPORTED_MODULE_19__["ResultContainerComponent"],
                _favorite_favorite_component__WEBPACK_IMPORTED_MODULE_20__["FavoriteComponent"],
                _whitespace_directive__WEBPACK_IMPORTED_MODULE_22__["WhitespaceDirective"],
                _details_seller_tab_seller_tab_component__WEBPACK_IMPORTED_MODULE_23__["SellerTabComponent"],
                _details_shipping_tab_shipping_tab_component__WEBPACK_IMPORTED_MODULE_24__["ShippingTabComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_25__["RoundProgressModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__["MatTooltipModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_28__["NgxPaginationModule"],
                ngx_facebook__WEBPACK_IMPORTED_MODULE_29__["FacebookModule"].forRoot(),
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_30__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_31__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_31__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_31__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_31__["MatRippleModule"]
            ],
            entryComponents: [
                _details_info_tab_info_tab_component__WEBPACK_IMPORTED_MODULE_11__["InfoTabComponent"],
                _details_photos_tab_photos_tab_component__WEBPACK_IMPORTED_MODULE_12__["PhotosTabComponent"],
                _details_reviews_tab_reviews_tab_component__WEBPACK_IMPORTED_MODULE_13__["ReviewsTabComponent"]
            ],
            providers: [
                _geolocation_service__WEBPACK_IMPORTED_MODULE_7__["GeolocationService"],
                _search_service__WEBPACK_IMPORTED_MODULE_8__["SearchService"],
                _details_service__WEBPACK_IMPORTED_MODULE_14__["DetailsService"],
                _window_ref_service__WEBPACK_IMPORTED_MODULE_15__["WindowRefService"],
                _loader_loader_service__WEBPACK_IMPORTED_MODULE_18__["LoaderService"],
                _favorite_service__WEBPACK_IMPORTED_MODULE_21__["FavoriteService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                    useClass: _loader_loader_interceptor__WEBPACK_IMPORTED_MODULE_17__["LoaderInterceptor"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/details.service.ts":
/*!************************************!*\
  !*** ./src/app/details.service.ts ***!
  \************************************/
/*! exports provided: DetailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsService", function() { return DetailsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ "Content-Type": "application/json" })
};
var DetailsService = /** @class */ (function () {
    function DetailsService(http) {
        this.http = http;
        this._details = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.details = this._details.asObservable();
        this._index = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.index = this._index.asObservable();
        this._photoInfo = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.photoInfo = this._photoInfo.asObservable();
        this._similar = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.similar = this._similar.asObservable();
        this._slide = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.slide = this._slide.asObservable();
    }
    ;
    DetailsService.prototype.getDetails = function (place_id, index) {
        var _this = this;
        //console.log(index);
        this._index.next(index);
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set("title", place_id);
        // let response = this.http.get("http://localhost:3000/api/detail_info", { params: httpParams });
        var response = this.http.get("/api/detail_info", { params: httpParams });
        //console.log(response);
        response.subscribe(function (data) {
            _this._details.next(data);
            _this.detailJson = data;
            // console.log(data);
        });
        var response2 = this.http.get("/api/similar", { params: httpParams });
        // let response2 = this.http.get("http://localhost:3000/api/similar", { params: httpParams });
        response2.subscribe(function (data) {
            _this._similar.next(data);
            // console.log(data);
        });
    };
    DetailsService.prototype.getPhotoInfo = function (title) {
        var _this = this;
        //console.log(title);
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set("title", title);
        var response = this.http.get("/api/photo_info", { params: httpParams });
        // let response = this.http.get("http://localhost:3000/api/photo_info", { params: httpParams });
        response.subscribe(function (data) {
            _this._photoInfo.next(data);
            // console.log(data);
        });
    };
    DetailsService.prototype.setDetails = function (place_id) {
        // this.getDetails(place_id);
        // let tmpJson = this.response1;
        // this._details.next(tmpJson);
        // this.detailJson = tmpJson;
    };
    DetailsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], DetailsService);
    return DetailsService;
}());



/***/ }),

/***/ "./src/app/details/details.component.css":
/*!***********************************************!*\
  !*** ./src/app/details/details.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* #nav-tabs.nav-item.nav-link:not(.active) {\n  background-color: rgba(20, 235, 85, 0.5);\n}\n\n#nav-tabs.nav-item.nav-link {\n  background-color: rgba(255, 0, 0, 0.2);\n  color: white;\n} */\n\n#details {\n  -webkit-overflow-scrolling: touch;\n}\n\n.nav-pills .nav-link.active, .nav-pills .nav-link.active:hover,.nav-pills .nav-link.active:focus{\n  background-color:black;\n  color:white;\n  font-weight:550;\n}\n\n.nav-pills .nav-link:not(.active), .nav-pills .nav-link:not(.active):hover,.nav-pills .nav-link:not(.active):focus{\n  /* background-color:black; */\n  color:black;\n  font-weight:550;\n}\n\n#place-name {\n  text-align: center;\n  margin: 10px;\n}\n\n#tweet {\n  width: 45px;\n  height: 45px;\n}\n\n.tweet {\n  padding: 0;\n}\n\n#details-button {\n  position: relative;\n  margin-bottom: 70px;\n}\n\n.left {\n  float: left;\n}\n\n.right {\n  float: right;\n}\n\n.favorited {\n  color: orange;\n}\n\n.btn-outline {\n  border: 1px solid;\n  border-color: darkgray;\n}\n\n.material-icons.remove {\n  color: #e7b806;\n}\n\n@media (max-width: 600px) {\n  .nav-tabs {\n    display: -webkit-inline-box;\n    display: -moz-box;\n  }\n  .nav-pills .nav-link.active, .nav-pills .nav-link.active:hover,.nav-pills .nav-link.active:focus{\n    background-color:black;\n    padding: 3px;\n    color:white;\n    font-weight:550;\n  }\n  \n  .nav-pills .nav-link:not(.active), .nav-pills .nav-link:not(.active):hover,.nav-pills .nav-link:not(.active):focus{\n    /* background-color:black; */\n    color:black;\n    font-weight:550;\n    padding: 3px;\n  }\n\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7R0FPRzs7QUFFSDtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUdBO0VBQ0U7SUFDRSwyQkFBMkI7SUFDM0IsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsNEJBQTRCO0lBQzVCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsWUFBWTtFQUNkOzs7QUFHRiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogI25hdi10YWJzLm5hdi1pdGVtLm5hdi1saW5rOm5vdCguYWN0aXZlKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAsIDIzNSwgODUsIDAuNSk7XG59XG5cbiNuYXYtdGFicy5uYXYtaXRlbS5uYXYtbGluayB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjIpO1xuICBjb2xvcjogd2hpdGU7XG59ICovXG5cbiNkZXRhaWxzIHtcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xufVxuXG4ubmF2LXBpbGxzIC5uYXYtbGluay5hY3RpdmUsIC5uYXYtcGlsbHMgLm5hdi1saW5rLmFjdGl2ZTpob3ZlciwubmF2LXBpbGxzIC5uYXYtbGluay5hY3RpdmU6Zm9jdXN7XG4gIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XG4gIGNvbG9yOndoaXRlO1xuICBmb250LXdlaWdodDo1NTA7XG59XG5cbi5uYXYtcGlsbHMgLm5hdi1saW5rOm5vdCguYWN0aXZlKSwgLm5hdi1waWxscyAubmF2LWxpbms6bm90KC5hY3RpdmUpOmhvdmVyLC5uYXYtcGlsbHMgLm5hdi1saW5rOm5vdCguYWN0aXZlKTpmb2N1c3tcbiAgLyogYmFja2dyb3VuZC1jb2xvcjpibGFjazsgKi9cbiAgY29sb3I6YmxhY2s7XG4gIGZvbnQtd2VpZ2h0OjU1MDtcbn1cblxuI3BsYWNlLW5hbWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuI3R3ZWV0IHtcbiAgd2lkdGg6IDQ1cHg7XG4gIGhlaWdodDogNDVweDtcbn1cblxuLnR3ZWV0IHtcbiAgcGFkZGluZzogMDtcbn1cblxuI2RldGFpbHMtYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiA3MHB4O1xufVxuXG4ubGVmdCB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ucmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5mYXZvcml0ZWQge1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4uYnRuLW91dGxpbmUge1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBkYXJrZ3JheTtcbn1cblxuLm1hdGVyaWFsLWljb25zLnJlbW92ZSB7XG4gIGNvbG9yOiAjZTdiODA2O1xufVxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAubmF2LXRhYnMge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWJveDtcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcbiAgfVxuICAubmF2LXBpbGxzIC5uYXYtbGluay5hY3RpdmUsIC5uYXYtcGlsbHMgLm5hdi1saW5rLmFjdGl2ZTpob3ZlciwubmF2LXBpbGxzIC5uYXYtbGluay5hY3RpdmU6Zm9jdXN7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpibGFjaztcbiAgICBwYWRkaW5nOiAzcHg7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6NTUwO1xuICB9XG4gIFxuICAubmF2LXBpbGxzIC5uYXYtbGluazpub3QoLmFjdGl2ZSksIC5uYXYtcGlsbHMgLm5hdi1saW5rOm5vdCguYWN0aXZlKTpob3ZlciwubmF2LXBpbGxzIC5uYXYtbGluazpub3QoLmFjdGl2ZSk6Zm9jdXN7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjpibGFjazsgKi9cbiAgICBjb2xvcjpibGFjaztcbiAgICBmb250LXdlaWdodDo1NTA7XG4gICAgcGFkZGluZzogM3B4O1xuICB9XG5cblxufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/details/details.component.html":
/*!************************************************!*\
  !*** ./src/app/details/details.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"details\" *ngIf=\"details\">\n  <div id=\"place-name\">\n    <h3>{{details[\"Item\"][\"Title\"]}}</h3>\n    <!-- <p>ccwvew</p> -->\n  </div>\n  <div id=\"details-button\">\n    <div class=\"left\">\n      <button class=\"btn btn-outline-secondary\" (click)=\"slideDetail()\">\n        <i class=\"fas fa-angle-left\"></i>List</button>\n    </div>\n    <div class=\"right\">\n      \n      <button id=\"shareBtn\" class=\"btn tweet\" (click)=\"share()\">\n        <img id=\"tweet\" src=\"http://csci571.com/hw/hw8/Images/facebook.png\" alt=\"facebook\">\n      </button>\n\n      <button *ngIf=\"isFavorited\" class=\"btn btn-outline\" (click)=\"setFavorite()\">\n          <i class=\"material-icons remove\">remove_shopping_cart</i>\n      </button>\n\n      <button *ngIf=\"!isFavorited\" class=\"btn btn-outline\" (click)=\"setFavorite()\">\n          <i class=\"material-icons\">add_shopping_cart</i>\n      </button>\n\n      <!-- <button id=\"shareBtn\" class=\"btn tweet\" (click)=\"tweet()\"> -->\n\n\n    </div>\n  </div>\n  <nav>\n    <div class=\"nav nav-pills justify-content-end\" id=\"nav-tabs\" role=\"tablist\">\n      <a href=\"#\" *ngFor=\"let tab of checkWindow()\" [id]=\"tab.id\" class=\"nav-item nav-link\" [class.active]=\"tab.id === activeId\" role=\"tab\"\n        data-toggle=\"tab\" [attr.aria-controls]=\"tab.id+'-panel'\" (click)=\"setActive(tab.id)\">{{tab.title}}</a>\n    </div>\n  </nav>\n  <hr>\n  <!-- <div class=\"tab-content\" id=\"nav-tab-content\">\n    <div *ngFor=\"let tab of tabs\" class=\"tab-pane\" [class.active]=\"tab.id === activeId\" role=\"tabpanel\" [id]=\"tab.id+'-panel'\" [attr.aria-labelledby]=\"tab.id\">\n      <ng-container *ngComponentOutlet=\"tab.component\"></ng-container>\n    </div>\n  </div> -->\n  <div class=\"tab-content\" id=\"nav-tab-content\">\n    <div class=\"tab-pane\" [class.active]=\"activeId==='info-tab'\" role=\"tabpanel\" id=\"info-tab-panel\" aria-labelledby=\"info-tab\">\n      <app-info-tab [info]=\"infoJson\"></app-info-tab>\n    </div>\n    <div class=\"tab-pane\" [class.active]=\"activeId==='photos-tab'\" role=\"tabpanel\" id=\"photos-tab-panel\" aria-labelledby=\"photos-tab\">\n      <app-photos-tab [photos]=\"photoJson\"></app-photos-tab>\n    </div>\n    <div class=\"tab-pane\" [class.active]=\"activeId==='shipping-tab'\" role=\"tabpanel\" id=\"shipping-tab-panel\" aria-labelledby=\"shipping-tab\">\n      <app-shipping-tab [shippings]=\"shippingJson\"></app-shipping-tab>\n    </div>\n    <div class=\"tab-pane\" [class.active]=\"activeId==='seller-tab'\" role=\"tabpanel\" id=\"seller-tab-panel\" aria-labelledby=\"seller-tab\">\n      <app-seller-tab [sellerInfo]=\"sellerJson\"></app-seller-tab>\n    </div>\n    <div class=\"tab-pane\" [class.active]=\"activeId==='reviews-tab'\" role=\"tabpanel\" id=\"reviews-tab-panel\" aria-labelledby=\"reviews-tab\">\n      <app-reviews-tab [ggReviews]=\"reviewJson\"></app-reviews-tab>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/details/details.component.ts":
/*!**********************************************!*\
  !*** ./src/app/details/details.component.ts ***!
  \**********************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search.service */ "./src/app/search.service.ts");
/* harmony import */ var _info_tab_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info-tab/info */ "./src/app/details/info-tab/info.ts");
/* harmony import */ var _seller_tab_seller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./seller-tab/seller */ "./src/app/details/seller-tab/seller.ts");
/* harmony import */ var _shipping_tab_shipping__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shipping-tab/shipping */ "./src/app/details/shipping-tab/shipping.ts");
/* harmony import */ var _details_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../details.service */ "./src/app/details.service.ts");
/* harmony import */ var _window_ref_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../window-ref.service */ "./src/app/window-ref.service.ts");
/* harmony import */ var _favorite_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../favorite.service */ "./src/app/favorite.service.ts");
/* harmony import */ var ngx_facebook__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-facebook */ "./node_modules/ngx-facebook/dist/esm/index.js");








//import { Directions } from "./map-tab/direction";


var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(sService, dService, fService, zone, winRef, fb) {
        var _this = this;
        this.sService = sService;
        this.dService = dService;
        this.fService = fService;
        this.zone = zone;
        this.winRef = winRef;
        this.fb = fb;
        this.tabs = [
            { id: "info-tab", title: "Info" },
            { id: "photos-tab", title: "Photos" },
            { id: "shipping-tab", title: "Shipping" },
            { id: "seller-tab", title: "Seller" },
            { id: "reviews-tab", title: "SimilarProduct" },
        ];
        this.tabs2 = [
            { id: "info-tab", title: "Product" },
            { id: "photos-tab", title: "Photos" },
            { id: "shipping-tab", title: "Shipping" },
            { id: "seller-tab", title: "Seller" },
            { id: "reviews-tab", title: "Related" },
        ];
        this.slide = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.activeId = "info-tab";
        this.resultJson = null;
        var initParams = {
            appId: '1160447504135637',
            xfbml: true,
            version: 'v3.2'
        };
        fb.init(initParams);
        this.dService.index.subscribe(function (data) {
            _this.zone.run(function () {
                //console.log(data);
                _this.index = data;
                _this.setShipping(_this.resultJson);
            });
        });
        this.sService.resultJson.subscribe(function (data) {
            _this.zone.run(function () {
                _this.resultJson = data;
            });
        });
        this.dService.similar.subscribe(function (data) {
            _this.zone.run(function () {
                // console.log(data);
                _this.reviewJson = data["getSimilarItemsResponse"]["itemRecommendations"]["item"];
                //console.log(this.reviewJson);
            });
        });
        this.dService.details.subscribe(function (data) {
            _this.zone.run(function () {
                // console.log(data);
                _this.details = data;
                //console.log(this.details["Item"]);
                _this.setInfo(data);
                _this.setSeller(data);
                _this.setPhotos(data);
                // console.log(data);
                // console.log(data["Item"]["ItemID"]);
                var tempArray = [];
                tempArray.push(data["Item"]["ItemID"]);
                _this.isFavorited = _this.fService.isFavorited(tempArray)[0];
                // console.log(this.isFavorited);
            });
        });
        this.nativeWindow = winRef.getNativeWindow();
        // console.log(this.isFavorited);
    }
    DetailsComponent.prototype.checkWindow = function () {
        if (window.innerWidth < 600) {
            return this.tabs2;
        }
        else {
            return this.tabs;
        }
    };
    DetailsComponent.prototype.setActive = function (id) {
        this.activeId = id;
    };
    DetailsComponent.prototype.slideDetail = function () {
        this.slide.emit("right");
    };
    DetailsComponent.prototype.setFavorite = function () {
        var _this = this;
        this.zone.run(function () {
            if (_this.isFavorited) {
                _this.fService.removeFavorite(_this.details["Item"]["ItemID"]);
                _this.isFavorited = false;
            }
            else {
                var tempData = _this.resultJson["findItemsAdvancedResponse"]["0"]["searchResult"]["0"]["item"][_this.index];
                // console.log(tempData);
                _this.fService.saveFavorite(tempData.itemId["0"], tempData.galleryURL, tempData.title, tempData["sellingStatus"]["0"]["currentPrice"]["0"]["__value__"], tempData["shippingInfo"]["0"]["shippingServiceCost"]["0"]["__value__"], tempData["sellerInfo"]["0"]["sellerUserName"], tempData.viewItemURL["0"]);
                _this.isFavorited = true;
            }
        });
        // console.log(this.isFavorited);
    };
    DetailsComponent.prototype.share = function () {
        // console.log(this.resultJson);
        // console.log(this.index);
        var tempData = this.resultJson["findItemsAdvancedResponse"]["0"]["searchResult"]["0"]["item"][this.index];
        var link = tempData["viewItemURL"]["0"];
        var productName = tempData["title"]["0"];
        var price = "$" + tempData["sellingStatus"]["0"]["currentPrice"]["0"]["__value__"];
        var params = {
            href: link,
            method: 'share',
            quote: "Buy " + productName + " at " + price + " from link below."
        };
        this.fb.ui(params)
            .then(function (res) { return console.log(res); })
            .catch(function (e) { return console.error(e); });
    };
    DetailsComponent.prototype.setInfo = function (data) {
        var tmpJson = new _info_tab_info__WEBPACK_IMPORTED_MODULE_3__["Info"]();
        var tempData = data["Item"];
        if (tempData["PictureURL"]) {
            tmpJson.Product_Images = tempData["PictureURL"];
        }
        if (tempData["Subtitle"]) {
            tmpJson.SubTitle = tempData["Subtitle"];
        }
        if (tempData["CurrentPrice"]["Value"]) {
            tmpJson.Price = tempData["CurrentPrice"]["Value"];
        }
        if (tempData["Location"]) {
            tmpJson.Location = tempData["Location"];
        }
        if (tempData["ReturnPolicy"]) {
            tmpJson.Return_Policy = tempData["ReturnPolicy"];
        }
        if (tempData["ItemSpecifics"]["NameValueList"]) {
            tmpJson.ItemSpecifics = tempData["ItemSpecifics"]["NameValueList"];
        }
        this.infoJson = tmpJson;
    };
    DetailsComponent.prototype.setPhotos = function (data) {
        var _this = this;
        this.dService.getPhotoInfo(data["Item"]["Title"]);
        //this.photoJson = data.photos;
        this.dService.photoInfo.subscribe(function (data) {
            _this.zone.run(function () {
                _this.photoJson = data;
                // console.log(data);
            });
        });
    };
    // Mini Farming : Self-Sufficiency on 1/4 Acre
    DetailsComponent.prototype.setSeller = function (data) {
        var tmpJson = new _seller_tab_seller__WEBPACK_IMPORTED_MODULE_4__["Seller"]();
        var tempData = data["Item"];
        if (tempData["Seller"]["UserID"]) {
            tmpJson.UserID = tempData["Seller"]["UserID"].toUpperCase();
        }
        if (tempData["Seller"]["FeedbackScore"]) {
            tmpJson.FeedbackScore = tempData["Seller"]["FeedbackScore"];
        }
        if (tempData["Seller"]["PositiveFeedbackPercent"]) {
            tmpJson.PositiveFeedbackPercent = tempData["Seller"]["PositiveFeedbackPercent"];
        }
        if (tempData["Seller"]["FeedbackRatingStar"]) {
            if (tempData["Seller"]["FeedbackRatingStar"] == "None") {
                tmpJson.FeedbackRatingStar = "white";
            }
            if (tempData["Seller"]["FeedbackScore"] >= 10000) {
                var tem = tempData["Seller"]["FeedbackRatingStar"].indexOf("Shooting");
                var sub = tempData["Seller"]["FeedbackRatingStar"].substring(0, tem);
                tmpJson.FeedbackRatingStar = sub;
            }
            else {
                tmpJson.FeedbackRatingStar = tempData["Seller"]["FeedbackRatingStar"];
            }
        }
        if (tempData["Seller"]["TopRatedSeller"]) {
            tmpJson.TopRatedSeller = tempData["Seller"]["TopRatedSeller"];
        }
        if (tempData["Storefront"] && tempData["Storefront"]["StoreName"]) {
            tmpJson.StoreName = tempData["Storefront"]["StoreName"];
        }
        if (tempData["Storefront"] && tempData["Storefront"]["StoreURL"]) {
            tmpJson.StoreURL = tempData["Storefront"]["StoreURL"];
        }
        this.sellerJson = tmpJson;
        // console.log(tempData);
    };
    DetailsComponent.prototype.setShipping = function (data) {
        if (data != undefined && this.index != undefined) {
            var tmpJson = new _shipping_tab_shipping__WEBPACK_IMPORTED_MODULE_5__["Shipping"]();
            var tempData = data["findItemsAdvancedResponse"]["0"]["searchResult"]["0"]["item"][this.index];
            //console.log(data["findItemsAdvancedResponse"]["0"]["searchResult"]["0"]["item"]);
            //console.log(this.index);
            //console.log(tempData);
            if (tempData["shippingInfo"]) {
                var tempship = tempData["shippingInfo"];
                if (tempship["0"]["shippingServiceCost"]["0"]["__value__"]) {
                    if (tempship["0"]["shippingServiceCost"]["0"]["__value__"] == "0.0") {
                        tmpJson.shippingServiceCost = "Free Shipping";
                    }
                    else {
                        tmpJson.shippingServiceCost = "$" + tempship["0"]["shippingServiceCost"]["0"]["__value__"];
                    }
                }
                if (tempship["0"]["shipToLocations"]) {
                    tmpJson.shipToLocations = tempship["0"]["shipToLocations"];
                }
                if (tempship["0"]["handlingTime"]) {
                    if (tempship["0"]["handlingTime"] == "1" || tempship["0"]["handlingTime"] == "0") {
                        tmpJson.handlingTime = tempship["0"]["handlingTime"] + " Day";
                    }
                    else {
                        tmpJson.handlingTime = tempship["0"]["handlingTime"] + " Days";
                    }
                }
                if (tempship["0"]["expeditedShipping"]) {
                    tmpJson.expeditedShipping = tempship["0"]["expeditedShipping"];
                }
                if (tempship["0"]["oneDayShippingAvailable"]) {
                    tmpJson.oneDayShippingAvailable = tempship["0"]["oneDayShippingAvailable"];
                }
            }
            if (tempData["returnsAccepted"]) {
                tmpJson.returnsAccepted = tempData["returnsAccepted"];
            }
            this.shippingJson = tmpJson;
        }
    };
    DetailsComponent.prototype.ngOnInit = function () {
        // (window as any).fbAsyncInit = function() {
        //   FB.init({
        //     appId      : '394951114363257',
        //     cookie     : true,
        //     xfbml      : true,
        //     version    : 'v3.1'
        //   });
        //   FB.AppEvents.logPageView();
        // };
        // (function(d, s, id){
        //    var js, fjs = d.getElementsByTagName(s)[0];
        //    if (d.getElementById(id)) {return;}
        //    js = d.createElement(s); js.id = id;
        //    js.src = "https://connect.facebook.net/en_US/sdk.js";
        //    fjs.parentNode.insertBefore(js, fjs);
        //  }(document, 'script', 'facebook-jssdk'));
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DetailsComponent.prototype, "slide", void 0);
    DetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-details",
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.css */ "./src/app/details/details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"],
            _details_service__WEBPACK_IMPORTED_MODULE_6__["DetailsService"],
            _favorite_service__WEBPACK_IMPORTED_MODULE_8__["FavoriteService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _window_ref_service__WEBPACK_IMPORTED_MODULE_7__["WindowRefService"],
            ngx_facebook__WEBPACK_IMPORTED_MODULE_9__["FacebookService"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/details/info-tab/info-tab.component.css":
/*!*********************************************************!*\
  !*** ./src/app/details/info-tab/info-tab.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".to_left {\n    background: transparent;\n    display: block;\n    height: auto;\n    width: auto;\n    margin: auto;\n    max-width: 100%;\n    float:left;\n    font-size: 45px;\n}\n\n.to_right {\n\n    display: block;\n    height: auto;\n    width: auto;\n    margin: auto;\n    max-width: 100%;\n    float:right;\n    font-size: 45px;\n}\n\n.buttonArrow {\n    background: transparent;\n    border: none;\n    outline:none;\n}\n\n.img-responsive {\n    \n    display: block;\n    height: auto;\n    width: auto;\n    margin: auto;\n    max-width: 100%;\n}\n\n.form-group {\n    border:10px solid black;\n}\n\n/* .infoHeader {\n    font-weight: 700 !important;\n} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlscy9pbmZvLXRhYi9pbmZvLXRhYi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsVUFBVTtJQUNWLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksY0FBYztJQUNkLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTs7R0FFRyIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMvaW5mby10YWIvaW5mby10YWIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b19sZWZ0IHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBmbG9hdDpsZWZ0O1xuICAgIGZvbnQtc2l6ZTogNDVweDtcbn1cblxuLnRvX3JpZ2h0IHtcblxuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogYXV0bztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGZsb2F0OnJpZ2h0O1xuICAgIGZvbnQtc2l6ZTogNDVweDtcbn1cblxuLmJ1dHRvbkFycm93IHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTpub25lO1xufVxuXG4uaW1nLXJlc3BvbnNpdmUge1xuICAgIFxuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogYXV0bztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uZm9ybS1ncm91cCB7XG4gICAgYm9yZGVyOjEwcHggc29saWQgYmxhY2s7XG59XG5cbi8qIC5pbmZvSGVhZGVyIHtcbiAgICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG59ICovIl19 */"

/***/ }),

/***/ "./src/app/details/info-tab/info-tab.component.html":
/*!**********************************************************!*\
  !*** ./src/app/details/info-tab/info-tab.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-warning\" role=\"alert\" *ngIf=\"!info\">\n    No Records.\n</div>\n<div id=\"info-div\" *ngIf=\"info\" class=\"table-responsive\">\n  <table class=\"table table-striped table-dark\">\n    <tbody>\n      <!-- <tr *ngIf=\"info.Product_Images\">\n        <th scope=\"row\">Product Images</th>\n        <td>{{info.Product_Images}}</td>\n      </tr> -->\n      <!-- <tr *ngIf=\"info.Product_Images\">\n          <th scope=\"row\">Product Images</th>\n          <td><a [href]=\"info.website\">{{info.website}}</a></td>\n      </tr> -->\n\n      <tr *ngIf=\"info.Product_Images\">\n          <th scope=\"row\">Product Images</th>\n          <td>\n            <a *ngIf=\"info.Product_Images\" style=\"color:cadetblue\" href=\"#\" data-toggle=\"modal\" data-target=\"#open-hours\">View Product Images Here</a>\n          </td>\n      </tr>\n\n      <tr *ngIf=\"info.SubTitle\">\n        <th scope=\"row\">SubTitle</th>\n        <td>{{info.SubTitle}}</td>\n      </tr>\n      <tr *ngIf=\"info.Price\">\n        <th scope=\"row\">Price</th>\n        <td>${{info.Price}}</td>\n      </tr>\n      <tr *ngIf=\"info.Location\">\n        <th scope=\"row\">Location</th>\n        <td>{{info.Location}}</td>\n      </tr>\n      <tr *ngIf=\"info.Return_Policy.ReturnsAccepted\">\n        <th scope=\"row\">Return Policy (US)</th>\n        <td *ngIf=\"info.Return_Policy.ReturnsAccepted == 'ReturnsNotAccepted'\">\n          Returns not accepted        \n        </td>\n        <td *ngIf='info.Return_Policy.ReturnsAccepted != \"ReturnsNotAccepted\"'>\n          {{info.Return_Policy.ReturnsAccepted}} within {{info.Return_Policy.ReturnsWithin}}       \n        </td>\n      </tr>\n\n      <ng-container *ngFor=\"let item of info.ItemSpecifics\">\n        <tr *ngIf=\"info.ItemSpecifics\">\n          <th scope=\"row\">{{item.Name}}</th>\n          <td class=\"speRight\">{{item.Value[0]}}</td>\n        </tr>\n      </ng-container>\n\n      <!-- <tr *ngIf=\"info.rating\">\n        <th scope=\"row\">Rating</th>\n        <td>{{info.rating}} <app-star [rating]=\"info.rating\"></app-star> </td>\n      </tr>\n      <tr *ngIf=\"info.ggPage\">\n        <th scope=\"row\">Google Page</th>\n        <td><a [href]=\"info.ggPage\">{{info.ggPage}}</a></td>\n      </tr> -->\n      <tr *ngIf=\"info.website\">\n        <th scope=\"row\">Website</th>\n        <td><a [href]=\"info.website\">{{info.website}}</a></td>\n      </tr>\n\n    </tbody>\n  </table>\n</div>\n\n<div *ngIf=\"info.Product_Images\" class=\"modal fade\" id=\"open-hours\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"open-hours-label\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"open-hours-label\">Product Images</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <table>\n            <tr>\n              <td>\n                <button class=\"buttonArrow\"><span class=\"to_left\" (click)=\"changePicLeft()\">&lsaquo;</span>\n                </button>             \n              </td>\n              <td>\n                  <div class=\"form-group\">\n                      <img [src]=\"srcP\" alt=\"\" class=\"img-responsive\" (click)=\"open()\">\n                  </div>\n              </td>\n              <td>\n                <button class=\"buttonArrow\"><span class=\"to_right\" (click)=\"changePicRight()\">&rsaquo;</span>\n                </button>                  \n              </td>\n            </tr>\n          </table>\n\n          <!-- <span class=\"to_left\">&lsaquo;</span>\n          <div class=\"form-group\">\n              <img [src]=\"info.Product_Images['2']\" alt=\"\" class=\"img-responsive\">\n          </div> -->\n          \n          <!-- <table class=\"table\">\n            <tbody class=\"modal-table\">               \n              <tr>\n                  <div id=\"content\">\n                      <a id=\"prev\" href=\"javascript:;\">left</a>\n                      <a id=\"next\" href=\"javascript:;\">right</a>\n                      <img id=\"img1\" [src]=\"info.Product_Images['0']\">\n                  </div>\n              </tr>\n            </tbody>\n          </table> -->\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/details/info-tab/info-tab.component.ts":
/*!********************************************************!*\
  !*** ./src/app/details/info-tab/info-tab.component.ts ***!
  \********************************************************/
/*! exports provided: InfoTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoTabComponent", function() { return InfoTabComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./info */ "./src/app/details/info-tab/info.ts");



var InfoTabComponent = /** @class */ (function () {
    function InfoTabComponent() {
        this.index = 0;
    }
    InfoTabComponent.prototype.changePicLeft = function () {
        if (this.index == 0) {
            var tem = this.index;
            this.srcP = this.info.Product_Images[tem + ""];
        }
        else {
            var tem = this.index - 1;
            this.srcP = this.info.Product_Images[tem + ""];
            this.index -= 1;
        }
    };
    InfoTabComponent.prototype.changePicRight = function () {
        if (this.index == (this.size - 1)) {
            var tem = this.index;
            this.srcP = this.info.Product_Images[tem + ""];
        }
        else {
            var tem = this.index + 1;
            this.srcP = this.info.Product_Images[tem + ""];
            this.index += 1;
        }
    };
    InfoTabComponent.prototype.open = function () {
        window.open(this.srcP);
    };
    InfoTabComponent.prototype.ngOnChanges = function () {
        // console.log(this.info);
        this.index = 0;
        var tem = this.index;
        this.size = (this.info.Product_Images).length;
        this.srcP = this.info.Product_Images[tem + ""];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _info__WEBPACK_IMPORTED_MODULE_2__["Info"])
    ], InfoTabComponent.prototype, "info", void 0);
    InfoTabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-info-tab",
            template: __webpack_require__(/*! ./info-tab.component.html */ "./src/app/details/info-tab/info-tab.component.html"),
            styles: [__webpack_require__(/*! ./info-tab.component.css */ "./src/app/details/info-tab/info-tab.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InfoTabComponent);
    return InfoTabComponent;
}());



/***/ }),

/***/ "./src/app/details/info-tab/info.ts":
/*!******************************************!*\
  !*** ./src/app/details/info-tab/info.ts ***!
  \******************************************/
/*! exports provided: Info */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Info", function() { return Info; });
var Info = /** @class */ (function () {
    function Info() {
    }
    return Info;
}());



/***/ }),

/***/ "./src/app/details/photos-tab/photos-tab.component.css":
/*!*************************************************************!*\
  !*** ./src/app/details/photos-tab/photos-tab.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.photo-col {\n    display: flex;\n    vertical-align: top;\n    /* margin-bottom: 10px; */\n}\n\n.img-thumbnail {\n    margin-bottom: 10px;\n    border:10px solid black;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlscy9waG90b3MtdGFiL3Bob3Rvcy10YWIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9kZXRhaWxzL3Bob3Rvcy10YWIvcGhvdG9zLXRhYi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ucGhvdG8tY29sIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgLyogbWFyZ2luLWJvdHRvbTogMTBweDsgKi9cbn1cblxuLmltZy10aHVtYm5haWwge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgYm9yZGVyOjEwcHggc29saWQgYmxhY2s7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/details/photos-tab/photos-tab.component.html":
/*!**************************************************************!*\
  !*** ./src/app/details/photos-tab/photos-tab.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"photos-div\">\n  <div class=\"photos-container\" *ngIf=\"photos && photos.items\" class=\"row\">\n    <div id=\"photo-col-1\" class=\"col-sm-4 photo-col\">\n      <div *ngIf=\"col1\">\n        <a *ngFor=\"let photo of col1\" [href]=\"photo.link\" target=\"_blank\">\n          <img class=\"img-thumbnail\" [src]=\"photo.link\" alt=\"\">\n        </a>\n      </div>\n    </div>\n    <div id=\"photo-col-2\" class=\"col-sm-4 photo-col\">\n      <div *ngIf=\"col2\"><a *ngFor=\"let photo of col2\" [href]=\"photo.link\" target=\"_blank\">\n          <img class=\"img-thumbnail\" [src]=\"photo.link\" alt=\"\">\n        </a></div>\n    </div>\n    <div id=\"photo-col-3\" class=\"col-sm-4 photo-col\">\n      <div *ngIf=\"col3\"><a *ngFor=\"let photo of col3\" [href]=\"photo.link\" target=\"_blank\">\n          <img class=\"img-thumbnail\" [src]=\"photo.link\" alt=\"\">\n        </a></div>\n    </div>\n    <!-- <div id=\"photo-col-4\" class=\"col-sm-3 photo-col\">\n      <div *ngIf=\"col4\"><a *ngFor=\"let photo of col4\" [href]=\"photo.link\" target=\"_blank\">\n          <img class=\"img-thumbnail\" [src]=\"photo.link\" alt=\"\">\n        </a></div>\n    </div> -->\n  </div>\n  <div class=\"alert alert-warning\" role=\"alert\" *ngIf=\"!photos || !photos.items\">No Records.</div>\n\n  <!-- <div *ngFor=\"let photo of photos\" class=\"photo-container\">\n    <a [href]=\"photo.getUrl({'maxWidth': photo.width})\" target=\"_blank\">\n      <img class=\"img-thumbnail\" [src]=\"photo.getUrl({'maxWidth': 400})\" alt=\"\">\n    </a>\n  </div> -->\n</div>"

/***/ }),

/***/ "./src/app/details/photos-tab/photos-tab.component.ts":
/*!************************************************************!*\
  !*** ./src/app/details/photos-tab/photos-tab.component.ts ***!
  \************************************************************/
/*! exports provided: PhotosTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosTabComponent", function() { return PhotosTabComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _details_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../details.service */ "./src/app/details.service.ts");



var PhotosTabComponent = /** @class */ (function () {
    //private col4 = [];
    function PhotosTabComponent(dService) {
        this.dService = dService;
        this._resized = false;
        this.col1 = [];
        this.col2 = [];
        this.col3 = [];
    }
    PhotosTabComponent.prototype.ngOnChanges = function () {
        if (this.photos == undefined || this.photos["items"] == null || this.photos["items"] == undefined) {
            return;
        }
        // console.log(this.photos);
        this.displayWidth = window.screen.width;
        if (this.displayWidth > 600) {
            this.displayWidth = Math.round(this.displayWidth / 3);
        }
        this.col1.splice(0, this.col1.length);
        this.col2.splice(0, this.col2.length);
        this.col3.splice(0, this.col3.length);
        //this.col4.splice(0, this.col4.length);
        var len = this.photos["items"].length;
        if (this.photos["items"].length % 3 == 0) {
            for (var i = 0; i < this.photos["items"].length; i++) {
                switch (i % 3) {
                    case 0: {
                        this.col1.push(this.photos["items"][i]);
                        break;
                    }
                    case 1: {
                        this.col2.push(this.photos["items"][i]);
                        break;
                    }
                    case 2: {
                        this.col3.push(this.photos["items"][i]);
                        break;
                    }
                }
            }
        }
        else if (this.photos["items"].length % 3 == 1) {
            for (var i = 0; i < this.photos["items"].length - 1; i++) {
                switch (i % 3) {
                    case 0: {
                        this.col1.push(this.photos["items"][i]);
                        break;
                    }
                    case 1: {
                        this.col2.push(this.photos["items"][i]);
                        break;
                    }
                    case 2: {
                        this.col3.push(this.photos["items"][i]);
                        break;
                    }
                }
            }
            this.col2.push(this.photos["items"][this.photos["items"].length - 1]);
        }
        else if (this.photos["items"].length % 3 == 2) {
            for (var i = 0; i < this.photos["items"].length - 2; i++) {
                switch (i % 3) {
                    case 0: {
                        this.col1.push(this.photos["items"][i]);
                        break;
                    }
                    case 1: {
                        this.col2.push(this.photos["items"][i]);
                        break;
                    }
                    case 2: {
                        this.col3.push(this.photos["items"][i]);
                        break;
                    }
                }
            }
            this.col2.push(this.photos["items"][this.photos["items"].length - 2]);
            this.col3.push(this.photos["items"][this.photos["items"].length - 2]);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PhotosTabComponent.prototype, "photos", void 0);
    PhotosTabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-photos-tab",
            template: __webpack_require__(/*! ./photos-tab.component.html */ "./src/app/details/photos-tab/photos-tab.component.html"),
            styles: [__webpack_require__(/*! ./photos-tab.component.css */ "./src/app/details/photos-tab/photos-tab.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_details_service__WEBPACK_IMPORTED_MODULE_2__["DetailsService"]])
    ], PhotosTabComponent);
    return PhotosTabComponent;
}());



/***/ }),

/***/ "./src/app/details/reviews-tab/reviews-tab.component.css":
/*!***************************************************************!*\
  !*** ./src/app/details/reviews-tab/reviews-tab.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#review-results {\n    height: 100px;\n}\n\n.avatar>a>img {\n    height: 64px;\n    width: 64px;\n}\n\n.card {\n    word-wrap: normal;\n    padding: 20px;\n    margin: 10px;\n    background-color: #22292a;\n}\n\n.spanpad {\n    display: inline-block;\n    height: 18px;\n}\n\n.review-time {\n    color: gray;\n    font-size: 14px;\n}\n\n.dropdown button{\n    margin: 10px;\n    /* width: 200px; */\n}\n\n.buttonShow {\n    text-align: center;\n    background-color: black;\n    color: white;\n    margin-left: 35vw;\n    height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlscy9yZXZpZXdzLXRhYi9yZXZpZXdzLXRhYi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvZGV0YWlscy9yZXZpZXdzLXRhYi9yZXZpZXdzLXRhYi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Jldmlldy1yZXN1bHRzIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4uYXZhdGFyPmE+aW1nIHtcbiAgICBoZWlnaHQ6IDY0cHg7XG4gICAgd2lkdGg6IDY0cHg7XG59XG5cbi5jYXJkIHtcbiAgICB3b3JkLXdyYXA6IG5vcm1hbDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyOTJhO1xufVxuXG4uc3BhbnBhZCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGhlaWdodDogMThweDtcbn1cblxuLnJldmlldy10aW1lIHtcbiAgICBjb2xvcjogZ3JheTtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5kcm9wZG93biBidXR0b257XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIC8qIHdpZHRoOiAyMDBweDsgKi9cbn1cblxuLmJ1dHRvblNob3cge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IDM1dnc7XG4gICAgaGVpZ2h0OiA0MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/details/reviews-tab/reviews-tab.component.html":
/*!****************************************************************!*\
  !*** ./src/app/details/reviews-tab/reviews-tab.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-warning\" role=\"alert\" *ngIf=\"!ggReviews || ggReviews.length == 0\">\n    No Records.\n</div>\n<div id=\"review-div\" *ngIf=\"ggReviews && ggReviews.length != 0\" >\n  <div class=\"row review-buttons\">\n      <div class=\"dropdown\">\n        <button *ngIf=\"checkWin()\" style=\"width:100vw\" class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"choose-review\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n          aria-expanded=\"false\">{{reviewTypes[selectedReviewType]}}</button>\n        <button *ngIf=\"!checkWin()\" class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"choose-review\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n        aria-expanded=\"false\">{{reviewTypes[selectedReviewType]}}</button>\n\n        <div class=\"dropdown-menu\" aria-labelledby=\"choose-review\">\n          <a *ngFor=\"let type of reviewTypes; index as i\" (click)=\"setReviewType(i)\" class=\"dropdown-item\">{{type}}</a>\n        </div> \n      </div>\n  \n      <div class=\"dropdown\">\n        <button *ngIf=\"checkWin()\" style=\"width:100vw\" class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"choose-order\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n          aria-expanded=\"false\" [disabled] = \"selectedReviewType==0\" >{{orderTypes[selectedOrderType]}}</button>\n        <button *ngIf=\"!checkWin()\" class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"choose-order\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n        aria-expanded=\"false\" [disabled] = \"selectedReviewType==0\" >{{orderTypes[selectedOrderType]}}</button>\n\n        <div class=\"dropdown-menu\" aria-labelledby=\"choose-order\">\n          <a *ngFor=\"let type of orderTypes; index as i\" (click)=\"setOrderType(i)\" class=\"dropdown-item\">{{type}}</a>\n        </div>\n      </div>\n\n  </div>\n\n  <div [@fadeInAnimation]=\"selectedReviewType\">\n    <div *ngIf=\"ggReviews\" id=\"gg-reviews\">\n\n        <!-- <li *ngFor=\"let searchResult of searchResults|slice:0:show let i=index\">\n            {{searchResult.name}}\n            <button *ngIf=\"i==4 && show == 5\" (click)=\"show = searchResults.length\">More</button>\n          </li> -->\n\n\n      <div *ngFor=\"let reviewIdx of choose() | slice:0:show let i=index\" class=\"card\">\n        <div class=\"media\">\n          \n          <div class=\"avatar mr-3\">\n              <img style=\"width : 150px; height: 150px\" [src]=\"ggReviews[reviewIdx].imageURL\">\n          </div>\n          <div class=\"media-body\">\n            <a style=\"color : #48bc9a\" [href]=\"ggReviews[reviewIdx].viewItemURL\" class=\"mt-0\">{{ggReviews[reviewIdx].title}}</a>\n            <br>\n            <div style=\"color : #1ad775\">Price: ${{ggReviews[reviewIdx][\"buyItNowPrice\"][\"__value__\"]}}</div>\n            <div style=\"color : #f8d575\">Shipping Cost: ${{ggReviews[reviewIdx][\"shippingCost\"][\"__value__\"]}}</div>\n            <div style=\"color : white\" >Days Left: {{countDay(reviewIdx)}}</div>\n          </div>\n\n        </div>\n \n\n      </div>\n      <button class=\"buttonShow\" *ngIf=\"choose().length > 5 && show == 5\" (click)=\"show = choose().length\">Show More</button>\n      <button class=\"buttonShow\" *ngIf=\"choose().length > 5 && show == choose().length\" (click)=\"show = 5\">Show Less</button>\n    </div>\n\n    <!-- <div *ngIf=\"selectedReviewType == 1 && yelpReviews\" id=\"yelp-reviews\">\n      <div *ngFor=\"let reviewIdx of yelpReviewOrderPointer\" class=\"card\">\n        <div class=\"media\">\n          <div class=\"avatar mr-3\">\n            <a [href]=\"yelpReviews[reviewIdx].url\">\n              <img [src]=\"yelpReviews[reviewIdx].user.image_url\" class=\"rounded-circle\">\n            </a>\n          </div>\n          <div class=\"media-body\">\n            <a [href]=\"yelpReviews[reviewIdx].url\" class=\"mt-0\">{{yelpReviews[reviewIdx].user.name}}</a>\n            <br>\n            <span class=\"spanpad\" [style.width]=\"yelpReviews[reviewIdx].rating*15 + 'px'\">\n              <app-star [rating]=\"yelpReviews[reviewIdx].rating\"></app-star>\n            </span>\n            <span class=\"review-time\">{{yelpReviews[reviewIdx].time_created}}</span>\n            <div>{{yelpReviews[reviewIdx].text}}</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div> -->\n\n</div>"

/***/ }),

/***/ "./src/app/details/reviews-tab/reviews-tab.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/details/reviews-tab/reviews-tab.component.ts ***!
  \**************************************************************/
/*! exports provided: ReviewsTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsTabComponent", function() { return ReviewsTabComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _details_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../details.service */ "./src/app/details.service.ts");
/* harmony import */ var _fade_in_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../fade-in.animation */ "./src/app/fade-in.animation.ts");




var ReviewsTabComponent = /** @class */ (function () {
    function ReviewsTabComponent(dService) {
        this.dService = dService;
        this.reviewTypes = ["Default", "Product Name", "Days Left", "Price", "Shipping Cost"];
        this.selectedReviewType = 0;
        this.error = false;
        this.ggReviewOrderPointer = [0, 1, 2, 3, 4];
        this.yelpReviewOrderPointer = [0, 1, 2];
        this.ProductNamePointer = [];
        this.DaysLeftPointer = [];
        this.PricePointer = [];
        this.ShippingCostPointer = [];
        this.defaultPointer = [];
        // disable : any;
        this.show = 5;
        this.orderTypes = [
            "Ascending",
            "Descending"
        ];
        this.selectedOrderType = 0;
    }
    ReviewsTabComponent.prototype.checkWin = function () {
        if (window.innerWidth < 600) {
            return true;
        }
        else {
            return false;
        }
    };
    ReviewsTabComponent.prototype.countDay = function (index) {
        var tempDay = this.ggReviews[index]["timeLeft"];
        return tempDay.indexOf("D") - tempDay.indexOf("P");
    };
    ReviewsTabComponent.prototype.setAscending = function () {
        var _this = this;
        if (this.selectedReviewType == 1) {
            this.ProductNamePointer.sort(function (a, b) {
                if (_this.ggReviews[a]["title"] > _this.ggReviews[b]["title"]) {
                    return 1;
                }
                else {
                    return -1;
                }
            });
        }
        else if (this.selectedReviewType == 2) {
            this.DaysLeftPointer.sort(function (a, b) {
                if (_this.countDay(a) > _this.countDay(b)) {
                    return 1;
                }
                else {
                    return -1;
                }
            });
        }
        else if (this.selectedReviewType == 3) {
            this.PricePointer.sort(function (a, b) {
                if (_this.ggReviews[a]["buyItNowPrice"]["__value__"] > _this.ggReviews[b]["buyItNowPrice"]["__value__"]) {
                    return 1;
                }
                else {
                    return -1;
                }
            });
        }
        else if (this.selectedReviewType == 4) {
            this.ShippingCostPointer.sort(function (a, b) {
                if (_this.ggReviews[a]["shippingCost"]["__value__"] > _this.ggReviews[b]["shippingCost"]["__value__"]) {
                    return 1;
                }
                else {
                    return -1;
                }
            });
        }
    };
    ReviewsTabComponent.prototype.setDescending = function () {
        var _this = this;
        if (this.selectedReviewType == 1) {
            this.ProductNamePointer.sort(function (a, b) {
                if (_this.ggReviews[a]["title"] < _this.ggReviews[b]["title"]) {
                    return 1;
                }
                else {
                    return -1;
                }
            });
        }
        else if (this.selectedReviewType == 2) {
            this.DaysLeftPointer.sort(function (a, b) {
                if (_this.countDay(a) < _this.countDay(b)) {
                    return 1;
                }
                else {
                    return -1;
                }
            });
        }
        else if (this.selectedReviewType == 3) {
            this.PricePointer.sort(function (a, b) {
                if (_this.ggReviews[a]["buyItNowPrice"]["__value__"] < _this.ggReviews[b]["buyItNowPrice"]["__value__"]) {
                    return 1;
                }
                else {
                    return -1;
                }
            });
        }
        else if (this.selectedReviewType == 4) {
            this.ShippingCostPointer.sort(function (a, b) {
                if (_this.ggReviews[a]["shippingCost"]["__value__"] < _this.ggReviews[b]["shippingCost"]["__value__"]) {
                    return 1;
                }
                else {
                    return -1;
                }
            });
        }
    };
    ReviewsTabComponent.prototype.ngOnChanges = function () {
        // console.log(this.ggReviews);
        if (this.ggReviews != undefined) {
            for (var i = 0; i < this.ggReviews.length; i++) {
                this.ProductNamePointer[i] = i;
                this.DaysLeftPointer[i] = i;
                this.PricePointer[i] = i;
                this.ShippingCostPointer[i] = i;
                this.defaultPointer[i] = i;
            }
        }
        // console.log(this.selectedReviewType);
        //this.ggReviewOrderPointer = Array.from(Array(this.ggReviews.length).keys());
    };
    ReviewsTabComponent.prototype.choose = function () {
        if (this.selectedReviewType == 0) {
            return this.defaultPointer;
        }
        else if (this.selectedReviewType == 1) {
            return this.ProductNamePointer;
        }
        else if (this.selectedReviewType == 2) {
            return this.DaysLeftPointer;
        }
        else if (this.selectedReviewType == 3) {
            return this.PricePointer;
        }
        else if (this.selectedReviewType == 4) {
            return this.ShippingCostPointer;
        }
    };
    ReviewsTabComponent.prototype.setReviewType = function (type) {
        this.selectedReviewType = type;
        if (this.selectedReviewType == 0) {
        }
        else {
            //this.disable = false;
        }
        //console.log(this.disable);
        this.error = false;
        this.setOrderType(this.selectedOrderType);
    };
    ReviewsTabComponent.prototype.setOrderType = function (type) {
        this.selectedOrderType = type;
        switch (type) {
            case 0: {
                this.setAscending();
                return;
            }
            case 1: {
                this.setDescending();
                return;
            }
        }
    };
    ReviewsTabComponent.prototype.ngOnInit = function () {
        // console.log(this.ggReviews);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ReviewsTabComponent.prototype, "ggReviews", void 0);
    ReviewsTabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-reviews-tab",
            template: __webpack_require__(/*! ./reviews-tab.component.html */ "./src/app/details/reviews-tab/reviews-tab.component.html"),
            animations: [_fade_in_animation__WEBPACK_IMPORTED_MODULE_3__["fadeInAnimation"]],
            styles: [__webpack_require__(/*! ./reviews-tab.component.css */ "./src/app/details/reviews-tab/reviews-tab.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_details_service__WEBPACK_IMPORTED_MODULE_2__["DetailsService"]])
    ], ReviewsTabComponent);
    return ReviewsTabComponent;
}());



/***/ }),

/***/ "./src/app/details/seller-tab/seller-tab.component.css":
/*!*************************************************************!*\
  !*** ./src/app/details/seller-tab/seller-tab.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".check {\n    display: inline-block;\n    width: 8px;\n    height: 16px;\n    border-color: #009933;\n    border-style: solid;\n    border-width: 0 3px 5px 0;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n}\n.clo {\n    color: red;\n    font-size: 25px;\n}\n.material-icons.orange600 { color: #FB8C00; }\n.round {\n    -webkit-transform: translateY(-20%) translateX(-20%);\n            transform: translateY(-20%) translateX(-20%);\n}\n.pop {\n    color: white;\n    font-weight: 100;\n    -webkit-transform: translateY(110%) translateX(-0.5%);\n            transform: translateY(110%) translateX(-0.5%);\n    font-size: 14px;\n}\n.user {\n    text-align: center;\n    font-size: 32px;\n    font-weight: 700;\n    margin-bottom: 20px;\n}\n.material-icons.green {\n    color: #009933;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlscy9zZWxsZXItdGFiL3NlbGxlci10YWIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGdDQUF3QjtZQUF4Qix3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLFVBQVU7SUFDVixlQUFlO0FBQ25CO0FBQ0EsNEJBQTRCLGNBQWMsRUFBRTtBQUU1QztJQUNJLG9EQUE0QztZQUE1Qyw0Q0FBNEM7QUFDaEQ7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIscURBQTZDO1lBQTdDLDZDQUE2QztJQUM3QyxlQUFlO0FBQ25CO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9kZXRhaWxzL3NlbGxlci10YWIvc2VsbGVyLXRhYi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoZWNrIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDhweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgYm9yZGVyLWNvbG9yOiAjMDA5OTMzO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiAwIDNweCA1cHggMDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG4uY2xvIHtcbiAgICBjb2xvcjogcmVkO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbn1cbi5tYXRlcmlhbC1pY29ucy5vcmFuZ2U2MDAgeyBjb2xvcjogI0ZCOEMwMDsgfVxuXG4ucm91bmQge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAlKSB0cmFuc2xhdGVYKC0yMCUpO1xufVxuXG4ucG9wIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTEwJSkgdHJhbnNsYXRlWCgtMC41JSk7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4udXNlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ubWF0ZXJpYWwtaWNvbnMuZ3JlZW4ge1xuICAgIGNvbG9yOiAjMDA5OTMzO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/details/seller-tab/seller-tab.component.html":
/*!**************************************************************!*\
  !*** ./src/app/details/seller-tab/seller-tab.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-warning\" role=\"alert\" *ngIf=\"!sellerInfo\">\n    No Records.\n</div>\n<div id=\"seller-div\" *ngIf=\"sellerInfo\" class=\"table-responsive\">\n    <div *ngIf=\"sellerInfo.UserID\" class=\"user\">\n      {{sellerInfo.UserID}}\n    </div>\n    <table class=\"table table-striped table-dark\">\n      <tbody>\n        <tr *ngIf=\"sellerInfo.FeedbackScore\">\n          <th scope=\"row\">Feedback Score</th>\n          <td>{{sellerInfo.FeedbackScore}}</td>\n        </tr>\n        <tr *ngIf=\"sellerInfo.PositiveFeedbackPercent\">\n          <th scope=\"row\">Popularity</th>\n          <td>\n            <div class=\"pop\">{{sellerInfo.PositiveFeedbackPercent}}</div>\n            \n              <round-progress class=\"round\"\n                [current]= percent\n                [max]=\"100\"\n                [radius]=\"21\" \n                [stroke]=\"2\" \n                [color]=\"'#10bf7e'\"\n                ></round-progress>\n\n\n            <!-- <round-progress\n\n              [color]=\"'#45ccce'\"\n            ></round-progress> -->\n          </td>\n\n\n          <!-- <td>{{sellerInfo.PositiveFeedbackPercent}}</td> -->\n        </tr>\n\n        <tr *ngIf=\"sellerInfo.FeedbackRatingStar\">\n          <th scope=\"row\">Feedback Rating Star</th>\n          <td *ngIf=\"sellerInfo.FeedbackScore >= 10000\">\n              <i class=\"material-icons\" [ngStyle]=\"{'color': sellerInfo.FeedbackRatingStar}\">stars</i>\n          </td>\n          <td *ngIf=\"sellerInfo.FeedbackScore < 10000\">\n              <i class=\"material-icons\" [ngStyle]=\"{'color': sellerInfo.FeedbackRatingStar}\">star_border</i>\n          </td>\n        </tr>\n\n        <!-- <i class=\"material-icons orange600\">face</i> -->\n        <tr *ngIf=\"sellerInfo.TopRatedSeller\">\n          <th scope=\"row\">Top Rated</th>\n          <!-- <td><span class=\"check\"></span></td> -->\n          <td><i class=\"material-icons green\">check</i></td>\n\n        </tr>\n        <tr *ngIf=\"sellerInfo.StoreName\">\n          <th scope=\"row\">Store Name</th>\n          <td>{{sellerInfo.StoreName}}</td>\n        </tr>\n        <tr *ngIf=\"sellerInfo.StoreURL\">\n          <th scope=\"row\">Buy Product At</th>\n          <td><a href=\"{{sellerInfo.StoreURL}}\" target=\"_blank\">Store</a></td>\n          <!-- <td>{{sellerInfo.StoreURL}}</td> -->\n        </tr>\n        <!-- <tr *ngIf=\"info.rating\">\n          <th scope=\"row\">Rating</th>\n          <td>{{info.rating}} <app-star [rating]=\"info.rating\"></app-star> </td>\n        </tr>\n        <tr *ngIf=\"info.ggPage\">\n          <th scope=\"row\">Google Page</th>\n          <td><a [href]=\"info.ggPage\">{{info.ggPage}}</a></td>\n        </tr> -->\n        <!-- <tr *ngIf=\"info.website\">\n          <th scope=\"row\">Website</th>\n          <td><a [href]=\"info.website\">{{info.website}}</a></td>\n        </tr>\n        <tr *ngIf=\"info.hours\">\n          <th scope=\"row\">Hours</th>\n          <td>{{openTextMap[info.hours.open_now]}} <span *ngIf=\"info.hours.open_now && info.hours.weekday_text\">{{info.hours.weekday_text[0].split(\": \")[1]}}</span>  <a *ngIf=\"info.hours.weekday_text\" href=\"#\" data-toggle=\"modal\" data-target=\"#open-hours\">Daily open hours</a></td>\n        </tr> -->\n      </tbody>\n    </table>\n  </div>\n  \n"

/***/ }),

/***/ "./src/app/details/seller-tab/seller-tab.component.ts":
/*!************************************************************!*\
  !*** ./src/app/details/seller-tab/seller-tab.component.ts ***!
  \************************************************************/
/*! exports provided: SellerTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerTabComponent", function() { return SellerTabComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _seller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./seller */ "./src/app/details/seller-tab/seller.ts");
/* harmony import */ var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-svg-round-progressbar */ "./node_modules/angular-svg-round-progressbar/dist/index.js");
/* harmony import */ var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_3__);





var SellerTabComponent = /** @class */ (function () {
    function SellerTabComponent() {
    }
    SellerTabComponent.prototype.ngOnChanges = function () {
        this.percent = this.sellerInfo.PositiveFeedbackPercent;
        // console.log(this.sellerInfo);
    };
    SellerTabComponent.prototype.open = function () {
        window.open(this.sellerInfo.StoreURL);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _seller__WEBPACK_IMPORTED_MODULE_2__["Seller"])
    ], SellerTabComponent.prototype, "sellerInfo", void 0);
    SellerTabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-seller-tab',
            template: __webpack_require__(/*! ./seller-tab.component.html */ "./src/app/details/seller-tab/seller-tab.component.html"),
            styles: [__webpack_require__(/*! ./seller-tab.component.css */ "./src/app/details/seller-tab/seller-tab.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_3__["RoundProgressModule"]],
            providers: [{
                    provide: angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_3__["ROUND_PROGRESS_DEFAULTS"],
                    useValue: {
                    // nn
                    // color: '#f00',
                    // background: '#0f0'
                    }
                }]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SellerTabComponent);
    return SellerTabComponent;
}());



/***/ }),

/***/ "./src/app/details/seller-tab/seller.ts":
/*!**********************************************!*\
  !*** ./src/app/details/seller-tab/seller.ts ***!
  \**********************************************/
/*! exports provided: Seller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Seller", function() { return Seller; });
var Seller = /** @class */ (function () {
    function Seller() {
    }
    return Seller;
}());



/***/ }),

/***/ "./src/app/details/shipping-tab/shipping-tab.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/details/shipping-tab/shipping-tab.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".check {\n    display: inline-block;\n    width: 8px;\n    height: 16px;\n    border-color: #009933;\n    border-style: solid;\n    border-width: 0 3px 5px 0;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n}\n.clo {\n    color: red;\n    font-size: 25px;\n}\n.material-icons.green {\n    color: #009933;\n}\n.material-icons.red {\n    color: red;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlscy9zaGlwcGluZy10YWIvc2hpcHBpbmctdGFiLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsVUFBVTtJQUNWLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixnQ0FBd0I7WUFBeEIsd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUVBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvZGV0YWlscy9zaGlwcGluZy10YWIvc2hpcHBpbmctdGFiLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hlY2sge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogOHB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgICBib3JkZXItY29sb3I6ICMwMDk5MzM7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDAgM3B4IDVweCAwO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cbi5jbG8ge1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4ubWF0ZXJpYWwtaWNvbnMuZ3JlZW4ge1xuICAgIGNvbG9yOiAjMDA5OTMzO1xufVxuXG4ubWF0ZXJpYWwtaWNvbnMucmVkIHtcbiAgICBjb2xvcjogcmVkO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/details/shipping-tab/shipping-tab.component.html":
/*!******************************************************************!*\
  !*** ./src/app/details/shipping-tab/shipping-tab.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-warning\" role=\"alert\" *ngIf=\"!shippings\">\n    No Records.\n</div>\n<div id=\"shipping-div\" *ngIf=\"shippings\" class=\"table-responsive\">\n    <table class=\"table table-striped table-dark\">\n      <tbody>\n        <tr *ngIf=\"shippings.shippingServiceCost\">\n          <th scope=\"row\">Shipping Cost</th>\n          <td >{{shippings.shippingServiceCost}}</td>\n        </tr>\n        <tr *ngIf=\"shippings.shipToLocations\">\n          <th scope=\"row\">Shipping Locations</th>\n          <td>{{shippings.shipToLocations}}</td>\n        </tr>\n        <tr *ngIf=\"shippings.handlingTime\">\n          <th scope=\"row\">Handling time</th>\n          <td>{{shippings.handlingTime}}</td>\n        </tr>\n        <tr *ngIf=\"shippings.expeditedShipping\">\n          <th scope=\"row\">Expedited Shipping</th>\n          <td *ngIf=\"shippings.expeditedShipping == 'true'\"><i class=\"material-icons green\">check</i></td>\n          <td *ngIf=\"shippings.expeditedShipping == 'false'\"><i class=\"material-icons red\">close</i></td>\n        </tr>\n        <tr *ngIf=\"shippings.oneDayShippingAvailable\">\n          <th scope=\"row\">One Day Shipping</th>\n          <td *ngIf=\"shippings.oneDayShippingAvailable == 'true'\"><i class=\"material-icons green\">check</i></td>\n          <td *ngIf=\"shippings.oneDayShippingAvailable == 'false'\"><i class=\"material-icons red\">close</i></td>\n        </tr>\n        <tr *ngIf=\"shippings.returnsAccepted\">\n          <th scope=\"row\">Return Accepted</th>\n          <td *ngIf=\"shippings.returnsAccepted == 'true'\"><i class=\"material-icons green\">check</i></td>\n          <td *ngIf=\"shippings.returnsAccepted == 'false'\"><i class=\"material-icons red\">close</i></td>\n        </tr>\n        <!-- <tr *ngIf=\"info.rating\">\n          <th scope=\"row\">Rating</th>\n          <td>{{info.rating}} <app-star [rating]=\"info.rating\"></app-star> </td>\n        </tr>\n        <tr *ngIf=\"info.ggPage\">\n          <th scope=\"row\">Google Page</th>\n          <td><a [href]=\"info.ggPage\">{{info.ggPage}}</a></td>\n        </tr> -->\n        <!-- <tr *ngIf=\"info.website\">\n          <th scope=\"row\">Website</th>\n          <td><a [href]=\"info.website\">{{info.website}}</a></td>\n        </tr>\n        <tr *ngIf=\"info.hours\">\n          <th scope=\"row\">Hours</th>\n          <td>{{openTextMap[info.hours.open_now]}} <span *ngIf=\"info.hours.open_now && info.hours.weekday_text\">{{info.hours.weekday_text[0].split(\": \")[1]}}</span>  <a *ngIf=\"info.hours.weekday_text\" href=\"#\" data-toggle=\"modal\" data-target=\"#open-hours\">Daily open hours</a></td>\n        </tr> -->\n      </tbody>\n    </table>\n  </div>\n  \n"

/***/ }),

/***/ "./src/app/details/shipping-tab/shipping-tab.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/details/shipping-tab/shipping-tab.component.ts ***!
  \****************************************************************/
/*! exports provided: ShippingTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingTabComponent", function() { return ShippingTabComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shipping__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shipping */ "./src/app/details/shipping-tab/shipping.ts");



var ShippingTabComponent = /** @class */ (function () {
    function ShippingTabComponent() {
    }
    ShippingTabComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _shipping__WEBPACK_IMPORTED_MODULE_2__["Shipping"])
    ], ShippingTabComponent.prototype, "shippings", void 0);
    ShippingTabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shipping-tab',
            template: __webpack_require__(/*! ./shipping-tab.component.html */ "./src/app/details/shipping-tab/shipping-tab.component.html"),
            styles: [__webpack_require__(/*! ./shipping-tab.component.css */ "./src/app/details/shipping-tab/shipping-tab.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ShippingTabComponent);
    return ShippingTabComponent;
}());



/***/ }),

/***/ "./src/app/details/shipping-tab/shipping.ts":
/*!**************************************************!*\
  !*** ./src/app/details/shipping-tab/shipping.ts ***!
  \**************************************************/
/*! exports provided: Shipping */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shipping", function() { return Shipping; });
var Shipping = /** @class */ (function () {
    function Shipping() {
    }
    return Shipping;
}());



/***/ }),

/***/ "./src/app/fade-in.animation.ts":
/*!**************************************!*\
  !*** ./src/app/fade-in.animation.ts ***!
  \**************************************/
/*! exports provided: fadeInAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInAnimation", function() { return fadeInAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var fadeInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])("fadeInAnimation", [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("* => *", [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(".3s", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
    ])
]);


/***/ }),

/***/ "./src/app/favorite.service.ts":
/*!*************************************!*\
  !*** ./src/app/favorite.service.ts ***!
  \*************************************/
/*! exports provided: FavoriteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteService", function() { return FavoriteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");



var FavoriteService = /** @class */ (function () {
    function FavoriteService() {
        this._favorite = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.favorite = this._favorite.asObservable();
        this._isStorageChange = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.isStorageChange = this._isStorageChange.asObservable();
        this.page = 1;
    }
    FavoriteService.prototype.saveFavorite = function (itemId, image, title, price, shipping, seller, viewUrl) {
        //let timestamp = new Date();
        var favJson = {
            itemId: itemId,
            image: image,
            title: title,
            price: price,
            shipping: shipping,
            seller: seller,
            viewUrl: viewUrl
            //timestamp: timestamp.getTime()
        };
        // console.log(JSON.stringify(favJson));
        localStorage.setItem(itemId, JSON.stringify(favJson));
        this.getAllFavorite(this.page);
    };
    FavoriteService.prototype.getAllFavorite = function (page) {
        this.page = page;
        var favPerPage = 20;
        var allFavorite = [];
        var flag = favPerPage;
        var localStorageArray = new Array(localStorage.length);
        for (var i = 0; i < localStorage.length; i++) {
            localStorageArray[i] = JSON.parse(localStorage.getItem(localStorage.key(i)));
        }
        // localStorageArray.sort((a, b) => {
        //   if (a.timestamp > b.timestamp) {
        //     return 1;
        //   } else {
        //     return -1;
        //   }
        // });
        if ((page - 1) * favPerPage == localStorage.length) {
            // last item
            this.page--;
            page--;
            if (this.page == 0) {
                this.page = 1;
                this._favorite.next({ allFav: null, flag: null });
                this._isStorageChange.next(true);
                return;
            }
        }
        for (var i = (page - 1) * favPerPage; i < localStorage.length && i < page * favPerPage; i++, flag--) {
            // let key = localStorage.key(i);
            var value = localStorageArray[i];
            allFavorite.push(value);
        }
        // return allFavorite;
        var returnJson = {
            allFav: allFavorite,
            flag: flag
        };
        this._favorite.next(returnJson);
        this._isStorageChange.next(true);
    };
    FavoriteService.prototype.removeFavorite = function (key) {
        // localStorage.clear();
        localStorage.removeItem(key);
        this.getAllFavorite(this.page);
    };
    FavoriteService.prototype.isFavorited = function (place_id_arr) {
        var result = [];
        for (var _i = 0, place_id_arr_1 = place_id_arr; _i < place_id_arr_1.length; _i++) {
            var place_id = place_id_arr_1[_i];
            if (!localStorage.getItem(place_id)) {
                result.push(false);
            }
            else {
                result.push(true);
            }
        }
        return result;
    };
    FavoriteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FavoriteService);
    return FavoriteService;
}());



/***/ }),

/***/ "./src/app/favorite/favorite.component.css":
/*!*************************************************!*\
  !*** ./src/app/favorite/favorite.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pagination button {\n    margin: auto;\n    margin-top: 30px;\n    text-align: center;\n}\n\n#favorite-div {\n    overflow: scroll;\n    margin: auto;\n    margin-top: 30px;\n}\n\n.details-btn {\n    text-align: right;\n    margin-bottom: 10px;\n}\n\n.category-icon {\n    width: 100px;\n    height: 100px;\n}\n\n.btn-outline {\n    border: 1px solid;\n    border-color: darkgray\n}\n\n.material-icons.remove {\n    color: #e7b806;\n}\n\n.calcu {\n    -webkit-transform: translateY(0%) translateX(80%);\n            transform: translateY(0%) translateX(80%);\n\n    /* margin-left: 500px; */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmF2b3JpdGUvZmF2b3JpdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxpQkFBaUI7SUFDakI7QUFDSjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxpREFBeUM7WUFBekMseUNBQXlDOztJQUV6Qyx3QkFBd0I7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9mYXZvcml0ZS9mYXZvcml0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2luYXRpb24gYnV0dG9uIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNmYXZvcml0ZS1kaXYge1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5kZXRhaWxzLWJ0biB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmNhdGVnb3J5LWljb24ge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xufVxuLmJ0bi1vdXRsaW5lIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IGRhcmtncmF5XG59XG5cbi5tYXRlcmlhbC1pY29ucy5yZW1vdmUge1xuICAgIGNvbG9yOiAjZTdiODA2O1xufVxuXG4uY2FsY3Uge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSkgdHJhbnNsYXRlWCg4MCUpO1xuXG4gICAgLyogbWFyZ2luLWxlZnQ6IDUwMHB4OyAqL1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/favorite/favorite.component.html":
/*!**************************************************!*\
  !*** ./src/app/favorite/favorite.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"details-btn\">\n  <button class=\"btn btn-outline-secondary\" [disabled]=\"!selectedPlace\" (click)=\"showDetails(); false;\">Details\n    <i class=\"fas fa-angle-right\"></i>\n  </button>\n</div>\n<div id=\"favorite-div\">\n  <div class=\"alert alert-warning\" role=\"alert\" *ngIf=\"!favorites\">\n    No Records.\n  </div>\n  <div *ngIf=\"favorites\">\n    <div class=\"table-responsive\">\n      <table class=\"table table-striped table-dark\">\n        <thead>\n          <tr>\n            <th scope=\"col\">#</th>\n            <th scope=\"col\">Image</th>\n            <th scope=\"col\">Title</th>\n            <th scope=\"col\">Price</th>\n            <th scope=\"col\">Shipping</th>\n            <th scope=\"col\">Seller</th>\n            <th scope=\"col\">Wish List</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let favrow of favorites; index as i\" [class.table-dark]=\"favrow.itemId == selectedPlace\">\n            <th scope=\"row\">\n              {{i+1}}\n            </th>\n            <td>\n\n              <a [href]=\"favrow.image['0']\" target=\"_blank\">\n                  <img src= \"{{favrow.image['0']}}\" alt=\"icon\" class=\"category-icon\">\n              </a>\n              \n            </td>\n\n            <td><a style=\"text-decoration:underline\" (click)=\"$event.stopPropagation(); getDetails(favrow.itemId,i)\" matTooltip='{{favrow[\"title\"]}}'>{{getTitle(favrow[\"title\"])}}</a></td>\n\n            <td>${{favrow.price}}</td>\n            <td *ngIf='favrow.shipping == 0'>\n                Free Shipping</td>\n            <td *ngIf='favrow.shipping != 0'>\n                ${{favrow.shipping}}\n            </td>  \n            <td>{{favrow.seller}}</td>\n\n            <td>\n              <button type=\"button\" class=\"btn btn-outline\" (click)=\"removeFavorite(favrow.itemId)\">\n                  <i class=\"material-icons remove\">remove_shopping_cart</i>\n              </button>\n            </td>\n\n\n            <!-- <td>\n              <button type=\"button\" class=\"btn btn-outline\" (click)=\"$event.stopPropagation(); getDetails(favrow.placeId)\">\n                <i class=\"fas fa-angle-right\"></i>\n              </button>\n            </td> -->\n            \n          </tr>\n          <tr>\n            <td></td>\n            <td></td>\n            <td></td>\n            <td></td>\n            <td></td>\n            <td>Total Shopping</td>\n            <td>${{calPrice()}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <div class=\"pagination\">\n      <button class=\"btn btn-outline-secondary\" (click)=\"getPrevPage()\" *ngIf=\"prevPage\">Prev</button>\n      <button class=\"btn btn-outline-secondary\" (click)=\"getNextPage()\" *ngIf=\"nextPage\">Next</button>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/favorite/favorite.component.ts":
/*!************************************************!*\
  !*** ./src/app/favorite/favorite.component.ts ***!
  \************************************************/
/*! exports provided: FavoriteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteComponent", function() { return FavoriteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _favorite_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../favorite.service */ "./src/app/favorite.service.ts");
/* harmony import */ var _details_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../details.service */ "./src/app/details.service.ts");
/* harmony import */ var _search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../search.service */ "./src/app/search.service.ts");





var FavoriteComponent = /** @class */ (function () {
    function FavoriteComponent(fService, dService, sService) {
        var _this = this;
        this.fService = fService;
        this.dService = dService;
        this.sService = sService;
        this.slide = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nextPage = false;
        this.prevPage = false;
        this.curPage = 1;
        this.fService.favorite.subscribe(function (data) {
            _this.favorites = data["allFav"];
            // console.log(data);
            // if (!data["flag"]) {
            //   this.nextPage = true;
            // } else {
            //   this.nextPage = false;
            // }
        });
        this.sService.isClear.subscribe(function (data) {
            // console.log(data);
        });
    }
    FavoriteComponent.prototype.calPrice = function () {
        var sum = 0.0;
        for (var i = 0; i < this.favorites.length; i++) {
            sum += parseFloat(this.favorites[i]["price"]);
        }
        return sum;
    };
    FavoriteComponent.prototype.getTitle = function (title) {
        if (title["0"].length > 35) {
            var temCh = title["0"].charAt(35);
            if (temCh != " ") {
                for (var i = 34; i >= 0; i--) {
                    if (title["0"].charAt(i) == " ") {
                        return title["0"].substring(0, i) + "...";
                    }
                }
            }
            return title["0"].substring(0, 35) + "...";
        }
        return title;
    };
    FavoriteComponent.prototype.highLightRow = function (placeId) {
        this.selectedPlace = placeId;
    };
    FavoriteComponent.prototype.showDetails = function () {
        this.slide.emit({ slide: "left", place: this.selectedPlace });
    };
    FavoriteComponent.prototype.getDetails = function (key, index) {
        if (this.selectedPlace != key) {
            this.dService.getDetails(key, index);
        }
        this.highLightRow(key);
        this.slide.emit({ slide: "left", place: key });
    };
    FavoriteComponent.prototype.removeFavorite = function (key) {
        this.fService.removeFavorite(key);
    };
    // getNextPage() {
    //   this.fService.getAllFavorite(this.curPage + 1);
    //   this.curPage++;
    //   if (this.curPage > 1) {
    //     this.prevPage = true;
    //   }
    // }
    // getPrevPage() {
    //   this.fService.getAllFavorite(this.curPage - 1);
    //   this.curPage--;
    //   if (this.curPage == 1) {
    //     this.prevPage = false;
    //   }
    // }
    FavoriteComponent.prototype.loadFavorite = function () {
        this.fService.getAllFavorite(this.curPage);
    };
    FavoriteComponent.prototype.ngOnInit = function () {
        this.loadFavorite();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FavoriteComponent.prototype, "slide", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("place"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FavoriteComponent.prototype, "selectedPlace", void 0);
    FavoriteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-favorite",
            template: __webpack_require__(/*! ./favorite.component.html */ "./src/app/favorite/favorite.component.html"),
            styles: [__webpack_require__(/*! ./favorite.component.css */ "./src/app/favorite/favorite.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_favorite_service__WEBPACK_IMPORTED_MODULE_2__["FavoriteService"],
            _details_service__WEBPACK_IMPORTED_MODULE_3__["DetailsService"],
            _search_service__WEBPACK_IMPORTED_MODULE_4__["SearchService"]])
    ], FavoriteComponent);
    return FavoriteComponent;
}());



/***/ }),

/***/ "./src/app/geolocation.service.ts":
/*!****************************************!*\
  !*** ./src/app/geolocation.service.ts ***!
  \****************************************/
/*! exports provided: GeolocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeolocationService", function() { return GeolocationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var GeolocationService = /** @class */ (function () {
    function GeolocationService(http) {
        this.http = http;
        this.url = 'http://ip-api.com/json';
    }
    GeolocationService.prototype.getGeolocation = function () {
        return this.http.get(this.url);
    };
    GeolocationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GeolocationService);
    return GeolocationService;
}());



/***/ }),

/***/ "./src/app/loader/loader.component.css":
/*!*********************************************!*\
  !*** ./src/app/loader/loader.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/loader/loader.component.html":
/*!**********************************************!*\
  !*** ./src/app/loader/loader.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"progress\" *ngIf=\"show\">\n  <div class=\"progress-bar progress-bar-striped progress-bar-animated\" role=\"progressbar\" [attr.aria-valuenow]=\"loaderService.progress$|async\" aria-valuemin=\"0\" aria-valuemax=\"100\" [style.width]=\"(loaderService.progress$|async) + '%'\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/loader/loader.component.ts":
/*!********************************************!*\
  !*** ./src/app/loader/loader.component.ts ***!
  \********************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader.service */ "./src/app/loader/loader.service.ts");



var LoaderComponent = /** @class */ (function () {
    function LoaderComponent(loaderService) {
        this.loaderService = loaderService;
        this.show = false;
    }
    LoaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.loaderService.loaderState.subscribe(function (state) {
            _this.show = state.show;
        });
    };
    LoaderComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-loader",
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.css */ "./src/app/loader/loader.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/loader/loader.interceptor.ts":
/*!**********************************************!*\
  !*** ./src/app/loader/loader.interceptor.ts ***!
  \**********************************************/
/*! exports provided: LoaderInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderInterceptor", function() { return LoaderInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader.service */ "./src/app/loader/loader.service.ts");
/* harmony import */ var rxjs_operator_finally__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operator/finally */ "./node_modules/rxjs-compat/_esm5/operator/finally.js");




var LoaderInterceptor = /** @class */ (function () {
    function LoaderInterceptor(loaderService) {
        this.loaderService = loaderService;
    }
    LoaderInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        var handler = next.handle(req);
        var started = false;
        var resSubscribe = handler.subscribe.bind(handler);
        handler.subscribe = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            _this.loaderService.show();
            started = true;
            return resSubscribe.apply(void 0, args);
        };
        return rxjs_operator_finally__WEBPACK_IMPORTED_MODULE_3__["_finally"].call(handler, function () { return started && _this.loaderService.hide(); });
    };
    LoaderInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]])
    ], LoaderInterceptor);
    return LoaderInterceptor;
}());



/***/ }),

/***/ "./src/app/loader/loader.service.ts":
/*!******************************************!*\
  !*** ./src/app/loader/loader.service.ts ***!
  \******************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var rxjs_operator_debounceTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operator/debounceTime */ "./node_modules/rxjs-compat/_esm5/operator/debounceTime.js");




var LoaderService = /** @class */ (function () {
    function LoaderService() {
        this.progress$ = rxjs_operator_debounceTime__WEBPACK_IMPORTED_MODULE_3__["debounceTime"].call(new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]());
        this._value = 0;
        this._pendingRequests = 0;
        this.loaderSubject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.loaderState = this.loaderSubject.asObservable();
    }
    LoaderService.prototype.show = function () {
        this._pendingRequests += 1;
        this.loaderSubject.next({ show: true });
        if (!this._value || this._pendingRequests == 1) {
            this.set(this._pendingRequests === 1 && this._value > 0 ? this._value : 0);
        }
    };
    LoaderService.prototype.set = function (value) {
        var _this = this;
        this._value = value;
        this.progress$.next(value);
        if (!this._pendingRequests) {
            return;
        }
        clearTimeout(this._timeOut);
        if (this._value >= 0 && this._value < 95) {
            this._timeOut = setTimeout(function () { return _this.set(_this._value + 5); }, 100);
        }
    };
    LoaderService.prototype.hide = function () {
        var _this = this;
        if (!this._pendingRequests && !this._value) {
            return;
        }
        if (this._pendingRequests > 0) {
            this._pendingRequests -= 1;
        }
        if (!this._pendingRequests) {
            this.set(100);
        }
        this.loaderSubject.next({ show: false });
        setTimeout(function () { return _this.set(0); }, 500);
    };
    LoaderService.prototype.ngOnDestroy = function () {
        this.progress$.complete();
    };
    LoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoaderService);
    return LoaderService;
}());



/***/ }),

/***/ "./src/app/result-container/result-container.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/result-container/result-container.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#result-and-favorite {\n    text-align: center;\n    margin: auto;\n    margin-bottom: 50px;\n}\n\n#slide-container {\n    width: 100%;\n    /* display: flex; */\n    /* right: 0; */\n    position: absolute;\n    overflow: hidden;\n}\n\n@media (max-width: 600px) {\n    #slide-container {\n        width: 100%;\n        /* display: flex; */\n        right: 0;\n        position: absolute;\n        overflow: hidden;\n    }\n}\n\n.slide-div {\n    flex: 1;\n    position: relative;\n}\n\n.hide {\n    display: none;\n}\n\n.show {\n    display: block;\n}\n\n/* .btn-group .active {\n    background-color: black;\n} */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdWx0LWNvbnRhaW5lci9yZXN1bHQtY29udGFpbmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSTtRQUNJLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsUUFBUTtRQUNSLGtCQUFrQjtRQUNsQixnQkFBZ0I7SUFDcEI7QUFDSjs7QUFFQTtJQUNJLE9BQU87SUFDUCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTs7R0FFRyIsImZpbGUiOiJzcmMvYXBwL3Jlc3VsdC1jb250YWluZXIvcmVzdWx0LWNvbnRhaW5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Jlc3VsdC1hbmQtZmF2b3JpdGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuI3NsaWRlLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLyogZGlzcGxheTogZmxleDsgKi9cbiAgICAvKiByaWdodDogMDsgKi9cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgI3NsaWRlLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cbn1cblxuLnNsaWRlLWRpdiB7XG4gICAgZmxleDogMTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5oaWRlIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2hvdyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIC5idG4tZ3JvdXAgLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59ICovXG4iXX0= */"

/***/ }),

/***/ "./src/app/result-container/result-container.component.html":
/*!******************************************************************!*\
  !*** ./src/app/result-container/result-container.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div id=\"result-and-favorite\">\n    <div class=\"btn-group\" role=\"group\">\n      <button type=\"button\" [class]=\"resultShowClass\" (click)=\"showResult()\">Results</button>\n      <button type=\"button\" [class]=\"favoriteShowClass\" (click)=\"showFavorite()\">Wish List</button>\n    </div>\n  </div>\n  <app-loader></app-loader>\n  <div id=\"slide-container\" [@slideAnimation]=\"active\" class=\"container\" *ngIf=\"!clear\">\n    <div class=\"slide-div\" [class.hide]=\"active == 'right'\">\n      <div>\n        <app-details (slide)=\"slideRight($event)\"></app-details>\n      </div>\n    </div>\n    <div class=\"slide-div\" [class.hide]=\"active == 'left'\">\n      <div>\n        <app-result-table (slide)=\"slideLeft($event)\" [class.hide]=\"!isShowResult\" [place]=\"place\"></app-result-table>\n        <app-favorite (slide)=\"slideLeft($event)\" [class.hide]=\"!isShowFavorite\" [place]=\"place\"></app-favorite>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/result-container/result-container.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/result-container/result-container.component.ts ***!
  \****************************************************************/
/*! exports provided: ResultContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultContainerComponent", function() { return ResultContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../search.service */ "./src/app/search.service.ts");
/* harmony import */ var _details_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../details.service */ "./src/app/details.service.ts");





var ResultContainerComponent = /** @class */ (function () {
    function ResultContainerComponent(sService, dService) {
        var _this = this;
        this.sService = sService;
        this.dService = dService;
        this.clear = false;
        this.isShowResult = true;
        this.isShowFavorite = false;
        this.resultShowClass = "btn btn-dark";
        this.favoriteShowClass = "btn btn-light";
        this.place = "";
        this.sService.isClear.subscribe(function (data) {
            _this.showResult();
            _this.isShowResult = false;
            _this.clear = true;
            _this.place = null;
        });
        this.sService.isDataget.subscribe(function (data) {
            _this.showResult();
            _this.isShowResult = true;
            _this.clear = false;
        });
    }
    ResultContainerComponent.prototype.slideRight = function (panel) {
        this.clear = false;
        this.active = panel;
    };
    ResultContainerComponent.prototype.slideLeft = function (event) {
        this.clear = false;
        this.active = event.slide;
        this.place = event.place;
    };
    ResultContainerComponent.prototype.showResult = function () {
        this.clear = false;
        this.isShowFavorite = false;
        this.isShowResult = true;
        this.active = 'right';
        this.resultShowClass = "btn btn-dark";
        this.favoriteShowClass = "btn btn-light";
    };
    ResultContainerComponent.prototype.showFavorite = function () {
        this.clear = false;
        this.isShowResult = false;
        this.isShowFavorite = true;
        this.active = 'right';
        this.resultShowClass = "btn btn-light";
        this.favoriteShowClass = "btn btn-dark";
    };
    ResultContainerComponent.prototype.ngOnInit = function () {
    };
    ResultContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-result-container",
            template: __webpack_require__(/*! ./result-container.component.html */ "./src/app/result-container/result-container.component.html"),
            // changeDetection: ChangeDetectionStrategy.OnPush,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("slideAnimation", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])("* => right", [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ right: '-100%' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('.5s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ right: 0 }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])("* => left", [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ left: '-100%' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ left: 0 }))
                    ]),
                ])
            ],
            styles: [__webpack_require__(/*! ./result-container.component.css */ "./src/app/result-container/result-container.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"], _details_service__WEBPACK_IMPORTED_MODULE_4__["DetailsService"]])
    ], ResultContainerComponent);
    return ResultContainerComponent;
}());



/***/ }),

/***/ "./src/app/result-table/result-table.component.css":
/*!*********************************************************!*\
  !*** ./src/app/result-table/result-table.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pagination button {\n    margin: auto;\n    margin-top: 30px;\n    text-align: center;\n}\n\n#results-div {\n    /* overflow: scroll; */\n    margin: auto;\n    margin-top: 30px;\n}\n\n.details-btn {\n    text-align: right;\n    margin-bottom: 10px;\n    width: 100%;\n    display: block;\n}\n\n.category-icon {\n    width: 100px;\n    height: 100px;\n}\n\n.favorited {\n    color: orange;\n}\n\n.btn-outline {\n    border: 1px solid;\n    border-color: darkgray\n}\n\n.table {\n    overflow: scroll;\n}\n\n.has-text-centered {\n    text-align: center;\n    /* background-color: black; */\n}\n\n#result /deep/ .ngx-pagination .current {\n    background: black;\n}\n\n.material-icons.remove {\n    color: #e7b806;\n}\n\n@media (max-width: 600px) {\n    \n    table {\n        -webkit-overflow-scrolling: touch;\n        /* height: 100vh; */\n        overflow : scroll;\n        ;\n    }\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdWx0LXRhYmxlL3Jlc3VsdC10YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakI7QUFDSjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBOztJQUVJO1FBQ0ksaUNBQWlDO1FBQ2pDLG1CQUFtQjtRQUNuQixpQkFBaUI7O0lBRXJCOztBQUVKIiwiZmlsZSI6InNyYy9hcHAvcmVzdWx0LXRhYmxlL3Jlc3VsdC10YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2luYXRpb24gYnV0dG9uIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNyZXN1bHRzLWRpdiB7XG4gICAgLyogb3ZlcmZsb3c6IHNjcm9sbDsgKi9cbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmRldGFpbHMtYnRuIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY2F0ZWdvcnktaWNvbiB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG59XG5cbi5mYXZvcml0ZWQge1xuICAgIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5idG4tb3V0bGluZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiBkYXJrZ3JheVxufVxuXG4udGFibGUge1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG59XG4uaGFzLXRleHQtY2VudGVyZWQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgKi9cbn1cblxuI3Jlc3VsdCAvZGVlcC8gLm5neC1wYWdpbmF0aW9uIC5jdXJyZW50IHtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuLm1hdGVyaWFsLWljb25zLnJlbW92ZSB7XG4gICAgY29sb3I6ICNlN2I4MDY7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIFxuICAgIHRhYmxlIHtcbiAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgICAgICAvKiBoZWlnaHQ6IDEwMHZoOyAqL1xuICAgICAgICBvdmVyZmxvdyA6IHNjcm9sbDtcbiAgICAgICAgO1xuICAgIH1cblxufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/result-table/result-table.component.html":
/*!**********************************************************!*\
  !*** ./src/app/result-table/result-table.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"error && showResult\">\n  Failed to get search result.\n</div>\n<div class=\"details-btn\" *ngIf=\"showResult && !error\">\n  <button class=\"btn btn-outline-secondary\" [disabled]=\"!selectedRow\" (click)=\"showDetails()\">Details\n    <i class=\"fas fa-angle-right\"></i>\n  </button>\n</div>\n\n<div id=\"results-div\" *ngIf=\"showResult && !error\" class=\"table-responsive\">\n  <div class=\"alert alert-warning\" role=\"alert\" *ngIf=\"!resultJson\">\n    No Records.\n  </div>\n  <table class=\"table table-striped table-dark\" *ngIf=\"resultJson && resultJson != 'loading'\">\n    <thead>\n      <tr>\n        <th scope=\"col\">#</th>\n        <th scope=\"col\">Image</th>\n        <th scope=\"col\">Title</th>\n        <th scope=\"col\">Price</th>\n        <th scope=\"col\">Shipping</th>\n        <th scope=\"col\">Zip</th>\n        <th scope=\"col\">Seller</th>\n        <th scope=\"col\">Wish List</th>\n      </tr>\n    </thead>\n    <tbody>\n        <!-- | paginate: { itemsPerPage: 10, currentPage: page } -->\n      <tr *ngFor=\"let rowdata of resultJson | paginate: {  id: 'result', currentPage: page, itemsPerPage: itemsPerPage }; let i = index\" [class.table-dark]=\"rowdata.itemId == selectedRow\">\n        <th scope=\"row\">{{getIndex(page, itemsPerPage, i)}}</th>\n        <td>\n          <img *ngIf=\"rowdata.galleryURL\" src={{rowdata.galleryURL}} alt=\"icon\" class=\"category-icon\">\n          <p *ngIf=\"rowdata.galleryURL == undefined\">N/A</p>\n        </td>\n        <td>\n          <a *ngIf=\"rowdata['title']\" style=\"text-decoration:underline; color: #126aff\" (click)=getDetails(rowdata.itemId,i) matTooltip='{{rowdata[\"title\"]}}'>{{getTitle(rowdata[\"title\"])}}</a>\n          <p *ngIf=\"rowdata['title'] == undefined\">N/A</p>\n        </td>\n\n        <td>\n          <p *ngIf='rowdata[\"sellingStatus\"][\"0\"][\"currentPrice\"][\"0\"][\"__value__\"]' >${{rowdata[\"sellingStatus\"][\"0\"][\"currentPrice\"][\"0\"][\"__value__\"]}}</p> \n          <p *ngIf='rowdata[\"sellingStatus\"][\"0\"][\"currentPrice\"][\"0\"][\"__value__\"] == undefined'>N/A</p>\n        </td>\n        <td *ngIf='rowdata[\"shippingInfo\"][\"0\"][\"shippingServiceCost\"][\"0\"][\"__value__\"] == 0'>\n            Free Shipping</td>\n        <td *ngIf='rowdata[\"shippingInfo\"][\"0\"][\"shippingServiceCost\"] == undefined'>\n            N/A</td>\n        <td *ngIf='rowdata[\"shippingInfo\"][\"0\"][\"shippingServiceCost\"] && rowdata[\"shippingInfo\"][\"0\"][\"shippingServiceCost\"][\"0\"][\"__value__\"] != 0'>\n            ${{rowdata[\"shippingInfo\"][\"0\"][\"shippingServiceCost\"][\"0\"][\"__value__\"]}}</td>\n        <td *ngIf=\"rowdata.postalCode == undefined\" >N/A</td>\n        <td *ngIf=\"rowdata.postalCode\" >{{rowdata.postalCode}}</td>\n\n        <td *ngIf='rowdata[\"sellerInfo\"][\"0\"][\"sellerUserName\"] == undefined'>N/A</td>\n        <td *ngIf='rowdata[\"sellerInfo\"][\"0\"][\"sellerUserName\"]'>{{rowdata[\"sellerInfo\"][\"0\"][\"sellerUserName\"]}}</td>\n\n\n        <td>\n          <button *ngIf=\"isFavorite[(page-1)*10+i]\" type=\"button\" class=\"btn btn-outline\" (click)=\"setFavorite(i)\">\n              <i class=\"material-icons remove\">remove_shopping_cart</i>\n          </button>\n\n          <button *ngIf=\"!isFavorite[(page-1)*10+i]\" type=\"button\" class=\"btn btn-outline\" (click)=\"setFavorite(i)\">\n              <i class=\"material-icons\">add_shopping_cart</i>\n          </button>\n        </td>\n        <!-- <td>\n          <button type=\"button\" class=\"btn btn-outline\" (click)=\"getDetails(rowdata.place_id)\">\n            <i class=\"fas fa-angle-right\"></i>\n          </button>\n        </td> -->\n      </tr>\n    </tbody>\n  </table>\n\n  <div class=\"has-text-centered\" *ngIf=\"resultJson && resultJson != 'loading'\">\n      <pagination-controls id=\"result\" (pageChange)=\"page = $event\"></pagination-controls>\n  </div>\n  \n</div>\n<!-- <div class=\"pagination\" *ngIf=\"resultJson\">\n  <button class=\"btn btn-outline-secondary\" (click)=\"getPrevPage()\"  *ngIf=\"prevPage\">Prev</button>\n  <button class=\"btn btn-outline-secondary\" (click)=\"getNextPage()\" *ngIf=\"nextPage\">Next</button>\n</div> -->\n"

/***/ }),

/***/ "./src/app/result-table/result-table.component.ts":
/*!********************************************************!*\
  !*** ./src/app/result-table/result-table.component.ts ***!
  \********************************************************/
/*! exports provided: ResultTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultTableComponent", function() { return ResultTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search.service */ "./src/app/search.service.ts");
/* harmony import */ var _details_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../details.service */ "./src/app/details.service.ts");
/* harmony import */ var _favorite_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../favorite.service */ "./src/app/favorite.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");







var ResultTableComponent = /** @class */ (function () {
    function ResultTableComponent(sService, dService, fService) {
        var _this = this;
        this.sService = sService;
        this.dService = dService;
        this.fService = fService;
        this.slide = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.page = 1;
        this.itemsPerPage = 10;
        this.showResult = false;
        this.resultJson = null;
        this.prevPage = false;
        this.curPage = 1;
        this.error = false;
        this.startLocation = "";
        // index : [] as number[];
        this.index = [];
        this.sService.resultJson.subscribe(function (data) {
            //console.log(data);
            if (data === null) {
                _this.error = true;
                _this.showResult = true;
            }
            else if (data === undefined) {
            }
            else if (data["status"] == 'ZERO_RESULTS') {
                _this.resultJson = null;
                _this.showResult = true;
            }
            else if (data == 'clear') {
                _this.resultJson = null;
                _this.showResult = true;
                _this.selectedRow = null;
            }
            else if (data["findItemsAdvancedResponse"]["0"]["searchResult"] == undefined || data["findItemsAdvancedResponse"]["0"]["searchResult"]["0"]["item"] == undefined) {
                _this.resultJson = null;
                _this.showResult = true;
            }
            else {
                // console.log(data);
                _this.resultJson = data["findItemsAdvancedResponse"]["0"]["searchResult"]["0"]["item"];
                _this.checkFavorite();
                // this.nextPage = data["findItemsAdvancedResponse"]["0"]["paginationOutput"]["0"]["pageNumber"];
                //this.geoJson = data["geoJson"];
                //this.startLocation = data["startLocation"];
                _this.error = false;
                _this.showResult = true;
                // console.log(this.resultJson); 
                for (var i = 0; i < _this.resultJson.length; i++) {
                    _this.index[i] = i;
                }
                // console.log(this.index);
            }
        });
        this.fService.isStorageChange.subscribe(function (data) {
            _this.checkFavorite();
        });
    }
    ResultTableComponent.prototype.getIndex = function (page, itemsPerPage, i) {
        // console.log(i);
        return itemsPerPage * (page - 1) + i + 1;
    };
    ResultTableComponent.prototype.getTitle = function (title) {
        if (title["0"].length > 35) {
            var temCh = title["0"].charAt(35);
            if (temCh != " ") {
                for (var i = 34; i >= 0; i--) {
                    if (title["0"].charAt(i) == " ") {
                        return title["0"].substring(0, i) + "...";
                    }
                }
            }
            return title["0"].substring(0, 35) + "...";
        }
        return title;
    };
    ResultTableComponent.prototype.highlightRow = function (placeId) {
        // console.log(placeId);
        this.selectedRow = placeId;
    };
    ResultTableComponent.prototype.showDetails = function () {
        this.slide.emit({ slide: "left", place: this.selectedRow });
    };
    ResultTableComponent.prototype.getDetails = function (placeId, index) {
        //console.log(placeId);
        var temp = (this.page - 1) * this.itemsPerPage + index;
        this.highlightRow(placeId);
        //console.log(index);
        this.dService.getDetails(placeId, temp);
        this.slide.emit({ slide: "left", place: placeId });
    };
    // getDetails() {
    //   console.log("get it");
    // }
    ResultTableComponent.prototype.setFavorite = function (index) {
        var tempIndex = (this.page - 1) * this.itemsPerPage + index;
        if (this.isFavorite[tempIndex]) {
            this.fService.removeFavorite(this.resultJson[tempIndex]["itemId"]);
            this.isFavorite[tempIndex] = false;
        }
        else {
            this.fService.saveFavorite(this.resultJson[tempIndex]["itemId"]["0"], this.resultJson[tempIndex]["galleryURL"], this.resultJson[tempIndex]["title"], this.resultJson[tempIndex]["sellingStatus"]["0"]["currentPrice"]["0"]["__value__"], this.resultJson[tempIndex]["shippingInfo"]["0"]["shippingServiceCost"]["0"]["__value__"], this.resultJson[tempIndex]["sellerInfo"]["0"]["sellerUserName"], this.resultJson[tempIndex]["viewItemURL"]["0"]);
            this.isFavorite[tempIndex] = true;
            // console.log(this.resultJson[tempIndex]);
        }
    };
    ResultTableComponent.prototype.checkFavorite = function () {
        if (this.resultJson) {
            var place_id_arr = this.resultJson.map(function (data) { return data.itemId; });
            // let place_id_arr = this.resultJson;
            this.isFavorite = this.fService.isFavorited(place_id_arr);
        }
    };
    ResultTableComponent.prototype.ngOnInit = function () {
        this.sService.loadSearchResult();
        // this.curPage = 1;
        // console.log(this.resultJson);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ResultTableComponent.prototype, "slide", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("place"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ResultTableComponent.prototype, "selectedRow", void 0);
    ResultTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-result-table",
            template: __webpack_require__(/*! ./result-table.component.html */ "./src/app/result-table/result-table.component.html"),
            styles: [__webpack_require__(/*! ./result-table.component.css */ "./src/app/result-table/result-table.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"],
            _details_service__WEBPACK_IMPORTED_MODULE_3__["DetailsService"],
            _favorite_service__WEBPACK_IMPORTED_MODULE_4__["FavoriteService"]])
    ], ResultTableComponent);
    return ResultTableComponent;
}());



/***/ }),

/***/ "./src/app/search-form/search-form.component.css":
/*!*******************************************************!*\
  !*** ./src/app/search-form/search-form.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#form-header {\n    position: relative;\n    font-size: 18px;\n    font-weight: bold;\n    text-align: center;\n    color: white;\n    margin-bottom: 35px;\n    /* margin-left: 50vw; */\n}\n\n.thisForm {\n    position: relative;\n    top: -30px;\n    width: 700px;\n    /* text-align: center; */\n    margin : 0 auto;\n}\n\n.col-sm-3.col-form-label, .form-check-label {\n    color: white;\n}\n\n.col-sm-15 {\n    padding-left: 30px;\n    /* width: 500px; */\n}\n\n#search-form-div {\n    margin-top: 20px;\n    /* height: 60vh; */\n}\n\n#search-btn-group {\n    padding: 30px;\n}\n\n.btn.btn-light {\n    margin-left: 2vw;\n}\n\n.required {\n    color: red;\n}\n\n.jumbotron.col-md {\n    background-color: #22292a;\n    padding-bottom: 0px;\n    /* height: 800px; */\n}\n\n.material-icons {\n    position: relative;\n    top: 6px;\n    /* left: 5px; */\n}\n\n#keyword {\n    width:300px;\n}\n\n@media (max-width: 768px) { \n    #form-header {\n        position: relative;\n        font-size: 18px;\n        font-weight: bold;\n        text-align: left;\n        color: white;\n        margin-bottom: 35px;\n        /* margin-left: 50vw; */\n    }\n    #keyword {\n        width : 280px;\n    }\n  }\n\n/* .mat-form-field-underline.ng-tns-c3-1.ng-star-inserted {\n    display: none !important;\n} */\n\n/* .mat-form-field-appearance-legacy .mat-form-field-underline {\n    height: 0px !important;\n} */ \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLWZvcm0vc2VhcmNoLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQix1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLGFBQWE7SUFDakI7RUFDRjs7QUFFRjs7R0FFRzs7QUFFSDs7R0FFRyIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC1mb3JtL3NlYXJjaC1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZm9ybS1oZWFkZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xuICAgIC8qIG1hcmdpbi1sZWZ0OiA1MHZ3OyAqL1xufVxuXG4udGhpc0Zvcm0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0zMHB4O1xuICAgIHdpZHRoOiA3MDBweDtcbiAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXG4gICAgbWFyZ2luIDogMCBhdXRvO1xufVxuXG4uY29sLXNtLTMuY29sLWZvcm0tbGFiZWwsIC5mb3JtLWNoZWNrLWxhYmVsIHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4uY29sLXNtLTE1IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgLyogd2lkdGg6IDUwMHB4OyAqL1xufVxuXG4jc2VhcmNoLWZvcm0tZGl2IHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIC8qIGhlaWdodDogNjB2aDsgKi9cbn1cblxuI3NlYXJjaC1idG4tZ3JvdXAge1xuICAgIHBhZGRpbmc6IDMwcHg7XG59XG5cbi5idG4uYnRuLWxpZ2h0IHtcbiAgICBtYXJnaW4tbGVmdDogMnZ3O1xufVxuXG4ucmVxdWlyZWQge1xuICAgIGNvbG9yOiByZWQ7XG59XG5cbi5qdW1ib3Ryb24uY29sLW1kIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyOTJhO1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgLyogaGVpZ2h0OiA4MDBweDsgKi9cbn1cbi5tYXRlcmlhbC1pY29ucyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNnB4O1xuICAgIC8qIGxlZnQ6IDVweDsgKi9cbn1cblxuI2tleXdvcmQge1xuICAgIHdpZHRoOjMwMHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHsgXG4gICAgI2Zvcm0taGVhZGVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XG4gICAgICAgIC8qIG1hcmdpbi1sZWZ0OiA1MHZ3OyAqL1xuICAgIH1cbiAgICAja2V5d29yZCB7XG4gICAgICAgIHdpZHRoIDogMjgwcHg7XG4gICAgfVxuICB9XG5cbi8qIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUubmctdG5zLWMzLTEubmctc3Rhci1pbnNlcnRlZCB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufSAqL1xuXG4vKiAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgaGVpZ2h0OiAwcHggIWltcG9ydGFudDtcbn0gKi8gIl19 */"

/***/ }),

/***/ "./src/app/search-form/search-form.component.html":
/*!********************************************************!*\
  !*** ./src/app/search-form/search-form.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"search-form-div\">\n  <div class=\"jumbotron col-md\">\n    <div class=\"thisForm\">\n      <form  #searchForm=ngForm>\n        <div id=\"form-header\">\n          <h2>Product Search</h2>\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"keyword\" class=\"col-sm-3 col-form-label\">Keyword <span class=\"required\">*</span></label>\n          <div class=\"col-sm-15\">\n            <input [ngClass]=\"{'form-control': true, 'is-invalid': keyword.invalid && (keyword.dirty || keyword.touched)}\" type=\"text\"\n              name=\"keyword\" id=\"keyword\" placeholder=\"Enter Product Name (eg. iPhone 8)\" required [(ngModel)]=\"form.keyword\" #keyword=\"ngModel\">\n            <div class=\"invalid-feedback\">Please enter a keyword.</div>\n            <!-- <div *ngIf=\"keyword.errors.required\">no keyword!</div> -->\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"category\" class=\"col-sm-3 col-form-label\">Category</label>\n          <div class=\"col-sm-15\">\n            <!-- <select class=\"custom-select\" name=\"category\" id=\"category\" [(ngModel)]=\"form.category\" #category=\"ngModel\">\n              <option *ngFor=\"let type of searchTypes\" [value]=\"type|capToVar\">{{type}}</option> -->\n              <select class=\"custom-select\" name=\"category\" id=\"category\" [(ngModel)]=\"form.category\" #category=\"ngModel\">\n                <option *ngFor=\"let type of searchTypes\" [value]=\"type\">{{type}}</option>\n            </select>\n          </div>\n        </div>\n\n        <div class=\"form-group row\">\n          <label class=\"col-sm-3 col-form-label\">Condition</label>\n          <div class=\"col-sm-15\">\n            <div class=\"form-check\">\n              <input class=\"form-check-input\" type=\"checkbox\" name=\"condition_new\" value=\"New\" [(ngModel)]=\"form.condition_new\">\n              <label class=\"form-check-label\">New</label>\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n              <input class=\"form-check-input\" type=\"checkbox\" name=\"condition_used\" value=\"Used\" [(ngModel)]=\"form.condition_used\">\n              <label class=\"form-check-label\">Used</label>\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n              <input class=\"form-check-input\" type=\"checkbox\" name=\"condition_unspecified\" value=\"Unspecified\" [(ngModel)]=\"form.condition_unspecified\">\n              <label class=\"form-check-label\">Unspecified</label>\n            </div>\n          </div>\n        </div>\n\n\n        <div class=\"form-group row\">\n            <label class=\"col-sm-3 col-form-label\">Shipping Options</label>\n            <div class=\"col-sm-15\">\n              <div class=\"form-check\">\n                <input class=\"form-check-input\" type=\"checkbox\" name=\"ship_pickup\" [value]=\"ship_pickup\" [(ngModel)]=\"form.shipOption_pick\">\n                <label class=\"form-check-label\">Local Pickup</label>\n                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                <input class=\"form-check-input\" type=\"checkbox\" name=\"ship_shipping\" [value]=\"ship_shipping\" [(ngModel)]=\"form.shipOption_ship\">\n                <label class=\"form-check-label\">Free Shipping</label>\n              </div>\n            </div>\n          </div>\n\n\n\n\n\n        <div class=\"form-group row\">\n          <label for=\"distance\" class=\"col-sm-3 col-form-label\">Distance (miles)</label>\n          <div class=\"col-sm-15\">\n            <input class=\"form-control\" type=\"number\" name=\"distance\" id=\"distance\" placeholder=\"10\" value=\"\" [(ngModel)]=\"form.distance\"\n              #distance=\"ngModel\" step=\"1\" >\n          </div>\n        </div>\n        <div class=\"row\">\n          <legend class=\"col-form-label col-sm-3 pt-0\">From<span class=\"required\">*</span></legend>\n          <div class=\"col-sm-15\">\n            <div class=\"form-check\">\n              <input class=\"form-check-input\" type=\"radio\" name=\"is_user_input\" checked [value]=\"false\" [(ngModel)]=\"form.isUserInput\">\n              <label class=\"form-check-label\" for=\"here\">Current location</label>\n            </div>\n            <div class=\"form-check\">\n              <input class=\"form-check-input\" type=\"radio\" name=\"is_user_input\" [value]=\"true\" [(ngModel)]=\"form.isUserInput\">\n              <label class=\"form-check-label\" for=\"other\">Other, Please specify zip code:</label>\n            </div>\n            <!-- <input [ngClass]=\"{'form-control': true, 'is-invalid': location.invalid && (location.dirty || location.touched)}\" type=\"text\"\n              name=\"loc-input\" id=\"loc-input\" required noWhitespace [disabled]=\"!form.isUserInput\" placeholder=\"Enter a location\" [(ngModel)]=\"form.location\"\n              #location=\"ngModel\" appAutocomplete (setAddress)=\"getAddressOnChange($event, location)\"> -->\n              <!-- <input [ngClass]=\"{'form-control': true, 'is-invalid': checkValid(form.location)}\" type=\"text\"\n              name=\"loc-input\" id=\"loc-input\" required noWhitespace [disabled]=\"!form.isUserInput\" [(ngModel)]=\"form.location\"\n              #location=\"ngModel\"> -->\n\n            <mat-form-field>\n                <input style=\"background-color : white; height: 35px;\" [ngClass]=\"{'form-control': true, 'is-invalid': checkValid(form.location)}\" type=\"text\"\n                name=\"loc-input\" id=\"loc-input\" required noWhitespace [disabled]=\"!form.isUserInput\" [(ngModel)]=\"form.location\"\n                  matInput [matAutocomplete]=\"auto\">\n                \n                <div class=\"invalid-feedback\">Please enter a zip code</div>\n                <mat-autocomplete #auto=\"matAutocomplete\">\n                    <mat-option *ngFor=\"let option of getZip()\" [value]=\"option\">{{option}}</mat-option>\n                </mat-autocomplete>\n            </mat-form-field>\n            <!-- <input *ngIf=\"!form.isUserInput\" type=\"text\" value=\"\" > -->\n\n              \n\n            <div class=\"invalid-feedback\">Please enter a zip code</div>\n          </div>\n        </div>\n        <div class=\"form-group row\" id=\"search-btn-group\">\n          <div class=\"col-sm-15\">\n            <button class=\"btn btn-light\" id=\"search-btn\" (click)=\"submitIt()\" [disabled]=\"!gotgeojson || searchForm.invalid || checkDisabled()\">\n                <i class=\"material-icons\">search</i>Search</button>\n            <button  class=\"btn btn-light\" id=\"clear-btn\" (click)=\"clear()\"><i class=\"material-icons\">clear_all</i>Clear</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/search-form/search-form.component.ts":
/*!******************************************************!*\
  !*** ./src/app/search-form/search-form.component.ts ***!
  \******************************************************/
/*! exports provided: SearchFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFormComponent", function() { return SearchFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _search_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-form */ "./src/app/search-form/search-form.ts");
/* harmony import */ var _search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../search.service */ "./src/app/search.service.ts");



//import { FormsModule } from '@angular/forms';

var SearchFormComponent = /** @class */ (function () {
    // checkVal = new FormControl('', [Validators.required, Validators.]);
    // checkVal = new FormControl('', Validators.pattern('[0-9]{5}'));
    function SearchFormComponent(sService, cdRef, zone) {
        this.sService = sService;
        this.cdRef = cdRef;
        this.zone = zone;
        this.gotgeojson = false;
        this.category = "All Categories";
        this.form = _search_form__WEBPACK_IMPORTED_MODULE_2__["SearchForm"];
        this.options = [];
        this.flag = 1;
        this.searchTypes = [
            "All Categories",
            "Art",
            "Baby",
            "Books",
            "Clothing, Shoes & Accessories",
            "Computers/Tablets & Networking",
            "Health & Beauty",
            "Music",
            "Video Games & Consoles"
        ];
    }
    SearchFormComponent.prototype.checkDisabled = function () {
        if (!this.form.isUserInput) {
            this.form.location = '';
            return false;
        }
        if (this.checkValid(this.form.location)) {
            return true;
        }
        if (this.zipJson == undefined || this.zipJson["postalCodes"] == undefined || this.zipJson["postalCodes"].length == 0) {
            return true;
        }
        else {
            return false;
        }
    };
    SearchFormComponent.prototype.getZip = function () {
        var _this = this;
        if (this.form.location != null) {
            if (this.flag == 1) {
                this.temp = this.form.location;
                this.flag = 2;
                this.sService.getZipCode(this.form.location);
                this.sService.zip.subscribe(function (data) {
                    _this.zone.run(function () {
                        _this.zipJson = data;
                    });
                });
            }
            else {
                if (this.form.location != this.temp) {
                    this.sService.getZipCode(this.form.location);
                    this.temp = this.form.location;
                    this.sService.zip.subscribe(function (data) {
                        _this.zone.run(function () {
                            _this.zipJson = data;
                        });
                    });
                }
            }
            if (this.zipJson != undefined && this.zipJson["postalCodes"] != undefined) {
                var tempZip = this.zipJson["postalCodes"];
                for (var i = 0; i < 5; i++) {
                    if (tempZip[i + ""] != undefined) {
                        this.options[i] = tempZip[i + ""]["postalCode"];
                    }
                }
            }
        }
        return this.options;
    };
    SearchFormComponent.prototype.clear = function () {
        // this.form.keyword = ""
        // this.form.reset();
        // this.flag2 = 2;
        this.form.keyword = '';
        this.form.category = "All Categories";
        this.form.isUserInput = false;
        this.form.condition_new = '';
        this.form.condition_used = '';
        this.form.condition_unspecified = '';
        this.form.shipOption_pick = '';
        this.form.shipOption_ship = '';
        this.form.distance = '';
        this.form.location = '';
        // this.form.geoJson = undefined;
        this.getGeo();
        // console.log(this.form);
        this.sService.clear();
    };
    SearchFormComponent.prototype.checkValid = function (zip) {
        // console.log(zip);
        var reg = /^\d{5}$/;
        if (!this.form.isUserInput) {
            return false;
        }
        return !reg.test(zip);
    };
    SearchFormComponent.prototype.getAddressOnChange = function (event, location) {
        this.form.location = document.getElementById('loc-input').value;
    };
    SearchFormComponent.prototype.getGeo = function () {
        var _this = this;
        this.sService.getGeolocation().subscribe(function (data) {
            _this.userLocation = data["zip"];
            //console.log(this.userLocation);
            _this.form.geoJson = _this.userLocation;
            _this.gotgeojson = true;
        });
    };
    // onSubmit() {
    // }
    SearchFormComponent.prototype.submitIt = function () {
        this.sService.search(this.form);
    };
    SearchFormComponent.prototype.ngOnInit = function () {
        //this.form.category = 'All Categories';
        //this.clear();
        // this.checkVal = new FormControl({value:'', disabled:false});
        this.getGeo();
        // this.checkVal = new FormControl({value:'', disabled:true});
    };
    SearchFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-search-form",
            template: __webpack_require__(/*! ./search-form.component.html */ "./src/app/search-form/search-form.component.html"),
            styles: [__webpack_require__(/*! ./search-form.component.css */ "./src/app/search-form/search-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], SearchFormComponent);
    return SearchFormComponent;
}());



/***/ }),

/***/ "./src/app/search-form/search-form.ts":
/*!********************************************!*\
  !*** ./src/app/search-form/search-form.ts ***!
  \********************************************/
/*! exports provided: SearchForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchForm", function() { return SearchForm; });
var SearchForm = {
    keyword: '',
    category: 'All Categories',
    condition_new: '',
    condition_used: '',
    condition_unspecified: '',
    shipOption_pick: '',
    shipOption_ship: '',
    distance: '',
    isUserInput: false,
    location: '',
    geoJson: undefined
};


/***/ }),

/***/ "./src/app/search.service.ts":
/*!***********************************!*\
  !*** ./src/app/search.service.ts ***!
  \***********************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Content-Type": "application/json" })
};
// declare var google:any;
var SearchService = /** @class */ (function () {
    function SearchService(http) {
        this.http = http;
        this.showResult = false;
        // response = new Observable<any>();
        this._resultJson = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.resultJson = this._resultJson.asObservable();
        this._detailsJson = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.detailsJson = this._detailsJson.asObservable();
        this._zip = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.zip = this._zip.asObservable();
        this._isClear = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.isClear = this._isClear.asObservable();
        this._isDataGet = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.isDataget = this._isDataGet.asObservable();
        this._locationInput = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.locationInput = this._isDataGet.asObservable();
        this.pageSaved = [];
        this.curPage = 1;
    }
    SearchService.prototype.search = function (form) {
        var _this = this;
        this.showResult = true;
        this.pageSaved.splice(0, this.pageSaved.length);
        var geo = form.geoJson;
        //console.log(form.keyword);
        var location = form.location;
        // console.log(form.keyword);
        // console.log(encodeURIComponent(form.keyword));
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set("keyword", encodeURIComponent(form.keyword))
            .set("category", form.category)
            .set("distance", form.distance || '10')
            .set("condition_unspecified", form.condition_unspecified)
            .set("condition_new", form.condition_new)
            .set("condition_used", form.condition_used)
            .set("shipOption_pick", form.shipOption_pick)
            .set("shipOption_ship", form.shipOption_ship)
            .set("isUserInput", form.isUserInput || false)
            .set("location", location)
            .set("geoJson", JSON.stringify(form.geoJson));
        // console.log(form.isUserInput);
        var response = this.http.get("/api/search", { params: params });
        // let response = this.http.get("http://localhost:3000/api/search", { params: params });
        //console.log(response);
        response.subscribe(function (data) {
            _this.jsonData = data;
            _this.jsonData.geoJson = geo;
            _this.jsonData.startLocation = location;
            _this._resultJson.next(_this.jsonData);
            _this._isDataGet.next(true);
            if (data["findItemsAdvancedResponse"]["0"]["searchResult"] != undefined && data["findItemsAdvancedResponse"]["0"]["searchResult"]["0"]["item"] != undefined)
                _this.searchResults = data["findItemsAdvancedResponse"]["0"]["searchResult"]["0"]["item"];
            // console.log(this.jsonData)
        }, function (err) {
            _this._resultJson.next(null);
        });
    };
    SearchService.prototype.loadSearchResult = function () {
        this._resultJson.next(this.jsonData);
    };
    SearchService.prototype.getZipCode = function (zip) {
        var _this = this;
        // console.log(zip)
        if (zip.length != 0) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("zip", zip);
            var response = this.http.get("/api/zip_info", { params: httpParams });
            // let response = this.http.get("http://localhost:3000/api/zip_info", { params: httpParams });
            // console.log(response);
            response.subscribe(function (data) {
                _this._zip.next(data);
                // console.log(data);
            });
        }
    };
    SearchService.prototype.getGeolocation = function () {
        var url = "http://ip-api.com/json";
        //console.log(1);
        return this.http.get(url);
    };
    SearchService.prototype.clear = function () {
        this._resultJson.next('clear');
        this.jsonData = undefined;
        this._isClear.next(true);
        this.pageSaved.splice(0, this.pageSaved.length);
    };
    SearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/whitespace.directive.ts":
/*!*****************************************!*\
  !*** ./src/app/whitespace.directive.ts ***!
  \*****************************************/
/*! exports provided: WhitespaceDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhitespaceDirective", function() { return WhitespaceDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _whitespace_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./whitespace.validator */ "./src/app/whitespace.validator.ts");




var WhitespaceDirective = /** @class */ (function () {
    function WhitespaceDirective() {
        this.validator = Object(_whitespace_validator__WEBPACK_IMPORTED_MODULE_3__["whiteSpaceValidator"])();
    }
    WhitespaceDirective_1 = WhitespaceDirective;
    WhitespaceDirective.prototype.validate = function (control) {
        return this.validator(control);
    };
    var WhitespaceDirective_1;
    WhitespaceDirective = WhitespaceDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: "[noWhitespace]",
            providers: [
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: WhitespaceDirective_1, multi: true }
            ]
        })
    ], WhitespaceDirective);
    return WhitespaceDirective;
}());



/***/ }),

/***/ "./src/app/whitespace.validator.ts":
/*!*****************************************!*\
  !*** ./src/app/whitespace.validator.ts ***!
  \*****************************************/
/*! exports provided: whiteSpaceValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whiteSpaceValidator", function() { return whiteSpaceValidator; });
function whiteSpaceValidator() {
    return function (control) {
        var isWhitespace = (control.value || "").trim().length === 0;
        return isWhitespace ? { 'whitespace': 'input only contains whitespace' } : null;
    };
}


/***/ }),

/***/ "./src/app/window-ref.service.ts":
/*!***************************************!*\
  !*** ./src/app/window-ref.service.ts ***!
  \***************************************/
/*! exports provided: WindowRefService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowRefService", function() { return WindowRefService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WindowRefService = /** @class */ (function () {
    function WindowRefService() {
    }
    WindowRefService.prototype.getNativeWindow = function () {
        return window;
    };
    WindowRefService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WindowRefService);
    return WindowRefService;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/chris/Desktop/angular_node/ang-node/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map