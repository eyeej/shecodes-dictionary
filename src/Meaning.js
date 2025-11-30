import React from "react";
import './App.css';

export default function Meaning(props) {
    console.log("Meaning:", props.meaning);
    
    if (!props.meaning) return null;
    
    const definitions = props.meaning.definitions || [];
    
    return (
        <div className="Meaning">
            <h3>{props.meaning.partOfSpeech}</h3>
            <h4>Definitions:</h4>
            {definitions.map((def, index) => (
                <div key={index} className="definition">
                    <p><strong>{def.definition}</strong></p>
                    {def.example && (
                        <p><em>Example: "{def.example}"</em></p>
                    )}
                    {def.synonyms && def.synonyms.length > 0 && (
                        <p><strong>Synonyms:</strong> {def.synonyms.join(", ")}</p>
                    )}
                </div>
            ))}
            {props.meaning.synonyms && props.meaning.synonyms.length > 0 && (
                <p><strong>Related Synonyms:</strong> {props.meaning.synonyms.join(", ")}</p>
            )}
            {props.meaning.antonyms && props.meaning.antonyms.length > 0 && (
                <p><strong>Antonyms:</strong> {props.meaning.antonyms.join(", ")}</p>
            )}
        </div>
    );
}