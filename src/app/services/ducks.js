import { db } from "../../firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
// Actions
const CREATE = "words/CREATE";
const DELETE = "words/DELETE";
const LOAD = "words/LOAD";
const UPDATE = "words/UPDATE";
const LOAD_S = "word/LOAD";
// Action Creators
export function createWords(word) {
  return { type: CREATE, word: word };
}

export function deleteWords(index) {
  return { type: DELETE, index: index };
}
export function updateWords(word) {
  return { type: UPDATE, word: word };
}

export function loadWords(words) {
  return { type: LOAD, words: words };
}

export function justWord(word) {
  return { type: LOAD_S, word: word };
}

// middlewares
export const loadWordsFB = () => {
  return async function (dispatch) {
    const words_data = await getDocs(collection(db, "wordList"));
    let word_list = [];
    words_data.forEach((doc) => {
      word_list.push({ id: doc.id, ...doc.data() });
    });
    dispatch(loadWords(word_list));
  };
};

export const justwordFB = (word_id) => {
  return async function (dispatch) {
    const word_data = await getDoc(db, "wordList", word_id);
    dispatch(justWord(word_data));
  };
};

export const addWordFB = (word) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "wordList"), word);
    const _word = await getDoc(docRef);
    const word_data = { id: _word.id, ..._word.data() };
    // dispatch(createWords(word_data));
  };
};

export const updateWordFB = (word_id, dict) => {
  return async function (dispatch, getState) {
    const docRef = doc(db, "wordList", word_id);
    await updateDoc(docRef, dict);
    const _word_list = getState().words["wordList"];
    const word_index = _word_list.findIndex((item) => {
      return item.id === word_id;
    });
    dispatch(updateWords(word_index));
  };
};

export const deleteWordFB = (word_id) => {
  return async function (dispatch, getState) {
    if (!word_id) {
      window.alert("올바르지 않은 경로입니다.");
      return;
    }
    const docRef = doc(db, "wordList", word_id);
    await deleteDoc(docRef);
    const _word_list = getState().words["wordList"];
    const word_index = _word_list.findIndex((item) => {
      return item.id === word_id;
    });
    dispatch(deleteWords(word_index));
  };
};

const initialState = {
  wordList: [
    {
      word: "안녕",
      byung: "ㅎㅇ",
      means: "ㅎㅇ",
      example: "ㅎㅇ",
      translation: "ㅎㅇ",
      completed: false,
    },
  ],
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "words/LOAD": {
      return { wordList: action.words };
    }
    case "words/CREATE": {
      const new_wordList = [...state.wordList, action.word];
      return { wordList: new_wordList };
    }
    case "words/DELETE": {
      const new_wordList = state.wordList.filter((item, index) => {
        return parseInt(action.index) !== index;
      });
      return { wordList: new_wordList };
    }
    case "words/UPDATE": {
      const new_word = state.wordList.filter((item, index) => {
        return parseInt(action.index) !== index;
      });
      return { wordList: new_word };
    }
    default:
      return state;
  }
}

// Action Creators

// side effects, only as applicable
// e.g. thunks, epics, etc
