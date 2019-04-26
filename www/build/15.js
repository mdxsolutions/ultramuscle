webpackJsonp([15],{

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(296);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DashboardPageModule = /** @class */ (function () {
    function DashboardPageModule() {
    }
    DashboardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardPage */]),
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ]
        })
    ], DashboardPageModule);
    return DashboardPageModule;
}());

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index_services__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_core_auth_service__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


// Services


var DashboardPage = /** @class */ (function () {
    function DashboardPage(menuCtrl, _workoutService, _nutritionService, auth, navCtrl, loadingCtrl) {
        this.menuCtrl = menuCtrl;
        this._workoutService = _workoutService;
        this._nutritionService = _nutritionService;
        this.auth = auth;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userWorkouts = [];
        this.userRecipes = [];
        this.recipes = [];
        this.nutritionId = "5eVAS6deqZcDlRinTxbK";
        this.menuCtrl.enable(true, 'main');
    }
    DashboardPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            spinner: "dots"
        });
        loader.present().then(function () {
            _this.loadUserWorkouts();
            _this.loadUserRecipes().then(function () {
                loader.dismiss();
            });
        });
    };
    DashboardPage.prototype.loadUserWorkouts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // We get all the workouts
                        _a = this;
                        return [4 /*yield*/, this._workoutService.getAllWorkouts("planId")];
                    case 1:
                        // We get all the workouts
                        _a.userWorkouts$ = _b.sent();
                        // We save just 3 workouts per user
                        this.userWorkouts$.subscribe(function (workouts) {
                            _this.userWorkouts = workouts.slice(0, 3);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    DashboardPage.prototype.loadUserRecipes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this._nutritionService.getUserRecipes("5eVAS6deqZcDlRinTxbK")];
                    case 1:
                        _a.userRecipes$ = _b.sent();
                        this.userRecipes$.subscribe(function (recipes) {
                            _this.userRecipes = recipes;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    DashboardPage.prototype.ionViewCanEnter = function () {
        var _this = this;
        var authenticated = this.auth.authenticated;
        this.auth.user$.subscribe(function () {
            if (authenticated) {
                return true;
            }
            else {
                _this.navCtrl.setRoot('SigninPage');
                return false;
            }
        });
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"C:\Users\ctorr\Documents\projects\ultramuscle-app\src\pages\dashboard\dashboard.html"*/'<ion-header>\n\n    <app-header title="Dashboard"></app-header>\n\n</ion-header>\n\n<ion-content class="dashboard-bg">\n\n    <!-- My Workouts -->\n\n    <div>\n\n        <title-component title="My workouts"></title-component>\n\n        <workout-card [workout]="workout" *ngFor="let workout of userWorkouts"></workout-card>\n\n        <ion-row class="fadeInUp animated">\n\n            <ion-col col-12 padding-horizontal>\n\n                <button navPush="FullWorkoutPage" ion-button size="small" block color="danger">\n\n                    View Full Workout\n\n                </button>\n\n            </ion-col>\n\n            <!-- <ion-col col-12 padding-horizontal>\n\n                <button navPush="SettingsPage" ion-button size="small" block color="danger">\n\n                    Tools\n\n                </button>\n\n            </ion-col> -->\n\n        </ion-row>\n\n    </div>\n\n\n\n    <!-- My Nutrition -->\n\n    <div>\n\n        <title-component title="My Nutrition"></title-component>\n\n        <recipe-card [item]="recipe" goTo="RecipeDetailPage" *ngFor="let recipe of userRecipes"></recipe-card>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\ctorr\Documents\projects\ultramuscle-app\src\pages\dashboard\dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__services_index_services__["f" /* WorkoutService */],
            __WEBPACK_IMPORTED_MODULE_2__services_index_services__["c" /* NutritionService */],
            __WEBPACK_IMPORTED_MODULE_3__app_core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ })

});
//# sourceMappingURL=15.js.map