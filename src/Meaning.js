import React from "react";
import './App.css';

export default function Meaning(props) {
    console.log("Meaning prop:", props.meaning);
    
    if (!props.meaning) return null;

    const meaning = props.meaning;
    
    return (
        <div className="Meaning">
            {meaning.partOfSpeech && (
                <h3>{meaning.partOfSpeech}</h3>
            )}
            
            {meaning.definitions && meaning.definitions.length > 0 && (
                <div>
                    <h4>Definitions:</h4>
                    {meaning.definitions.map((def, idx) => (
                        <div key={idx} style={{marginBottom: "15px"}}>
                            <p style={{marginBottom: "5px"}}>
                                <strong>{idx + 1}. {def.definition}</strong>
                            </p>
                            {def.example && (
                                <p style={{fontStyle: "italic", color: "#666", marginBottom: "5px"}}>
                                    Example: "{def.example}"
                                </p>
                            )}
                            {def.synonyms && def.synonyms.length > 0 && (
                                <p style={{color: "#555", fontSize: "14px"}}>
                                    <strong>Synonyms:</strong> {def.synonyms.join(", ")}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            )}

            {meaning.synonyms && meaning.synonyms.length > 0 && (
                <p style={{marginTop: "10px"}}>
                    <strong>Related Synonyms:</strong> {meaning.synonyms.join(", ")}
                </p>
            )}

            {meaning.antonyms && meaning.antonyms.length > 0 && (
                <p style={{marginTop: "10px"}}>
                    <strong>Antonyms:</strong> {meaning.antonyms.join(", ")}
                </p>
            )}
        </div>
    );
}