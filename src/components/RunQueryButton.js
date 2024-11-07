import React from 'react';

function RunQueryButton({ handleRunQuery }) {
  return (
    <button onClick={handleRunQuery} className="run-query-button">
      RUN THIS QUERY
    </button>
  );
}

export default RunQueryButton;
