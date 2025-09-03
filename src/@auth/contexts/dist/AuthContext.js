"use client";
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.useAuth = exports.AuthProvider = exports.AuthContext = void 0;
var react_1 = require("react");
var navigation_1 = require("next/navigation");
exports.AuthContext = react_1.createContext(null);
exports.AuthProvider = function (_a) {
    var children = _a.children;
    var _b = react_1.useState(null), user = _b[0], setUser = _b[1];
    var _c = react_1.useState(false), isAuthenticated = _c[0], setIsAuthenticated = _c[1];
    var router = navigation_1.useRouter();
    // Try to load user when app starts (if cookie exists, backend will return user)
    react_1.useEffect(function () {
        fetchUser();
    }, []);
    var fetchUser = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res, userData, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, fetch("http://localhost:4000/api/user/profile", {
                            credentials: "include"
                        })];
                case 1:
                    res = _a.sent();
                    if (!res.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, res.json()];
                case 2:
                    userData = _a.sent();
                    setUser(userData);
                    setIsAuthenticated(true);
                    return [3 /*break*/, 4];
                case 3:
                    setUser(null);
                    setIsAuthenticated(false);
                    _a.label = 4;
                case 4: return [3 /*break*/, 6];
                case 5:
                    err_1 = _a.sent();
                    console.error("Error fetching user:", err_1);
                    setUser(null);
                    setIsAuthenticated(false);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    var login = function (email, password) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("http://localhost:4000/api/auth/login", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ email: email, password: password }),
                            credentials: "include"
                        })];
                case 1:
                    res = _a.sent();
                    if (!res.ok)
                        throw new Error("Invalid credentials");
                    // After successful login, fetch user from backend
                    return [4 /*yield*/, fetchUser()];
                case 2:
                    // After successful login, fetch user from backend
                    _a.sent();
                    router.push("/dashboard");
                    return [3 /*break*/, 4];
                case 3:
                    err_2 = _a.sent();
                    console.error("Login error:", err_2);
                    throw err_2;
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var logout = function () { return __awaiter(void 0, void 0, void 0, function () {
        var err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, 3, 4]);
                    return [4 /*yield*/, fetch("http://localhost:4000/api/auth/logout", {
                            method: "POST",
                            credentials: "include"
                        })];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 2:
                    err_3 = _a.sent();
                    console.error("Logout error:", err_3);
                    return [3 /*break*/, 4];
                case 3:
                    setUser(null);
                    setIsAuthenticated(false);
                    router.push("/login");
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement(exports.AuthContext.Provider, { value: { user: user, isAuthenticated: isAuthenticated, login: login, logout: logout, fetchUser: fetchUser } }, children));
};
exports.useAuth = function () {
    var context = react_1.useContext(exports.AuthContext);
    if (!context)
        throw new Error("useAuth must be used inside AuthProvider");
    return context;
};
