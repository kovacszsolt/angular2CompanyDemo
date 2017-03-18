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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var service_1 = require("../_global/service");
var CompanyService = (function (_super) {
    __extends(CompanyService, _super);
    function CompanyService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        /**
         * data source
         * @type {string}
         */
        _this.url = '/data/companies.json';
        /**
         * data cache
         * @type {Array}
         */
        _this.cache = [];
        return _this;
    }
    /**
     * Get All data
     * @returns {any}
     */
    CompanyService.prototype.getAll = function () {
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
     * Search /hu/category1
     * parameter link, language
     * @param language
     * @param link
     * @returns {Promise<T>}
     */
    CompanyService.prototype.getLink = function (language, link) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            resolve(_this.getAll().then(function (p) {
                // filtering
                return p.filter(function (p) { return ((p.link == link) && (p.key == language)); });
            }));
        });
    };
    /**
     * Search
     * based on category
     * @param language
     * @param categorylink
     * @returns {Promise<T>}
     */
    CompanyService.prototype.getCategory = function (language, categorylink) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            resolve(_this.getAll().then(function (p) {
                return p.filter(function (p) { return ((p.category.link == categorylink) && (p.key == language)); });
            }));
        });
    };
    /**
     * Search
     * free text
     * @param language
     * @param text
     * @returns {Promise<T>}
     */
    CompanyService.prototype.getSearch = function (language, text) {
        var _this = this;
        var q;
        console.log(text);
        return new Promise(function (resolve, reject) {
            resolve(_this.getAll().then(function (p) {
                return p.filter(function (p) {
                    return ((p.title.indexOf(text) != -1) && (p.key == language))
                        || ((String(p.content).indexOf(text) != -1) && (p.key == language));
                });
            }));
        });
    };
    return CompanyService;
}(service_1.GlobalService));
CompanyService = __decorate([
    core_1.Injectable()
    /**
     * Copmany Service
     * company data process
     */
    ,
    __metadata("design:paramtypes", [http_1.Http])
], CompanyService);
exports.CompanyService = CompanyService;
//# sourceMappingURL=company.service.js.map