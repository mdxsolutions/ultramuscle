webpackJsonp([16],{

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = convertSnaps;
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function convertSnaps(snaps) {
    return snaps.map(function (snap) {
        return __assign({ id: snap.payload.doc.id }, snap.payload.doc.data());
    });
}
//# sourceMappingURL=db-utils.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blog_service__ = __webpack_require__(448);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__blog_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toast_service__ = __webpack_require__(236);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__toast_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert_service__ = __webpack_require__(297);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__alert_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nutrition_service__ = __webpack_require__(461);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__nutrition_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shop_service__ = __webpack_require__(462);
/* unused harmony reexport ShopService */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__workout_service__ = __webpack_require__(463);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__workout_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tool_service__ = __webpack_require__(298);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_6__tool_service__["a"]; });







//# sourceMappingURL=index.services.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index_services__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_firestore__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Services

// Firebase



// Rxjs/ Operators


var AuthService = /** @class */ (function () {
    function AuthService(afAuth, toast, afs) {
        var _this = this;
        this.afAuth = afAuth;
        this.toast = toast;
        this.afs = afs;
        this.authState = null;
        this.usersCollectionRef = this.afs.collection("users");
        this.user$ = this.afAuth.authState.pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["switchMap"])(function (user) {
            if (user) {
                _this.userStatus = user.status;
                return _this.afs.doc("users/" + user.uid).valueChanges();
            }
            else {
                return Object(__WEBPACK_IMPORTED_MODULE_5_rxjs__["of"])(null);
            }
        }));
        this.afAuth.authState.subscribe(function (auth) {
            _this.authState = auth;
        });
    }
    Object.defineProperty(AuthService.prototype, "authenticated", {
        // Returns true if user is logged in
        get: function () {
            return this.authState !== null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUser", {
        // Returns current user data
        get: function () {
            return this.authenticated ? this.authState : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUserObservable", {
        // Returns
        get: function () {
            return this.afAuth.authState;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUserId", {
        // Returns current user UID
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().currentUser.uid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUserAnonymous", {
        // Anonymous User
        get: function () {
            return this.authenticated ? this.authState.isAnonymous : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUserDisplayName", {
        // Returns current user display name or Guest
        get: function () {
            if (!this.authState) {
                return "Guest";
            }
            else if (this.currentUserAnonymous) {
                return "Anonymous";
            }
            else {
                return this.authState["displayName"] || "User without a Name";
            }
        },
        enumerable: true,
        configurable: true
    });
    //// Anonymous Auth ////
    AuthService.prototype.anonymousLogin = function () {
        var _this = this;
        return this.afAuth.auth
            .signInAnonymously()
            .then(function (user) {
            _this.authState = user;
        })
            .catch(function (error) { return console.log(error); });
    };
    //// Email/Password Auth ////
    AuthService.prototype.emailSignUp = function (user, password) {
        return this.afAuth.auth.createUserWithEmailAndPassword(user.email, password);
    };
    AuthService.prototype.emailLogin = function (email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    };
    // Sends email allowing user to reset password
    AuthService.prototype.resetPassword = function (email) {
        var _this = this;
        var auth = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]();
        return auth
            .sendPasswordResetEmail(email)
            .then(function () {
            _this.toast.create("Email sent!");
        })
            .catch(function (error) { return console.log(error); });
    };
    //// Helpers ////
    AuthService.prototype.createUserDocument = function (newUser, user) {
        return this.afs
            .collection("users")
            .doc(newUser.uid)
            .set({
            uid: newUser.uid,
            displayName: user.displayName,
            email: newUser.email,
            target: user.target
        });
    };
    AuthService.prototype.updateProfile = function (user) {
        return this.afs
            .collection("users")
            .doc(user.uid)
            .set({
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
            target: user.target
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])({ providedIn: "root" }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1__services_index_services__["d" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_fire_firestore__["a" /* AngularFirestore */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 194:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 194;

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/blog-detail/blog-detail.module": [
		513,
		5
	],
	"../pages/blogs/blogs.module": [
		515,
		4
	],
	"../pages/dashboard/dashboard.module": [
		516,
		15
	],
	"../pages/forgotpassword/forgotpassword.module": [
		517,
		14
	],
	"../pages/full-workout/full-workout.module": [
		514,
		13
	],
	"../pages/nutrition/nutrition.module": [
		518,
		12
	],
	"../pages/plans/plans.module": [
		519,
		11
	],
	"../pages/profile/profile.module": [
		520,
		2
	],
	"../pages/recipe-detail/recipe-detail.module": [
		522,
		10
	],
	"../pages/recipes/recipes.module": [
		523,
		9
	],
	"../pages/settings/settings.module": [
		521,
		8
	],
	"../pages/signin/signin.module": [
		524,
		1
	],
	"../pages/signup/signup.module": [
		525,
		0
	],
	"../pages/tabs/tabs.module": [
		526,
		7
	],
	"../pages/workout-detail/workout-detail.module": [
		528,
		3
	],
	"../pages/workouts/workouts.module": [
		527,
		6
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 235;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
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


var ToastService = /** @class */ (function () {
    function ToastService(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    ToastService.prototype.create = function (message, duration, position, closeButton) {
        if (duration === void 0) { duration = 1000; }
        if (position === void 0) { position = "bottom"; }
        if (this.toast) {
            this.toast.dismiss();
        }
        this.toast = this.toastCtrl.create({
            message: message,
            duration: duration,
            position: position,
            showCloseButton: closeButton,
            closeButtonText: 'x',
        });
        this.toast.present();
    };
    ToastService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], ToastService);
    return ToastService;
}());

//# sourceMappingURL=toast.service.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_component__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__category_card_category_card__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__workout_header_workout_header__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__blog_card_blog_card__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__post_card_post_card__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__nutrition_card_nutrition_card__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__recipe_card_recipe_card__ = __webpack_require__(447);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Modules

// Components







var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__index_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_3__index_component__["b" /* TitleComponent */],
                __WEBPACK_IMPORTED_MODULE_3__index_component__["d" /* WeeklyCardComponent */],
                __WEBPACK_IMPORTED_MODULE_3__index_component__["c" /* ToolCardComponent */],
                __WEBPACK_IMPORTED_MODULE_4__category_card_category_card__["a" /* CategoryCardComponent */],
                __WEBPACK_IMPORTED_MODULE_5__workout_header_workout_header__["a" /* WorkoutHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_6__blog_card_blog_card__["a" /* BlogCardComponent */],
                __WEBPACK_IMPORTED_MODULE_7__post_card_post_card__["a" /* PostCardComponent */],
                __WEBPACK_IMPORTED_MODULE_8__nutrition_card_nutrition_card__["a" /* NutritionCardComponent */],
                __WEBPACK_IMPORTED_MODULE_9__recipe_card_recipe_card__["a" /* RecipeCardComponent */],
                __WEBPACK_IMPORTED_MODULE_3__index_component__["e" /* WorkoutCardComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__index_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_3__index_component__["b" /* TitleComponent */],
                __WEBPACK_IMPORTED_MODULE_3__index_component__["d" /* WeeklyCardComponent */],
                __WEBPACK_IMPORTED_MODULE_3__index_component__["c" /* ToolCardComponent */],
                __WEBPACK_IMPORTED_MODULE_4__category_card_category_card__["a" /* CategoryCardComponent */],
                __WEBPACK_IMPORTED_MODULE_5__workout_header_workout_header__["a" /* WorkoutHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_6__blog_card_blog_card__["a" /* BlogCardComponent */],
                __WEBPACK_IMPORTED_MODULE_7__post_card_post_card__["a" /* PostCardComponent */],
                __WEBPACK_IMPORTED_MODULE_8__nutrition_card_nutrition_card__["a" /* NutritionCardComponent */],
                __WEBPACK_IMPORTED_MODULE_9__recipe_card_recipe_card__["a" /* RecipeCardComponent */],
                __WEBPACK_IMPORTED_MODULE_3__index_component__["e" /* WorkoutCardComponent */],
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
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


var AlertService = /** @class */ (function () {
    function AlertService(alertCtrl) {
        this.alertCtrl = alertCtrl;
    }
    AlertService.prototype.presentAlert = function (title, message) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: [
                {
                    text: 'OK'
                }
            ]
        });
        return alert.present();
    };
    AlertService.prototype.presentErrorAlert = function (message) {
        return this.presentAlert('An error has occurred.', message);
    };
    AlertService.prototype.presentConfirm = function (title, message) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var confirm = _this.alertCtrl.create({
                title: title,
                message: message,
                buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            confirm.dismiss().then(function () { return resolve(false); });
                            return false;
                        }
                    }, {
                        text: 'Yes',
                        handler: function () {
                            confirm.dismiss().then(function () { return resolve(true); });
                            return false;
                        }
                    }]
            });
            return confirm.present();
        });
    };
    AlertService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AlertService);
    return AlertService;
}());

