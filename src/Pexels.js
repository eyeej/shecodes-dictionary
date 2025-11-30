import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    let [images, setImages] = useState(null);
    let [loading, setLoading] = useState(false);

    function search(event) {
        event.preventDefault();
        if (!keyword.trim()) return;

        setLoading(true);

        // Fetch word definition
        let apiKey = `t9e9139a19b801fbcfa020d17a47ob1f`;
        let dictionaryUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        
        // Fetch images from Pexels via our Express server
        let pexelsUrl = `http://localhost:5000/search?query=${encodeURIComponent(keyword)}&per_page=3`;

        Promise.all([
            axios.get(dictionaryUrl),
            axios.get(pexelsUrl)
        ])
        .then(([dictResponse, pexelsResponse]) => {
            console.log("Dictionary data:", dictResponse.data);
            console.log("Pexels data:", pexelsResponse.data);
            setResults(dictResponse.data);
            setImages(pexelsResponse.data.photos);
            setLoading(false);
        })
        .catch((err) => {
            console.error("Error:", err);
            setLoading(false);
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
            {loading && <p>Loading...</p>}
            {results && (
                <>
                    <Results results={results} />
                    {images && images.length > 0 && (
                        <div className="images-section">
                            <h3>Related Images</h3>
                            <div className="images-grid">
                                {images.map((photo, index) => (
                                    <div key={index} className="image-item">
                                        <img 
                                            src={photo.src.medium} 
                                            alt={photo.photographer}
                                            style={{width: "100%", borderRadius: "8px"}}
                                        />
                                        <p style={{fontSize: "12px", marginTop: "5px"}}>
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