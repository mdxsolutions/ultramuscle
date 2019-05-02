webpackJsonp([6],{

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutsPageModule", function() { return WorkoutsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__workouts__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(296);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var WorkoutsPageModule = /** @class */ (function () {
    function WorkoutsPageModule() {
    }
    WorkoutsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__workouts__["a" /* WorkoutsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__workouts__["a" /* WorkoutsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
            providers: []
        })
    ], WorkoutsPageModule);
    return WorkoutsPageModule;
}());

//# sourceMappingURL=workouts.module.js.map

/***/ }),

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkoutsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index_services__ = __webpack_require__(159);
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

var WorkoutsPage = /** @class */ (function () {
    function WorkoutsPage(_workoutService, navParams, loadingCtrl) {
        this._workoutService = _workoutService;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.chestId = "WEdoqPLgCQjppaWaBFQF";
        this.shoulderId = "ut8WLRxSAK6yZ6SDX8YB";
        this.legId = "Ac1mNbXnZD7X6NzPoZMF";
        this.backId = "959r5cLBDU5Ly9AKlZsI";
        this.armId = "6BFoR3yU3HaFoEfkNlA2";
        this.day = this.navParams.get("day");
        if (this.navParams.get("item")) {
            this.plan = this.navParams.get("item");
        }
    }
    WorkoutsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            spinner: "dots"
        });
        loader.present().then(function () {
            _this.loadAllWorkouts().then(function () {
                loader.dismiss();
            });
        });
    };
    WorkoutsPage.prototype.loadAllWorkouts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var that, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // We load all the workouts
                        this.workouts$ = this._workoutService.getAllWorkouts("planId");
                        that = this;
                        // We save the chest workouts
                        this.chestWorkouts$ = this._workoutService.getWorkoutsByDayPlan(this.workouts$, that.chestId);
                        // We save the arms workouts
                        this.armsWorkouts$ = this._workoutService.getWorkoutsByDayPlan(this.workouts$, that.armId);
                        // We save the legs workouts
                        this.legsWorkouts$ = this._workoutService.getWorkoutsByDayPlan(this.workouts$, that.legId);
                        // We save the back workouts
                        this.backWorkouts$ = this._workoutService.getWorkoutsByDayPlan(this.workouts$, that.backId);
                        // We save the back workouts
                        this.shouldersWorkouts$ = this._workoutService.getWorkoutsByDayPlan(this.workouts$, that.shoulderId);
                        if (!this.day) return [3 /*break*/, 12];
                        _a = this.day;
                        switch (_a) {
                            case "Monday": return [3 /*break*/, 1];
                            case "Tuesday": return [3 /*break*/, 4];
                            case "Thursday": return [3 /*break*/, 6];
                            case "Friday": return [3 /*break*/, 9];
                        }
                        return [3 /*break*/, 11];
                    case 1: return [4 /*yield*/, this.chestWorkouts$
                            .subscribe(function (workouts) { return that.chestWorkouts = workouts.slice(0, 3); })];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, this.armsWorkouts$
                                .subscribe(function (workouts) { return that.armsWorkouts = workouts.slice(0, 3); })];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 11];
                    case 4: return [4 /*yield*/, this.legsWorkouts$
                            .subscribe(function (workouts) { return that.legsWorkouts = workouts.slice(0, 3); })];
                    case 5:
                        _b.sent();
                        return [3 /*break*/, 11];
                    case 6: return [4 /*yield*/, this.backWorkouts$
                            .subscribe(function (workouts) { return that.backWorkouts = workouts.slice(0, 3); })];
                    case 7:
                        _b.sent();
                        return [4 /*yield*/, this.shouldersWorkouts$
                                .subscribe(function (workouts) { return that.shouldersWorkouts = workouts.slice(0, 3); })];
                    case 8:
                        _b.sent();
                        return [3 /*break*/, 11];
                    case 9: return [4 /*yield*/, this.backWorkouts$
                            .subscribe(function (workouts) { return that.legsWorkouts = workouts.slice(0, 3); })];
                    case 10:
                        _b.sent();
                        return [3 /*break*/, 11];
                    case 11: return [3 /*break*/, 14];
                    case 12: return [4 /*yield*/, this._workoutService
                            .loadWorkoutsByPlan(this.plan.id)
                            .subscribe(function (workouts) {
                            _this.workouts = workouts;
                            _this.title = _this.plan.name;
                        })];
                    case 13:
                        _b.sent();
                        _b.label = 14;
                    case 14: return [2 /*return*/];
                }
            });
        });
    };
    WorkoutsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-workouts",template:/*ion-inline-start:"/usr/src/app/ultramuscle/src/pages/workouts/workouts.html"*/'<ion-header>\n  <app-header title="Workouts"></app-header>\n</ion-header>\n\n<ion-content class="workout-bg">\n  <title-component *ngIf="workouts" title="Workouts"></title-component>\n  <workout-card [workout]="workout" goTo="WorkoutDetailPage" *ngFor="let workout of workouts"></workout-card>\n\n  <title-component *ngIf="chestWorkouts" title="Chest"></title-component>\n  <workout-card [workout]="workout" goTo="WorkoutDetailPage" *ngFor="let workout of chestWorkouts"></workout-card>\n\n  <title-component *ngIf="armsWorkouts" title="Arms"></title-component>\n  <workout-card [workout]="workout" goTo="WorkoutDetailPage" *ngFor="let workout of armsWorkouts"></workout-card>\n\n  <title-component *ngIf="legsWorkouts" title="Legs"></title-component>\n  <workout-card [workout]="workout" goTo="WorkoutDetailPage" *ngFor="let workout of legsWorkouts"></workout-card>\n\n  <title-component *ngIf="backWorkouts" title="Back"></title-component>\n  <workout-card [workout]="workout" goTo="WorkoutDetailPage" *ngFor="let workout of backWorkouts"></workout-card>\n\n  <title-component *ngIf="shouldersWorkouts" title="Shoulders"></title-component>\n  <workout-card [workout]="workout" goTo="WorkoutDetailPage" *ngFor="let workout of shouldersWorkouts"></workout-card>\n</ion-content>'/*ion-inline-end:"/usr/src/app/ultramuscle/src/pages/workouts/workouts.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_index_services__["f" /* WorkoutService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], WorkoutsPage);
    return WorkoutsPage;
}());

//# sourceMappingURL=workouts.js.map

/***/ })

});
//# sourceMappingURL=6.js.map