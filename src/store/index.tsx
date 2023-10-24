import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import { charactersReducer } from "./characters";
import { vehiclesReducer } from "./vehicles";
import { planetsReducer } from "./planets";

const rootReducer = combineReducers({
  characters: charactersReducer,
  planets: planetsReducer,
  vehicles: vehiclesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type DispatchType = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export * from "./characters";
export * from "./planets";
export * from "./vehicles";
