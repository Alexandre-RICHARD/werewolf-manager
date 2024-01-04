// =============================================================================
// ? Components
import App from "@components/App";
import CreateGame from "@components/CreateGame/CreateGame";
import ProfilPage from "@components/ProfilPage/ProfilPage";
import RolesDescription from "@components/RolesDescription/RolesDescription";
import RulesDescription from "@components/RulesDescription/RulesDescription";
import StartingPage from "@components/StartingPage/StartingPage";

export {
    App,
    CreateGame,
    ProfilPage,
    RolesDescription,
    RulesDescription,
    StartingPage
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
