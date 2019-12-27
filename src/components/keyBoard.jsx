import React, {Component} from "react";

class KeyBoard extends Component {

    componentDidMount() {
        window.addEventListener("keypress", e => {
            if (e.keyCode !== 13) this.props.letterClick(e.key);
        });
    }

    render() {
        const {alphabets, usedLetters, word, letterClick} = this.props;

        return (
            <div className="keyboard">
                {
                    alphabets.map((ch, index) => (
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
                    ))
                }
            </div>
        );
    }
}

export default KeyBoard;
