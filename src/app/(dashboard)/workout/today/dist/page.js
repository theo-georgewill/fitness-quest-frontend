'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var navigation_1 = require("next/navigation");
var Box_1 = require("@mui/material/Box");
var Typography_1 = require("@mui/material/Typography");
var Button_1 = require("@mui/material/Button");
var MobileStepper_1 = require("@mui/material/MobileStepper");
var Paper_1 = require("@mui/material/Paper");
var Dialog_1 = require("@mui/material/Dialog");
var DialogTitle_1 = require("@mui/material/DialogTitle");
var DialogContent_1 = require("@mui/material/DialogContent");
var DialogActions_1 = require("@mui/material/DialogActions");
var dummyExercises = [
    {
        id: 1,
        name: 'Jumping Jacks',
        instructions: 'Do 30 jumping jacks.',
        media: '/images/exercises/jumping-jacks.gif'
    },
    {
        id: 2,
        name: 'Push Ups',
        instructions: 'Perform 15 push ups with proper form.',
        media: '/images/exercises/push-ups.gif'
    },
    {
        id: 3,
        name: 'Plank',
        instructions: 'Hold a plank position for 1 minute.',
        media: '/images/exercises/plank.gif'
    },
];
function TodayWorkout() {
    var router = navigation_1.useRouter();
    var _a = react_1.useState(0), activeStep = _a[0], setActiveStep = _a[1];
    var _b = react_1.useState(false), completeDialogOpen = _b[0], setCompleteDialogOpen = _b[1];
    var maxSteps = dummyExercises.length;
    var exercise = dummyExercises[activeStep];
    var handleNext = function () {
        if (activeStep === maxSteps - 1) {
            setCompleteDialogOpen(true);
        }
        else {
            setActiveStep(function (prev) { return prev + 1; });
        }
    };
    var handleBack = function () {
        setActiveStep(function (prev) { return (prev > 0 ? prev - 1 : 0); });
    };
    var handleComplete = function () {
        // TODO: Save progress, update XP, backend call, etc.
        setCompleteDialogOpen(false);
        router.push('/challenges/active'); // or wherever
    };
    return (React.createElement(Box_1["default"], { sx: { maxWidth: 400, mx: 'auto', mt: 4, px: 2 } },
        React.createElement(Paper_1["default"], { elevation: 3, sx: { p: 2 } },
            React.createElement(Typography_1["default"], { variant: "h6", gutterBottom: true }, exercise.name),
            React.createElement(Box_1["default"], { component: "img", src: exercise.media, alt: exercise.name, sx: { width: '100%', borderRadius: 1, mb: 2 } }),
            React.createElement(Typography_1["default"], { variant: "body1", mb: 2 }, exercise.instructions),
            React.createElement(MobileStepper_1["default"], { variant: "dots", steps: maxSteps, position: "static", activeStep: activeStep, nextButton: React.createElement(Button_1["default"], { size: "small", onClick: handleNext }, activeStep === maxSteps - 1 ? 'Finish' : 'Next'), backButton: React.createElement(Button_1["default"], { size: "small", onClick: handleBack, disabled: activeStep === 0 }, "Back") })),
        React.createElement(Dialog_1["default"], { open: completeDialogOpen, onClose: function () { return setCompleteDialogOpen(false); } },
            React.createElement(DialogTitle_1["default"], null, "Challenge Complete!"),
            React.createElement(DialogContent_1["default"], null,
                React.createElement(Typography_1["default"], null, "\uD83C\uDF89 You beat today\u2019s workout! Keep up the great work.")),
            React.createElement(DialogActions_1["default"], null,
                React.createElement(Button_1["default"], { onClick: handleComplete, variant: "contained" }, "Close")))));
}
exports["default"] = TodayWorkout;
