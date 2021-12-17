import { depthIncreases, depths } from './day1/part1/day1part1';
import { doAnotherThing } from './day1/part2/day1part2';
import { depthAndLengthPositionMultiplied, instructions } from './day2/part1/day2part1';
import { finalPositionMultipliedByDepth } from './day2/part2/day2part2';

/** Steps to see answers for each part completed (needs to be ran after each completion)
 * 
 * 1. In this directory, run 'tsc index.ts' to compile to JS
 * 2. Run 'node index.js' to see what the compiled file returns
*/

// DAY 1 PART 1 ANSWER
console.log("Day 1, Part 1:", depthIncreases(depths));

// DAY 1 PART 2 ANSWER
console.log("Day 1, Part 2:", doAnotherThing(depths));

// DAY 2 PART 1 ANSWER
console.log("Day 2, Part 1:", depthAndLengthPositionMultiplied(instructions));