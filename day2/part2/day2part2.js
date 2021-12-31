"use strict";
exports.__esModule = true;
exports.finalPositionMultipliedByDepth = void 0;
var finalPositionMultipliedByDepth = function (instructions) {
    var horizontalPosition = 0;
    var depth = 0;
    var aim = 0;
    instructions.map(function (instruction) {
        var direction = instruction[0];
        var value = instruction[1];
        switch (direction) {
            case 'down':
                aim += value;
                break;
            case 'up':
                aim -= value;
                break;
            case 'forward':
                horizontalPosition += value;
                depth += (aim * value);
                break;
            default:
            // Does nothing
        }
    });
    var multipliedAnswer = horizontalPosition * depth;
    return multipliedAnswer;
};
exports.finalPositionMultipliedByDepth = finalPositionMultipliedByDepth;
