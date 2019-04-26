webpackJsonp([7],{

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs__ = __webpack_require__(562);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPageModule = /** @class */ (function () {
    function TabsPageModule(menuCtrl) {
        this.menuCtrl = menuCtrl;
        this.menuCtrl.enable(true, 'main');
    }
    TabsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]),
            ],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], TabsPageModule);
    return TabsPageModule;
}());

//# sourceMappingURL=tabs.module.js.map

/***/ }),

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_nav_params__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_core_auth_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_navigation_nav_controller__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Firebase



var TabsPage = /** @class */ (function () {
    function TabsPage(navParams, navCtrl, afAuth, auth) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.afAuth = afAuth;
        this.auth = auth;
        this.mySelectedIndex = this.navParams.data.tabIndex || 0;
        this.tab1 = 'DashboardPage';
        this.tab2 = 'PlansPage';
        this.tab3 = 'NutritionPage';
        this.tab4 = 'BlogsPage';
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"C:\Users\ctorr\Documents\projects\ionic\ultramuscle-app\src\pages\tabs\tabs.html"*/'<ion-tabs [selectedIndex]="mySelectedIndex" color="tabs-color">\n\n    <ion-tab tabIcon="home" tabTitle="Dashboard" [root]="tab1"></ion-tab>\n\n    <ion-tab tabIcon="body" tabTitle="Workouts" [root]="tab2"></ion-tab>\n\n    <ion-tab tabIcon="nutrition" tabTitle="Nutrition" [root]="tab3"></ion-tab>\n\n    <ion-tab tabIcon="pricetag" tabTitle="Blogs" [root]="tab4"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"C:\Users\ctorr\Documents\projects\ionic\ultramuscle-app\src\pages\tabs\tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_nav_params__["a" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular_navigation_nav_controller__["a" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_3__app_core_auth_service__["a" /* AuthService */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

});
//# sourceMappingURL=7.js.map