import React from "react";

const Attempt = ({attempt, maxAttempt}) => {
    return (
        <h4>
            You have ({maxAttempt - attempt}) attempt
            {maxAttempt - attempt > 1 ? "s" : ""} left
        </h4>
    );
};

export default Attempt;
