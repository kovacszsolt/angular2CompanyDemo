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
 * Search component
 */
// import system
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var company_service_1 = require("../company/company.service");
var SearchComponent = (function () {
    function SearchComponent(SearchService, route) {
        var _this = this;
        this.SearchService = SearchService;
        this.route = route;
        this.route.params.subscribe(function (params) {
            _this.currentLanguage = params['language'];
            _this.SearchService.getSearch(_this.currentLanguage, '').then(function (results) {
                _this.searchItems = results;
            });
            /*
            this.SearchService.getSearch(this.currentLanguage,'').then((results) => {
                this.searchItems = results;
            });*/
        });
    }
    Object.defineProperty(SearchComponent.prototype, "searchText", {
        set: function (text) {
            var _this = this;
            this.searchString = text;
            this.SearchService.getSearch(this.currentLanguage, text).then(function (results) {
                _this.searchItems = results;
            });
        },
        enumerable: true,
        configurable: true
    });
    ;
    return SearchComponent;
}());
SearchComponent = __decorate([
    core_1.Component({
        selector: 'search-app',
        template: "\n<div class=\"form-group\">\n        <label for=\"alterEgo\">Search</label>\n        <input class=\"form-control\" [(ngModel)]=\"searchText\" >\n      </div>\n      <div>\n      <ul>\n            <li *ngFor=\"let searchItem of searchItems\" >\n                <a routerLink=\"/{{searchItem.key}}/{{searchItem.category.link}}/{{searchItem.link}}/\">{{searchItem.title}} - {{searchItem.category.title}}</a>\n                <p [innerHtml]=\"searchItem.content | capitalize: searchString\" ></p>\n            </li>\n        </ul>\n        </div>\n"
    }),
    __metadata("design:paramtypes", [company_service_1.CompanyService, router_1.ActivatedRoute])
], SearchComponent);
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map