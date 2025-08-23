// AuthContext.tsx
"use client";
"use strict";
exports.__esModule = true;
exports.useAuth = exports.AuthProvider = void 0;
var react_1 = require("react");
var navigation_1 = require("next/navigation");
var AuthContext = react_1.createContext(null);
exports.AuthProvider = function (_a) {
    var children = _a.children;
    var _b = react_1.useState(null), user = _b[0], setUser = _b[1];
    var router = navigation_1.useRouter();
    react_1.useEffect(function () {
        // Load user from localStorage if available
        var storedUser = localStorage.getItem("user");
        if (storedUser)
            setUser(JSON.parse(storedUser));
    }, []);
    var login = function (token, user) {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);
        router.push("/dashboard"); // redirect after login
    };
    var logout = function () {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        router.push("/login");
    };
    return (React.createElement(AuthContext.Provider, { value: { user: user, login: login, logout: logout } }, children));
};
exports.useAuth = function () {
    var context = react_1.useContext(AuthContext);
    if (!context)
        throw new Error("useAuth must be used inside AuthProvider");
    return context;
};
