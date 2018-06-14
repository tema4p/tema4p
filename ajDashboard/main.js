(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n\n<main role=\"main\" class=\"container\">\n  <!--<ul class=\"nav nav-tabs\">-->\n    <!--<li class=\"nav-item\">-->\n      <!--<a class=\"nav-link\"-->\n         <!--[ngClass]=\"[activeComponent === 'filter' ? 'active' : '']\"-->\n         <!--(click)=\"activeComponent = 'filter'\">Filter</a>-->\n    <!--</li>-->\n    <!--<li class=\"nav-item\">-->\n      <!--<a class=\"nav-link\"-->\n         <!--[ngClass]=\"[activeComponent === 'slideshow' ? 'active' : '']\"-->\n         <!--(click)=\"activeComponent = 'slideshow'\">Slideshow</a>-->\n    <!--</li>-->\n  <!--</ul>-->\n  <!--<br>-->\n  <div class=\"row\">\n    <app-filter-generator [input]=\"widgetInput\" *ngIf=\"activeComponent == 'filter'\"></app-filter-generator>\n    <app-slideshow-generator [input]=\"widgetInput\" *ngIf=\"activeComponent == 'slideshow'\"></app-slideshow-generator>\n  </div>\n</main>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var _this = this;
        // activeComponent = 'filter';
        this.activeComponent = 'slideshow';
        if (window.initWidget) {
            this.activeComponent = window.initWidget;
        }
        if (window.widgetInput) {
            this.widgetInput = window.widgetInput;
        }
        window.addEventListener('message', function (evt) {
            console.log('message', evt);
            if (evt.data.action === 'settings:load') {
                _this.widgetInput = evt.data.data.settings;
                _this.showWidget(_this.widgetInput);
            }
        });
    }
    AppComponent.prototype.showWidget = function (data) {
        var templateData = JSON.parse(data.templateData);
        if (templateData.slides) {
            this.activeComponent = 'slideshow';
        }
        else if (templateData.filters) {
            this.activeComponent = 'filter';
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _filter_generator_filter_generator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter-generator/filter-generator.component */ "./src/app/filter-generator/filter-generator.component.ts");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
/* harmony import */ var _slideshow_generator_slideshow_generator_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slideshow-generator/slideshow-generator.component */ "./src/app/slideshow-generator/slideshow-generator.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _filter_generator_filter_generator_component__WEBPACK_IMPORTED_MODULE_4__["FilterGeneratorComponent"],
                _slideshow_generator_slideshow_generator_component__WEBPACK_IMPORTED_MODULE_6__["SlideshowGeneratorComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_5__["ColorPickerModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/filter-generator/filter-generator.component.html":
/*!******************************************************************!*\
  !*** ./src/app/filter-generator/filter-generator.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<pre #generatedCSS class=\"style\" type=\"text\" style=\"display: none\">\n  <ng-template ngFor let-filter [ngForOf]=\"filters\" let-i=\"index\">\n    {{'#filter-' +componentPrefix + '-' + i}}.appjustablekit-active a {{'{'}}\n      background-color: {{filter.activeColor}};\n    {{'}'}}\n  </ng-template>\n</pre>\n\n<div class=\"container appjustablekit-scope\" [attr.id]=\"'filter-' + componentPrefix\">\n  <div class=\"form-row text-right\">\n    <div class=\"col-12\">\n      <button (click)=\"saveHtml()\" class=\"btn btn-lg btn-primary\">\n        Save Template\n      </button>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-sm\">\n      <h3>Settings</h3>\n      <div class=\"form-group form-check\">\n        <input type=\"checkbox\" class=\"form-check-input\" id=\"filter-masonry\"\n               name=\"masonry\"\n               (click)=\"toggleMasonry()\"\n               [(ngModel)]=\"masonry\">\n        <label class=\"form-check-label\" for=\"filter-masonry\">Masonry</label>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-11\" *ngFor=\"let filter of filters; trackBy: trackById\"\n            [style.opacity]=\"filter.disabled === false ? 0.5 : 1\">\n            <div class=\"input-group mb-3\">\n              <input type=\"text\"\n                     minlength=\"1\"\n                     class=\"form-control\"\n                     [(ngModel)]=\"filter.name\">\n              <div class=\"input-group-append\">\n                <button class=\"btn btn-outline-secondary\"\n                        *ngIf=\"filter.id !== 'all'\"\n                        (click)=\"removeItem(filters, filter)\"\n                        type=\"button\">- Remove Filter\n                </button>\n                <button (click)=\"addItem(filter)\"\n                        *ngIf=\"filter.id !== 'all'\"\n                        class=\"btn btn-outline-secondary btn-mini\">\n                  + Add item\n                </button>\n                <button (click)=\"filter.disabled = false\"\n                        *ngIf=\"filter.disabled === true\"\n                        class=\"btn btn-outline-secondary btn-mini\">\n                  Disable 'All'\n                </button>\n                <button (click)=\"filter.disabled = true\"\n                        *ngIf=\"filter.disabled === false\"\n                        class=\"btn btn-outline-secondary btn-mini\">\n                  Enable 'All'\n                </button>\n              </div>\n            </div>\n\n            <div class=\"form-group row\">\n              <div class=\"col-sm-5\">Active Tab Color</div>\n              <div class=\"col-sm-5\">\n                <input type=\"text\" class=\"form-control\"\n                       [(colorPicker)]=\"filter.activeColor\"\n                       [style.background]=\"filter.activeColor\"/>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-sm-5\">\n                <button class=\"btn btn-sm\"\n                        [class.btn-outline-primary]=\"!filter.isActive\"\n                        (click)=\"setActive(filter)\">\n                  {{!filter.isActive ? 'Set Active' : 'Already Active'}}\n                </button>\n              </div>\n            </div>\n          <br>\n        </div>\n        <div class=\"col-sm-11 input-group mb-3\">\n          <input type=\"text\" minlength=\"1\" class=\"form-control\"\n                 [(ngModel)]=\"newGroupName\">\n          <div class=\"input-group-append\">\n            <button (click)=\"addGroup()\"\n                    class=\"btn btn-outline-secondary\">\n              + Add Filter\n            </button>\n          </div>\n        </div>\n      </div>\n\n    </div>\n    <div class=\"col-sm\">\n      <h3>Preview</h3>\n      <div #generatedElement id=\"generatedElement\">\n        <div  *ngIf=\"isWidgetVisible\" class=\"appjustablekit-scope\" appjustablekit-filter=\"target: .js-filter\">\n          <ul class=\"appjustablekit-subnav appjustablekit-subnav-pill\">\n            <ng-template ngFor let-filter [ngForOf]=\"filters\" let-i=\"index\">\n              <li [attr.appjustablekit-filter-control]=\"filter.id !== 'all' ? '.tag-' + filter.id : ''\"\n                  [attr.id]=\"'filter-' + componentPrefix + '-' + i\"\n                  [class.appjustablekit-active]=\"filter.isActive\"\n                  *ngIf=\"filter.disabled === true || filter.id !== 'all'\">\n                <a href=\"#\"\n                   draggable=\"true\"\n                   [class.drag-target]=\"i === drag.end && drag.type === 'filter'\"\n                   (dragstart)=\"onFilterDragStart(i, 'filter')\"\n                   (dragover)=\"onFilterDragOver(i, filters, 'filter', $event)\"\n                   (dragend)=\"onFilterDragEnd($event)\">\n                  {{filter.name}}\n                </a>\n              </li>\n            </ng-template>\n          </ul>\n          <ul class=\"js-filter appjustablekit-child-width-1-2 appjustablekit-child-width-1-3@m appjustablekit-text-center\"\n              [attr.appjustablekit-grid]=\"getFilterOptions()\">\n            <li *ngFor=\"let item of items; index as j;\" [ngClass]=\"['tag-' + item.filterId]\">\n              <div class=\"appjustablekit-card appjustablekit-card-default appjustablekit-card-body\"\n                   [style.background]=\"getFilterById(item.filterId).bgColor\"\n                   [style.boxShadow]=\"(getFilterById(item.filterId).boxShadow) ? '0 5px 15px #00000009' : 'none'\"\n                   draggable=\"true\"\n                   [class.drag-target]=\"j === drag.end && drag.type === 'item'\"\n                   (dragstart)=\"onFilterDragStart(j, 'item')\"\n                   (dragover)=\"onFilterDragOver(j, items, 'item', $event)\"\n                   (dragend)=\"onFilterDragEnd($event)\">\n                {{ (hideContentId) ? getFilterById(item.filterId).name + ' - Item ' + (j + 1)  : '{filter-' + componentPrefix + '-' + item.filterId + '-' +  j + ':content}'}}\n\n                <a *ngIf=\"hideContentId\" (click)=\"removeItem(items, item)\">\n                  <i class=\"fa fa-times-circle\"></i>\n                </a>\n\n                <a *ngIf=\"hideContentId\" class=\"drop-shadow\" (click)=\"getFilterById(item.filterId).boxShadow = !getFilterById(item.filterId).boxShadow \">\n                  <i class=\"fa fa-sun\"></i>\n                </a>\n\n                <label *ngIf=\"hideContentId && !drag.type\" class=\"bg-color\">\n                  <i class=\"fa fa-eye\"></i>\n                  <input type=\"text\" [(colorPicker)]=\"getFilterById(item.filterId).bgColor\"\n                         [style.background]=\"getFilterById(item.filterId).bgColor\"/>\n                </label>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/filter-generator/filter-generator.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/filter-generator/filter-generator.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".js-filter li {\n  position: relative; }\n  .js-filter li a {\n    opacity: 0;\n    position: absolute;\n    bottom: 5px;\n    right: 10px;\n    text-shadow: 0 0 5px #989898;\n    color: white;\n    transition: 300ms ease all; }\n  .js-filter li a.drop-shadow {\n      left: 35px;\n      width: 25px; }\n  .js-filter li .bg-color {\n    opacity: 0;\n    cursor: pointer;\n    position: absolute;\n    bottom: 5px;\n    left: 10px;\n    text-shadow: 0 0 5px #989898;\n    color: white;\n    transition: 400ms ease all; }\n  .js-filter li .bg-color input {\n      width: 1px;\n      height: 1px;\n      opacity: 0; }\n  .js-filter li:hover a, .js-filter li:hover .bg-color {\n    opacity: 1; }\n  .appjustablekit-subnav .tab-color {\n  cursor: pointer;\n  padding: 0;\n  margin: 0;\n  text-shadow: 0 0 5px #989898;\n  color: white; }\n  .appjustablekit-subnav .tab-color input {\n    width: 1px;\n    height: 1px;\n    opacity: 0; }\n  .drag-target {\n  box-shadow: 1px 1px 20px #007bff !important;\n  opacity: 0.5; }\n"

/***/ }),

