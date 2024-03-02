// =============================================================================
// ? Main Component

import {App} from "@components/App";

export {App};

// =============================================================================
// ? Pages Components

import {AppOptions} from "@pages/AppOptions/AppOptions";
import {CreateCompo} from "@pages/CreateCompo/CreateCompo";
import {HomePage} from "@pages/HomePage/HomePage";
import {RolesExplaination} from "@pages/RolesExplaination/RolesExplaination";
import {RulesDescription} from "@pages/RulesDescription/RulesDescription";

export {
    AppOptions, CreateCompo, HomePage, RolesExplaination, RulesDescription
};

// =============================================================================
// ? Parts Components

import {AppButton} from "@parts/AppButton/AppButton";
import {Checkbox} from "./components/Parts/Checkbox/Checkbox";
import {ConfigHeader} from "@parts/ConfigHeader/ConfigHeader";
import {GameStep} from "@parts/GameStep/GameStep";
import {NextStepButton} from "@parts/NextStepButton/NextStepButton";
import {PlayerNumber} from "@parts/PlayerNumber/PlayerNumber";
import {RolesChoice} from "@parts/RolesChoice/RolesChoice";

export {
    AppButton,
    Checkbox,
    ConfigHeader,
    GameStep,
    NextStepButton,
    PlayerNumber,
    RolesChoice
};

// =============================================================================
// ? Specials Components

import {AppRouter} from "@specials/AppRouter";
import {DevInfos} from "@specials/DevInfos/DevInfos";
import {DevOptions} from "@specials/DevOptions/DevOptions";
import {GameRouter} from "@specials/GameRouter";

export {
    AppRouter, DevInfos, DevOptions, GameRouter
};

// =============================================================================
// ? Svg/Icon Components

import {BackIcon} from "@svgs/BackIcon";
import {HomeIcon} from "@svgs/HomeIcon";
import {OptionsGear} from "@svgs/OptionsGear";

export {
    BackIcon,
    HomeIcon,
    OptionsGear
};

// =============================================================================
// ? Utilities Functions

import {errorSaver} from "@utilities/errorSaver";
import {imageImporter} from "./utilities/imageImporter";
import {stepFinder} from "./utilities/stepFinder";

export {
    errorSaver, imageImporter, stepFinder
};

// =============================================================================
// ? Assets

import {roles} from "@assets/roles.json";
import {steps} from "@assets/step.json";

export {roles, steps};

// =============================================================================
// ? Store and slice

import {setupStore} from "@store/store";
import {useAppDispatch, useAppSelector} from "@store/hooks";
import {werewolfActions, werewolfState} from "@slices/werewolfSlice";
import {renderWithProviders} from "@tests/wrapperProvider";

export {
    renderWithProviders,
    setupStore,
    useAppDispatch,
    useAppSelector,
    werewolfActions,
    werewolfState
};

// =============================================================================
// ? Types and interfaces

import type {GameDataTypes} from "./types/GameDataTypes";
import type {StepsTypes} from "./types/StepsTypes";
import type {
    AppDispatch, AppStore, RootState
} from "@store/store";

export {
    AppDispatch, AppStore, GameDataTypes, RootState, StepsTypes
};

// =============================================================================
