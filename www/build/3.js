webpackJsonp([3],{

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutDetailPageModule", function() { return WorkoutDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
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
            selector: "page-workout-detail",template:/*ion-inline-start:"/usr/src/app/ultramuscle/src/pages/workout-detail/workout-detail.html"*/'<ion-header color="dark">\n  <app-header [title]="workout.name"></app-header>\n</ion-header>\n\n<ion-content class="um-bg">\n  <ion-grid no-padding>\n    <ion-row>\n      <ion-col no-padding>\n        <ion-item>\n          <ion-select\n            [(ngModel)]="levelName"\n            interface="action-sheet"\n            (ionChange)="getLevel(levelName)"\n            class="levelSelect"\n          >\n            <ion-option *ngFor="let level of levels" [value]="level.name">{{\n              level.name\n            }}</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n      <ion-col class="text-white">\n        <div margin-top margin-left text-center>{{ levelSelected.sets }} Sets {{ levelSelected.reps }} reps</div>\n      </ion-col>\n    </ion-row>\n    <ion-row no-padding>\n      <ion-col>\n        <ion-slides class="image-slider">\n          <ion-slide *ngFor="let image of workout.images">\n            <img [src]="image" />\n          </ion-slide>\n        </ion-slides>\n      </ion-col>\n    </ion-row>\n    <ion-row margin-top>\n      <ion-col>\n        <div class="tab-segment">\n          <ion-segment [(ngModel)]="Tabs">\n            <ion-segment-button\n              (click)="changeValue(t.value)"\n              [value]="t.value"\n              *ngFor="let t of tabsTitle"\n            >\n              {{ t.name }}\n            </ion-segment-button>\n          </ion-segment>\n        </div>\n\n        <div [ngSwitch]="Tabs">\n          <ion-list *ngSwitchCase="\'description\'">\n            <ion-row class="text-area" *ngIf="workout.description">\n              <title-component [title]="\'Description\'"></title-component>\n\n              <ion-card class="fadeInUp animated bg-transparent">\n                <ion-card-content>\n                  <div class="text-white" [innerHTML]="workout.description | domsecure"></div>\n                </ion-card-content>\n              </ion-card>\n            </ion-row>\n          </ion-list>\n          <ion-list *ngSwitchCase="\'instructions\'">\n            <ion-row class="text-area" *ngIf="workout.instructions">\n              <title-component [title]="\'Instructions\'"></title-component>\n\n              <ion-card class="fadeInUp animated bg-transparent">\n                <ion-card-content>\n                  <div class="text-white" [innerHTML]="workout.instructions | domsecure"></div>\n                </ion-card-content>\n              </ion-card>\n            </ion-row>\n          </ion-list>\n          <ion-list *ngSwitchCase="\'tips\'">\n            <ion-row class="text-area" *ngIf="workout.tips">\n              <title-component [title]="\'Tips\'"></title-component>\n\n              <ion-card class="fadeInUp animated bg-transparent">\n                <ion-card-content>\n                  <div class="text-white" [innerHTML]="workout.tips"></div>\n                </ion-card-content>\n              </ion-card>\n            </ion-row>\n          </ion-list>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/usr/src/app/ultramuscle/src/pages/workout-detail/workout-detail.html"*/
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