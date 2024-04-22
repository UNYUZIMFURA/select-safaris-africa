import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type questionId = {
    state: number
}

const initialState = {
    value: {
        state: 0,
    } as questionId,
}

export const toggler = createSlice({
    name: "updateFAQQuestion",
    initialState,
    reducers: {
        updateFAQQuestion: (state, action: PayloadAction<number>) => {
            state.value.state = action.payload
        },
    },
})

export const { updateFAQQuestion } = toggler.actions
export default toggler.reducer