/***/ "./src/app/filter-generator/filter-generator.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/filter-generator/filter-generator.component.ts ***!
  \****************************************************************/
/*! exports provided: FilterGeneratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterGeneratorComponent", function() { return FilterGeneratorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FilterGeneratorComponent = /** @class */ (function () {
    function FilterGeneratorComponent() {
        this.isWidgetVisible = true;
        this.newGroupName = 'New Filter';
        this.generatedHtml = '';
        this.componentPrefix = Math.floor(Math.random() * 1000000).toString();
        this.hideContentId = true;
        this.customStyle = '';
        this.masonry = false;
        this.drag = {
            type: '',
            start: null,
            end: null
        };
        this.filters = [{
                name: 'All',
                id: 'all',
                bgColor: '#F3F9FF',
                borderColor: '#F3F9FF',
                activeColor: '#00137e',
                boxShadow: true,
                disabled: true,
                isActive: true
            }, {
                name: 'BLUE',
                id: '1',
                bgColor: '#F3F9FF',
                borderColor: '#F3F9FF',
                activeColor: '#00137e',
                boxShadow: true
            }, {
                name: 'GRAY',
                id: '2',
                bgColor: '#EEEEEE',
                borderColor: '#EEEEEE',
                activeColor: '#000000',
                boxShadow: true
            }, {
                name: 'RED',
                id: '3',
                bgColor: '#881414',
                borderColor: '#881414',
                activeColor: '#ae0d00',
                boxShadow: true
            }];
        this.items = [{
                filterId: '1',
            }, {
                filterId: '1',
            }, {
                filterId: '2',
            }, {
                filterId: '2',
            }, {
                filterId: '3',
            }, {
                filterId: '3',
            }];
    }
    FilterGeneratorComponent.prototype.ngOnChanges = function () {
        if (this.input) {
            this.initWidgetState(this.input);
        }
    };
    FilterGeneratorComponent.prototype.toggleMasonry = function () {
        var _this = this;
        this.isWidgetVisible = false;
        setTimeout(function () {
            _this.isWidgetVisible = true;
        });
    };
    FilterGeneratorComponent.prototype.setActive = function (filter) {
        var _this = this;
        this.filters.forEach(function (item) {
            item.isActive = false;
            _this.toggleMasonry();
        });
        filter.isActive = true;
    };
    FilterGeneratorComponent.prototype.trackById = function (item) {
        return item.id;
    };
    FilterGeneratorComponent.prototype.getFilterOptions = function () {
        var res = '';
        res += "masonry: " + this.masonry + "; ";
        return res;
    };
    FilterGeneratorComponent.prototype.ngDoCheck = function () {
        if (this.generatedElement && this.customStyle !== this.generatedCSS.nativeElement.innerText) {
            this.customStyle = this.generatedCSS.nativeElement.innerText;
            $('#generatedStyle').remove();
            $("<style id=\"generatedStyle\">" + this.customStyle + "</style>")
                .appendTo(this.generatedElement.nativeElement);
        }
    };
    FilterGeneratorComponent.prototype.ngOnInit = function () {
        console.log('input 2', this.input);
    };
    FilterGeneratorComponent.prototype.initWidgetState = function (data) {
        if (!data.templateData) {
            return;
        }
        var templateData = JSON.parse(data.templateData);
        if (templateData.componentPrefix && templateData.filters) {
            console.log('set data');
            this.filters = templateData.filters;
            this.items = templateData.items;
            this.masonry = templateData.masonry;
            this.componentPrefix = templateData.componentPrefix;
        }
    };
    FilterGeneratorComponent.prototype.removeItem = function (array, item) {
        var index = array.indexOf(item);
        array.splice(index, 1);
    };
    FilterGeneratorComponent.prototype.addGroup = function () {
        this.filters.push({
            id: '' + Math.floor(Math.random() * 10000),
            name: this.newGroupName,
            bgColor: '#EEEEEE',
            borderColor: '#EEEEEE',
            activeColor: '#000000',
            boxShadow: true
        });
    };
    FilterGeneratorComponent.prototype.getFilterById = function (id) {
        return this.filters.find(function (item) {
            return item.id === id;
        });
    };
    FilterGeneratorComponent.prototype.addItem = function (filter) {
        this.items.push({ filterId: filter.id });
    };
    FilterGeneratorComponent.prototype.generateHtml = function () {
        console.log(this.generatedElement);
        this.generatedHtml = this.generatedElement.nativeElement.innerHTML;
    };
    FilterGeneratorComponent.prototype.saveHtml = function () {
        var _this = this;
        this.hideContentId = false;
        setTimeout(function () {
            var libs = "\n        <div style=\"display: none\" data-load-css=\"https://appjustable.com/weebly/artem/libs/css/uikit.css\"></div>\n        <div style=\"display: none\" data-load-js=\"https://appjustable.com/weebly/artem/libs/js/uikit.js\"></div>";
            _this.generatedHtml = _this.generatedElement.nativeElement.innerHTML;
            _this.generatedHtml = _this.generatedHtml.replace(/<!--([\s|\S]*?)-->/g, '');
            _this.generatedHtml = _this.generatedHtml.replace(/_ngcontent([\s|\S]*?)""/g, '');
            _this.generatedHtml = _this.generatedHtml.replace(/></g, '>\n<');
            _this.generatedHtml = _this.generatedHtml.replace(/  /g, ' ');
            parent.postMessage({
                action: 'settings:update',
                data: {
                    markup: libs + _this.generatedHtml,
                    markup_editor: libs + _this.generatedHtml,
                    templateData: JSON.stringify({
                        filters: _this.filters,
                        items: _this.items,
                        masonry: _this.masonry,
                        componentPrefix: _this.componentPrefix
                    }),
                    elId: 'ajFilter'
                }
            }, window.frameOrigin);
            console.log(_this.generatedElement.nativeElement.innerHTML);
            _this.hideContentId = true;
        });
    };
    FilterGeneratorComponent.prototype.onFilterDragStart = function (i, type) {
        this.drag.type = type;
        this.drag.start = i;
    };
    FilterGeneratorComponent.prototype.onFilterDragOver = function (i, array, type, event) {
        if (type === this.drag.type) {
            var temp = array[this.drag.start];
            array.splice(this.drag.start, 1);
            array.splice(i, 0, temp);
            this.drag.start = i;
            event.dataTransfer.dropEffect = 'move'; // See the section on the DataTransfer object.
            return false;
        }
    };
    FilterGeneratorComponent.prototype.onFilterDragEnd = function (event) {
        this.drag.type = null;
        event.preventDefault();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FilterGeneratorComponent.prototype, "input", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('generatedElement'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], FilterGeneratorComponent.prototype, "generatedElement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('generatedCSS'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], FilterGeneratorComponent.prototype, "generatedCSS", void 0);
    FilterGeneratorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-filter-generator',
            template: __webpack_require__(/*! ./filter-generator.component.html */ "./src/app/filter-generator/filter-generator.component.html"),
            styles: [__webpack_require__(/*! ./filter-generator.component.scss */ "./src/app/filter-generator/filter-generator.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FilterGeneratorComponent);
    return FilterGeneratorComponent;
}());



/***/ }),

/***/ "./src/app/slideshow-generator/slideshow-generator.component.html":
/*!************************************************************************!*\
  !*** ./src/app/slideshow-generator/slideshow-generator.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<pre #generatedCSS class=\"style\" type=\"text\" style=\"display: none\">\n  {{'#slideshow-' + widget.componentPrefix}} .appjustablekit-slidenav svg polyline {{'{'}}\n      stroke: {{widget.theme === 'light' ? '#FFF' : '#000'}};\n  {{'}'}}\n\n  [appjustablekit-slideshow-item] svg:nth-child(2) {{'{'}}\n    display: none;\n  {{'}'}}\n\n  .appjustablekit-dotnav [appjustablekit-slideshow-item] a {{'{'}}\n    margin: 0 6px;\n  {{'}'}}\n</pre>\n\n<div class=\"container appjustablekit-scope\">\n  <div class=\"form-row text-right\">\n    <div class=\"col-12\">\n      <button (click)=\"saveHtml()\" class=\"btn btn-lg btn-primary\">\n        Save Template\n      </button>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-3\">\n      <h3>Settings</h3>\n      <form>\n        <div class=\"form-group\">\n          <label for=\"slideshow-animation\">Animations</label>\n          <select class=\"form-control\" id=\"slideshow-animation\"\n                  name=\"animation\"\n                  [(ngModel)]=\"widget.animation\">\n            <option value=\"slide\">Slide -\tSlides slide in side by side.</option>\n            <option value=\"fade\">Fade -\tSlides fade in.</option>\n            <option value=\"scale\">Scale -\tSlides are scaled up and fade out.</option>\n            <option value=\"pull\">Pull -\tSlides are pulled from the deck.</option>\n            <option value=\"push\">Push -\tSlides are pushed to the deck.</option>\n          </select>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"slideshow-interval\">Controls theme</label>\n          <select class=\"form-control\" id=\"slideshow-theme\" name=\"theme\"\n                  [(ngModel)]=\"widget.theme\">\n            <option value=\"light\">Light</option>\n            <option value=\"dark\">Dark</option>\n          </select>\n        </div>\n\n        <div class=\"form-group form-check\">\n          <input type=\"checkbox\" class=\"form-check-input\" id=\"slideshow-autoplay\"\n                 name=\"autoplay\"\n                 [(ngModel)]=\"widget.autoplay\">\n          <label class=\"form-check-label\" for=\"slideshow-autoplay\">Autoplay</label>\n        </div>\n\n        <div class=\"form-group form-check\">\n          <input type=\"checkbox\" class=\"form-check-input\" id=\"slideshow-paralax\"\n                 name=\"paralax\"\n                 [(ngModel)]=\"widget.paralax\">\n          <label class=\"form-check-label\" for=\"slideshow-paralax\">Paralax</label>\n        </div>\n\n        <div class=\"form-group\" *ngIf=\"widget.autoplay\">\n          <label for=\"slideshow-interval\">Autoplay Interval</label>\n          <select class=\"form-control\" id=\"slideshow-interval\"\n                  name=\"interval\"\n                  [(ngModel)]=\"widget.autoplayInterval\">\n            <option value=\"1000\">1 second</option>\n            <option value=\"1500\">1.5 seconds</option>\n            <option value=\"2000\">2 seconds</option>\n            <option value=\"2500\">2.5 seconds</option>\n            <option value=\"3000\">3 seconds</option>\n            <option value=\"4000\">4 seconds</option>\n            <option value=\"5000\">5 seconds</option>\n            <option value=\"7000\">7 seconds</option>\n            <option value=\"10000\">10 seconds</option>\n          </select>\n        </div>\n\n        <div class=\"form-group form-check\">\n          <input type=\"checkbox\" name=\"finite\" class=\"form-check-input\" id=\"slideshow-finite\"\n                 [(ngModel)]=\"widget.finite\">\n          <label class=\"form-check-label\" for=\"slideshow-finite\">Finite Scrolling</label>\n        </div>\n\n        <div class=\"form-group form-check\">\n          <input type=\"checkbox\" name=\"dotnav\" class=\"form-check-input\" id=\"slideshow-dotnav\"\n                 [(ngModel)]=\"widget.dotnav\">\n          <label class=\"form-check-label\" (change)=\"ngDoCheck()\" for=\"slideshow-dotnav\">Dot Navigation</label>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"slideshow-minHeight\">Min Height</label>\n          <input type=\"number\" min=\"1\" max=\"9999\" step=\"1\" class=\"form-control\" id=\"slideshow-minHeight\"\n                 [(ngModel)]=\"widget.minHeight\" name=\"minHeight\"/>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"slideshow-viewportHeight\">Viewport Height</label>\n          <input type=\"number\" min=\"1\" max=\"100\" step=\"1\" class=\"form-control\" id=\"slideshow-viewportHeight\"\n                 [(ngModel)]=\"widget.viewportHeight\" name=\"viewportHeight\"/>\n        </div>\n      </form>\n    </div>\n    <div class=\"col-9\">\n      <h3>Preview</h3>\n      <div #generatedElement>\n        <div  class=\"appjustablekit-scope\"\n              [attr.id]=\"'slideshow-' + widget.componentPrefix\"\n              [attr.appjustablekit-slideshow]=\"getSliderOptions()\">\n          <div class=\"appjustablekit-position-relative appjustablekit-visible-toggle\"\n               [class.appjustablekit-light]=\"widget.theme === 'light'\"\n               [class.appjustablekit-dark]=\"widget.theme === 'dark'\"\n               [class.appjustablekit-visible-toggle]=\"widget.dotnav\">\n            <ul class=\"appjustablekit-slideshow-items\"\n                [style.minHeight]=\"widget.viewportHeight ? widget.viewportHeight + 'vh' : undefined\">\n              <li *ngFor=\"let slide of widget.slides; index as i;\"\n                  [style.backgroundColor]=\"slide.bgColor\"\n                  style=\"background-size: cover\">\n                <div>&nbsp;</div>\n                <img *ngIf=\"slide.bgImage\" [attr.src]=\"slide.bgImage\" alt=\"\" appjustablekit-cover>\n\n                {{ (hideContentId || widget.paralax) ? ''  : '{slide-' + widget.componentPrefix + '-' + i +  ':content}'}}\n\n                <div *ngIf=\"widget.paralax\" class=\"appjustablekit-slideshow-items-position-center appjustablekit-slideshow-items-position-small\">\n                  <div appjustablekit-slideshow-items-slideshow-parallax=\"x: 100,-100\">\n                    {{ (hideContentId) ? ''  : '{slide-' + widget.componentPrefix + '-' + i +  ':content}'}}\n                  </div>\n                </div>\n\n                <div class=\"settings\" *ngIf=\"hideContentId\">\n                  <h2>Slide {{i + 1}} / {{widget.slides.length}}</h2>\n                  <br><br>\n                </div>\n              </li>\n            </ul>\n            <a class=\"appjustablekit-position-center-left appjustablekit-hidden-hover\"\n               href=\"#\" appjustablekit-slidenav-previous appjustablekit-slideshow-item=\"previous\"></a>\n            <a class=\"appjustablekit-position-center-right appjustablekit-hidden-hover\"\n               href=\"#\" appjustablekit-slidenav-next appjustablekit-slideshow-item=\"next\"></a>\n          </div>\n          <ul *ngIf=\"widget.dotnav\"\n              class=\"appjustablekit-slideshow-nav appjustablekit-dotnav appjustablekit-flex-center appjustablekit-margin\"></ul>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"slide-preview-boxes\">\n    <div class=\"slide-preview\"\n         draggable=\"true\"\n         *ngFor=\"let slide of widget.slides; index as i;\"\n         [class.drag-target]=\"i === drag.end\"\n         [style.backgroundColor]=\"slide.bgColor\"\n         [style.backgroundImage]=\"slide.bgImage ? 'url(' + slide.bgImage +')' : false\"\n         (click)=\"goToSlide(i)\"\n         (dragstart)=\"onSliderDragStart(i)\"\n         (dragover)=\"onSliderDragOver(i, $event)\"\n         (dragend)=\"onSliderDragEnd(i, $event)\">\n      Slide {{i + 1}}\n\n      <label class=\"bg-color\">\n        <i class=\"fa fa-eyedropper\"></i>\n        <input type=\"text\" [(colorPicker)]=\"slide.bgColor\"\n               [style.background]=\"slide.bgColor\"/>\n      </label>\n\n      <label class=\"slide-options\">\n        <i class=\"fa fa-image\"></i>\n        <input type=\"file\" style=\"display: none\"\n               (change)=\"onFileChanged($event, slide)\">\n      </label>\n\n      &nbsp;\n      <label class=\"slide-options\" (click)=\"removeSlide(slide)\">\n        <i class=\"fa fa-times-circle\"></i>\n      </label>\n    </div>\n    <div class=\"slide-preview\" (click)=\"addSlide()\">\n      <i class=\"fa fa-plus-circle\"></i>&nbsp;Add Slide\n    </div>\n  </div>\n\n  <div class=\"text-center\">\n    <i *ngIf=\"imageUploading\"  class=\"fa fa-spinner fa-spin\"></i>\n  </div>\n\n  <div *ngIf=\"imageUploadError\" class=\"alert alert-warning\" role=\"alert\">\n    {{imageUploadError}}\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/slideshow-generator/slideshow-generator.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/slideshow-generator/slideshow-generator.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n  :host .slide-preview-boxes {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    align-content: center;\n    flex-wrap: wrap; }\n  :host .slide-preview-boxes .slide-preview {\n      cursor: pointer;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      align-content: center;\n      background-size: cover;\n      flex: 0 0 200px;\n      height: 50px;\n      margin: 4px;\n      border-radius: 3px;\n      box-shadow: 0 0 15px rgba(202, 202, 202, 0.29);\n      color: white;\n      text-shadow: 0 0 15px rgba(0, 0, 0, 0.71); }\n  :host .slide-preview-boxes .slide-preview.drag-target {\n        border: 1px dotted #607393; }\n  :host .slide-preview-boxes .slide-preview label {\n        cursor: pointer;\n        margin: 0 0 0 14px;\n        padding: 0; }\n  :host .slide-preview-boxes .slide-preview label:hover {\n          text-shadow: 0 0 15px #2b3c93; }\n  :host .slide-preview-boxes .slide-preview label input {\n          width: 1px;\n          height: 1px;\n          opacity: 0; }\n  .fa-spinner {\n  margin: 20px auto;\n  font-size: 24px;\n  color: #607393; }\n  .appjustablekit-slideshow-items li {\n  color: black; }\n  .appjustablekit-slideshow-items li .slide-options {\n    opacity: 0;\n    cursor: pointer;\n    text-shadow: 0 0 5px #989898;\n    color: white;\n    transition: 400ms ease all; }\n  .appjustablekit-slideshow-items li .slide-options input {\n      width: 1px;\n      height: 1px;\n      opacity: 0; }\n  .appjustablekit-slideshow-items li:hover .slide-options {\n    opacity: 1; }\n  .appjustablekit-slideshow-items .settings {\n  padding: 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center; }\n  .appjustablekit-slideshow-items .settings h2 {\n    text-shadow: 0 0 5px #aaa;\n    text-align: center; }\n"

/***/ }),

