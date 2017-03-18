/**
 * language service
 * read languages from JSON
 */
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// import system
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var service_1 = require("../_global/service");
var LanguageService = (function (_super) {
    __extends(LanguageService, _super);
    function LanguageService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        // source
        _this.url = '/data/languages.json';
        // langauges
        _this.cache = [];
        return _this;
    }
    /**
     * get All langauges
     * @returns {any}
     */
    LanguageService.prototype.getAll = function () {
        var _this = this;
        if (this.cache.length > 0) {
            return new Promise(function (resolve, reject) {
                resolve(_this.cache);
            });
        }
        return this.http.get(this.url).toPromise().then(function (response) {
            _this.cache = response.json();
            return response.json();
        })
            .catch(this.onError);
    };
    /**
     * get language from URL
     * @param link
     * @returns {Promise<T>}
     */
    LanguageService.prototype.getLink = function (link) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            resolve(_this.getAll().then(function (p) {
                return p.filter((function (p) { return p.link == link; }));
            }));
        });
    };
    return LanguageService;
}(service_1.GlobalService));
LanguageService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], LanguageService);
exports.LanguageService = LanguageService;
//# sourceMappingURL=language.service.js.map