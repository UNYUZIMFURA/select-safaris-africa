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
        showBookingModal: (_) => {
            return {
                value: {
                    state: true,
                },
            }
        },
        hideBookingModal: (_) => {
            return {
                value: {
                    state: false,
                },
            }
        },
    },
})

export const { showBookingModal, hideBookingModal } = toggleVisibility.actions
export default toggleVisibility.reducer
