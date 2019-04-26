webpackJsonp([10],{

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeDetailPageModule", function() { return RecipeDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recipe_detail__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(296);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RecipeDetailPageModule = /** @class */ (function () {
    function RecipeDetailPageModule() {
    }
    RecipeDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__recipe_detail__["a" /* RecipeDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__recipe_detail__["a" /* RecipeDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], RecipeDetailPageModule);
    return RecipeDetailPageModule;
}());

//# sourceMappingURL=recipe-detail.module.js.map

/***/ }),

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeDetailPage; });
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


var RecipeDetailPage = /** @class */ (function () {
    function RecipeDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Tabs = "Description";
        this.tabsTitle = [
            {
                name: "Description",
                value: "description",
            },
            {
                name: "Steps",
                value: "steps",
            },
            {
                name: "Ingredients",
                value: "ingredients",
            }
        ];
        this.recipe = this.navParams.get("item");
        this.changeValue("description");
    }
    RecipeDetailPage.prototype.changeValue = function (data) {
        this.Tabs = data;
    };
    RecipeDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recipe-detail',template:/*ion-inline-start:"C:\Users\ctorr\Documents\projects\ionic\ultramuscle-app\src\pages\recipe-detail\recipe-detail.html"*/'<ion-header>\n\n  <app-header [title]="recipe.name"></app-header>\n\n</ion-header>\n\n\n\n<ion-content class="um-bg">\n\n  <ion-grid no-padding>\n\n      <ion-row no-padding>\n\n          <ion-col>\n\n              <ion-slides class="image-slider">\n\n                  <ion-slide *ngFor="let image of recipe.images">\n\n                      <img [src]="image">\n\n                  </ion-slide>\n\n              </ion-slides>\n\n          </ion-col>                        \n\n      </ion-row>\n\n      <ion-row margin-top>\n\n          <ion-col>\n\n              <div class="tab-segment">\n\n                  <ion-segment [(ngModel)]="Tabs">\n\n                      <ion-segment-button (click)="changeValue( t.value )" [value]="t.value" *ngFor="let t of tabsTitle">\n\n                        {{ t.name }}\n\n                      </ion-segment-button>\n\n                  </ion-segment>\n\n              </div>\n\n      \n\n              <div [ngSwitch]="Tabs">\n\n                  <ion-list *ngSwitchCase="\'description\'">\n\n                      <ion-row class="text-area" *ngIf="recipe.description">\n\n                          <title-component [title]="\'Description\'"></title-component>\n\n      \n\n                          <ion-card class="fadeInUp animated bg-transparent">\n\n                              <ion-card-content>\n\n                                  <p class="text-white">{{ recipe.description }}</p>\n\n                              </ion-card-content>\n\n                          </ion-card>\n\n                      </ion-row>\n\n      \n\n                  </ion-list>\n\n                  <ion-list *ngSwitchCase="\'steps\'">\n\n                      <ion-row class="text-area" *ngIf="recipe.steps">\n\n                          <title-component [title]="\'Steps\'"></title-component>\n\n      \n\n                          <ion-card class="fadeInUp animated bg-transparent" *ngFor="let step of recipe.steps">\n\n                              <ion-card-content>\n\n                                <p class="text-white">{{ step }}</p>\n\n                              </ion-card-content>\n\n                          </ion-card>\n\n                      </ion-row>\n\n                  </ion-list>\n\n                  \n\n                  <ion-list *ngSwitchCase="\'ingredients\'">\n\n                    <ion-row class="text-area" *ngIf="recipe.ingredients">\n\n                        <title-component [title]="\'Ingredients\'"></title-component>\n\n    \n\n                        <ion-card class="fadeInUp animated bg-transparent" *ngFor="let ingredient of recipe.ingredients">\n\n                            <ion-card-content>\n\n                              <p class="text-white">{{ ingredient }}</p>\n\n                            </ion-card-content>\n\n                        </ion-card>\n\n                    </ion-row>\n\n                </ion-list>\n\n              </div>\n\n          </ion-col>\n\n      </ion-row>\n\n  </ion-grid>    \n\n          \n\n</ion-content>'/*ion-inline-end:"C:\Users\ctorr\Documents\projects\ionic\ultramuscle-app\src\pages\recipe-detail\recipe-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], RecipeDetailPage);
    return RecipeDetailPage;
}());

//# sourceMappingURL=recipe-detail.js.map

/***/ })

});
//# sourceMappingURL=10.js.map