"use strict";
exports.__esModule = true;
exports.isAuthenticated = exports.getToken = void 0;
// utils/auth.ts
function getToken() {
    if (typeof window === "undefined")
        return null;
    return localStorage.getItem("token");
}
exports.getToken = getToken;
function isAuthenticated() {
    return !!getToken();
}
exports.isAuthenticated = isAuthenticated;
