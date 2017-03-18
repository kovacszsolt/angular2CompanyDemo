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
 * Category component
 */
// import system
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var category_service_1 = require("./category.service");
var CategoryComponent = (function () {
    function CategoryComponent(CategoryService, route) {
        var _this = this;
        this.CategoryService = CategoryService;
        this.route = route;
        this.route.params.subscribe(function (params) {
            _this.currentCat = params['category'];
            _this.CategoryService.getLink(_this.currentCat).then(function (p) {
                _this.categoryItem = p[0];
            });
        });
    }
    return CategoryComponent;
}());
CategoryComponent = __decorate([
    core_1.Component({
        selector: 'category-app',
        template: "\n<div>\n<span *ngIf=\"categoryItem!=undefined\" >{{categoryItem.title}}</span>\n\n</div>\n"
    }),
    __metadata("design:paramtypes", [category_service_1.CategoryService, router_1.ActivatedRoute])
], CategoryComponent);
exports.CategoryComponent = CategoryComponent;
//# sourceMappingURL=category.component.js.map