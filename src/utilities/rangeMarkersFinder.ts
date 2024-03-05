/* eslint-disable max-params */
export const rangeMarkersFinder = (
    min: number,
    max: number,
    stepMin: number,
    stepMax: number
): number[] => {
    const range = Math.abs(max) + Math.abs(min);
    let stop = false;
    const step = [
        95,
        85,
        75,
        65,
        60,
        55,
        50,
        40,
        30,
        25,
        20,
        15,
        10,
        5
    ];

    const selectedRange = [];
    for (let i = 0; i < step.length; i++) {
        if (!stop) {
            const quotient = range / step[i];
            if (
                range % step[i] === 0 &&
                quotient >= stepMin &&
                quotient <= stepMax
            ) {
                stop = true;
                for (let y = 0; y <= quotient; y++) {
                    selectedRange.push(min + step[i] * y);
                }
            }
        }
    }
    return selectedRange;
};
