import { combineReducers, legacy_createStore } from "redux";
import {reducer as mobileReducer} from "./MobileHooks/reducer";
import {reducer as dealReducer} from "./HomeHooks/reducer";
import {reducer as cartReducer} from "./CartHooks/reducer";

const rootReducer = combineReducers({mobileReducer, dealReducer, cartReducer});

export const store = legacy_createStore(rootReducer);