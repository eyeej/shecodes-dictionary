import React from "react";

export default function Results(props) {
    if (props.results) {
        return (
            <div className="Result">
                <h2>{props.results.word}</h2>
                <p>{props.results.definition}</p>
            </div>
        );
    } else {
        return null;
    }
}