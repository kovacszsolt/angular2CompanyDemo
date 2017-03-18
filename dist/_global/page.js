"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Main Page class
 */
var GlobalPage = (function () {
    function GlobalPage() {
    }
    /**
     * Set message
     * @param title
     * @param content
     */
    GlobalPage.prototype.setMessage = function (title, content) {
        this.messageContent = content;
        this.messageTitle = title;
    };
    return GlobalPage;
}());
exports.GlobalPage = GlobalPage;
//# sourceMappingURL=page.js.map