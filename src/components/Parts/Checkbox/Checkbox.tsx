import React from "react";

import "./Checkbox.scss";

export const Checkbox: React.FC<{
    "text": string;
    "inputName": string;
    "value": boolean;
    "handleCheckbox": () => void;
}> = ({
    text, inputName, value, handleCheckbox,
}) => {
    return (
        <div className="checkbox-input">
            <div className="checkbox-wrapper">
                <input
                    checked={value}
                    id={inputName}
                    name={inputName}
                    type="checkbox"
                    onChange={handleCheckbox}
                />
                <label htmlFor={inputName}>
                    <svg viewBox="0,0,50,50">
                        <path d="M5 30 L 20 45 L 45 5" />
                    </svg>
                </label>
            </div>
            <label
                className="checkbox-label"
                htmlFor={inputName}
            >
                {text}
            </label>
        </div>
    );
};
