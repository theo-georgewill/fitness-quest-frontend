"use strict";
exports.__esModule = true;
exports.config = exports.middleware = void 0;
var server_1 = require("next/server");
function middleware(req) {
    var _a;
    var token = (_a = req.cookies.get('token')) === null || _a === void 0 ? void 0 : _a.value;
    if (!token) {
        return server_1.NextResponse.redirect(new URL('/login', req.url));
    }
    // If token exists, let backend verify later
    return server_1.NextResponse.next();
}
exports.middleware = middleware;
exports.config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico|images|login|register).*)",
    ]
};
