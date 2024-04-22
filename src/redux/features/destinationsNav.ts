import { createSlice } from "@reduxjs/toolkit"

type StateType = {
    state: boolean
}

const initialState = {
    value: {
        state: false,
    } as StateType,
}

export const destinationsNavVisibility = createSlice({
    name: "Destinations Navigation Visibility",
    initialState,
    reducers: {
        showDestinationsNav: (_) => {
            return {
                value: {
                    state: true,
                },
            }
        },
        hideDestinationsNav: (_) => {
            return {
                value: {
                    state: false,
                },
            }
        },
    },
})

export const { showDestinationsNav, hideDestinationsNav } =
    destinationsNavVisibility.actions
export default destinationsNavVisibility.reducer
