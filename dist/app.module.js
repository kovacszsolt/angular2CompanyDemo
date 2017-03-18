/**
 * Main Application
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//System imports
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms"); // <--- JavaScript import from Angular
//Application imports
var app_component_1 = require("./app.component");
var root_component_1 = require("./root/root.component");
var root_company_component_1 = require("./root/root.company.component");
var root_search_component_1 = require("./root/root.search.component");
var menu_component_1 = require("./menu/menu.component");
var search_component_1 = require("./search/search.component");
var category_component_1 = require("./category/category.component");
var companies_component_1 = require("./company/companies.component");
var company_component_1 = require("./company/company.component");
// Routings
var routes = [
    {
        path: '',
        name: 'Root',
        component: root_component_1.RootComponent,
    },
    {
        path: ':language/search',
        component: root_search_component_1.RootSearchComponent,
    },
    {
        path: ':language',
        component: root_component_1.RootComponent,
    },
    {
        path: ':language/:category',
        component: root_component_1.RootComponent,
    },
    {
        path: ':language/:category/:company',
        component: root_company_component_1.RootCompanyComponent,
    }
];
/**
 * Load module
 */
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule.forRoot(routes)],
        declarations: [app_component_1.AppComponent, root_component_1.RootComponent, menu_component_1.MenuComponent, search_component_1.SearchComponent, category_component_1.CategoryComponent, company_component_1.CompanyComponent, companies_component_1.CompaniesComponent, root_company_component_1.RootCompanyComponent, root_search_component_1.RootSearchComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map