//# sourceMappingURL=alert.service.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToolService = /** @class */ (function () {
    function ToolService(http) {
        this.http = http;
        // We save the json file url
        this.toolsURL = "https://utramuscleportal.firebaseio.com/tools.json";
    }
    // We get all the tools from the json file
    ToolService.prototype.getTools = function () {
        return this.http.get(this.toolsURL)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (res) {
            return res;
        }));
    };
    ToolService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ToolService);
    return ToolService;
}());

//# sourceMappingURL=tool.service.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(242);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsProvider = /** @class */ (function () {
    function SettingsProvider(platform, storage) {
        this.platform = platform;
        this.storage = storage;
        this.settings = {
            showTutorial: true,
            userLogged: false
        };
    }
    SettingsProvider.prototype.uploadStorage = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            if (_this.platform.is("cordova")) {
                // Device
                _this.storage.get("settings").then(function (settings) {
                    if (settings) {
                        _this.settings = settings;
                    }
                    resolve();
                });
            }
            else {
                // Desktop
                // We use JSON.parse to become a string to object
                if (localStorage.getItem("settings")) {
                    _this.settings = JSON.parse(localStorage.getItem("settings"));
                }
                resolve();
            }
        });
        return promise;
    };
    SettingsProvider.prototype.saveStorage = function () {
        var _this = this;
        if (this.platform.is("cordova")) {
            // Device
            this.storage.set("settings", this.settings).then(function () {
                _this.storage.set("settings", _this.settings);
            });
        }
        else {
            // Desktop
            // We use JSON.stringify to become an object to string
            localStorage.setItem("settings", JSON.stringify(this.settings));
        }
    };
    SettingsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], SettingsProvider);
    return SettingsProvider;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(415);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_app_component__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_components_module__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_core_module__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_index_services__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_settings_settings__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(242);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// Pages

