import { createSlice } from "@reduxjs/toolkit"

type StateType = {
    state: boolean
}

const initialState = {
    value: {
        state: false,
    } as StateType,
}

export const toggleSidebarVisibility = createSlice({
    name: "Sidebar Visibility",
    initialState,
    reducers: {
        showSidebar: (_) => {
            return {
                value: {
                    state: true,
                },
            }
        },
        hideSidebar: (_) => {
            return {
                value: {
                    state: false,
                },
            }
        },
    },
})

export const { showSidebar, hideSidebar } = toggleSidebarVisibility.actions
export default toggleSidebarVisibility.reducer
