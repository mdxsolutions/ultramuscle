webpackJsonp([0],{

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ultimate_ngxerrors__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(296);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ultimate_ngxerrors__["a" /* NgxErrorsModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

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

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index_services__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_core_auth_service__ = __webpack_require__(159);
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



var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, menuCtrl, alert, toast, auth, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.alert = alert;
        this.toast = toast;
        this.auth = auth;
        this.loadingCtrl = loadingCtrl;
        // The user data from the form
        this.user = {
            uid: "",
            displayName: "",
            email: "",
            target: ""
        };
        // We check if the user is authenticated
        this.isAuthenticated = this.auth.authenticated;
        // The menu must be disabled because the user has not been authenticated
        this.menuCtrl.enable(false, "main");
        // The form data and the validation
        this.registerForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            displayName: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required),
            target: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required),
            email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]("", [
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")
            ]),
            password: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required),
            passwordConfirmation: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]("")
        });
        // We add the validation to check if the passwords match
        this.registerForm.controls["passwordConfirmation"].setValidators([
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required,
            this.passwordCheck.bind(this.registerForm)
        ]);
    }
    // We create a new User
    SignupPage.prototype.createUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var password, that, loader;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // We get the user data from the form
                        this.user.displayName = this.registerForm.value.displayName;
                        this.user.target = this.registerForm.value.target;
                        this.user.email = this.registerForm.value.email;
                        password = this.registerForm.value.password;
                        // We check if the passwords match, if not we show an alert and we don't let the user carry on
                        // This function never will execute because we validate the password before the button is enabled
                        if (this.registerForm.value.password !=
                            this.registerForm.value.passwordConfirmation) {
                            this.alert.presentErrorAlert("Passwords don't match");
                            return [2 /*return*/];
                        }
                        that = this;
                        loader = this.loadingCtrl.create({
                            content: "Please wait..."
                        });
                        // We start the loader
                        loader.present();
                        // We check if the user can register or not
                        // We try to register the user with the credentials from the from
                        return [4 /*yield*/, this.auth.emailSignUp(this.user, password)
                                .then(function (newUser) {
                                // Succesfull
                                _this.auth.createUserDocument(newUser.user, _this.user);
                                // we hide the loader
                                loader.dismiss();
                                // We navigate to TabsPage
                                that.navCtrl.setRoot("TabsPage");
                                // We welcome the user with a toast message
                                _this.toast.create("Welcome " + _this.user.displayName);
                                console.log(newUser.user);
                            })
                                .catch(function (err) {
                                // we hide the loader
                                loader.dismiss();
                                _this.alert.presentErrorAlert(err);
                            })];
                    case 1:
                        // We check if the user can register or not
                        // We try to register the user with the credentials from the from
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // Function to check if the passwords match
    SignupPage.prototype.passwordCheck = function (control) {
        var form = this;
        if (control.value !== form.controls["password"].value) {
            return {
                noMatch: true
            };
        }
        return null;
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-signup",template:/*ion-inline-start:"C:\Users\ctorr\Documents\projects\ultramuscle-app\src\pages\signup\signup.html"*/'<ion-content padding class="login-bg">\n\n  <div margin-bottom class="fadeInUp animated login-box">\n\n    <img\n\n      class="logo"\n\n      src="assets/imgs/logo.png"\n\n      alt="Ultra lifestyle company"\n\n    />\n\n    <div class="theme-input">\n\n      <form [formGroup]="registerForm">\n\n        <ion-list>\n\n          <ion-item\n\n            margin-bottom\n\n            [ngClass]="{\n\n              invalid: displayNameErrors.hasError(\'*\', [\'touched\'])\n\n            }"\n\n          >\n\n            <ion-input\n\n              type="text"\n\n              formControlName="displayName"\n\n              placeholder="Name"\n\n            ></ion-input>\n\n          </ion-item>\n\n\n\n          <div\n\n            margin-bottom\n\n            ngxErrors="displayName"\n\n            #displayNameErrors="ngxErrors"\n\n          >\n\n            <div\n\n              [ngxError]="[\'displayName\', \'required\']"\n\n              [when]="[\'touched\']"\n\n              class="text-white"\n\n            >\n\n              It should be a valid name\n\n            </div>\n\n          </div>\n\n\n\n          <ion-item\n\n            margin-bottom\n\n            [ngClass]="{\n\n              invalid: displayTargetErrors.hasError(\'*\', [\'touched\'])\n\n            }"\n\n          >\n\n            <ion-select formControlName="target" placeholder="Target">\n\n              <ion-option value="loose weight">Loose Weight</ion-option>\n\n              <ion-option value="build muscle">Build Muscle</ion-option>\n\n              <ion-option value="maintenance">Maintenance</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n\n\n          <div\n\n            margin-bottom\n\n            ngxErrors="target"\n\n            #displayTargetErrors="ngxErrors"\n\n          >\n\n            <div\n\n              [ngxError]="[\'target\', \'required\']"\n\n              [when]="[\'touched\']"\n\n              class="text-white"\n\n            >\n\n              It should be a valid target\n\n            </div>\n\n          </div>\n\n          <ion-item\n\n            margin-bottom\n\n            [ngClass]="{\n\n              invalid: displayEmailErrors.hasError(\'*\', [\'touched\'])\n\n            }"\n\n          >\n\n            <ion-input\n\n              type="email"\n\n              formControlName="email"\n\n              placeholder="Email Address"\n\n            ></ion-input>\n\n          </ion-item>\n\n\n\n          <div margin-bottom ngxErrors="email" #displayEmailErrors="ngxErrors">\n\n            <div\n\n              [ngxError]="[\'email\', \'required\']"\n\n              [when]="[\'touched\']"\n\n              class="text-white"\n\n            >\n\n              It should be a valid email\n\n            </div>\n\n          </div>\n\n\n\n          <ion-item\n\n            margin-bottom\n\n            [ngClass]="{\n\n              invalid: displayPasswordErrors.hasError(\'*\', [\'touched\'])\n\n            }"\n\n          >\n\n            <ion-input\n\n              type="password"\n\n              formControlName="password"\n\n              placeholder="Password"\n\n            ></ion-input>\n\n          </ion-item>\n\n\n\n          <div\n\n            margin-bottom\n\n            ngxErrors="password"\n\n            #displayPasswordErrors="ngxErrors"\n\n          >\n\n            <div\n\n              [ngxError]="[\'password\', \'required\']"\n\n              [when]="[\'touched\']"\n\n              class="text-white"\n\n            >\n\n              It should be a valid password\n\n            </div>\n\n          </div>\n\n\n\n          <ion-item\n\n            margin-bottom\n\n            [ngClass]="{\n\n              invalid: displayPasswordConfirmationErrors.hasError(\'*\', [\n\n                \'touched\'\n\n              ])\n\n            }"\n\n          >\n\n            <ion-input\n\n              type="password"\n\n              formControlName="passwordConfirmation"\n\n              placeholder="Confirm Password"\n\n            ></ion-input>\n\n          </ion-item>\n\n\n\n          <div\n\n            margin-bottom\n\n            ngxErrors="passwordConfirmation"\n\n            #displayPasswordConfirmationErrors="ngxErrors"\n\n          >\n\n            <div\n\n              [ngxError]="[\'passwordConfirmation\', \'required\']"\n\n              [when]="[\'touched\']"\n\n              class="text-white"\n\n            >\n\n              It should be a valid password\n\n            </div>\n\n          </div>\n\n        </ion-list>\n\n      </form>\n\n    </div>\n\n    <ion-row class="um-button" text-center>\n\n      <ion-col>\n\n        <button\n\n          [disabled]="registerForm.invalid"\n\n          ion-button\n\n          (click)="createUser(registerForm)"\n\n          class="transparent"\n\n        >\n\n          Create Account\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <!-- <ion-row class="um-button" margin-top>\n\n          <ion-col col-6>\n\n              <button ion-button full item-end icon-left color="facebook" class="no-transparent">\n\n                  <ion-icon name="logo-facebook"></ion-icon>Facebook\n\n              </button>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n              <button ion-button full icon-left color="google" class="no-transparent">\n\n                  <ion-icon name="logo-google"></ion-icon>Google\n\n              </button>\n\n          </ion-col>\n\n      </ion-row> -->\n\n    <!-- <p text-center class="text-white">By signing up, I agree with the <br><span class="text-theme">Tearm &\n\n              conditionos</span></p> -->\n\n    <p text-center class="text-white text-center">\n\n      Already have an account?\n\n      <a class="text-theme text-no-link" navPush="SigninPage">\n\n        Sign In\n\n      </a>\n\n    </p>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\ctorr\Documents\projects\ultramuscle-app\src\pages\signup\signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__services_index_services__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_2__services_index_services__["d" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_4__app_core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=0.js.map