// Modules


// Services


// Plugins

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_app_component__["a" /* MyApp */], {
                    scrollPadding: false,
                    scrollAssist: true,
                    autoFocusAssist: false,
                    mode: 'ios'
                }, {
                    links: [
                        { loadChildren: '../pages/blog-detail/blog-detail.module#BlogDetailPageModule', name: 'BlogDetailPage', segment: 'blog-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/full-workout/full-workout.module#FullWorkoutPageModule', name: 'FullWorkoutPage', segment: 'full-workout', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/blogs/blogs.module#BlogsPageModule', name: 'BlogsPage', segment: 'blogs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgotpassword/forgotpassword.module#ForgotpasswordPageModule', name: 'ForgotpasswordPage', segment: 'forgotpassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nutrition/nutrition.module#NutritionPageModule', name: 'NutritionPage', segment: 'nutrition', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/plans/plans.module#PlansPageModule', name: 'PlansPage', segment: 'plans', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recipe-detail/recipe-detail.module#RecipeDetailPageModule', name: 'RecipeDetailPage', segment: 'recipe-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recipes/recipes.module#RecipesPageModule', name: 'RecipesPage', segment: 'recipes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signin/signin.module#SigninPageModule', name: 'SigninPage', segment: 'signin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/workouts/workouts.module#WorkoutsPageModule', name: 'WorkoutsPage', segment: 'workouts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/workout-detail/workout-detail.module#WorkoutDetailPageModule', name: 'WorkoutDetailPage', segment: 'workout-detail', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_7__components_components_module__["a" /* ComponentsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__services_index_services__["f" /* WorkoutService */],
                __WEBPACK_IMPORTED_MODULE_9__services_index_services__["e" /* ToolService */],
                __WEBPACK_IMPORTED_MODULE_9__services_index_services__["c" /* NutritionService */],
                __WEBPACK_IMPORTED_MODULE_9__services_index_services__["a" /* AlertService */],
                __WEBPACK_IMPORTED_MODULE_9__services_index_services__["d" /* ToastService */],
                __WEBPACK_IMPORTED_MODULE_9__services_index_services__["b" /* BlogService */],
                __WEBPACK_IMPORTED_MODULE_10__providers_settings_settings__["a" /* SettingsProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__workout_card_workout_card__ = __webpack_require__(437);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__workout_card_workout_card__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__weekly_card_weekly_card__ = __webpack_require__(438);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__weekly_card_weekly_card__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_header__ = __webpack_require__(439);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__header_header__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__title_title_component__ = __webpack_require__(440);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__title_title_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tool_card_tool_card__ = __webpack_require__(441);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__tool_card_tool_card__["a"]; });





//# sourceMappingURL=index.component.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkoutCardComponent; });
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


var WorkoutCardComponent = /** @class */ (function () {
    function WorkoutCardComponent(navCtrl) {
        this.navCtrl = navCtrl;
    }
    // We move to WorkoutDetailPage
    WorkoutCardComponent.prototype.goToWorkoutDetailPage = function (workout) {
        // We call the navCtrl service to move to another page and we sent the workout selected
        this.navCtrl.push("WorkoutDetailPage", { workout: workout });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], WorkoutCardComponent.prototype, "workout", void 0);
    WorkoutCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "workout-card",template:/*ion-inline-start:"C:\Users\ctorr\Documents\projects\ionic\ultramuscle-app\src\components\workout-card\workout-card.html"*/'<ion-card class="fadeInUp animated bg-transparent" (click)="goToWorkoutDetailPage(workout)">\n  <ion-card-content>\n    <figure><img [src]="workout.icon"></figure>\n    <div>\n      <h2 class="text-white">{{ workout.name }}</h2>\n      <p style="margin-top:1rem;" class="text-light">{{ workout.name }} Guide</p>\n    </div>\n  </ion-card-content>\n</ion-card>'/*ion-inline-end:"C:\Users\ctorr\Documents\projects\ionic\ultramuscle-app\src\components\workout-card\workout-card.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], WorkoutCardComponent);
    return WorkoutCardComponent;
}());

//# sourceMappingURL=workout-card.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeeklyCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_toast_service__ = __webpack_require__(236);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WeeklyCardComponent = /** @class */ (function () {
    function WeeklyCardComponent(navCtrl, toast) {
        this.navCtrl = navCtrl;
        this.toast = toast;
    }
    WeeklyCardComponent.prototype.goToWorkoutsPage = function () {
        if ((this.day === "Wednesday") || (this.day === "Sunday")) {
            this.toast.create("Rest day");
            return;
        }
        this.navCtrl.push("WorkoutsPage", { day: this.day });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], WeeklyCardComponent.prototype, "day", void 0);
    WeeklyCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'weekly-card',template:/*ion-inline-start:"C:\Users\ctorr\Documents\projects\ionic\ultramuscle-app\src\components\weekly-card\weekly-card.html"*/'<ion-card class="fadeInUp animated bg-transparent" (click)="goToWorkoutsPage()">\n\n  <ion-card-content>\n\n    <div>\n\n      <h2 class="text-white">{{ day }}</h2>\n\n      <p style="margin-top:1rem;" class="text-light">Your Workout Plan for {{ day }}</p>\n\n    </div>\n\n  </ion-card-content>\n\n</ion-card>'/*ion-inline-end:"C:\Users\ctorr\Documents\projects\ionic\ultramuscle-app\src\components\weekly-card\weekly-card.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__services_toast_service__["a" /* ToastService */]])
    ], WeeklyCardComponent);
    return WeeklyCardComponent;
}());

