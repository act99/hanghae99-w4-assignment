import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  return await getDocs(collection(db, "wordList"));
});

const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    // [fetchData.pending]: (state) => {
    //   state.loading = true;
    //   state.data = fetchData;
    //   state.error = "";
    // },
    // [fetchData.fulfilled]: (state, action) => {},
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data.push(action.payload);
    });
  },
});

export default dataSlice.reducer;
