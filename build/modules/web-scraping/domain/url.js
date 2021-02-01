"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Url = void 0;
var url_1 = require("url");
var Url = /** @class */ (function () {
    function Url(props) {
        this.props = props;
    }
    Url.create = function (props) {
        var encodedURL = Url.buildURL(props.baseURL, props.queryParams);
        props.EncodedURL = encodedURL;
        return new Url(props);
    };
    Url.buildURL = function (baseURL, queryParams) {
        var url = new url_1.URL(baseURL);
        if (queryParams) {
            queryParams.forEach(function (value, key) {
                url.searchParams.append(key, value);
            });
        }
        return url.href;
    };
    return Url;
}());
exports.Url = Url;
//# sourceMappingURL=url.js.map