import React, { useCallback, useEffect, useState } from "react";
import "./AutoComplete.css";

const AutoComplete = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState();
  const [selectedSuggestion, setSelectedSuggestion] = useState();

  const handleInputChange = (e) => {
    if (e.target.value.trim()) {
      setQuery(e.target.value);
    }
    return;
  };

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func.apply(null, args);
      }, delay);
    };
  };

  const fetchSuggestions = async (value) => {
    if (!value) {
      setSuggestions([]);
    } else {
      try {
        const response = await fetch(`https://api.datamuse.com/sug?s=${value}`);
        const res = await response.json();
        setSuggestions(res);
      } catch (error) {
        console.error("Error fetching suggestions", error);
      }
    }
  };

  const debouncedFetchSuggestion = useCallback(
    debounce(fetchSuggestions, 300),
    []
  );

  useEffect(() => {
    debouncedFetchSuggestion(query);
  }, [query, debouncedFetchSuggestion]);

  const handleSuggestionClick = (suggestion) => {
    setSelectedSuggestion(suggestion);
    setSuggestions([]);
    setQuery("");
  };

  return (
    <div className="autocomplete-container">
      <input
        type="text"
        name="input"
        value={query}
        onChange={handleInputChange}
        className="search-input"
      />
      {suggestions?.length > 0 && (
        <ul className="suggestion-list">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion.word)}
            >
              {suggestion.word}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoComplete;
