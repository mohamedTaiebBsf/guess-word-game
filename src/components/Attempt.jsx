import React from "react";
import {connect} from 'react-redux';

const Attempt = ({attempt, maxAttempt}) => {
    return (
        <h4>
            You have ({maxAttempt - attempt}) attempt
            {maxAttempt - attempt > 1 ? "s" : ""} left
        </h4>
    );
};

const mapStateToProps = state => {
    return {
        maxAttempt: state.red.maxAttempt,
        attempt: state.red.attempt
    };
};

export default connect(mapStateToProps)(Attempt);
