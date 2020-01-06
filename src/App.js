import React, {Component} from "react";
import {connect} from 'react-redux';
import {start} from './actions/actions';
import WordToSearch from "./components/WordToSearch";
import KeyBoard from "./components/keyBoard";
import Attempt from "./components/Attempt";
import Result from "./components/Result";

class App extends Component {

    componentDidMount() {
        // start the game when you press the Enter key
        window.addEventListener("keypress", e => {
            if (e.keyCode === 13) this.props.startGame();
        });
    }

    render() {
        return (
            <div className="app">
                <div className="content">
                    <h1>Hangman Game</h1>
                    {
                        this.props.wordToSearch && (
                            <React.Fragment>
                                <div className="score">Score: {this.props.score}</div>
                                <Attempt/>
                                <WordToSearch/>
                                {!this.props.status && (
                                    <KeyBoard/>
                                )}
                            </React.Fragment>
                        )
                    }

                    <Result/>

                    {
                        (
                            ["win", "lost"].includes(this.props.status) ||
                            !this.props.wordToSearch) && (
                            <button className="start-btn" onClick={this.props.startGame}>
                                Start Game
                            </button>
                        )
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        wordToSearch: state.red.wordToSearch,
        status: state.red.status,
        score: state.red.score
    };
};

const mapDispatchToProps = dispatch => {
    return {
        startGame: () => dispatch(start())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
