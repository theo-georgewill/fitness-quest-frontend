"use strict";
exports.__esModule = true;
exports.config = exports.middleware = void 0;
// middleware.ts
var server_1 = require("next/server");
var jsonwebtoken_1 = require("jsonwebtoken");
var JWT_SECRET = process.env.JWT_SECRET;
function middleware(req) {
    var _a;
    var token = (_a = req.cookies.get('token')) === null || _a === void 0 ? void 0 : _a.value;
    // If no token, redirect to login
    if (!token) {
        return server_1.NextResponse.redirect(new URL('/login', req.url));
    }
    try {
        // Verify JWT
        jsonwebtoken_1["default"].verify(token, JWT_SECRET);
        return server_1.NextResponse.next(); // Continue to the page
    }
    catch (err) {
        // Invalid token → force logout
        return server_1.NextResponse.redirect(new URL('/login', req.url));
    }
}
exports.middleware = middleware;
// Protect specific routes
exports.config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico|images|login|register).*)",
    ]
};
