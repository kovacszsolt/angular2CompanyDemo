"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Main Component
 * path:
 *      /
 *      /hu/
 *      /hu/cat1/
 */
var core_1 = require("@angular/core");
var RootComponent = (function () {
    function RootComponent() {
    }
    return RootComponent;
}());
RootComponent = __decorate([
    core_1.Component({
        selector: 'container-app',
        template: "\n<div class=\"container\">\n<menu-app></menu-app>\n<category-app></category-app>\n<companies-app></companies-app>\n</div>\n"
    })
], RootComponent);
exports.RootComponent = RootComponent;
//# sourceMappingURL=root.component.js.map