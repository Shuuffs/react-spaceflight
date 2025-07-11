import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/Header.css";

function Header({ onSearch }) {
  const [query, setQuery] = useState("");

  // Call onSearch live whenever query changes
  useEffect(() => {
    onSearch(query);
  }, [query, onSearch]);

  // Clear input handler
  const clearSearch = () => {
    setQuery("");
  };

  return (
    <header className="header">
      <div className="nav">
        <Link to="/" className="logo">
          🚀 SpaceNews
        </Link>
      </div>
      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Search articles..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <button
            onClick={clearSearch}
            className="clear-btn"
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
