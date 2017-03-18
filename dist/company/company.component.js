/**
 * Company Component
 */
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
//import system
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var company_service_1 = require("./company.service");
var CompanyComponent = (function () {
    function CompanyComponent(CompanyService, route) {
        var _this = this;
        this.CompanyService = CompanyService;
        this.route = route;
        // company for template
        this.companyItems = [];
        this.route.params.subscribe(function (params) {
            _this.currentCat = params['category'];
            _this.currentLanguage = params['language'];
            _this.currentCompany = params['company'];
            // get category from URL
            _this.CompanyService.getLink(_this.currentLanguage, _this.currentCompany).then(function (p) {
                _this.companyItems = p;
                console.log(p);
            });
        });
    }
    return CompanyComponent;
}());
CompanyComponent = __decorate([
    core_1.Component({
        selector: 'company-app',
        template: "\n<div *ngFor=\"let companyItem of companyItems\">\n<p>Category: <a routerLink=\"/{{this.currentLanguage}}/{{this.currentCat}}/\">{{companyItem.category.title}}</a><p>\n<p>Title: {{companyItem.title}}<p>\n{{companyItem.content}}\n</p>\n</div>\n"
    }),
    __metadata("design:paramtypes", [company_service_1.CompanyService, router_1.ActivatedRoute])
], CompanyComponent);
exports.CompanyComponent = CompanyComponent;
//# sourceMappingURL=company.component.js.map