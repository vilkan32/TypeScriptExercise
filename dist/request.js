"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HttpRequest = /** @class */ (function () {
    function HttpRequest(method, uri, version, message) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fullfilled = false;
    }
    return HttpRequest;
}());
exports.default = HttpRequest;
