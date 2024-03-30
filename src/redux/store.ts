import { configureStore } from "@reduxjs/toolkit";
import togglerReducer from "./features/togglerSlice";
import visibilityReducer from "./features/bookingVisibilitySlice";
import activeQuestionIdReducer from "./features/updatedActiveQuestionId";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    togglerReducer,
    visibilityReducer,
    activeQuestionIdReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
