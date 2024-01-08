// =============================================================================
// ? Components
import App from "@components/App";
import CreateGame from "@page/CreateGame/CreateGame";
import ProfilPage from "@page/ProfilPage/ProfilPage";
import RolesDescription from "@page/RolesDescription/RolesDescription";
import RulesDescription from "@page/RulesDescription/RulesDescription";
import StartingPage from "@page/StartingPage/StartingPage";

import Slider from "@parts/Slider/Slider";

export {
    App,
    CreateGame,
    ProfilPage,
    RolesDescription,
    RulesDescription,
    StartingPage,
    Slider
};

// =============================================================================

// ? Functions middlewares

// =============================================================================

// ? Store and slice
import {setupStore} from "@store/store";
import {useAppDispatch, useAppSelector} from "@store/hooks";
import {gameActions, gameState} from "@slices/gameSlice";
import {renderWithProviders} from "@tests/wrapperProvider";

export {
    gameActions,
    gameState,
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
