import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type questionId = {
  state: number;
};

const initialState = {
  value: {
    state: 0,
  } as questionId,
};

export const toggler = createSlice({
  name: "updateActiveQuestionId",
  initialState,
  reducers: {
    updateActiveQuestionId: (state, action: PayloadAction<number>) => {
      state.value.state = action.payload;
    }
  }
})

export const { updateActiveQuestionId } = toggler.actions;
export default toggler.reducer;
