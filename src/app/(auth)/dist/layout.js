"use strict";
exports.__esModule = true;
// Component Imports
var Providers_1 = require("@components/Providers");
var BlankLayout_1 = require("@layouts/BlankLayout");
var Layout = function (_a) {
    var children = _a.children;
    // Vars
    var direction = 'ltr';
    return (React.createElement(Providers_1["default"], { direction: direction },
        React.createElement(BlankLayout_1["default"], null, children)));
};
exports["default"] = Layout;
