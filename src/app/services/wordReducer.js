import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  wordList: [
    {
      word: "단어",
      byung: "병음",
      means: "의미",
      example: "예문",
      translation: "해석",
      completed: false,
    },
  ],
};

export const wordSlice = createSlice({
  name: "wordSlice",
  initialState,
  reducers: {
    addWord: (state, action) => {
      state.wordList.push(action.payload);
      console.log(current(state.bucketlist));
    },
    //   deleteBucket: (state, action) => {
    //     const newBucketList = current(state.bucketlist).filter((item, index) => {
    //       return action.payload !== item["text"];
    //     });
    //     state.bucketlist = newBucketList;
    //   },
    //   updateBucket: (state, action) => {
    //     const new_bucket_list = current(state.bucketlist).map((item, index) => {
    //       if (item["text"] === action.payload) {
    //         return { ...item, completed: true };
    //       } else {
    //         return item;
    //       }
    //     });
    //     return { bucketlist: new_bucket_list };
    //   },
  },
});

export const { addWord } = wordSlice.actions;
export default wordSlice.reducer;
