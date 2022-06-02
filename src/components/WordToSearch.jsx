import React from "react";
import { connect } from "react-redux";

const WordToSearch = ({ word, usedLetters, status }) => {
  return (
    <div className="word">
      {word.split("").map((ch, i) => {
        return (
          <span key={i}>
            {usedLetters.includes(ch) ? (
              <span className={status === "win" ? "win-style" : ""}>{ch}</span>
            ) : status !== "lost" ? (
              "_"
            ) : (
              <span className="lost-style">{ch}</span>
            )}
          </span>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    word: state.red.wordToSearch,
    usedLetters: state.red.usedLetters,
    status: state.red.status,
  };
};

export default connect(mapStateToProps)(WordToSearch);
