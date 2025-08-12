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
exports.__esModule = true;
// MUI Imports
var Chip_1 = require("@mui/material/Chip");
var styles_1 = require("@mui/material/styles");
// Third-party Imports
var react_perfect_scrollbar_1 = require("react-perfect-scrollbar");
// Component Imports
var vertical_menu_1 = require("@menu/vertical-menu");
// Hook Imports
var useVerticalNav_1 = require("@menu/hooks/useVerticalNav");
// Styled Component Imports
var StyledVerticalNavExpandIcon_1 = require("@menu/styles/vertical/StyledVerticalNavExpandIcon");
// Style Imports
var menuItemStyles_1 = require("@core/styles/vertical/menuItemStyles");
var menuSectionStyles_1 = require("@core/styles/vertical/menuSectionStyles");
var RenderExpandIcon = function (_a) {
    var open = _a.open, transitionDuration = _a.transitionDuration;
    return (React.createElement(StyledVerticalNavExpandIcon_1["default"], { open: open, transitionDuration: transitionDuration },
        React.createElement("i", { className: 'ri-arrow-right-s-line' })));
};
var VerticalMenu = function (_a) {
    var scrollMenu = _a.scrollMenu;
    // Hooks
    var theme = styles_1.useTheme();
    var _b = useVerticalNav_1["default"](), isBreakpointReached = _b.isBreakpointReached, transitionDuration = _b.transitionDuration;
    var ScrollWrapper = isBreakpointReached ? 'div' : react_perfect_scrollbar_1["default"];
    return (
    // eslint-disable-next-line lines-around-comment
    /* Custom scrollbar instead of browser scroll, remove if you want browser scroll only */
    React.createElement(ScrollWrapper, __assign({}, (isBreakpointReached
        ? {
            className: 'bs-full overflow-y-auto overflow-x-hidden',
            onScroll: function (container) { return scrollMenu(container, false); }
        }
        : {
            options: { wheelPropagation: false, suppressScrollX: true },
            onScrollY: function (container) { return scrollMenu(container, true); }
        })),
        React.createElement(vertical_menu_1.Menu, { menuItemStyles: menuItemStyles_1["default"](theme), renderExpandIcon: function (_a) {
                var open = _a.open;
                return (React.createElement(RenderExpandIcon, { open: open, transitionDuration: transitionDuration }));
            }, renderExpandedMenuItemIcon: { icon: React.createElement("i", { className: 'ri-circle-line' }) }, menuSectionStyles: menuSectionStyles_1["default"](theme) },
            React.createElement(vertical_menu_1.SubMenu, { label: 'Dashboards', icon: React.createElement("i", { className: 'ri-home-smile-line' }), suffix: React.createElement(Chip_1["default"], { label: '5', size: 'small', color: 'error' }) },
                React.createElement(vertical_menu_1.MenuItem, { href: process.env.NEXT_PUBLIC_PRO_URL + "/dashboards/crm", suffix: React.createElement(Chip_1["default"], { label: 'Pro', size: 'small', color: 'primary', variant: 'tonal' }), target: '_blank' }, "CRM"),
                React.createElement(vertical_menu_1.MenuItem, { href: '/' }, "Analytics"),
                React.createElement(vertical_menu_1.MenuItem, { href: process.env.NEXT_PUBLIC_PRO_URL + "/dashboards/ecommerce", suffix: React.createElement(Chip_1["default"], { label: 'Pro', size: 'small', color: 'primary', variant: 'tonal' }), target: '_blank' }, "eCommerce"),
                React.createElement(vertical_menu_1.MenuItem, { href: process.env.NEXT_PUBLIC_PRO_URL + "/dashboards/academy", suffix: React.createElement(Chip_1["default"], { label: 'Pro', size: 'small', color: 'primary', variant: 'tonal' }), target: '_blank' }, "Academy"),
                React.createElement(vertical_menu_1.MenuItem, { href: process.env.NEXT_PUBLIC_PRO_URL + "/dashboards/logistics", suffix: React.createElement(Chip_1["default"], { label: 'Pro', size: 'small', color: 'primary', variant: 'tonal' }), target: '_blank' }, "Logistics")),
            React.createElement(vertical_menu_1.SubMenu, { label: 'Front Pages', icon: React.createElement("i", { className: 'ri-file-copy-line' }), suffix: React.createElement(Chip_1["default"], { label: 'Pro', size: 'small', color: 'primary', variant: 'tonal' }) },
                React.createElement(vertical_menu_1.MenuItem, { href: process.env.NEXT_PUBLIC_PRO_URL + "/front-pages/landing-page", target: '_blank' }, "Landing"),
                React.createElement(vertical_menu_1.MenuItem, { href: process.env.NEXT_PUBLIC_PRO_URL + "/front-pages/pricing", target: '_blank' }, "Pricing"),
                React.createElement(vertical_menu_1.MenuItem, { href: process.env.NEXT_PUBLIC_PRO_URL + "/front-pages/payment", target: '_blank' }, "Payment"),
                React.createElement(vertical_menu_1.MenuItem, { href: process.env.NEXT_PUBLIC_PRO_URL + "/front-pages/checkout", target: '_blank' }, "Checkout"),
                React.createElement(vertical_menu_1.MenuItem, { href: process.env.NEXT_PUBLIC_PRO_URL + "/front-pages/help-center", target: '_blank' }, "Help Center")),
            React.createElement(vertical_menu_1.MenuSection, { label: 'Apps & Pages' },
                React.createElement(vertical_menu_1.MenuItem, { href: process.env.NEXT_PUBLIC_PRO_URL + "/apps/email", icon: React.createElement("i", { className: 'ri-mail-open-line' }), suffix: React.createElement(Chip_1["default"], { label: 'Pro', size: 'small', color: 'primary', variant: 'tonal' }), target: '_blank' }, "Email"),
                React.createElement(vertical_menu_1.MenuItem, { href: process.env.NEXT_PUBLIC_PRO_URL + "/apps/chat", icon: React.createElement("i", { className: 'ri-wechat-line' }), suffix: React.createElement(Chip_1["default"], { label: 'Pro', size: 'small', color: 'primary', variant: 'tonal' }), target: '_blank' }, "Chat"),
                React.createElement(vertical_menu_1.MenuItem, { href: process.env.NEXT_PUBLIC_PRO_URL + "/apps/calendar", icon: React.createElement("i", { className: 'ri-calendar-line' }), suffix: React.createElement(Chip_1["default"], { label: 'Pro', size: 'small', color: 'primary', variant: 'tonal' }), target: '_blank' }, "Calendar"),
                React.createElement(vertical_menu_1.MenuItem, { href: process.env.NEXT_PUBLIC_PRO_URL + "/apps/kanban", icon: React.createElement("i", { className: 'ri-drag-drop-line' }), suffix: React.createElement(Chip_1["default"], { label: 'Pro', size: 'small', color: 'primary', variant: 'tonal' }), target: '_blank' }, "Kanban"),
                React.createElement(vertical_menu_1.MenuItem, { href: '/account-settings', icon: React.createElement("i", { className: 'ri-user-settings-line' }) }, "Account Settings"),
                React.createElement(vertical_menu_1.SubMenu, { label: 'Auth Pages', icon: React.createElement("i", { className: 'ri-shield-keyhole-line' }) },
                    React.createElement(vertical_menu_1.MenuItem, { href: '/login', target: '_blank' }, "Login"),
                    React.createElement(vertical_menu_1.MenuItem, { href: '/register', target: '_blank' }, "Register"),
                    React.createElement(vertical_menu_1.MenuItem, { href: '/forgot-password', target: '_blank' }, "Forgot Password")),
                React.createElement(vertical_menu_1.SubMenu, { label: 'Miscellaneous', icon: React.createElement("i", { className: 'ri-question-line' }) },
                    React.createElement(vertical_menu_1.MenuItem, { href: '/error', target: '_blank' }, "Error"),
                    React.createElement(vertical_menu_1.MenuItem, { href: '/under-maintenance', target: '_blank' }, "Under Maintenance")),
                React.createElement(vertical_menu_1.MenuItem, { href: '/card-basic', icon: React.createElement("i", { className: 'ri-bar-chart-box-line' }) }, "Cards"),
                React.createElement(vertical_menu_1.MenuItem, { href: '/workout-programs', icon: React.createElement("i", { className: 'ri-bar-chart-box-line' }) }, "Workout Programs")),
            React.createElement(vertical_menu_1.MenuSection, { label: 'Forms & Tables' },
                React.createElement(vertical_menu_1.MenuItem, { href: '/form-layouts', icon: React.createElement("i", { className: 'ri-layout-4-line' }) }, "Form Layouts"),
                React.createElement(vertical_menu_1.MenuItem, { href: process.env.NEXT_PUBLIC_PRO_URL + "/forms/form-validation", icon: React.createElement("i", { className: 'ri-checkbox-multiple-line' }), suffix: React.createElement(Chip_1["default"], { label: 'Pro', size: 'small', color: 'primary', variant: 'tonal' }), target: '_blank' }, "Form Validation"),
                React.createElement(vertical_menu_1.MenuItem, { href: process.env.NEXT_PUBLIC_PRO_URL + "/forms/form-wizard", icon: React.createElement("i", { className: 'ri-git-commit-line' }), suffix: React.createElement(Chip_1["default"], { label: 'Pro', size: 'small', color: 'primary', variant: 'tonal' }), target: '_blank' }, "Form Wizard"),
                React.createElement(vertical_menu_1.MenuItem, { href: process.env.NEXT_PUBLIC_PRO_URL + "/react-table", icon: React.createElement("i", { className: 'ri-table-alt-line' }), suffix: React.createElement(Chip_1["default"], { label: 'Pro', size: 'small', color: 'primary', variant: 'tonal' }), target: '_blank' }, "React Table"),
                React.createElement(vertical_menu_1.MenuItem, { href: process.env.NEXT_PUBLIC_DOCS_URL + "/docs/user-interface/form-elements", icon: React.createElement("i", { className: 'ri-radio-button-line' }), suffix: React.createElement("i", { className: 'ri-external-link-line text-xl' }), target: '_blank' }, "Form Elements"),
                React.createElement(vertical_menu_1.MenuItem, { href: process.env.NEXT_PUBLIC_DOCS_URL + "/docs/user-interface/mui-table", icon: React.createElement("i", { className: 'ri-table-2' }), suffix: React.createElement("i", { className: 'ri-external-link-line text-xl' }), target: '_blank' }, "MUI Tables")),
            React.createElement(vertical_menu_1.MenuSection, { label: 'Misc' },
                React.createElement(vertical_menu_1.MenuItem, { href: process.env.NEXT_PUBLIC_DOCS_URL + "/docs/user-interface/foundation", icon: React.createElement("i", { className: 'ri-pantone-line' }), suffix: React.createElement("i", { className: 'ri-external-link-line text-xl' }), target: '_blank' }, "Foundation"),
                React.createElement(vertical_menu_1.MenuItem, { href: process.env.NEXT_PUBLIC_DOCS_URL + "/docs/user-interface/components", icon: React.createElement("i", { className: 'ri-toggle-line' }), suffix: React.createElement("i", { className: 'ri-external-link-line text-xl' }), target: '_blank' }, "Components"),
                React.createElement(vertical_menu_1.MenuItem, { href: process.env.NEXT_PUBLIC_DOCS_URL + "/docs/menu-examples/overview", icon: React.createElement("i", { className: 'ri-menu-search-line' }), suffix: React.createElement("i", { className: 'ri-external-link-line text-xl' }), target: '_blank' }, "Menu Examples"),
                React.createElement(vertical_menu_1.MenuItem, { href: "https://github.com/themeselection/" + process.env.NEXT_PUBLIC_REPO_NAME + "/issues", icon: React.createElement("i", { className: 'ri-lifebuoy-line' }), suffix: React.createElement("i", { className: 'ri-external-link-line text-xl' }), target: '_blank' }, "Raise Support"),
                React.createElement(vertical_menu_1.MenuItem, { href: process.env.NEXT_PUBLIC_DOCS_URL, icon: React.createElement("i", { className: 'ri-book-line' }), suffix: React.createElement("i", { className: 'ri-external-link-line text-xl' }), target: '_blank' }, "Documentation"),
                React.createElement(vertical_menu_1.SubMenu, { label: 'Others', icon: React.createElement("i", { className: 'ri-more-line' }) },
                    React.createElement(vertical_menu_1.MenuItem, { suffix: React.createElement(Chip_1["default"], { label: 'New', size: 'small', color: 'info' }) }, "Item With Badge"),
                    React.createElement(vertical_menu_1.MenuItem, { href: 'https://themeselection.com', target: '_blank', suffix: React.createElement("i", { className: 'ri-external-link-line text-xl' }) }, "External Link"),
                    React.createElement(vertical_menu_1.SubMenu, { label: 'Menu Levels' },
                        React.createElement(vertical_menu_1.MenuItem, null, "Menu Level 2"),
                        React.createElement(vertical_menu_1.SubMenu, { label: 'Menu Level 2' },
                            React.createElement(vertical_menu_1.MenuItem, null, "Menu Level 3"),
                            React.createElement(vertical_menu_1.MenuItem, null, "Menu Level 3"))),
                    React.createElement(vertical_menu_1.MenuItem, { disabled: true }, "Disabled Menu"))))));
};
exports["default"] = VerticalMenu;
