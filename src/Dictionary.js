import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        console.log(response.data);
        setResults(response.data[0]);
    }

    const handleKeywordChange = (event) => {
        setKeyword(event.target.value);
    };

    function handlePexelsResponse(response) {
        console.log(response.data);
    }

    function search(event) {
        event.preventDefault();

        let apiKey = `t9e9139a19b801fbcfa020d17a47ob1f`;
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);

        let PexelsApiKey = `eB4rh2l1HxAEaoUYEFyxj7tcoB8PxfeO0GiWUCq1CfV2rRl9hTZpPtU2`;
        let PexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
        let headers = { Authorization: `Bearer ${PexelsApiKey}`};
        axios.get(PexelsApiUrl, {headers: headers }).then(handlePexelsResponse);
    }

    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange} />
            </form>
            <Results results={results} />
        </div>
    );
}