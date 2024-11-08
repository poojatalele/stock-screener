// components/QueryPage.js
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
    if (!queryText || !isValidQuery(queryText)) {
      alert('Please enter a valid query.');
      return;
    }

    setQuery(queryText);
    const conditions = parseQuery(queryText);
    const filteredResults = applyFilters(stockData, conditions);
    setFilteredData(filteredResults);
    navigate('/results');
  };

  const isValidQuery = (query) => {
    // Split the query into segments based on "AND"
    const conditions = query.split(/\b(AND)\b/i);
  
    // Expression to check the format of each condition
    const validPattern = /\b([A-Za-z\s]+)\s*(=|<=|>=|<|>)\s*([0-9]+(?:\.[0-9]*)?)\b/;
  
    for (let condition of conditions) {
      condition = condition.trim();
  
      if (condition.toUpperCase() === 'AND') {
        continue;
      }
  
      if (!validPattern.test(condition)) {
        return false;
      }
    }
    return true;
  };
  

  return (
    <div className="query-page-container">
      <div className="query-box">
        <div className="query-input-section">
          <QueryInput
            query={queryText}
            setQuery={setQueryText}
            className="query-input"
          />
          <div className="example-box">
            <h3>Custom query example</h3>
            <p>
              Market Capitalization &gt; 500 AND<br />
              P/E Ratio &lt; 15 AND<br />
              ROE &gt; 22
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
