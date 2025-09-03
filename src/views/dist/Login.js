'use client';
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
// React Imports
var react_1 = require("react");
// Next Imports
var link_1 = require("next/link");
var navigation_1 = require("next/navigation");
// MUI Imports
var Card_1 = require("@mui/material/Card");
var CardContent_1 = require("@mui/material/CardContent");
var Typography_1 = require("@mui/material/Typography");
var TextField_1 = require("@mui/material/TextField");
var IconButton_1 = require("@mui/material/IconButton");
var InputAdornment_1 = require("@mui/material/InputAdornment");
var Checkbox_1 = require("@mui/material/Checkbox");
var Button_1 = require("@mui/material/Button");
var FormControlLabel_1 = require("@mui/material/FormControlLabel");
var Divider_1 = require("@mui/material/Divider");
// Component Imports
var Logo_1 = require("@components/layout/shared/Logo");
var Illustrations_1 = require("@components/Illustrations");
// Config Imports
var themeConfig_1 = require("@configs/themeConfig");
//Context Imports
var AuthContext_1 = require("@auth/AuthContext");
// Hook Imports
var useImageVariant_1 = require("@core/hooks/useImageVariant");
var Login = function (_a) {
    var mode = _a.mode;
    var login = AuthContext_1.useAuth().login;
    var router = navigation_1.useRouter();
    // States
    var _b = react_1.useState(""), email = _b[0], setEmail = _b[1];
    var _c = react_1.useState(""), password = _c[0], setPassword = _c[1];
    var _d = react_1.useState(false), isPasswordShown = _d[0], setIsPasswordShown = _d[1];
    var _e = react_1.useState(null), error = _e[0], setError = _e[1];
    var _f = react_1.useState(false), loading = _f[0], setLoading = _f[1];
    // Vars
    var darkImg = '/images/pages/auth-v1-mask-dark.png';
    var lightImg = '/images/pages/auth-v1-mask-light.png';
    // Hooks
    var authBackground = useImageVariant_1.useImageVariant(mode, lightImg, darkImg);
    var handleClickShowPassword = function () { return setIsPasswordShown(function (show) { return !show; }); };
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    setLoading(true);
                    setError(null);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, login(email, password)];
                case 2:
                    _a.sent(); // global login, sets state + handles cookies
                    router.push("/dashboard");
                    return [3 /*break*/, 5];
                case 3:
                    err_1 = _a.sent();
                    setError(err_1.message);
                    return [3 /*break*/, 5];
                case 4:
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("div", { className: 'flex flex-col justify-center items-center min-bs-[100dvh] relative p-6' },
        React.createElement(Card_1["default"], { className: 'flex flex-col sm:is-[450px]' },
            React.createElement(CardContent_1["default"], { className: 'p-6 sm:!p-12' },
                React.createElement(link_1["default"], { href: '/', className: 'flex justify-center items-center mbe-6' },
                    React.createElement(Logo_1["default"], null)),
                React.createElement("div", { className: 'flex flex-col gap-5' },
                    React.createElement("div", null,
                        React.createElement(Typography_1["default"], { variant: 'h4' }, "Welcome to " + themeConfig_1["default"].templateName + "! \uD83D\uDC4B\uD83C\uDFFB"),
                        React.createElement(Typography_1["default"], { className: 'mbs-1' }, "Please sign-in to your account and start the adventure")),
                    React.createElement("form", { noValidate: true, autoComplete: 'off', onSubmit: handleSubmit, className: 'flex flex-col gap-5' },
                        React.createElement(TextField_1["default"], { autoFocus: true, fullWidth: true, label: 'Email', value: email, onChange: function (e) { return setEmail(e.target.value); } }),
                        React.createElement(TextField_1["default"], { fullWidth: true, label: 'Password', id: 'outlined-adornment-password', type: isPasswordShown ? 'text' : 'password', value: password, onChange: function (e) { return setPassword(e.target.value); }, InputProps: {
                                endAdornment: (React.createElement(InputAdornment_1["default"], { position: 'end' },
                                    React.createElement(IconButton_1["default"], { size: 'small', edge: 'end', onClick: handleClickShowPassword, onMouseDown: function (e) { return e.preventDefault(); } },
                                        React.createElement("i", { className: isPasswordShown ? 'ri-eye-off-line' : 'ri-eye-line' }))))
                            } }),
                        React.createElement("div", { className: 'flex justify-between items-center gap-x-3 gap-y-1 flex-wrap' },
                            React.createElement(FormControlLabel_1["default"], { control: React.createElement(Checkbox_1["default"], null), label: 'Remember me' }),
                            React.createElement(Typography_1["default"], { className: 'text-end', color: 'primary', component: link_1["default"], href: '/forgot-password' }, "Forgot password?")),
                        React.createElement(Button_1["default"], { fullWidth: true, variant: 'contained', type: 'submit' }, "Log In"),
                        React.createElement("div", { className: 'flex justify-center items-center flex-wrap gap-2' },
                            React.createElement(Typography_1["default"], null, "New on our platform?"),
                            React.createElement(Typography_1["default"], { component: link_1["default"], href: '/register', color: 'primary' }, "Create an account")),
                        React.createElement(Divider_1["default"], { className: 'gap-3' }, "or"),
                        React.createElement("div", { className: 'flex justify-center items-center gap-2' },
                            React.createElement(IconButton_1["default"], { size: 'small', className: 'text-facebook' },
                                React.createElement("i", { className: 'ri-facebook-fill' })),
                            React.createElement(IconButton_1["default"], { size: 'small', className: 'text-twitter' },
                                React.createElement("i", { className: 'ri-twitter-fill' })),
                            React.createElement(IconButton_1["default"], { size: 'small', className: 'text-github' },
                                React.createElement("i", { className: 'ri-github-fill' })),
                            React.createElement(IconButton_1["default"], { size: 'small', className: 'text-googlePlus' },
                                React.createElement("i", { className: 'ri-google-fill' }))))))),
        React.createElement(Illustrations_1["default"], { maskImg: { src: authBackground } })));
};
exports["default"] = Login;
