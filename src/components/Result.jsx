import React from "react";
import {connect} from 'react-redux';

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

const mapStateToProps = state => {
    return {
        status: state.red.status
    };
};

export default connect(mapStateToProps)(Result);
