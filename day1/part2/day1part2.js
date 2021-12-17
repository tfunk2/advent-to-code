"use strict";
exports.__esModule = true;
exports.doAnotherThing = void 0;
var day1part1_1 = require("../part1/day1part1");
var doAnotherThing = function (depths) {
    var windows = [];
    for (var i = 0; i < depths.length; i++) {
        windows.push([
            depths[i],
            depths[i + 1],
            depths[i + 2]
        ]);
    }
    var windowSums = windows.map(function (window) {
        return window.reduce(function (accumulator, currentWindowVal) {
            return accumulator + currentWindowVal;
        });
    });
    return day1part1_1.depthIncreases(windowSums);
};
exports.doAnotherThing = doAnotherThing;
