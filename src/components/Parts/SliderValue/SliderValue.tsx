/* eslint-disable @stylistic/max-len */
import React from "react";

import "./SliderValue.scss";

const firstStep = 44;
const secondStep = 56;
const colorMin = 203;
const colorRange = 255;

const colorCalculator = (value: number): string => {
    let color = "";
    if (value < firstStep) {
        const purcent = (value / firstStep) * 100;
        const diff = colorRange - colorMin;
        color = `
        rgb(
            ${(diff / 100) * purcent + colorMin},
            ${(colorRange / 100) * purcent},
            ${(colorRange / 100) * purcent}
        )`;
    }
    if (value >= firstStep && value <= secondStep) {
        color = `rgb(${colorRange}, ${colorRange}, ${colorRange})`;
    }
    if (value > secondStep) {
        const purcent = ((value - secondStep) / firstStep) * 100;
        const diff = colorRange - colorMin;
        color = `
        rgb(${colorRange - (colorRange / 100) * purcent},
            ${colorRange - (diff / 100) * purcent},
            ${colorRange - (colorRange / 100) * purcent}
        )`;
    }
    return color;
};

export const SliderValue: React.FC<{
    "displayValue": number;
    "trueValue": number;
}> = ({displayValue, trueValue}) => {

    const valueDiv = document.querySelector(".slider-value") as HTMLDivElement;
    const sliderRange = document.querySelector(
        ".balancing-cursor"
    ) as HTMLDivElement;

    if (valueDiv && sliderRange) {
        const valuePosition =
        (trueValue < -50 ? -50 : trueValue > 50 ? 50 : trueValue) / 100;
        const valueW = valueDiv.offsetWidth;
        const rangeW = sliderRange.offsetWidth;
        const position = valuePosition * rangeW + rangeW / 2;

        const leftColor = colorCalculator((position - valueW / 2) / rangeW * 100);
        const rightColor = colorCalculator((position + valueW / 2) / rangeW * 100);

        return (
            <span
                className="slider-value numbers-font"
                style={{
                    "transform": `
                    translateX(calc(${valuePosition * rangeW}px - 50%))
                `,
                    "backgroundImage": `linear-gradient(white, white), 
            linear-gradient(to right, ${leftColor}, ${rightColor})
            `,
                }}
            >
                {displayValue}
            </span>
        );
    } else {
        return (
            <span
                className="slider-value numbers-font"
            >
                {displayValue}
            </span>
        );
    }
};
