"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchRouter = void 0;
var express_1 = __importDefault(require("express"));
var searchByURL_1 = require("../../../usecase/searchByURL");
var searchRouter = express_1.default.Router();
exports.searchRouter = searchRouter;
searchRouter.post('/', function (req, res) { return searchByURL_1.searchByURLController.execute(req, res); });
//# sourceMappingURL=search.js.map