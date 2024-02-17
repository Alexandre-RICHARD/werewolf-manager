// =============================================================================
// ? Main Component

import {App} from "@components/App";

export {App};

// =============================================================================
// ? Pages Components

// =============================================================================
// ? Parts Components

// =============================================================================
// ? Specials Components

import {AppRouter} from "@specials/AppRouter/AppRouter";

export {AppRouter};

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
