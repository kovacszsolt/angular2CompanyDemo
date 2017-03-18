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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var company_service_1 = require("./company.service");
var CompaniesComponent = (function () {
    /**
     *
     * @param CompanyService
     * @param route
     */
    function CompaniesComponent(CompanyService, route) {
        var _this = this;
        this.CompanyService = CompanyService;
        this.route = route;
        /**
         * search result
         * @type {Array}
         */
        this.companyItems = [];
        this.route.params.subscribe(function (params) {
            if (params['category'] != undefined) {
                // category in url
                _this.currentCat = params['category'];
                _this.currentLanguage = params['language'];
                _this.CompanyService.getCategory(_this.currentLanguage, _this.currentCat).then(function (p) {
                    _this.companyItems = p;
                });
            }
        });
    }
    return CompaniesComponent;
}());
CompaniesComponent = __decorate([
    core_1.Component({
        selector: 'companies-app',
        template: "\n<ul>\n<li *ngFor=\"let companyItem of companyItems\">\n                <a routerLink=\"/{{this.currentLanguage}}/{{this.currentCat}}/{{companyItem.link}}/\">{{companyItem.title}}</a>\n            </li>\n            </ul>\n"
    })
    /**
     * Companies
     * based on category
     */
    ,
    __metadata("design:paramtypes", [company_service_1.CompanyService, router_1.ActivatedRoute])
], CompaniesComponent);
exports.CompaniesComponent = CompaniesComponent;
//# sourceMappingURL=companies.component.js.map