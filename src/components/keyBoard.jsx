import React, { Component } from "react";
import { connect } from "react-redux";
import { handleLetterClick } from "../actions/actions";

class KeyBoard extends Component {
  componentDidMount() {
    window.addEventListener("keypress", (e) => {
      if (e.keyCode !== 13) this.props.letterClick(e.key);
    });
  }

  render() {
    const { alphabets, usedLetters, word, letterClick } = this.props;

    return (
      <div className="keyboard">
        {alphabets.map((ch, index) => (
          <button
            key={index}
            className={
              usedLetters.includes(ch)
                ? word.includes(ch)
                  ? "used-success"
                  : "used-fail"
                : ""
            }
            onClick={() => {
              letterClick(ch);
            }}
          >
            {ch}
          </button>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    alphabets: state.red.alphabets,
    word: state.red.wordToSearch,
    usedLetters: state.red.usedLetters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    letterClick: (letter) => dispatch(handleLetterClick(letter)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(KeyBoard);