//# sourceMappingURL=weekly-card.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
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


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HeaderComponent.prototype.goToPage = function () {
        this.navCtrl.push(this.goTo);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "goTo", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-header',template:/*ion-inline-start:"C:\Users\ctorr\Documents\projects\ionic\ultramuscle-app\src\components\header\header.html"*/'<ion-navbar>\n\n    <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{ title }}</ion-title>\n\n\n\n    <!-- <ion-buttons end>\n\n        <button ion-button>\n\n            <img src="../../assets/imgs/logo.png" alt="" width="60" (click)="goToPage()">\n\n        </button>\n\n    </ion-buttons> -->\n\n</ion-navbar>'/*ion-inline-end:"C:\Users\ctorr\Documents\projects\ionic\ultramuscle-app\src\components\header\header.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], HeaderComponent);
    return HeaderComponent;
}());

//# sourceMappingURL=header.js.map

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TitleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TitleComponent = /** @class */ (function () {
    function TitleComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], TitleComponent.prototype, "title", void 0);
    TitleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'title-component',template:/*ion-inline-start:"C:\Users\ctorr\Documents\projects\ionic\ultramuscle-app\src\components\title\title-component.html"*/'<ion-row class="text-area">\n\n  <ion-col col-12>\n\n    <h3 class="">{{ title }}</h3>\n\n  </ion-col>\n\n</ion-row>'/*ion-inline-end:"C:\Users\ctorr\Documents\projects\ionic\ultramuscle-app\src\components\title\title-component.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TitleComponent);
    return TitleComponent;
}());

//# sourceMappingURL=title-component.js.map

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToolCardComponent = /** @class */ (function () {
    function ToolCardComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ToolCardComponent.prototype, "image", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ToolCardComponent.prototype, "name", void 0);
    ToolCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'tool-card',template:/*ion-inline-start:"C:\Users\ctorr\Documents\projects\ionic\ultramuscle-app\src\components\tool-card\tool-card.html"*/'<ion-card class="fadeInUp animated bg-transparent">\n\n  <ion-card-content>\n\n    <figure><img [src]="\'../../assets/imgs/\' + image"></figure>\n\n    <div>\n\n      <h2 class="text-white">{{ name }}</h2>\n\n    </div>\n\n  </ion-card-content>\n\n</ion-card>'/*ion-inline-end:"C:\Users\ctorr\Documents\projects\ionic\ultramuscle-app\src\components\tool-card\tool-card.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ToolCardComponent);
    return ToolCardComponent;
}());

//# sourceMappingURL=tool-card.js.map

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryCardComponent; });
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


var CategoryCardComponent = /** @class */ (function () {
    function CategoryCardComponent(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    // We move to ItemsPage with the item object
    CategoryCardComponent.prototype.goToItemsPage = function (item) {
        this.navCtrl.push(this.goTo, { item: item });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], CategoryCardComponent.prototype, "items", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], CategoryCardComponent.prototype, "goTo", void 0);
    CategoryCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'category-card',template:/*ion-inline-start:"C:\Users\ctorr\Documents\projects\ionic\ultramuscle-app\src\components\category-card\category-card.html"*/'<ion-card class="fadeInUp animated bg-transparent bg-transparent" (click)="goToItemsPage(item)" *ngFor="let item of items">\n\n  <ion-card-content>\n\n    <figure><img [src]="item.icon"></figure>\n\n    <div>\n\n      <h2>{{ item.name }}</h2>\n\n    </div>\n\n  </ion-card-content>\n\n</ion-card>'/*ion-inline-end:"C:\Users\ctorr\Documents\projects\ionic\ultramuscle-app\src\components\category-card\category-card.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], CategoryCardComponent);
    return CategoryCardComponent;
}());

//# sourceMappingURL=category-card.js.map

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkoutHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WorkoutHeaderComponent = /** @class */ (function () {
    function WorkoutHeaderComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], WorkoutHeaderComponent.prototype, "category", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], WorkoutHeaderComponent.prototype, "level", void 0);
    WorkoutHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'workout-header',template:/*ion-inline-start:"C:\Users\ctorr\Documents\projects\ionic\ultramuscle-app\src\components\workout-header\workout-header.html"*/'<ion-navbar>\n\n  <ion-title>\n\n      <ion-row>\n\n        <ion-col col-8>\n\n          {{ category }} <br>{{ level }}\n\n        </ion-col>\n\n        <ion-col col-4 text-right>\n\n          <span>\n\n            <p>Level</p>\n\n            <ion-icon name="md-flash" class="active"></ion-icon>\n\n            <ion-icon name="md-flash"></ion-icon>\n\n            <ion-icon name="md-flash"></ion-icon>\n\n          </span>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <p>11 Workout</p>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-title>      \n\n</ion-navbar>'/*ion-inline-end:"C:\Users\ctorr\Documents\projects\ionic\ultramuscle-app\src\components\workout-header\workout-header.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], WorkoutHeaderComponent);
    return WorkoutHeaderComponent;
}());

//# sourceMappingURL=workout-header.js.map

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_nav_controller__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlogCardComponent = /** @class */ (function () {
    function BlogCardComponent(navCtrl) {
        this.navCtrl = navCtrl;
    }
    BlogCardComponent.prototype.goToBlogPageDetail = function (blog) {
        this.navCtrl.push('BlogDetailPage', { blog: blog });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], BlogCardComponent.prototype, "blog", void 0);
    BlogCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'blog-card',template:/*ion-inline-start:"C:\Users\ctorr\Documents\projects\ionic\ultramuscle-app\src\components\blog-card\blog-card.html"*/'<ion-card no-padding class="bg-transparent text-white">\n\n  <img [src]="blog.image" />\n\n  <ion-card-content>\n\n    <ion-card-title text-center class="text-white">\n\n        {{ blog.title }}\n\n    </ion-card-title>\n\n    <p class="text-white">\n\n        {{ blog.shortDescription }}\n\n    </p>\n\n    <hr>\n\n    <button (click)="goToBlogPageDetail(blog)" ion-button block color="danger">View</button>\n\n  </ion-card-content>\n\n</ion-card>'/*ion-inline-end:"C:\Users\ctorr\Documents\projects\ionic\ultramuscle-app\src\components\blog-card\blog-card.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_nav_controller__["a" /* NavController */]])
    ], BlogCardComponent);
    return BlogCardComponent;
}());

