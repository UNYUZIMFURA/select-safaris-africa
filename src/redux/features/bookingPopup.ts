import { createSlice } from "@reduxjs/toolkit"

type StateType = {
    state: boolean
}

const initialState = {
    value: {
        state: false,
    } as StateType,
}

export const toggleVisibility = createSlice({
    name: "visibility",
    initialState,
    reducers: {
        showDiv: (_) => {
            return {
                value: {
                    state: true,
                },
            }
        },
        hideDiv: (_) => {
            return {
                value: {
                    state: false,
                },
            }
        },
    },
})

export const { showDiv, hideDiv } = toggleVisibility.actions
export default toggleVisibility.reducer
