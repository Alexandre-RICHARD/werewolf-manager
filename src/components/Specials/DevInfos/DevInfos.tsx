import React from "react";

import {useAppSelector, werewolfState} from "@/IndexImporter";
import "./DevInfos.scss";

export const DevInfos: React.FC = () => {
    const gameData = useAppSelector(werewolfState.GameData);

    return (
        <div className="dev-infos">
            <p className="title">
                Devbox: Informations du state
            </p>
            <p>
                {`showWakeScreen : ${gameData.showWakeSleepScreen}`}
            </p>
            <p>
                {`cycleCount : ${gameData.cycleCount}`}
            </p>
            <p>
                {`nextStepNumber : ${gameData.nextStepNumber}`}
            </p>
            <p>
                {`playerNumber : ${gameData.playerNumber}`}
            </p>
            <p>
                {`stepNumber : ${gameData.stepNumber}`}
            </p>
        </div>
    );
};
