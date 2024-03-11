import {
  combineReducers,
  configureStore,
  type PreloadedState,
} from "@reduxjs/toolkit";
import { darkModeReducer } from "./Slice/darkmodeSlice";

const rootReducer = combineReducers({
  darkmode: darkModeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),

    preloadedState,
  });
}

export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

export default setupStore();
