"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Global Service Class
 */
var GlobalService = (function () {
    function GlobalService() {
    }
    /**
     * Show errors on console
     * @param error
     */
    GlobalService.prototype.onError = function (error) {
        console.log(error);
    };
    return GlobalService;
}());
exports.GlobalService = GlobalService;
//# sourceMappingURL=service.js.map