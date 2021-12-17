import { depthIncreases } from '../part1/day1part1';

export const doAnotherThing = (depths: number[]): number => {
    let windows = [];

    for (let i = 0; i < depths.length; i++) {
      windows.push(
        [
          depths[i], 
          depths[i + 1], 
          depths[i + 2]
        ]
      );
    }
    
    const windowSums: number[] = windows.map((window: number[]) => {
      return window.reduce((accumulator: number, currentWindowVal: number) => {
        return accumulator + currentWindowVal;
      })
    })

    return depthIncreases(windowSums);
}

