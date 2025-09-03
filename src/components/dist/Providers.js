"use strict";
exports.__esModule = true;
// Context Imports
var verticalNavContext_1 = require("@menu/contexts/verticalNavContext");
var settingsContext_1 = require("@core/contexts/settingsContext");
var AuthContext_1 = require("@/@auth/contexts/AuthContext");
var theme_1 = require("@components/theme");
// Component Imports
//import UpgradeToProButton from '@components/upgrade-to-pro-button'
// Util Imports
var serverHelpers_1 = require("@core/utils/serverHelpers");
var Providers = function (props) {
    // Props
    var children = props.children, direction = props.direction;
    // Vars
    var mode = serverHelpers_1.getMode();
    var settingsCookie = serverHelpers_1.getSettingsFromCookie();
    return (React.createElement(AuthContext_1.AuthProvider, null,
        React.createElement(verticalNavContext_1.VerticalNavProvider, null,
            React.createElement(settingsContext_1.SettingsProvider, { settingsCookie: settingsCookie, mode: mode },
                React.createElement(theme_1["default"], { direction: direction }, children)))));
};
exports["default"] = Providers;