//# sourceMappingURL=blog-card.js.map

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the PostCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var PostCardComponent = /** @class */ (function () {
    function PostCardComponent() {
        console.log('Hello PostCardComponent Component');
        this.text = 'Hello World';
    }
    PostCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'post-card',template:/*ion-inline-start:"C:\Users\ctorr\Documents\projects\ionic\ultramuscle-app\src\components\post-card\post-card.html"*/'<ion-card class="fadeInUp animated bg-transparent" (click)="goToPostPage()">\n\n  <ion-card-content>\n\n    <figure><img src="../../assets/imgs/blog/1.png"></figure>\n\n    <div>\n\n      <h2 class="text-white">Post1</h2>\n\n      <p style="margin-top:1rem;" class="text-light">31 March 19</p>\n\n    </div>\n\n  </ion-card-content>\n\n</ion-card>'/*ion-inline-end:"C:\Users\ctorr\Documents\projects\ionic\ultramuscle-app\src\components\post-card\post-card.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], PostCardComponent);
    return PostCardComponent;
}());

//# sourceMappingURL=post-card.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NutritionCardComponent; });
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


var NutritionCardComponent = /** @class */ (function () {
    function NutritionCardComponent(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    // We move to ItemsPage with the item object
    NutritionCardComponent.prototype.goToItemsPage = function (item) {
        this.navCtrl.push(this.goTo, { item: item });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], NutritionCardComponent.prototype, "items", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], NutritionCardComponent.prototype, "goTo", void 0);
    NutritionCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'nutrition-card',template:/*ion-inline-start:"C:\Users\ctorr\Documents\projects\ionic\ultramuscle-app\src\components\nutrition-card\nutrition-card.html"*/'<ion-card [ngStyle]="{\'background-image\':\'url(\'+item.icon+\')\'}" (click)="goToItemsPage(item)" *ngFor="let item of items">\n\n  <ion-card-content>\n\n    <div>\n\n      <h2 class="text-white">{{ item.name }}</h2>\n\n    </div>\n\n  </ion-card-content>\n\n</ion-card>'/*ion-inline-end:"C:\Users\ctorr\Documents\projects\ionic\ultramuscle-app\src\components\nutrition-card\nutrition-card.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], NutritionCardComponent);
    return NutritionCardComponent;
}());

//# sourceMappingURL=nutrition-card.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeCardComponent; });
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


var RecipeCardComponent = /** @class */ (function () {
    function RecipeCardComponent(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RecipeCardComponent.prototype.goToItemDetail = function (item) {
        // We call the navCtrl service to move to another page and we sent the workout selected
        this.navCtrl.push(this.goTo, { item: item });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], RecipeCardComponent.prototype, "item", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], RecipeCardComponent.prototype, "goTo", void 0);
    RecipeCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'recipe-card',template:/*ion-inline-start:"C:\Users\ctorr\Documents\projects\ionic\ultramuscle-app\src\components\recipe-card\recipe-card.html"*/'<ion-card class="fadeInUp animated bg-transparent" (click)="goToItemDetail(item)">\n\n  <ion-card-content>\n\n    <div>\n\n      <h2 class="text-white">{{ item.name }}</h2>\n\n      <p style="margin-top:1rem;" class="text-light">{{ item.name }} Recipe</p>\n\n    </div>\n\n  </ion-card-content>\n\n</ion-card>'/*ion-inline-end:"C:\Users\ctorr\Documents\projects\ionic\ultramuscle-app\src\components\recipe-card\recipe-card.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], RecipeCardComponent);
    return RecipeCardComponent;
}());

//# sourceMappingURL=recipe-card.js.map

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__db_utils__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_firestore__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(13);
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

// Operators

var BlogService = /** @class */ (function () {
    function BlogService(db) {
        this.db = db;
    }
    // Get all blogs
    BlogService.prototype.getAllBlogs = function (order) {
        return this.db
            .collection("blogs", function (ref) { return ref.orderBy(order); })
            .snapshotChanges()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (snaps) { return Object(__WEBPACK_IMPORTED_MODULE_1__db_utils__["a" /* convertSnaps */])(snaps); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["first"])());
    };
    BlogService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_fire_firestore__["a" /* AngularFirestore */]])
    ], BlogService);
    return BlogService;
}());

