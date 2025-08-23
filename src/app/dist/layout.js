"use strict";
exports.__esModule = true;
exports.metadata = void 0;
// Third-party Imports
require("react-perfect-scrollbar/dist/css/styles.css");
// Style Imports
require("@/app/globals.css");
// Generated Icon CSS Imports
//import '@assets/iconify-icons/generated-icons.css'
var AuthContext_1 = require("@/components/AuthContext");
exports.metadata = {
    title: 'Fitness Quest',
    description: 'A fitness application that helps you track your workouts and nutrition.'
};
var RootLayout = function (_a) {
    var children = _a.children;
    // Vars
    var direction = 'ltr';
    return (React.createElement("html", { id: '__next', dir: direction },
        React.createElement("body", { className: 'flex is-full min-bs-full flex-auto flex-col' },
            React.createElement(AuthContext_1.AuthProvider, null, children))));
};
exports["default"] = RootLayout;
