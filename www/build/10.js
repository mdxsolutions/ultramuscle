webpackJsonp([10],{

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeDetailPageModule", function() { return RecipeDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recipe_detail__ = __webpack_require__(557);
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

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeDetailPage; });
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
            selector: 'page-recipe-detail',template:/*ion-inline-start:"/usr/src/app/ultramuscle/src/pages/recipe-detail/recipe-detail.html"*/'<ion-header>\n  <app-header [title]="recipe.name"></app-header>\n</ion-header>\n\n<ion-content class="um-bg">\n  <ion-grid no-padding>\n      <ion-row no-padding>\n          <ion-col>\n              <ion-slides class="image-slider">\n                  <ion-slide *ngFor="let image of recipe.images">\n                      <img [src]="image">\n                  </ion-slide>\n              </ion-slides>\n          </ion-col>                        \n      </ion-row>\n      <ion-row margin-top>\n          <ion-col>\n              <div class="tab-segment">\n                  <ion-segment [(ngModel)]="Tabs">\n                      <ion-segment-button (click)="changeValue( t.value )" [value]="t.value" *ngFor="let t of tabsTitle">\n                        {{ t.name }}\n                      </ion-segment-button>\n                  </ion-segment>\n              </div>\n      \n              <div [ngSwitch]="Tabs">\n                  <ion-list *ngSwitchCase="\'description\'">\n                      <ion-row class="text-area" *ngIf="recipe.description">\n                          <title-component [title]="\'Description\'"></title-component>\n      \n                          <ion-card class="fadeInUp animated bg-transparent">\n                              <ion-card-content>\n                                  <p class="text-white">{{ recipe.description }}</p>\n                              </ion-card-content>\n                          </ion-card>\n                      </ion-row>\n      \n                  </ion-list>\n                  <ion-list *ngSwitchCase="\'steps\'">\n                      <ion-row class="text-area" *ngIf="recipe.steps">\n                          <title-component [title]="\'Steps\'"></title-component>\n      \n                          <ion-card class="fadeInUp animated bg-transparent" *ngFor="let step of recipe.steps">\n                              <ion-card-content>\n                                <p class="text-white">{{ step }}</p>\n                              </ion-card-content>\n                          </ion-card>\n                      </ion-row>\n                  </ion-list>\n                  \n                  <ion-list *ngSwitchCase="\'ingredients\'">\n                    <ion-row class="text-area" *ngIf="recipe.ingredients">\n                        <title-component [title]="\'Ingredients\'"></title-component>\n    \n                        <ion-card class="fadeInUp animated bg-transparent" *ngFor="let ingredient of recipe.ingredients">\n                            <ion-card-content>\n                              <p class="text-white">{{ ingredient }}</p>\n                            </ion-card-content>\n                        </ion-card>\n                    </ion-row>\n                </ion-list>\n              </div>\n          </ion-col>\n      </ion-row>\n  </ion-grid>    \n          \n</ion-content>'/*ion-inline-end:"/usr/src/app/ultramuscle/src/pages/recipe-detail/recipe-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], RecipeDetailPage);
    return RecipeDetailPage;
}());

//# sourceMappingURL=recipe-detail.js.map

/***/ })

});
//# sourceMappingURL=10.js.map