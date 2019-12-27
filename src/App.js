import React, {Component} from "react";
import {getListOfWords, generateAlphabets} from "./services/appService";
import {sample} from "lodash";
import WordToSearch from "./components/WordToSearch";
import KeyBoard from "./components/keyBoard";
import Attempt from "./components/Attempt";
import Result from "./components/Result";

class App extends Component {
    state = {
        wordToSearch: "",
        maxAttempt: 10, // max attempt
        status: "", // "": still in game, "win": winning the game, "lost": lost the game
    };

    componentDidMount() {
        // start the game when you press the Enter key
        window.addEventListener("keypress", e => {
            if (e.keyCode === 13) this.startGame();
        });
    }

    handleLetterClick = letter => {
        const usedLetters = [...this.state.usedLetters];
        let status = "win";
        let attempt = this.state.attempt;
        let score = this.state.score;
        // verify if the pressed letter is already used, then do nothing.
        if (usedLetters.includes(letter)) {
            return;
        }
        // if the pressed letter isn't used yet,
        // add the letter to the usedLetters array
        usedLetters.push(letter);
        // Verify if the letter exists in the the searched word
        if (!this.state.wordToSearch.includes(letter)) {
            // if not increase the attempt, the your game life is descreased
            attempt = this.state.attempt + 1;
            // decrease the score by 1
            score = this.state.score > 0 ? this.state.score - 1 : 0;
        } else {
            // if yes increase the code by 2
            score = this.state.score + 2;
        }
        // loop the searched word to verify if all letters are used
        for (let i = 0; i < this.state.wordToSearch.length; i++) {
            if (!usedLetters.includes(this.state.wordToSearch[i])) {
                // if one unused letter is found, set the status to empty string to say that the game is still running
                status = "";
                break;
            }
        }
        // verify if your life game is zero, the set the game status to "lost"
        if (attempt === this.state.maxAttempt) status = "lost";

        this.setState({usedLetters, status, attempt, score});
    };

    startGame = () => {
        this.setState({
            alphabets: generateAlphabets(),
            wordToSearch: sample(getListOfWords()),
            usedLetters: [],
            status: "",
            attempt: 0,
            score: 0
        });
    };

    render() {
        return (
            <div className="app">
                <div className="content">
                    <h1>Hangman Game</h1>
                    {
                        this.state.wordToSearch && (
                            <React.Fragment>
                                <div className="score">Score: {this.state.score}</div>
                                <Attempt attempt={this.state.attempt} maxAttempt={this.state.maxAttempt}/>
                                <WordToSearch
                                    word={this.state.wordToSearch}
                                    usedLetters={this.state.usedLetters}
                                    status={this.state.status}
                                />
                                {!this.state.status && (
                                    <KeyBoard
                                        alphabets={this.state.alphabets}
                                        word={this.state.wordToSearch}
                                        usedLetters={this.state.usedLetters}
                                        letterClick={this.handleLetterClick}
                                    />
                                )}
                            </React.Fragment>
                        )
                    }

                    <Result status={this.state.status}/>

                    {
                        (
                            ["win", "lost"].includes(this.state.status) ||
                            !this.state.wordToSearch) && (
                            <button className="start-btn" onClick={this.startGame}>
                                Start Game
                            </button>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default App;
