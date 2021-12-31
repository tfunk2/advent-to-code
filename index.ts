import { depthIncreases, depths } from './day1/part1/day1part1';
import { doAnotherThing } from './day1/part2/day1part2';
import { depthAndLengthPositionMultiplied, instructions } from './day2/part1/day2part1';
import { finalPositionMultipliedByDepth } from './day2/part2/day2part2';
import { submarinePowerConsumption, binarySnippets } from './day3/part1/day3part1';

/** Steps to see answers for each part completed (needs to be ran after each completion)
 * 
 * 1. In this directory, run 'tsc index.ts' to compile to JS
 * 2. Run 'node index.js' to see what the compiled file returns
*/

console.log(
    '--Answers-- \n',
    `Day 1, Part 1: ${depthIncreases(depths)}\n`,
    `Day 1, Part 2: ${doAnotherThing(depths)}\n`,
    `Day 2, Part 1: ${depthAndLengthPositionMultiplied(instructions)}\n`,
    `Day 2, Part 2: ${finalPositionMultipliedByDepth(instructions)}\n`,
    `Day 3, Part 1: ${submarinePowerConsumption(binarySnippets)}\n`,
);