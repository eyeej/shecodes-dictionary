import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [images, setImages] = useState([]);
  let [loading, setLoading] = useState(false);

  function search(event) {
    event.preventDefault();
    if (!keyword.trim()) return;

    setLoading(true);

    const apiKey = "YOUR_VALID_SHECODES_KEY";
    const dictionaryUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    const pexelsUrl = `http://localhost:5000/search?query=${encodeURIComponent(
      keyword
    )}&per_page=6`;

    Promise.all([axios.get(dictionaryUrl), axios.get(pexelsUrl)])
      .then(([dictRes, pexelsRes]) => {
        setResults(dictRes.data);
        setImages(pexelsRes.data.photos || []);
      })
      .catch((err) => {
        console.error("Error:", err);
      })
      .finally(() => setLoading(false));
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Enter a word..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}

      {results && (
        <>
          <Results results={results} />

          {images.length > 0 && (
            <div className="images-section">
              <h3>Related Images</h3>
              <div className="images-grid">
                {images.map((photo, index) => (
                  <div key={index} className="image-item">
                    <img
                      src={photo.src.medium}
                      alt={photo.photographer}
                      style={{ width: "100%", borderRadius: "8px" }}
                    />
                    <p style={{ fontSize: "12px" }}>
                      Photo by {photo.photographer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}