// widgets.js

// Actions
const CREATE = "words/CREATE";

// Action Creators
export function createWords(word) {
  return { type: CREATE, word: word };
}

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
    // do reducer stuff
    case "words/CREATE": {
      const new_wordList = [...state.wordList, action.word];
      return { wordList: new_wordList };
    }
    default:
      return state;
  }
}

// Action Creators

// side effects, only as applicable
// e.g. thunks, epics, etc
