webpackJsonp([2],{

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ultimate_ngxerrors__ = __webpack_require__(534);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__ultimate_ngxerrors__["a" /* NgxErrorsModule */]
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxErrorsDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_toArray__ = __webpack_require__(531);




var NgxErrorsDirective = (function () {
    function NgxErrorsDirective(form) {
        this.form = form;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.ready = false;
    }
    Object.defineProperty(NgxErrorsDirective.prototype, "errors", {
        get: function () {
            if (!this.ready)
                return;
            return this.control.errors;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxErrorsDirective.prototype, "hasErrors", {
        get: function () {
            return !!this.errors;
        },
        enumerable: true,
        configurable: true
    });
    NgxErrorsDirective.prototype.hasError = function (name, conditions) {
        return this.checkPropState('invalid', name, conditions);
    };
    NgxErrorsDirective.prototype.isValid = function (name, conditions) {
        return this.checkPropState('valid', name, conditions);
    };
    NgxErrorsDirective.prototype.getError = function (name) {
        if (!this.ready)
            return;
        return this.control.getError(name);
    };
    NgxErrorsDirective.prototype.checkPropState = function (prop, name, conditions) {
        var _this = this;
        if (!this.ready)
            return;
        var controlPropsState = (!conditions || Object(__WEBPACK_IMPORTED_MODULE_3__utils_toArray__["a" /* toArray */])(conditions).every(function (condition) { return _this.control[condition]; }));
        if (name.charAt(0) === '*') {
            return this.control[prop] && controlPropsState;
        }
        return (prop === 'valid' ? !this.control.hasError(name) : this.control.hasError(name) && controlPropsState);
    };
    NgxErrorsDirective.prototype.checkStatus = function () {
        var control = this.control;
        var errors = control.errors;
        this.ready = true;
        if (!errors)
            return;
        for (var errorName in errors) {
            this.subject.next({ control: control, errorName: errorName });
        }
    };
    NgxErrorsDirective.prototype.ngOnChanges = function () {
        this.control = this.form.control.get(this.controlName);
    };
    NgxErrorsDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.checkStatus();
            _this.control.statusChanges.subscribe(_this.checkStatus.bind(_this));
        });
    };
    NgxErrorsDirective.prototype.ngOnDestroy = function () {
        this.subject.unsubscribe();
    };
    return NgxErrorsDirective;
}());

NgxErrorsDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */], args: [{
                selector: '[ngxErrors]',
                exportAs: 'ngxErrors'
            },] },
];
/** @nocollapse */
NgxErrorsDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroupDirective */], },
]; };
NgxErrorsDirective.propDecorators = {
    'controlName': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */], args: ['ngxErrors',] },],
};
//# sourceMappingURL=ngxerrors.directive.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxErrorDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_combineLatest__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_combineLatest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_combineLatest__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngxerrors_directive__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_toArray__ = __webpack_require__(531);









var NgxErrorDirective = (function () {
    function NgxErrorDirective(ngxErrors) {
        this.ngxErrors = ngxErrors;
        this.hidden = true;
        this.rules = [];
        this.errorNames = [];
    }
    Object.defineProperty(NgxErrorDirective.prototype, "ngxError", {
        set: function (value) {
            this.errorNames = Object(__WEBPACK_IMPORTED_MODULE_8__utils_toArray__["a" /* toArray */])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxErrorDirective.prototype, "when", {
        set: function (value) {
            this.rules = Object(__WEBPACK_IMPORTED_MODULE_8__utils_toArray__["a" /* toArray */])(value);
        },
        enumerable: true,
        configurable: true
    });
    NgxErrorDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._states = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.states = this._states.asObservable().distinctUntilChanged();
        var errors = this.ngxErrors.subject
            .filter(Boolean)
            .filter(function (obj) { return !!~_this.errorNames.indexOf(obj.errorName); });
        var states = this.states
            .map(function (states) { return _this.rules.every(function (rule) { return !!~states.indexOf(rule); }); });
        this.subscription = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].combineLatest(states, errors)
            .subscribe(function (_a) {
            var states = _a[0], errors = _a[1];
            _this.hidden = !(states && errors.control.hasError(errors.errorName));
        });
    };
    NgxErrorDirective.prototype.ngDoCheck = function () {
        var _this = this;
        this._states.next(this.rules.filter(function (rule) { return _this.ngxErrors.control[rule]; }));
    };
    NgxErrorDirective.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return NgxErrorDirective;
}());

NgxErrorDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */], args: [{
                selector: '[ngxError]'
            },] },
];
/** @nocollapse */
NgxErrorDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_7__ngxerrors_directive__["a" /* NgxErrorsDirective */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */], args: [Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* forwardRef */])(function () { return __WEBPACK_IMPORTED_MODULE_7__ngxerrors_directive__["a" /* NgxErrorsDirective */]; }),] },] },
]; };
NgxErrorDirective.propDecorators = {
    'ngxError': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'when': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'hidden': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostBinding */], args: ['hidden',] },],
};
//# sourceMappingURL=ngxerror.directive.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return toArray; });
var toArray = function (value) { return Array.isArray(value) ? value : [value]; };
//# sourceMappingURL=toArray.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_ngxerror_directive__ = __webpack_require__(530);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_ngxerrors_directive__ = __webpack_require__(529);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_ngxerrors_module__ = __webpack_require__(548);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__src_ngxerrors_module__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 535:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(536);
//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(12);
var filter_1 = __webpack_require__(537);
rxjs_1.Observable.prototype.filter = filter_1.filter;
//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 537:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(13);
/* tslint:enable:max-line-length */
/**
 * Filter items emitted by the source Observable by only emitting those that
 * satisfy a specified predicate.
 *
 * <span class="informal">Like
 * [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter),
 * it only emits a value from the source if it passes a criterion function.</span>
 *
 * <img src="./img/filter.png" width="100%">
 *
 * Similar to the well-known `Array.prototype.filter` method, this operator
 * takes values from the source Observable, passes them through a `predicate`
 * function and only emits those values that yielded `true`.
 *
 * @example <caption>Emit only click events whose target was a DIV element</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var clicksOnDivs = clicks.filter(ev => ev.target.tagName === 'DIV');
 * clicksOnDivs.subscribe(x => console.log(x));
 *
 * @see {@link distinct}
 * @see {@link distinctUntilChanged}
 * @see {@link distinctUntilKeyChanged}
 * @see {@link ignoreElements}
 * @see {@link partition}
 * @see {@link skip}
 *
 * @param {function(value: T, index: number): boolean} predicate A function that
 * evaluates each value emitted by the source Observable. If it returns `true`,
 * the value is emitted, if `false` the value is not passed to the output
 * Observable. The `index` parameter is the number `i` for the i-th source
 * emission that has happened since the subscription, starting from the number
 * `0`.
 * @param {any} [thisArg] An optional argument to determine the value of `this`
 * in the `predicate` function.
 * @return {Observable} An Observable of values from the source that were
 * allowed by the `predicate` function.
 * @method filter
 * @owner Observable
 */
function filter(predicate, thisArg) {
    return operators_1.filter(predicate, thisArg)(this);
}
exports.filter = filter;
//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 538:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(539);
//# sourceMappingURL=map.js.map

/***/ }),

/***/ 539:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(12);
var map_1 = __webpack_require__(540);
rxjs_1.Observable.prototype.map = map_1.map;
//# sourceMappingURL=map.js.map

/***/ }),

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(13);
/**
 * Applies a given `project` function to each value emitted by the source
 * Observable, and emits the resulting values as an Observable.
 *
 * <span class="informal">Like [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map),
 * it passes each source value through a transformation function to get
 * corresponding output values.</span>
 *
 * <img src="./img/map.png" width="100%">
 *
 * Similar to the well known `Array.prototype.map` function, this operator
 * applies a projection to each value and emits that projection in the output
 * Observable.
 *
 * @example <caption>Map every click to the clientX position of that click</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var positions = clicks.map(ev => ev.clientX);
 * positions.subscribe(x => console.log(x));
 *
 * @see {@link mapTo}
 * @see {@link pluck}
 *
 * @param {function(value: T, index: number): R} project The function to apply
 * to each `value` emitted by the source Observable. The `index` parameter is
 * the number `i` for the i-th emission that has happened since the
 * subscription, starting from the number `0`.
 * @param {any} [thisArg] An optional argument to define what `this` is in the
 * `project` function.
 * @return {Observable<R>} An Observable that emits the values from the source
 * Observable transformed by the given `project` function.
 * @method map
 * @owner Observable
 */
