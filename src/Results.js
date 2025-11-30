import React from "react";

export default function Results(props) {
    console.log("Results received:", props.results);
    
    if (!props.results) {
        return <p>No results</p>;
    }

    return (
        <div className="Result" style={{padding: "20px", border: "2px solid blue"}}>
            <h2 style={{color: "black"}}>{props.results.word}</h2>
            <p style={{color: "black"}}>Phonetic: {props.results.phonetic}</p>
            <p style={{color: "black"}}>Meanings: {props.results.meanings ? props.results.meanings.length : 0}</p>
        </div>
    );
}