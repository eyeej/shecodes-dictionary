import React from "react";
import './App.css';

export default function Meaning(props) {
    if (!props.meaning) {
        console.log("No meaning prop!");
        return null;
    }

    const meaning = props.meaning;
    console.log("Rendering meaning:", meaning);

    return (
        <div className="Meaning" style={{marginTop: "20px", padding: "15px", backgroundColor: "#f9f9f9", borderLeft: "4px solid #007bff"}}>
            {meaning.partOfSpeech && (
                <h3 style={{color: "#007bff", margin: "0 0 15px 0"}}>
                    {meaning.partOfSpeech}
                </h3>
            )}
            
            {meaning.definitions && meaning.definitions.length > 0 && (
                <div>
                    <h4 style={{color: "#555", marginTop: "0"}}>Definitions:</h4>
                    {meaning.definitions.map((def, idx) => (
                        <div key={idx} style={{marginBottom: "15px", paddingBottom: "15px", borderBottom: "1px solid #ddd"}}>
                            <p style={{margin: "0 0 5px 0", color: "#333"}}>
                                <strong>{idx + 1}. {def.definition}</strong>
                            </p>
                            {def.example && (
                                <p style={{fontStyle: "italic", color: "#666", margin: "5px 0"}}>
                                    <em>Example: "{def.example}"</em>
                                </p>
                            )}
                            {def.synonyms && def.synonyms.length > 0 && (
                                <p style={{color: "#555", fontSize: "14px", margin: "5px 0"}}>
                                    <strong>Synonyms:</strong> {def.synonyms.join(", ")}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            )}

            {meaning.synonyms && meaning.synonyms.length > 0 && (
                <p style={{marginTop: "10px", color: "#555"}}>
                    <strong>Related Synonyms:</strong> {meaning.synonyms.join(", ")}
                </p>
            )}

            {meaning.antonyms && meaning.antonyms.length > 0 && (
                <p style={{marginTop: "10px", color: "#555"}}>
                    <strong>Antonyms:</strong> {meaning.antonyms.join(", ")}
                </p>
            )}
        </div>
    );
}