import React from "react";

export default function Meaning(props) {
    console.log(props.meaning);
    return (
        <div className="Meaning">
            <h3>{props.meaning.partOfSpeech}</h3>
            <p>
                <strong>{props.meaning.definition}</strong>
            </p>
            {props.meaning.example && (
                <p>
                    <em>Example: "{props.meaning.example}"</em>
                </p>
            )}
            {props.meaning.synonyms && props.meaning.synonyms.length > 0 && (
                <p>
                    <strong>Synonyms:</strong> {props.meaning.synonyms.join(", ")}
                </p>
            )}
        </div>
    );
}