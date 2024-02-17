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
    AppOptions,
    GamePage,
    HomePage,
    RolesExplaination,
    RulesDescription
};

// =============================================================================
// ? Parts Components

// =============================================================================
// ? Specials Components

import {AppRouter} from "@specials/AppRouter/AppRouter";
import {DevInfos} from "@specials/DevInfos/DevInfos";
import {DevOptions} from "@specials/DevOptions/DevOptions";

export {
    AppRouter,
    DevInfos,
    DevOptions
};

// =============================================================================
// ? Svg/Icon Components

// =============================================================================
// ? Utilities Functions 

import {errorSaver} from "@utilities/errorSaver";

export {errorSaver};

// =============================================================================
// ? Store and slice

import {setupStore} from "@store/store";
import {useAppDispatch, useAppSelector} from "@store/hooks";
import {renderWithProviders} from "@tests/wrapperProvider";

export {
    renderWithProviders,
    setupStore,
    useAppDispatch,
    useAppSelector
};

// =============================================================================
// ? Types and interfaces

import type {
    AppDispatch, AppStore, RootState
} from "@store/store";

export {
    AppDispatch, AppStore, RootState
};

// =============================================================================
