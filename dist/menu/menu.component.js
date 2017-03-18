"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Menu Component
 */
// import system
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var language_service_1 = require("../language/language.service");
var category_service_1 = require("../category/category.service");
var MenuComponent = (function () {
    /**
     *
     * @param serviceLanguage
     * @param serviceCategory
     * @param route
     */
    function MenuComponent(serviceLanguage, serviceCategory, route) {
        var _this = this;
        this.serviceLanguage = serviceLanguage;
        this.serviceCategory = serviceCategory;
        this.route = route;
        // languages
        this.langaugeItems = [];
        // categorys
        this.categoryItems = [];
        // processing routing
        this.route.params.subscribe(function (params) {
            // get language
            _this.currentLang = (params['language'] == undefined ? 'hu' : params['language']);
            // get category
            _this.currentCat = params['category'];
        });
        // read menu items from json
        this.serviceLanguage.getAll().then(function (p) {
            _this.langaugeItems = p;
        });
        // read category items from json
        this.serviceCategory.getAll().then(function (p) {
            _this.categoryItems = p;
        });
    }
    return MenuComponent;
}());
MenuComponent = __decorate([
    core_1.Component({
        selector: 'menu-app',
        template: "\n<nav class=\"navbar navbar-default\">\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n        <ul class=\"nav navbar-nav\">\n            <li *ngFor=\"let langaugeItem of langaugeItems\" [ngClass]=\"{active: currentLang==langaugeItem.link}\">\n                <a routerLink=\"/{{langaugeItem.link}}/\">{{langaugeItem.title}}</a>\n            </li>\n        </ul>\n        <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngFor=\"let categoryItem of categoryItems\" [ngClass]=\"{active: currentCat==categoryItem.link}\">\n                <a routerLink=\"/{{currentLang}}/{{categoryItem.link}}/\">{{categoryItem.title}}..{{currentCat}}</a>\n            </li>\n            <li>\n            <a  routerLink=\"/{{currentLang}}/search/\">Search</a>\n            </li>\n            <li>\n                <a href=\"https://github.com/kovacszsolt/angular2CompanyDemo\">GITHUB Source</a>\n            </li>\n        </ul>\n    </div>\n</nav>\n"
    }),
    __metadata("design:paramtypes", [language_service_1.LanguageService, category_service_1.CategoryService, router_1.ActivatedRoute])
], MenuComponent);
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.component.js.map