import React from "react";
import './App.css';

export default function Phonetics(props) {
    console.log("Phonetics:", props.phonetics);
    
    if (!props.phonetics) return null;
    
    return (
        <div className="Phonetic">
            {props.phonetics.audio && (
                <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
                    🔊 Listen
                </a>
            )}
            <br />
            {props.phonetics.text && <p>{props.phonetics.text}</p>}
        </div>
    );
}