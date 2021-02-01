"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var v1_1 = require("./api/v1");
var app = express_1.default();
app.use(express_1.default.json());
app.use('/api/v1', v1_1.v1Router);
var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log("[App]: Listening on port " + port);
});
//# sourceMappingURL=app.js.map