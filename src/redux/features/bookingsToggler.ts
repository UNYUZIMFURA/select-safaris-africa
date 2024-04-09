import { createSlice } from "@reduxjs/toolkit";

type ToggleType = {
    state: string
};

const initialState = {
  value: {
    state: "bookings",
  } as ToggleType,
} 

export const toggler = createSlice({
  name: "toggler",
  initialState,
  reducers: {
    toggleToBookings: (_) => {
      return {
          value: {
            state: "bookings"
        },
      };
    },
    toggleToSettings: (_) => {
      return {
          value: {
            state: "settings"
        },
      };
    },
  },
});

export const { toggleToBookings, toggleToSettings } = toggler.actions
export default toggler.reducer