//# sourceMappingURL=blog.service.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NutritionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_firestore__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__db_utils__ = __webpack_require__(130);
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Operators


var NutritionService = /** @class */ (function () {
    function NutritionService(db) {
        this.db = db;
    }
    NutritionService.prototype.loadAllNutrition = function () {
        return this.db.collection('nutrition', function (ref) { return ref.orderBy('nutritionId'); })
            .snapshotChanges()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (snaps) {
            return snaps.map(function (snap) {
                return __assign({ id: snap.payload.doc.id }, snap.payload.doc.data());
            });
        }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["first"])());
    };
    NutritionService.prototype.findRecipes = function (nutritionId, sortOrder) {
        if (sortOrder === void 0) { sortOrder = 'asc'; }
        return this.db.collection("nutrition/" + nutritionId + "/recipes", function (ref) { return ref.orderBy('nutritionId', sortOrder); })
            .snapshotChanges()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (snaps) { return Object(__WEBPACK_IMPORTED_MODULE_3__db_utils__["a" /* convertSnaps */])(snaps); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["first"])());
    };
    NutritionService.prototype.getUserRecipes = function (nutritionId, sortOrder) {
        if (sortOrder === void 0) { sortOrder = 'asc'; }
        return this.db.collection("nutrition/" + nutritionId + "/recipes", function (ref) { return ref.orderBy('nutritionId', sortOrder).limit(3); })
            .snapshotChanges()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (snaps) { return Object(__WEBPACK_IMPORTED_MODULE_3__db_utils__["a" /* convertSnaps */])(snaps); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["first"])());
    };
    NutritionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_fire_firestore__["a" /* AngularFirestore */]])
    ], NutritionService);
    return NutritionService;
}());

