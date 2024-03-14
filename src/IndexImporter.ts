// =============================================================================
// ? Main Component

import {App} from "@components/App";

export {App};

// =============================================================================
// ? Pages Components

import {AppOptions} from "@pages/AppOptions/AppOptions";
import {ComedienRoles} from "@pages/ComedienRoles/ComedienRoles";
import {CreateCompo} from "@pages/CreateCompo/CreateCompo";
import {HomePage} from "@pages/HomePage/HomePage";
import {PlayerName} from "@pages/PlayerName/PlayerName";
import {RolesExplaination} from "@pages/RolesExplaination/RolesExplaination";
import {RulesDescription} from "@pages/RulesDescription/RulesDescription";

export {
    AppOptions, CreateCompo, HomePage, RolesExplaination, RulesDescription
};

// =============================================================================
// ? Parts Components

import {AppButton} from "@parts/AppButton/AppButton";
import {Checkbox} from "@parts/Checkbox/Checkbox";
import {ConfigHeader} from "@parts/ConfigHeader/ConfigHeader";
import {GameBalanceScore} from "@parts/GameBalanceScore/GameBalanceScore";
import {GameStep} from "@parts/GameStep/GameStep";
import {NextStepButton} from "@parts/NextStepButton/NextStepButton";
import {PlayerNumber} from "@parts/PlayerNumber/PlayerNumber";
import {RolesChoice} from "@parts/RolesChoice/RolesChoice";
import {RoleSelection} from "@parts/RoleSelection/RoleSelection";
import {SliderValue} from "@parts/SliderValue/SliderValue";

export {
    AppButton,
    Checkbox,
    ComedienRoles,
    ConfigHeader,
    GameBalanceScore,
    GameStep,
    NextStepButton,
    PlayerName,
    PlayerNumber,
    RolesChoice,
    RoleSelection,
    SliderValue
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
import {MinusIcon} from "@svgs/MinusIcon";
import {OptionsGear} from "@svgs/OptionsGear";
import {PlusIcon} from "@svgs/PlusIcon";

export {
    BackIcon, HomeIcon, MinusIcon, OptionsGear, PlusIcon
};

// =============================================================================
// ? Utilities Functions

import {errorSaver} from "@utilities/errorSaver";
import {imageImporter} from "@utilities/imageImporter";
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

import type {CompositionTypes} from "./types/GameDataTypes";
import type {GameDataTypes} from "./types/GameDataTypes";
import type {RolesType} from "./types/RolesType";
import type {StepsTypes} from "./types/StepsTypes";
import type {
    AppDispatch, AppStore, RootState
} from "@store/store";

export {
    AppDispatch,
    AppStore,
    CompositionTypes,
    GameDataTypes,
    RolesType,
    RootState,
    StepsTypes
};

// =============================================================================
