import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");

    function handleResponse(response) {
        console.log(response);

    }

     const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
    };

    function search(event) {
        event.preventDefault();
        alert(`Searching for ${keyword} definition`);

        let apiKey = `t9e9139a19b801fbcfa020d17a47ob1f`;
        let apiUrl = "https://api.shecodes.io/dictionary/v1/define?word={word}&key={key}";
        axios.get(apiUrl).then(handleResponse);

    }

    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange} />
            </form>
        </div>
    );
} 