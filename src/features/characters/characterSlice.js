import { createSlice } from "@reduxjs/toolkit"; // 1

// 2
const initialState = {
  value: [],
};

// 3 Add the password slice
export const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    addCharacter: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { addCharacter } = characterSlice.actions;
export default characterSlice.reducer;
