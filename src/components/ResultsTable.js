import React from 'react';

function ResultsTable({ data, query }) {
  if (!data || data.length === 0) {
    if (!query || query.trim() === "") {
      return <p>Please enter a query to see results.</p>;
    }
    return <p>No results match the query.</p>;
  }

  return (
    <div className="results-table-container">
      <table className="results-table">
        <thead>
          <tr>
            <th>Ticker</th>
            <th>Market Capitalization (B)</th>
            <th>P/E Ratio</th>
            <th>ROE (%)</th>
            <th>Debt-to-Equity Ratio</th>
            <th>Dividend Yield (%)</th>
            <th>Revenue Growth (%)</th>
            <th>EPS Growth (%)</th>
            <th>Current Ratio</th>
            <th>Gross Margin (%)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((stock, index) => (
            <tr key={index}>
              <td>{stock['Ticker']}</td>
              <td>{stock['Market Capitalization (B)']}</td>
              <td>{stock['P/E Ratio']}</td>
              <td>{stock['ROE (%)']}</td>
              <td>{stock['Debt-to-Equity Ratio']}</td>
              <td>{stock['Dividend Yield (%)']}</td>
              <td>{stock['Revenue Growth (%)']}</td>
              <td>{stock['EPS Growth (%)']}</td>
              <td>{stock['Current Ratio']}</td>
              <td>{stock['Gross Margin (%)']}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ResultsTable;
