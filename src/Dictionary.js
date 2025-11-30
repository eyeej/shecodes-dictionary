import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function search(event) {
    event.preventDefault();
    console.log("Searching for:", keyword);


let apiKey = "t9e9139a19b801fbcfa020d17a47ob1f";
let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios
      .get(apiUrl)
      .then((response) => {
        console.log("API Success! Setting results to:", response.data);
        setResults(response.data);
      })
      .catch((err) => {
        console.log("API Error:", err);
        setResults(null);
      });
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          onChange={(e) => setKeyword(e.target.value)}
          value={keyword}
          placeholder="Enter a word..."
        />
        <button type="submit">Search</button>
      </form>

      {results ? <Results results={results} /> : null}
    </div>
  );
}