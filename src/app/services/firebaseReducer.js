import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const fetchUserById = createAsyncThunk("words/getWords", async (thunkAPI) => {
  const response = await getDocs(collection(db, "wordList")).then((data) =>
    data.json()
  );
  return response;
});
