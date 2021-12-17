"use strict";
exports.__esModule = true;
var day1part1_1 = require("./day1/part1/day1part1");
var day1part2_1 = require("./day1/part2/day1part2");
var day2part1_1 = require("./day2/part1/day2part1");
/** Steps to see answers for each part completed (needs to be ran after each completion)
 *
 * 1. In this directory, run 'tsc index.ts' to compile to JS
 * 2. Run 'node index.js' to see what the compiled file returns
*/
// DAY 1 PART 1 ANSWER
console.log("Day 1, Part 1:", day1part1_1.depthIncreases(day1part1_1.depths));
// DAY 1 PART 2 ANSWER
console.log("Day 1, Part 2:", day1part2_1.doAnotherThing(day1part1_1.depths));
// DAY 2 PART 1 ANSWER
console.log("Day 2, Part 1:", day2part1_1.depthAndLengthPositionMultiplied(day2part1_1.instructions));
