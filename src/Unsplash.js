import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  function search(event) {
    event.preventDefault();
    if (!keyword.trim()) return;

    setLoading(true);

    // Dictionary API key
    const dictionaryKey = `u_qlN5IVFM8WZ_RuQRM2YxIPWrwlYoIo4jNaTlhzxmo`;
    const dictionaryUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${dictionaryKey}`;

    // Unsplash API key
    const unsplashKey = "YOUR_UNSPLASH_ACCESS_KEY";
    const unsplashUrl = `https://api.unsplash.com/search/photos?query=${keyword}&per_page=6&client_id=${unsplashKey}`;

    Promise.all([axios.get(dictionaryUrl), axios.get(unsplashUrl)])
      .then(([dictRes, unsplashRes]) => {
        setResults(dictRes.data);
        setImages(unsplashRes.data.results || []); // <-- correct for Unsplash
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
                {images.map((photo) => (
                  <div key={photo.id} className="image-item">
                    <img
                      src={photo.urls.small}
                      alt={photo.alt_description || "Image"}
                      style={{ width: "100%", borderRadius: "8px" }}
                    />
                    <p style={{ fontSize: "12px" }}>
                      Photo by {photo.user?.name}
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