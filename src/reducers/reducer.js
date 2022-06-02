import {
  generateAlphabets,
  getListOfWords,
  handleBoardClick,
} from "../services/appService";
import { sample } from "lodash";
import { START_GAME, HANDLE_LETTER_CLICK } from "../actions/types";

const initialState = {
  wordToSearch: "",
  maxAttempt: 10, // max attempt
  status: "", // "": still in game, "win": winning the game, "lost": lost the game
  alphabets: null,
  usedLetters: null,
  attempt: null,
  score: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        alphabets: generateAlphabets(),
        wordToSearch: sample(getListOfWords()),
        usedLetters: [],
        status: "",
        attempt: 0,
        score: 0,
      };

    case HANDLE_LETTER_CLICK:
      return handleBoardClick(state, action);

    default:
      return state;
  }
};

export default reducer;
