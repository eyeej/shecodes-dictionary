import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import Photos from "./Photos.js";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function search(event) {
    event.preventDefault();
    if (!keyword.trim()) return;

    setLoading(true);
    setError(null);

    // Dictionary API
    const dictionaryKey = "t9e9139a19b801fbcfa020d17a47ob1f";
    const dictionaryUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${dictionaryKey}`;

    // Unsplash API
    const unsplashKey = process.env.REACT_APP_UNSPLASH_KEY;
    const unsplashUrl = `https://api.unsplash.com/search/photos?query=${keyword}&per_page=6&client_id=${unsplashKey}`;

    Promise.all([
      axios.get(dictionaryUrl),
      axios.get(unsplashUrl)
    ])
      .then(([dictRes, unsplashRes]) => {
        setResults(dictRes.data);
        setImages(unsplashRes.data.results || []); // Unsplash uses `results`
      })
      .catch(err => {
        console.error("Error fetching data:", err);
        setError("Something went wrong. Try again.");
        setResults(null);
        setImages([]);
      })
      .finally(() => setLoading(false));
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
          placeholder="Enter a word..."
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {results && <Results results={results} />}
      {images.length > 0 && <Photos images={images} />}
    </div>
  );
}