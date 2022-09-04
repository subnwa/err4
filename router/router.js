const queryparse = require('url').parse;
const http = require("http");

module.exports = class router {
    constructor(options) {
        this.err4 = this.send(reportError());
    }

    checkData(route) {
        if (this.primata(route).data);
        return true;
    }

    send(reportError) {
        return undefined;
    }
}
