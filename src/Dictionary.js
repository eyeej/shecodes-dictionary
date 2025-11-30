import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState(null);

    function handleResponse(response) {
        console.log(response.data);
        setResults(response.data[0]);
        setLoading(false);
    }

    function handleError(err) {
        console.error("Error fetching data:", err);
        setError("Could not find that word. Please try another.");
        setLoading(false);
    }

    const handleKeywordChange = (event) => {
        setKeyword(event.target.value);
    };

    function search(event) {
        event.preventDefault();

        if (!keyword.trim()) {
            setError("Please enter a word to search");
            return;
        }

        setLoading(true);
        setError(null);

        let apiKey = `t9e9139a19b801fbcfa020d17a47ob1f`;
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse).catch(handleError);
    }

    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input 
                    type="search" 
                    onChange={handleKeywordChange}
                    value={keyword}
                    placeholder="Enter a word..."
                />
            </form>
            {loading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}
            {results && !loading && <Results results={results} />}
        </div>
    );
}