//# sourceMappingURL=nutrition.service.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ShopService */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShopService = /** @class */ (function () {
    function ShopService(http) {
        this.http = http;
        this.productsUrl = "../assets/data/products.json";
        this.productCategoriesUrl = "../assets/data/product-categories.json";
    }
    ShopService.prototype.getProducts = function () {
        return this.http.get(this.productsUrl);
    };
    ShopService.prototype.getProductCategories = function () {
        return this.http.get(this.productCategoriesUrl);
    };
    ShopService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ShopService);
    return ShopService;
}());

//# sourceMappingURL=shop.service.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkoutService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__db_utils__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_firestore__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(13);
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

// Operators

var WorkoutService = /** @class */ (function () {
    function WorkoutService(db) {
        this.db = db;
        this.chestId = "WEdoqPLgCQjppaWaBFQF";
    }
    // Get all plans
    WorkoutService.prototype.loadAllPlans = function () {
        return this.db
            .collection("plans", function (ref) { return ref.orderBy("planId"); })
            .snapshotChanges()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (snaps) { return Object(__WEBPACK_IMPORTED_MODULE_1__db_utils__["a" /* convertSnaps */])(snaps); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["first"])());
    };
    // Get all the workouts
    WorkoutService.prototype.getAllWorkouts = function (order) {
        return this.db
            .collection("workouts", function (ref) { return ref.orderBy(order); })
            .snapshotChanges()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (snaps) { return Object(__WEBPACK_IMPORTED_MODULE_1__db_utils__["a" /* convertSnaps */])(snaps); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["first"])());
    };
    // Get all the workouts by plan selected
    WorkoutService.prototype.loadWorkoutsByPlan = function (planId) {
        return this.db
            .collection("workouts", function (ref) { return ref.where("planId", "==", planId); })
            .snapshotChanges()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (snaps) { return Object(__WEBPACK_IMPORTED_MODULE_1__db_utils__["a" /* convertSnaps */])(snaps); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["first"])());
    };
    WorkoutService.prototype.getWorkoutsByDayPlan = function (workouts$, plan) {
        return workouts$
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (workouts) { return workouts.filter(function (workout) { return workout.planId === plan; }); }));
    };
    WorkoutService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_fire_firestore__["a" /* AngularFirestore */]])
    ], WorkoutService);
    return WorkoutService;
}());

