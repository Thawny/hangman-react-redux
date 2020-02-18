import {WORDS, pickRandomWord} from "../constants/Words";
import {START_NEW_GAME, CLICK_LETTER} from "../constants/ActionsTypes";

const initialState = {
    word: pickRandomWord(),
    keyboard: makeKeyboard(),
    usedLetters: new Set(),
    turnCounter: 0,
    gameIsWon: false
};

function makeKeyboard() {
    const keyboard = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    var ret = [];
    for (let k of keyboard) {
      ret.push({
        placeholder: k,
        played: false
      })
    }
  return ret;
}

function rootReducer(state = initialState, action) {
    if (action.type === START_NEW_GAME) {
        const newState = {
            word: pickRandomWord(),
            keyboard: makeKeyboard(),
            usedLetters: new Set(),
            turnCounter: 0,
            gameIsWon: false
        }
        return newState;
    }
    if (action.type === CLICK_LETTER) {
        const updatedKeyboard = state.keyboard.map((key) => {
            if (key.placeholder === action.payload) {
                return {
                    placeholder: key.placeholder,
                    played: true
                }
            } else {
                return key
            }
        });
        const updatedUsedLetters = new Set(Array.from(state.usedLetters)).add(action.payload);
        // check all state.word are in updatedUsedLetters to see if the game is won
        let updatedGamesIsWon = state.gameIsWon;
        for (let i = 0; i<state.word.length; i++) {
            if (updatedUsedLetters.has(state.word[i])) {
                if (i !== state.word.length - 1) {
                    continue;
                }
            } else {
                break;
            }
            updatedGamesIsWon = true;
        }
        const updatedTurnCounter = state.turnCounter + 1;
        return Object.assign({}, state, {
            keyboard: updatedKeyboard,
            usedLetters: updatedUsedLetters,
            gameIsWon: updatedGamesIsWon
        })
    }
    return state;
};

export default rootReducer;
