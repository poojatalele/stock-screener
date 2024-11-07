import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import QueryInput from '../components/QueryInput';
import RunQueryButton from '../components/RunQueryButton';
import parseQuery from '../utils/parseQuery';
import applyFilters from '../utils/applyFilters';
import Papa from 'papaparse';
import './QueryPage.css';

function QueryPage({ setQuery, setFilteredData }) {
  const navigate = useNavigate();

  const createNewScreen = () => {
    navigate('/');
  };

  const [queryText, setQueryText] = useState('');
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    Papa.parse(`${process.env.PUBLIC_URL}/stock_data.csv`, {
      download: true,
      header: true,
      complete: (result) => setStockData(result.data),
    });
  }, []);

  const handleRunQuery = () => {
    setQuery(queryText);
    const conditions = parseQuery(queryText);
    const filteredResults = applyFilters(stockData, conditions);
    setFilteredData(filteredResults);
    navigate('/results');
  };

  return (
    <div className="query-page-container">
      <div className="query-box">
        <div className="query-input-section">
          <QueryInput
            query={queryText}
            setQuery={setQueryText}
            className="query-input"
            placeholder="Enter your conditions here..."
          />
          <div className="example-box">
            <h3>Custom query example</h3>
            <p>
              Market capitalization &gt; 500 AND<br />
              Price to earning &lt; 15 AND<br />
              Return on capital employed &gt; 22%
            </p>
          </div>
        </div>
        <RunQueryButton
          handleRunQuery={handleRunQuery}
          className="run-query-button"
        >
          RUN THIS QUERY
        </RunQueryButton>
      </div>
      <a href="#" onClick={createNewScreen} className="back-link">← Go Back</a>
    </div>
  );
}

export default QueryPage;
