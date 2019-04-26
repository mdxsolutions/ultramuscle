webpackJsonp([3],{

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutDetailPageModule", function() { return WorkoutDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__workout_detail__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(532);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Pipes

var WorkoutDetailPageModule = /** @class */ (function () {
    function WorkoutDetailPageModule() {
    }
    WorkoutDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__workout_detail__["a" /* WorkoutDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__workout_detail__["a" /* WorkoutDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], WorkoutDetailPageModule);
    return WorkoutDetailPageModule;
}());

//# sourceMappingURL=workout-detail.module.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__domsecure_domsecure__ = __webpack_require__(533);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__domsecure_domsecure__["a" /* DomsecurePipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__domsecure_domsecure__["a" /* DomsecurePipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DomsecurePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DomsecurePipe = /** @class */ (function () {
    function DomsecurePipe(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    DomsecurePipe.prototype.transform = function (html) {
        return this.domSanitizer.bypassSecurityTrustHtml(html);
    };
    DomsecurePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'domsecure',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], DomsecurePipe);
    return DomsecurePipe;
}());

//# sourceMappingURL=domsecure.js.map

/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkoutDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WorkoutDetailPage = /** @class */ (function () {
    function WorkoutDetailPage(navParams, popoverController) {
        this.navParams = navParams;
        this.popoverController = popoverController;
        this.Tabs = "Description";
        this.levelName = "Beginner";
        this.levelSelected = {
            name: "Beginner",
            sets: 4,
            reps: 8
        };
        this.reps = 8;
        this.name = "workouts";
        this.tabsTitle = [
            {
                name: "Description",
                value: "description"
            },
            {
                name: "Instructions",
                value: "instructions"
            },
            {
                name: "Tips",
                value: "tips"
            }
        ];
        this.levels = [
            {
                name: "Beginner",
                sets: 4,
                reps: 8
            },
            {
                name: "Intermediate",
                sets: 4,
                reps: 10
            },
            {
                name: "Advanced",
                sets: 4,
                reps: 12
            }
        ];
        this.workout = this.navParams.get("workout");
        this.changeValue("description");
    }
    WorkoutDetailPage.prototype.changeValue = function (data) {
        this.Tabs = data;
    };
    WorkoutDetailPage.prototype.getLevel = function (level) {
        if (level === "Beginner") {
            this.levelSelected = this.levels[0];
        }
        if (level === "Intermediate") {
            this.levelSelected = this.levels[1];
        }
        if (level === "Advanced") {
            this.levelSelected = this.levels[2];
        }
    };
    WorkoutDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-workout-detail",template:/*ion-inline-start:"C:\Users\ctorr\Documents\projects\ultramuscle-app\src\pages\workout-detail\workout-detail.html"*/'<ion-header color="dark">\n\n  <app-header [title]="workout.name"></app-header>\n\n</ion-header>\n\n\n\n<ion-content class="um-bg">\n\n  <ion-grid no-padding>\n\n    <ion-row>\n\n      <ion-col no-padding>\n\n        <ion-item>\n\n          <ion-select\n\n            [(ngModel)]="levelName"\n\n            interface="action-sheet"\n\n            (ionChange)="getLevel(levelName)"\n\n            class="levelSelect"\n\n          >\n\n            <ion-option *ngFor="let level of levels" [value]="level.name">{{\n\n              level.name\n\n            }}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col class="text-white">\n\n        <div margin-top margin-left text-center>{{ levelSelected.sets }} Sets {{ levelSelected.reps }} reps</div>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row no-padding>\n\n      <ion-col>\n\n        <ion-slides class="image-slider">\n\n          <ion-slide *ngFor="let image of workout.images">\n\n            <img [src]="image" />\n\n          </ion-slide>\n\n        </ion-slides>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row margin-top>\n\n      <ion-col>\n\n        <div class="tab-segment">\n\n          <ion-segment [(ngModel)]="Tabs">\n\n            <ion-segment-button\n\n              (click)="changeValue(t.value)"\n\n              [value]="t.value"\n\n              *ngFor="let t of tabsTitle"\n\n            >\n\n              {{ t.name }}\n\n            </ion-segment-button>\n\n          </ion-segment>\n\n        </div>\n\n\n\n        <div [ngSwitch]="Tabs">\n\n          <ion-list *ngSwitchCase="\'description\'">\n\n            <ion-row class="text-area" *ngIf="workout.description">\n\n              <title-component [title]="\'Description\'"></title-component>\n\n\n\n              <ion-card class="fadeInUp animated bg-transparent">\n\n                <ion-card-content>\n\n                  <div class="text-white" [innerHTML]="workout.description | domsecure"></div>\n\n                </ion-card-content>\n\n              </ion-card>\n\n            </ion-row>\n\n          </ion-list>\n\n          <ion-list *ngSwitchCase="\'instructions\'">\n\n            <ion-row class="text-area" *ngIf="workout.instructions">\n\n              <title-component [title]="\'Instructions\'"></title-component>\n\n\n\n              <ion-card class="fadeInUp animated bg-transparent">\n\n                <ion-card-content>\n\n                  <div class="text-white" [innerHTML]="workout.instructions | domsecure"></div>\n\n                </ion-card-content>\n\n              </ion-card>\n\n            </ion-row>\n\n          </ion-list>\n\n          <ion-list *ngSwitchCase="\'tips\'">\n\n            <ion-row class="text-area" *ngIf="workout.tips">\n\n              <title-component [title]="\'Tips\'"></title-component>\n\n\n\n              <ion-card class="fadeInUp animated bg-transparent">\n\n                <ion-card-content>\n\n                  <div class="text-white" [innerHTML]="workout.tips"></div>\n\n                </ion-card-content>\n\n              </ion-card>\n\n            </ion-row>\n\n          </ion-list>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\ctorr\Documents\projects\ultramuscle-app\src\pages\workout-detail\workout-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */]])
    ], WorkoutDetailPage);
    return WorkoutDetailPage;
}());

//# sourceMappingURL=workout-detail.js.map

/***/ })

});
//# sourceMappingURL=3.js.map