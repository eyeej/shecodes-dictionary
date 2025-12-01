import React from "react";
import "./Meaning.css";

export default function Meaning({ meaning }) {
  if (!meaning) return null;

  return (
    <div className="Meaning">
      {meaning.partOfSpeech && (
        <h3 className="part-of-speech">{meaning.partOfSpeech}</h3>
      )}

      {meaning.definitions && meaning.definitions.length > 0 && (
        <div className="definitions">
          {meaning.definitions.map((def, idx) => (
            <div key={idx} className="definition-item">
              <p>
                <strong>{idx + 1}. {def.definition}</strong>
              </p>
              {def.example && (
                <p className="example">
                  <em>Example: "{def.example}"</em>
                </p>
              )}
              {def.synonyms && def.synonyms.length > 0 && (
                <p className="synonyms">
                  <strong>Synonyms:</strong> {def.synonyms.join(", ")}
                </p>
              )}
              {def.antonyms && def.antonyms.length > 0 && (
                <p className="antonyms">
                  <strong>Antonyms:</strong> {def.antonyms.join(", ")}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {meaning.synonyms && meaning.synonyms.length > 0 && (
        <p className="related-synonyms">
          <strong>Related Synonyms:</strong> {meaning.synonyms.join(", ")}
        </p>
      )}

      {meaning.antonyms && meaning.antonyms.length > 0 && (
        <p className="related-antonyms">
          <strong>Antonyms:</strong> {meaning.antonyms.join(", ")}
        </p>
      )}
    </div>
  );
}