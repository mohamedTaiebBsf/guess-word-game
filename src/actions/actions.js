import {START_GAME, HANDLE_LETTER_CLICK} from './types';

export const start = () => {
    return {
        type: START_GAME
    };
};

export const handleLetterClick = (letter) => {
    return {
        type: HANDLE_LETTER_CLICK,
        letter
    }
};