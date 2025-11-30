import React from "react";
import Meaning from "./Meaning";

export default function Results({ results }) {
  if (!results) return null;

  return (
    <div className="Results">
      <h2>{results.word}</h2>
      {results.phonetic && <p>{results.phonetic}</p>}

      {results.meanings && results.meanings.length > 0 && (
        <div>
          {results.meanings.map((meaning, index) => (
            <Meaning key={index} meaning={meaning} />
          ))}
        </div>
      )}
    </div>
  );
}