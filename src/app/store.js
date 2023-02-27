import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "../features/characters/characterSlice";
import { saveState, loadState } from "./persistState";

export const store = configureStore({
  reducer: {
    characters: characterReducer,
  },
  preloadedState: loadState(),
});

store.subscribe(() => {
  saveState(store.getState());
});
