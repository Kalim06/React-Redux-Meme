import { combineReducers } from "redux";
import { RECIEVE_MEMES, NEW_MEME } from "../actions";

function memes(state = [], action) {
  switch (action.type) {
    case RECIEVE_MEMES:
      return action.memes;
    default:
      return state;
  }
}

function myMeme(state = [], action) {
  switch (action.type) {
    case NEW_MEME:
      state = [...state, action.meme];
      return state;
    default:
      return state;
  }
}

const rootReducer = combineReducers({ memes, myMeme });
export default rootReducer;
