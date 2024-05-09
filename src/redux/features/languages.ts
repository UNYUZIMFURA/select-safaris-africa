import { createSlice } from "@reduxjs/toolkit"

type StateType = {
    state: boolean
}

const initialState = {
    value: {
        state: false,
    } as StateType,
}

export const languagesVisibility = createSlice({
    name: "Languages",
    initialState,
    reducers: {
        showLanguages: (_) => {
            return {
                value: {
                    state: true,
                },
            }
        },
        hideLanguages: (_) => {
            return {
                value: {
                    state: false,
                },
            }
        },
    },
})

export const { showLanguages, hideLanguages } = languagesVisibility.actions
export default languagesVisibility.reducer
