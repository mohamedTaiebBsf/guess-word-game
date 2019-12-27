import React from "react";

const Result = ({status}) => {
    return (
        status && (
            <div className="result">
                {
                    status === "win" ? (
                        <span style={{color: "green"}}>🎉 You Win 🎉</span>
                    ) : (
                        <span style={{color: "#086600"}}>😞 You Lost 😞</span>
                    )
                }
            </div>
        )
    );
};

export default Result;
