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
    removeCharacter: (state, action) => {
      const characterID = action.payload;
      state.value.splice(characterID, 1);
    },
  },
});

export const { addCharacter, removeCharacter } = characterSlice.actions;
export default characterSlice.reducer;