function map(project, thisArg) {
    return operators_1.map(project, thisArg)(this);
}
exports.map = map;
//# sourceMappingURL=map.js.map

/***/ }),

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(542);
//# sourceMappingURL=distinctUntilChanged.js.map

/***/ }),

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(12);
var distinctUntilChanged_1 = __webpack_require__(543);
rxjs_1.Observable.prototype.distinctUntilChanged = distinctUntilChanged_1.distinctUntilChanged;
//# sourceMappingURL=distinctUntilChanged.js.map

/***/ }),

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(13);
/* tslint:enable:max-line-length */
/**
 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item.
 *
 * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
 *
 * If a comparator function is not provided, an equality check is used by default.
 *
 * @example <caption>A simple example with numbers</caption>
 * Observable.of(1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4)
 *   .distinctUntilChanged()
 *   .subscribe(x => console.log(x)); // 1, 2, 1, 2, 3, 4
 *
 * @example <caption>An example using a compare function</caption>
 * interface Person {
 *    age: number,
 *    name: string
 * }
 *
 * Observable.of<Person>(
 *     { age: 4, name: 'Foo'},
 *     { age: 7, name: 'Bar'},
 *     { age: 5, name: 'Foo'})
 *     { age: 6, name: 'Foo'})
 *     .distinctUntilChanged((p: Person, q: Person) => p.name === q.name)
 *     .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Foo' }
 * // { age: 7, name: 'Bar' }
 * // { age: 5, name: 'Foo' }
 *
 * @see {@link distinct}
 * @see {@link distinctUntilKeyChanged}
 *
 * @param {function} [compare] Optional comparison function called to test if an item is distinct from the previous item in the source.
 * @return {Observable} An Observable that emits items from the source Observable with distinct values.
 * @method distinctUntilChanged
 * @owner Observable
 */
function distinctUntilChanged(compare, keySelector) {
    return operators_1.distinctUntilChanged(compare, keySelector)(this);
}
exports.distinctUntilChanged = distinctUntilChanged;
//# sourceMappingURL=distinctUntilChanged.js.map

/***/ }),

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(545);
//# sourceMappingURL=combineLatest.js.map

/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(12);
rxjs_1.Observable.combineLatest = rxjs_1.combineLatest;
//# sourceMappingURL=combineLatest.js.map

/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(547));
//# sourceMappingURL=BehaviorSubject.js.map

/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(12);
exports.BehaviorSubject = rxjs_1.BehaviorSubject;
//# sourceMappingURL=BehaviorSubject.js.map

/***/ }),

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxErrorsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngxerrors_directive__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngxerror_directive__ = __webpack_require__(530);



var dependencies = [
    __WEBPACK_IMPORTED_MODULE_1__ngxerrors_directive__["a" /* NgxErrorsDirective */],
    __WEBPACK_IMPORTED_MODULE_2__ngxerror_directive__["a" /* NgxErrorDirective */]
];
var NgxErrorsModule = (function () {
    function NgxErrorsModule() {
    }
    return NgxErrorsModule;
}());

NgxErrorsModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */], args: [{
                declarations: dependencies.slice(),
                exports: dependencies.slice()
            },] },
];
/** @nocollapse */
NgxErrorsModule.ctorParameters = function () { return []; };
//# sourceMappingURL=ngxerrors.module.js.map

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_core_auth_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_alert_service__ = __webpack_require__(297);
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


// import { UserProvider } from '../../providers/user/user';



