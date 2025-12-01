import React from "react";
import Meaning from "./Meaning.js";
import "./Results.css";

export default function Results({ results }) {
  if (!results || !results.meanings) return null;

  return (
    <div className="Results">
      <h2 className="word">{results.word}</h2>
      {results.phonetic && <p className="phonetic">/{results.phonetic}/</p>}

      {results.meanings.map((meaning, index) => (
        <Meaning key={index} meaning={meaning} />
      ))}
    </div>
  );
}