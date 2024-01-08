import React from "react";

import "./Slider.scss";

const Slider: React.FC = () => {

    return (
        <div className="number-selector-container">
            <p className="player-number-value">
                {`${gameData.playerNumber} joueurs`}
            </p>
            <button
                className="inc-dec-button"
                type="button"
                onClick={() => buttonChangePlayerNumber("neg")}
            >
                -
            </button>
            <input
                className="player-number-selector"
                max="49"
                min="4"
                type="range"
                value={gameData.playerNumber}
                onChange={changePlayerNumber}
            />
            <button
                className="inc-dec-button"
                type="button"
                onClick={() => buttonChangePlayerNumber("pos")}
            >
                +
            </button>
        </div>
    );
};

export default Slider;
