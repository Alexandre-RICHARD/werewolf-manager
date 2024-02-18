import React from "react";

import {
    useAppDispatch,
    useAppSelector,
    werewolfActions,
    werewolfState,
    Checkbox
} from "@/IndexImporter";
import "./DevOptions.scss";

export const DevOptions: React.FC = () => {
    const dispatch = useAppDispatch();
    const {showWakeSleepScreen} = useAppSelector(werewolfState.GameData);
    const handleCheckbox = () => {
        dispatch(werewolfActions.setShowWakeSleepScreen(!showWakeSleepScreen));
    };

    return (
        <div className="dev-options">
            <Checkbox
                handleCheckbox={handleCheckbox}
                inputName="show-wake-sleep-screen"
                text="Activer/Désactiver - Écran de réveil"
                value={showWakeSleepScreen}
            />
        </div>
    );
};
