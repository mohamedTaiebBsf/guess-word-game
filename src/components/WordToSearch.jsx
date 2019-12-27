import React from "react";

const WordToSearch = ({word, usedLetters, status}) => {
    return (
        <div className="word">
            {
                word.split("").map((ch, i) => {
                    return (
                        <span key={i}>
                            {usedLetters.includes(ch) ? (
                                <span className={status === "win" ? "win-style" : ""}>
                                    {ch}
                                </span>
                            ) : status !== "lost" ? (
                                "_"
                            ) : (
                                <span className="lost-style">{ch}</span>
                            )}
                        </span>
                    );
                })
            }
        </div>
    );
};

export default WordToSearch;
