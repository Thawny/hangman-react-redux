import * as types from '../constants/ActionsTypes';

export const startNewGame = () => ({
    type: types.START_NEW_GAME
})

export const winGame = (payload = false) => ({
    type: types.START_NEW_GAME,
    payload: payload
})

export const clickLetter = (payload) => ({
    type: types.CLICK_LETTER,
    payload: payload
})
