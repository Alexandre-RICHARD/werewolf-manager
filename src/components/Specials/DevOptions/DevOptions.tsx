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

    const showWakeScreen = useAppSelector(werewolfState.ShowWakeSleepScreen);
    const handleCheckbox = () => {
        dispatch(werewolfActions.setShowWakeSleepScreen(!showWakeScreen));
    };

    return (
        <div className="dev-options">
            <Checkbox
                handleCheckbox={handleCheckbox}
                inputName="show-wake-sleep-screen"
                text="Activer/Désactiver - Écran de réveil"
                value={showWakeScreen}
            />
        </div>
    );
};
