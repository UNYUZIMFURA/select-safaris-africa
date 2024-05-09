import { configureStore } from "@reduxjs/toolkit"
import bookingsTogglerReducer from "./features/bookingsToggler"
import bookingPopupReducer from "./features/bookingPopup"
import sidebarVisibilityReducer from "./features/sidebar"
import FAQQuestionReducer from "./features/FAQQuestion"
import DestinationsNavReducer from "./features/destinationsNav"
import LanguagesReducer from "./features/languages"
import { TypedUseSelectorHook, useSelector } from "react-redux"

export const store = configureStore({
    reducer: {
        bookingsTogglerReducer,
        bookingPopupReducer,
        sidebarVisibilityReducer,
        FAQQuestionReducer,
        DestinationsNavReducer,
        LanguagesReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