var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, toastController, auth, loadingCtrl, alert) {
        this.navCtrl = navCtrl;
        this.toastController = toastController;
        this.auth = auth;
        this.loadingCtrl = loadingCtrl;
        this.alert = alert;
        this.user = {
            uid: '',
            email: '',
            displayName: '',
            target: '',
            status: true,
        };
        this.targets = [
            {
                name: 'Loose Weight',
            },
            {
                name: 'Mainantence'
            },
            {
                name: 'Build Muscle'
            }
        ];
        this.country = "usa";
        // The form data and the validation
        this.profileForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            'displayName': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required),
            'target': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required)
        });
    }
    ProfilePage.prototype.updateProfile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var that, loader, err_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        that = this;
                        // We get the user data from the form
                        this.user.uid = this.auth.currentUser.uid;
                        this.user.email = this.auth.currentUser.email;
                        this.user.displayName = this.profileForm.value.displayName;
                        this.user.target = this.profileForm.value.target;
                        loader = this.loadingCtrl.create({
                            content: "Please wait..."
                        });
                        loader.present();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.auth.updateProfile(this.user)
                                .then((function () {
                                loader.dismiss();
                                _this.presentToast("Profile saved");
                            }))
                                .catch(function (err) {
                                loader.dismiss();
                                _this.alert.presentErrorAlert(err.message);
                            })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.dir(err_1);
                        loader.dismiss();
                        this.alert.presentErrorAlert(err_1.message);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // updateProfile(): void {
    //   this.presentToast("Profile saved");
    // }
    ProfilePage.prototype.presentToast = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\ctorr\Documents\projects\ultramuscle-app\src\pages\profile\profile.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Profile\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content class="login-bg" padding>\n\n    <!-- <div class="img-update fadeInUp animated">\n\n        <figure>\n\n            <img src="assets/imgs/profile.jpg" class="profile">\n\n            <ion-icon name="md-camera"></ion-icon>\n\n        </figure>\n\n    </div> -->\n\n    <div *ngIf="auth.user$ | async">\n\n        <div class="theme-input" *ngIf="auth.user$ | async as user">\n\n            <form [formGroup]="profileForm">\n\n                <ion-list class="fadeInUp animated delay-2 um-bg">\n\n                    <ion-item margin-bottom [ngClass]="{ invalid: displayNameErrors.hasError(\'*\', [\'touched\']) }">\n\n                        <ion-input type="text" formControlName="displayName" placeholder="Name" [value]="user.displayName"></ion-input>\n\n                    </ion-item>\n\n\n\n                    <div margin-bottom ngxErrors="displayName" #displayNameErrors="ngxErrors">\n\n                        <div [ngxError]="[\'displayName\', \'required\']" [when]="[\'touched\']" class="text-white">\n\n                            It should be a valid name\n\n                        </div>\n\n                    </div>\n\n                </ion-list>\n\n                <ion-list class="fadeInUp animated delay-4 um-bg">\n\n                    <ion-item margin-bottom [ngClass]="{ invalid: displayTargetErrors.hasError(\'*\', [\'touched\']) }">\n\n                        <ion-select formControlName="target" placeholder="Target" value="Loose Weight">\n\n                            <ion-option [value]="target.name" *ngFor="let target of targets">{{ target.name }}</ion-option>\n\n                        </ion-select>\n\n                    </ion-item>\n\n\n\n                    <div margin-bottom ngxErrors="target" #displayTargetErrors="ngxErrors">\n\n                        <div [ngxError]="[\'target\', \'required\']" [when]="[\'touched\']" class="text-white">\n\n                            It should be a valid target\n\n                        </div>\n\n                    </div>\n\n                </ion-list>\n\n                <ion-list class="fadeInUp animated delay-6 um-bg">\n\n                    <ion-item>\n\n                        <ion-label>Email Address</ion-label>\n\n                        <ion-input type="email" placeholder="Email" [value]="user.email" readonly>\n\n                        </ion-input>\n\n                    </ion-item>\n\n                </ion-list>\n\n            </form>\n\n        </div>\n\n    </div>\n\n    <br><br><br>\n\n    <p class="fixed">\n\n        <button [disabled]="profileForm.invalid" full ion-button color="danger" (click)="updateProfile()">\n\n            Update Profile\n\n        </button>\n\n    </p>\n\n</ion-content>'/*ion-inline-end:"C:\Users\ctorr\Documents\projects\ultramuscle-app\src\pages\profile\profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__app_core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=2.js.map