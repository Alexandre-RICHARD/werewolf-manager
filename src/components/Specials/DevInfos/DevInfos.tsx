import React from "react";

import {
    useAppSelector,
    werewolfState
} from "@/IndexImporter";
import "./DevInfos.scss";

export const DevInfos: React.FC = () => {
    const showWakeScreen = useAppSelector(werewolfState.ShowWakeSleepScreen);

    return (
        <div className="dev-infos">
            <p>
                {`showWakeScreen : ${showWakeScreen}`}
            </p>
        </div>
    );
};
