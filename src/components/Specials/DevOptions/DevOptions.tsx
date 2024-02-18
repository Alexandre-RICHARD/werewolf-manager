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
    const {
        appSize,
        showWakeSleepScreen,
    } = useAppSelector(werewolfState.GameData);

    const handleCheckbox = () => {
        dispatch(werewolfActions.setShowWakeSleepScreen(!showWakeSleepScreen));
    };

    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(werewolfActions.setAppSize(event.target.value));
    };

    return (
        <div className="dev-options">
            <Checkbox
                handleCheckbox={handleCheckbox}
                inputName="show-wake-sleep-screen"
                text="Activer/Désactiver - Écran de réveil"
                value={showWakeSleepScreen}
            />
            <div className="select-box">
                <select
                    value={appSize}
                    onChange={handleSelect}
                >
                    <option value="size-320">
                        320px
                    </option>
                    <option value="size-480">
                        480px
                    </option>
                    <option value="size-770">
                        770px
                    </option>
                    <option value="size-920h">
                        920 horizontal
                    </option>
                    <option value="size-920v">
                        920 vertical
                    </option>
                </select>
            </div>
        </div>
    );
};