//# sourceMappingURL=workout.service.js.map

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(159);
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




// Firebase


// Providers
// import { SettingsProvider } from "../providers/settings/settings";
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, afAuth, auth) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.afAuth = afAuth;
        this.auth = auth;
        this.elements = [
            {
                id: 0,
                name: "Dashboard",
                icon: "md-home"
            },
            {
                id: 1,
                name: "Workouts",
                icon: "body"
            },
            {
                id: 2,
                name: "Nutrition",
                icon: "nutrition"
            },
            {
                id: 3,
                name: "Blogs",
                icon: "pricetag"
            }
        ];
        this.initializeApp();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        // All the ionic modules are ready loaded
        this.platform.ready().then(function () {
            // this._settings.uploadStorage();
            // console.log(this._settings.settings.userLogged);
            _this.rootPage = "SigninPage";
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    // Take the user to Profile Page
    MyApp.prototype.goToProfilePage = function () {
        this.nav.setRoot("ProfilePage");
    };
    // Take the user to Tabs Page
    MyApp.prototype.tabsPage = function () {
        this.nav.setRoot("TabsPage");
    };
    // User logout and take the user to Signin Page
    MyApp.prototype.signOut = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.afAuth.auth.signOut()];
                    case 1:
                        _a.sent();
                        this.nav.setRoot("SigninPage");
                        return [2 /*return*/];
                }
            });
        });
    };
    // Take the user to Tabs Page wuth the tab selected depending the menu option selected by the user
    MyApp.prototype.goToItemPage = function (id) {
        this.nav.setRoot("TabsPage", { tabIndex: id });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\ctorr\Documents\projects\ionic\ultramuscle-app\src\app\app.component.html"*/'<ion-menu id="main" [content]="content">\n\n    <ion-header>\n\n        <div class="menu heading">\n\n            <ion-list *ngIf="auth.user$ | async as user">\n\n                <ion-item menuClose (click)="goToProfilePage()">\n\n                    <!-- <ion-avatar item-start>\n\n                        <img src="assets/imgs/profile.jpg">\n\n                    </ion-avatar> -->\n\n                    <h2 class="text-white">{{ user.displayName }}</h2>\n\n                    <p class="text-white">View Profile</p>\n\n                </ion-item>\n\n            </ion-list>\n\n        </div>\n\n    </ion-header>\n\n\n\n    <ion-content class="menu" padding>\n\n        <ion-list no-lines class="text-white">\n\n            <ion-item menuClose (click)="goToItemPage(item.id)" *ngFor="let item of elements">\n\n                <ion-icon [name]="item.icon" item-start class="text-theme"></ion-icon>\n\n                {{ item.name }}\n\n            </ion-item>\n\n            <ion-item menuClose (click)="signOut()">\n\n                <ion-icon name="md-log-out" item-start class="text-theme"></ion-icon>\n\n                Logout\n\n            </ion-item>\n\n        </ion-list>\n\n    </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\ctorr\Documents\projects\ionic\ultramuscle-app\src\app\app.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* AuthService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__firebase__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_firestore__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_fire_storage__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_fire_auth__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// Firebase






// Services


var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_fire__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_1__firebase__["a" /* default */]),
                __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["d" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_fire_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["a" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_fire_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_fire_storage__["a" /* AngularFireStorageModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__auth_service__["a" /* AuthService */]]
        })
    ], CoreModule);
    return CoreModule;
}());

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var firebaseConfig = {
    apiKey: "AIzaSyBTvlbFtkysHl7fziRLn-dSWwlHEj1ulG4",
    authDomain: "utramuscleportal.firebaseapp.com",
    databaseURL: "https://utramuscleportal.firebaseio.com",
    projectId: "utramuscleportal",
    storageBucket: "utramuscleportal.appspot.com",
    messagingSenderId: "494990680266"
};
/* harmony default export */ __webpack_exports__["a"] = (firebaseConfig);
//# sourceMappingURL=firebase.js.map

/***/ })

},[300]);
//# sourceMappingURL=main.js.map