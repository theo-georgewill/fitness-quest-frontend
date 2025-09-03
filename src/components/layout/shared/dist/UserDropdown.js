'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var navigation_1 = require("next/navigation");
// MUI Imports
var styles_1 = require("@mui/material/styles");
var Badge_1 = require("@mui/material/Badge");
var Avatar_1 = require("@mui/material/Avatar");
var Popper_1 = require("@mui/material/Popper");
var Fade_1 = require("@mui/material/Fade");
var Paper_1 = require("@mui/material/Paper");
var ClickAwayListener_1 = require("@mui/material/ClickAwayListener");
var MenuList_1 = require("@mui/material/MenuList");
var Typography_1 = require("@mui/material/Typography");
var Divider_1 = require("@mui/material/Divider");
var MenuItem_1 = require("@mui/material/MenuItem");
var Button_1 = require("@mui/material/Button");
// Auth Context
var AuthContext_1 = require("@auth/AuthContext");
// Styled component for badge content
var BadgeContentSpan = styles_1.styled('span')({
    width: 8,
    height: 8,
    borderRadius: '50%',
    cursor: 'pointer',
    backgroundColor: 'var(--mui-palette-success-main)',
    boxShadow: '0 0 0 2px var(--mui-palette-background-paper)'
});
var UserDropdown = function () {
    // States
    var _a = react_1.useState(false), open = _a[0], setOpen = _a[1];
    // Refs
    var anchorRef = react_1.useRef(null);
    // Hooks
    var router = navigation_1.useRouter();
    var handleDropdownOpen = function () {
        !open ? setOpen(true) : setOpen(false);
    };
    var handleDropdownClose = function (event, url) {
        if (url) {
            router.push(url);
        }
        if (anchorRef.current && anchorRef.current.contains(event === null || event === void 0 ? void 0 : event.target)) {
            return;
        }
        setOpen(false);
    };
    var _b = AuthContext_1.useAuth(), user = _b.user, logout = _b.logout;
    var handleLogout = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, logout()];
                case 1:
                    _a.sent();
                    setOpen(false);
                    return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement(React.Fragment, null,
        React.createElement(Badge_1["default"], { ref: anchorRef, overlap: 'circular', badgeContent: React.createElement(BadgeContentSpan, { onClick: handleDropdownOpen }), anchorOrigin: { vertical: 'bottom', horizontal: 'right' }, className: 'mis-2' },
            React.createElement(Avatar_1["default"], { ref: anchorRef, alt: user === null || user === void 0 ? void 0 : user.name, src: '/images/avatars/1.png', onClick: handleDropdownOpen, className: 'cursor-pointer bs-[38px] is-[38px]' })),
        React.createElement(Popper_1["default"], { open: open, transition: true, disablePortal: true, placement: 'bottom-end', anchorEl: anchorRef.current, className: 'min-is-[240px] !mbs-4 z-[1]' }, function (_a) {
            var TransitionProps = _a.TransitionProps, placement = _a.placement;
            return (React.createElement(Fade_1["default"], __assign({}, TransitionProps, { style: {
                    transformOrigin: placement === 'bottom-end' ? 'right top' : 'left top'
                } }),
                React.createElement(Paper_1["default"], { className: 'shadow-lg' },
                    React.createElement(ClickAwayListener_1["default"], { onClickAway: function (e) { return handleDropdownClose(e); } },
                        React.createElement(MenuList_1["default"], null,
                            React.createElement("div", { className: 'flex items-center plb-2 pli-4 gap-2', tabIndex: -1 },
                                React.createElement(Avatar_1["default"], { alt: 'John Doe', src: '/images/avatars/1.png' }),
                                React.createElement("div", { className: 'flex items-start flex-col' },
                                    React.createElement(Typography_1["default"], { className: 'font-medium', color: 'text.primary' }, "John Doe"),
                                    React.createElement(Typography_1["default"], { variant: 'caption' }, "Admin"))),
                            React.createElement(Divider_1["default"], { className: 'mlb-1' }),
                            React.createElement(MenuItem_1["default"], { className: 'gap-3', onClick: function (e) { return handleDropdownClose(e); } },
                                React.createElement("i", { className: 'ri-user-3-line' }),
                                React.createElement(Typography_1["default"], { color: 'text.primary' }, "My Profile")),
                            React.createElement(MenuItem_1["default"], { className: 'gap-3', onClick: function (e) { return handleDropdownClose(e); } },
                                React.createElement("i", { className: 'ri-settings-4-line' }),
                                React.createElement(Typography_1["default"], { color: 'text.primary' }, "Settings")),
                            React.createElement(MenuItem_1["default"], { className: 'gap-3', onClick: function (e) { return handleDropdownClose(e); } },
                                React.createElement("i", { className: 'ri-money-dollar-circle-line' }),
                                React.createElement(Typography_1["default"], { color: 'text.primary' }, "Pricing")),
                            React.createElement(MenuItem_1["default"], { className: 'gap-3', onClick: function (e) { return handleDropdownClose(e); } },
                                React.createElement("i", { className: 'ri-question-line' }),
                                React.createElement(Typography_1["default"], { color: 'text.primary' }, "FAQ")),
                            React.createElement("div", { className: 'flex items-center plb-2 pli-4' },
                                React.createElement(Button_1["default"], { fullWidth: true, variant: 'contained', color: 'error', size: 'small', endIcon: React.createElement("i", { className: 'ri-logout-box-r-line' }), onClick: handleLogout, sx: { '& .MuiButton-endIcon': { marginInlineStart: 1.5 } } }, "Logout")))))));
        })));
};
exports["default"] = UserDropdown;
