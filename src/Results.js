import React from "react";
import Meaning from "./Meaning.js";
import Phonetics from "./Phonetics.js";
import './App.css';

export default function Results(props) {
    console.log(JSON.stringify(props.results, null, 2));
    if (props.results) {
        return (
            <div className="Result">
                <h2>{props.results.word}</h2>
                <p>{props.results.definition}</p>
                {props.results.meanings && props.results.meanings.map(function(meaning, index) {
                    return (
                        <div key={index}>
                            <Meaning meaning={meaning} />
                        </div>
                    );
                })}
                {props.results.Phonetics && props.results.Phonetics.map(function(phonetic, index) {
                    return (
                        <div key={index}>
                            <Phonetics phonetics={phonetic} />
                        </div>
                    );
                })}
            </div>
        );
    } else {
        return null;
    }
}