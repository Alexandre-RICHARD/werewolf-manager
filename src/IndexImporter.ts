// =============================================================================
// ? Main Component

import {App} from "@components/App";

export {App};

// =============================================================================
// ? Pages Components

import {AppOptions} from "@pages/AppOptions/AppOptions";
import {GamePage} from "@pages/GamePage/GamePage";
import {HomePage} from "@pages/HomePage/HomePage";
import {RolesExplaination} from "@pages/RolesExplaination/RolesExplaination";
import {RulesDescription} from "@pages/RulesDescription/RulesDescription";

export {
    AppOptions, GamePage, HomePage, RolesExplaination, RulesDescription
};

// =============================================================================
// ? Parts Components

import {Checkbox} from "./components/Parts/Checkbox/Checkbox";
import {GameStep} from "@parts/GameStep/GameStep";
import {NextStepButton} from "@parts/NextStepButton/NextStepButton";

export {
    Checkbox, GameStep, NextStepButton
};

// =============================================================================
// ? Specials Components

import {AppRouter} from "@specials/AppRouter/AppRouter";
import {DevInfos} from "@specials/DevInfos/DevInfos";
import {DevOptions} from "@specials/DevOptions/DevOptions";

export {
    AppRouter, DevInfos, DevOptions
};

// =============================================================================
// ? Svg/Icon Components

import {HomeIcon} from "@svgs/HomeIcon/HomeIcon";

export {HomeIcon};

// =============================================================================
// ? Utilities Functions

import {errorSaver} from "@utilities/errorSaver";
import {imageImporter} from "./utilities/imageImporter";
import {stepFinder} from "./utilities/stepFinder";

export {
    errorSaver,
    imageImporter,
    stepFinder
};

// =============================================================================
// ? Assets

import {steps} from "@assets/step.json";

export {steps};

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
import type {StepsTypes} from "./types/stepsTypes";
import type {
    AppDispatch, AppStore, RootState
} from "@store/store";

export {
    AppDispatch, AppStore, GameDataTypes, RootState, StepsTypes
};

// =============================================================================
