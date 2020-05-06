"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HttpRequest {
    constructor(method, uri, version, message) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fullfilled = false;
    }
}
exports.default = HttpRequest;
