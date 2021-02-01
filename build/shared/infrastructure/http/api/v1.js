"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.v1Router = void 0;
var express_1 = __importDefault(require("express"));
var search_1 = require("../../../../modules/web-scraping/infrastructure/http/routes/search");
var v1Router = express_1.default.Router();
exports.v1Router = v1Router;
v1Router.use('/search', search_1.searchRouter);
//# sourceMappingURL=v1.js.map