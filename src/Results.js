import React from "react";
import Meaning from "./Meaning.js";
import Phonetics from "./Phonetics.js";
import './App.css';

export default function Results(props) {
    console.log("Results:", JSON.stringify(props.results, null, 2));
    
    if (props.results) {
        return (
            <div className="Result">
                <h2>{props.results.word}</h2>
                {props.results.phonetic && (
                    <p className="phonetic">{props.results.phonetic}</p>
                )}
                {props.results.meanings && props.results.meanings.map(function(meaning, index) {
                    return (
                        <div key={index}>
                            <Meaning meaning={meaning} />
                        </div>
                    );
                })}
                {props.results.phonetics && props.results.phonetics.length > 0 && (
                    <div>
                        <h3>Phonetics:</h3>
                        {props.results.phonetics.map(function(phonetic, index) {
                            return (
                                <div key={index}>
                                    <Phonetics phonetics={phonetic} />
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        );
    } else {
        return <p>No results yet. Try searching for a word!</p>;
    }
}