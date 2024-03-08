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
    const valuePosition =
        (trueValue < -50 ? 0 : trueValue > 50 ? 100 : trueValue + 50) / 100;

    let leftColor = "";
    let rightColor = "";

    const valueDiv = document.querySelector(".slider-value") as HTMLDivElement;
    const sliderRange = document.querySelector(
        ".balancing-cursor"
    ) as HTMLDivElement;

    let leftBorder = 0;
    let rightBorder = 0;
    if (valueDiv && sliderRange) {
        const valueWidth = valueDiv.offsetWidth;
        const margin = parseFloat(window.getComputedStyle(valueDiv).marginLeft);
        const sliderWidth = sliderRange.offsetWidth;
        leftBorder = (margin / sliderWidth) * 100;
        rightBorder = ((margin + valueWidth) / sliderWidth) * 100;
        leftColor = colorCalculator(leftBorder);
        rightColor = colorCalculator(rightBorder);
    }

    return (
        <span
            className="slider-value numbers-font"
            style={{
                "marginLeft": `calc((100% - 45px) * ${valuePosition})`,
                "backgroundImage": `linear-gradient(white, white), 
            linear-gradient(to right, ${leftColor}, ${rightColor})
            `,
            }}
        >
            {displayValue}
        </span>
    );
};
