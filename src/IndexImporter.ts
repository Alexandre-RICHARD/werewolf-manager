// =============================================================================

// ? Components

import App from "@components/App";

// ? Pages

import CreateGame from "@pages/CreateGame/CreateGame";
import GameComponent from "@pages/GameComponent/GameComponent";
import ProfilPage from "@pages/ProfilPage/ProfilPage";
import RolesDescription from "@pages/RolesDescription/RolesDescription";
import RulesDescription from "@pages/RulesDescription/RulesDescription";
import StartingPage from "@pages/StartingPage/StartingPage";

// ? Parts

import CompoRolesList from "@parts/CompoRolesList/CompoRolesList";
import NewGameRules from "@parts/NewGameRules/NewGameRules";
import Slider from "@parts/Slider/Slider";

export {
    App,
    CreateGame,
    GameComponent,
    ProfilPage,
    RolesDescription,
    RulesDescription,
    StartingPage,
    CompoRolesList,
    NewGameRules,
    Slider
};

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

// ? Assets

import {rolesData} from "@assets/roles.json";
import {steps} from "@assets/step.json";

export {rolesData, steps};

// =============================================================================

// ? Types and interfaces

import type {
    AppDispatch, AppStore, RootState
} from "@store/store";

export {
    AppDispatch, AppStore, RootState
};

// =============================================================================
