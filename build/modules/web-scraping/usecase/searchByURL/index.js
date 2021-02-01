"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchByURLController = exports.searchByURL = void 0;
var repository_1 = require("../../repository");
var searchByURL_1 = require("./searchByURL");
var searchByURLController_1 = require("./searchByURLController");
var searchByURL = new searchByURL_1.SearchByURL(repository_1.searchRepo);
exports.searchByURL = searchByURL;
var searchByURLController = new searchByURLController_1.SearchByURLController(searchByURL);
exports.searchByURLController = searchByURLController;
//# sourceMappingURL=index.js.map