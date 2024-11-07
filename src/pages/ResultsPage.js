import React from 'react';
import ResultsTable from '../components/ResultsTable';
import './ResultsPage.css';

function ResultsPage({ data, query }) {
  return (
    <div className="results-page">
      <h1 className="results-title">Query Results</h1>
      <p className="query-description">Query: {query}</p>
      <ResultsTable data={data} />
    </div>
  );
}

export default ResultsPage;
