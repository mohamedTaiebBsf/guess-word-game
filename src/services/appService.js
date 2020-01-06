const words_list = [
    "armoire",
    "boucle",
    "buisson",
    "bureau",
    "chaise",
    "carton",
    "couteau",
    "fichier",
    "garage",
    "glace",
    "journal",
    "kiwi",
    "lampe",
    "liste",
    "montagne",
    "remise",
    "sandale",
    "taxi",
    "vampire",
    "volant"
];

export function getListOfWords() {
    return words_list;
}

export function generateAlphabets() {
    let start = "a".charCodeAt(0);
    const last = "z".charCodeAt(0);
    const alphabets = [];

    while (start <= last) {
        alphabets.push(String.fromCharCode(start));
        start++;
    }

    return alphabets;
}

export function handleBoardClick(state, action) {
    let status = "win";
    let attempt = state.attempt;
    let score = state.score;
    let usedLetters = [].concat(state.usedLetters);

    // verify if the pressed letter is already used, then do nothing.
    if (usedLetters.includes(action.letter)) {
        return state;
    }
    // if the pressed letter isn't used yet,
    // add the letter to the usedLetters array
    usedLetters.push(action.letter);
    // Verify if the letter exists in the the searched word
    if (!state.wordToSearch.includes(action.letter)) {
        // if not increase the attempt, the your game life is descreased
        attempt = state.attempt + 1;
        // decrease the score by 1
        score = state.score > 0 ? state.score - 1 : 0;
    } else {
        // if yes increase the code by 2
        score = state.score + 2;
    }
    // loop the searched word to verify if all letters are used
    for (let i = 0; i < state.wordToSearch.length; i++) {
        if (!usedLetters.includes(state.wordToSearch[i])) {
            // if one unused letter is found, set the status to empty string to say that the game is still running
            status = "";
            break;
        }
    }
    // verify if your life game is zero, the set the game status to "lost"
    if (attempt === state.maxAttempt) status = "lost";

    return {
        ...state,
        usedLetters,
        status,
        attempt,
        score
    };
}
