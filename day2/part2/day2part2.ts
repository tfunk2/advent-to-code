export const finalPositionMultipliedByDepth = (
    instructions: (string | number)[][]
): number => {
    let horizontalPosition = 0;
    let depth = 0;
    let aim = 0;

    instructions.map((instruction) => {
        const direction = instruction[0];
        const value = instruction[1];

        switch(direction) {
            case 'down':
                aim += value as number;
                break;
            case 'up':
                aim -= value as number;
                break;
            case 'forward':
                horizontalPosition += value as number;
                depth += (aim * (value as number))
                break;
            default:
                // Does nothing
        }
    })

    let multipliedAnswer = horizontalPosition * depth;
    return multipliedAnswer;
}