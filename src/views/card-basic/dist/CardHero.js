"use strict";
exports.__esModule = true;
var React = require("react");
var Card_1 = require("@mui/material/Card");
var CardContent_1 = require("@mui/material/CardContent");
var CardMedia_1 = require("@mui/material/CardMedia");
var Typography_1 = require("@mui/material/Typography");
var Button_1 = require("@mui/material/Button");
function CardHero() {
    return (React.createElement(Card_1["default"], { sx: { maxWidth: 900, margin: 'auto', boxShadow: 3 } },
        React.createElement(CardMedia_1["default"], { component: "img", height: "400", image: "/hero-image.jpg" // replace with your hero image
            , alt: "Hero" }),
        React.createElement(CardContent_1["default"], { sx: { textAlign: 'center' } },
            React.createElement(Typography_1["default"], { gutterBottom: true, variant: "h4", component: "div" }, "Welcome to Fitness Quest"),
            React.createElement(Typography_1["default"], { variant: "body1", color: "text.secondary", sx: { mb: 2 } }, "Your journey to a healthier lifestyle starts here."),
            React.createElement(Button_1["default"], { variant: "contained", color: "primary", size: "large" }, "Get Started"))));
}
exports["default"] = CardHero;
