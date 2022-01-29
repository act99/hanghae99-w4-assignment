import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  wordList: [
    {
      word: "",
      byung: "",
      means: "",
      example: "",
      translation: "",
      completed: false,
    },
  ],
};

export const wordSlice = createSlice({
  name: "wordSlice",
  initialState,
  reducers: {
    addWord: (state, action) => {
      state.wordList.push({ ...action.payload, completed: false });
    },
    getWord: (state, action) => {
      state.wordList = action.payload;
    },
  },
  extraReducers: {},
});

export const { addWord, getWord } = wordSlice.actions;
export default wordSlice.reducer;
