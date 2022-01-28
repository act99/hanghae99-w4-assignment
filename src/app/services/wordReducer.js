import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const fetchUserById = createAsyncThunk("words/getWords", async (thunkAPI) => {
  const response = await getDocs(collection(db, "wordList")).then((data) =>
    data.json()
  );
  return response;
});

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
  extraReducers: {},
});

export const { addWord } = wordSlice.actions;
export default wordSlice.reducer;