/***/ "./src/app/slideshow-generator/slideshow-generator.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/slideshow-generator/slideshow-generator.component.ts ***!
  \**********************************************************************/
/*! exports provided: SlideshowGeneratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideshowGeneratorComponent", function() { return SlideshowGeneratorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SlideshowGeneratorComponent = /** @class */ (function () {
    function SlideshowGeneratorComponent(http) {
        var _this = this;
        this.http = http;
        this.generatedHtml = '';
        this.hideContentId = true;
        this.customStyle = '';
        this.widget = {
            componentPrefix: Math.floor(Math.random() * 1000000).toString(),
            slides: [{ bgColor: '#eeeeee' }, { bgColor: '#e5eeee' }],
            animation: 'slide',
            autoplay: true,
            paralax: false,
            finite: false,
            autoplayInterval: 3000,
            viewportHeight: 50,
            minHeight: 400,
            dotnav: true,
            theme: 'light'
        };
        this.drag = {
            start: null,
            end: null
        };
        this.imageUploadError = '';
        this.imageUploading = false;
        window.addEventListener('message', function (evt) {
            console.log('message', evt);
            if (evt.data.action === 'settings:load') {
                _this.initWidgetState(evt.data.data.settings);
            }
        });
    }
    SlideshowGeneratorComponent.prototype.ngOnChanges = function () {
        if (this.input) {
            this.initWidgetState(this.input);
        }
    };
    SlideshowGeneratorComponent.prototype.ngDoCheck = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.customStyle !== _this.generatedCSS.nativeElement.innerText) {
                _this.customStyle = _this.generatedCSS.nativeElement.innerText;
                $('#generatedStyle').remove();
                $("<style id=\"generatedStyle\">" + _this.customStyle + "</style>")
                    .appendTo(_this.generatedElement.nativeElement);
            }
        });
    };
    SlideshowGeneratorComponent.prototype.ngOnInit = function () {
        console.log('input', this.input);
    };
    SlideshowGeneratorComponent.prototype.initWidgetState = function (data) {
        if (!data.templateData) {
            return;
        }
        var templateData = JSON.parse(data.templateData);
        if (templateData.componentPrefix && templateData.slides) {
            this.widget.slides = templateData.slides;
            this.widget.componentPrefix = templateData.componentPrefix;
        }
    };
    SlideshowGeneratorComponent.prototype.removeSlide = function (slide) {
        if (this.widget.slides.length === 1) {
            return;
        }
        var index = this.widget.slides.indexOf(slide);
        this.widget.slides.splice(index, 1);
    };
    SlideshowGeneratorComponent.prototype.addSlide = function () {
        this.widget.slides.push({
            bgColor: '#eeeeee'
        });
    };
    SlideshowGeneratorComponent.prototype.generateHtml = function () {
        console.log(this.generatedElement);
        this.generatedHtml = this.generatedElement.nativeElement.innerHTML;
    };
    SlideshowGeneratorComponent.prototype.saveHtml = function () {
        var _this = this;
        this.hideContentId = false;
        setTimeout(function () {
            var libs = "\n        <div style=\"display: none\" data-load-css=\"https://appjustable.com/weebly/artem/libs/css/uikit.css\"></div>\n        <div style=\"display: none\" data-load-js=\"https://appjustable.com/weebly/artem/libs/js/uikit.js\"></div>";
            _this.generatedHtml = _this.generatedElement.nativeElement.innerHTML;
            _this.generatedHtml = _this.generatedHtml.replace(/<!--([\s|\S]*?)-->/g, '');
            _this.generatedHtml = _this.generatedHtml.replace(/_ngcontent([\s|\S]*?)""/g, '');
            _this.generatedHtml = _this.generatedHtml.replace(/></g, '>\n<');
            _this.generatedHtml = _this.generatedHtml.replace(/  /g, ' ');
            parent.postMessage({
                action: 'settings:update',
                data: {
                    markup: libs + _this.generatedHtml,
                    markup_editor: libs + _this.generatedHtml,
                    templateData: JSON.stringify({
                        slides: _this.widget.slides,
                        componentPrefix: _this.widget.componentPrefix
                    }),
                    elId: 'ajSlideshow'
                }
            }, window.frameOrigin);
            console.log(_this.generatedElement.nativeElement.innerHTML);
            _this.hideContentId = true;
        });
    };
    SlideshowGeneratorComponent.prototype.onFileChanged = function (event, slide) {
        var _this = this;
        var file = event.target.files[0];
        var uploadData = new FormData();
        this.imageUploading = true;
        this.imageUploadError = '';
        uploadData.append('image', file, file.name);
        this.http.post('https://www.appjustable.com/weebly/apps/apppack/uploads/handler.php', uploadData, {
            reportProgress: true,
            observe: 'events'
        }).subscribe(function (res) {
            console.log(res); // handle event here
            if (res.type === 4) {
                _this.imageUploading = false;
                if (res && res.body && res.body.result) {
                    slide.bgImage = res.body.image.Location;
                    console.log('slide', slide);
                }
                else {
                    _this.imageUploadError = 'Something went wrong, try to upload another image';
                }
            }
        });
    };
    SlideshowGeneratorComponent.prototype.getSliderOptions = function () {
        var res = '';
        res += "animation: " + this.widget.animation + "; ";
        res += "autoplay: " + this.widget.autoplay + "; ";
        res += "autoplay-interval: " + this.widget.autoplayInterval + "; ";
        if (this.widget.minHeight) {
            res += "min-height: " + this.widget.minHeight + "; ";
        }
        return res;
    };
    SlideshowGeneratorComponent.prototype.goToSlide = function (index) {
        appjustablekitUIkit.slideshow('#slideshow-' + this.widget.componentPrefix).show(index);
    };
    SlideshowGeneratorComponent.prototype.onSliderDragStart = function (i) {
        this.drag.start = i;
    };
    SlideshowGeneratorComponent.prototype.onSliderDragOver = function (i, event) {
        var temp = this.widget.slides[this.drag.start];
        this.widget.slides.splice(this.drag.start, 1);
        this.widget.slides.splice(i, 0, temp);
        this.drag.start = i;
        event.dataTransfer.dropEffect = 'move'; // See the section on the DataTransfer object.
        return false;
    };
    SlideshowGeneratorComponent.prototype.onSliderDragEnd = function () {
        event.preventDefault();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SlideshowGeneratorComponent.prototype, "input", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('generatedElement'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SlideshowGeneratorComponent.prototype, "generatedElement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('generatedCSS'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SlideshowGeneratorComponent.prototype, "generatedCSS", void 0);
    SlideshowGeneratorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-slideshow-generator',
            template: __webpack_require__(/*! ./slideshow-generator.component.html */ "./src/app/slideshow-generator/slideshow-generator.component.html"),
            styles: [__webpack_require__(/*! ./slideshow-generator.component.scss */ "./src/app/slideshow-generator/slideshow-generator.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SlideshowGeneratorComponent);
    return SlideshowGeneratorComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/artem/Documents/Projects/ajDashboard/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map