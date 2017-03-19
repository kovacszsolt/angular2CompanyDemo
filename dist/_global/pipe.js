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
var platform_browser_1 = require("@angular/platform-browser");
var CapitalizePipe2 = (function () {
    function CapitalizePipe2(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    CapitalizePipe2.prototype.transform = function (value, args) {
        return (this._sanitizer.bypassSecurityTrustHtml(value.replace(args, '<span style="background-color: red">' + args + '</span>')));
    };
    return CapitalizePipe2;
}());
CapitalizePipe2 = __decorate([
    core_1.Pipe({ name: 'capitalize2' }),
    __metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
], CapitalizePipe2);
exports.CapitalizePipe2 = CapitalizePipe2;
var CapitalizePipe = (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (value, args) {
        return value.replace(args, '<span class="bg-primary">' + args + '</span>');
    };
    return CapitalizePipe;
}());
CapitalizePipe = __decorate([
    core_1.Pipe({ name: 'capitalize' })
], CapitalizePipe);
exports.CapitalizePipe = CapitalizePipe;
//# sourceMappingURL=pipe.js.map