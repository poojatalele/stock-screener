import React from 'react';

function QueryInput({ query, setQuery }) {
  return (
    <div className="query-section">
      <h1 htmlFor="query-input">Create a Search Query</h1>
      <textarea
        id="query-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></textarea>
    </div>
  );
}

export default QueryInput;  
