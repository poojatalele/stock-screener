import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QueryPage from './pages/QueryPage';
import ResultsPage from './pages/ResultsPage';

function App() {
  const [filteredData, setFilteredData] = useState([]);
  const [query, setQuery] = useState('');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/query" element={<QueryPage setQuery={setQuery} setFilteredData={setFilteredData} />} />
        <Route path="/results" element={<ResultsPage data={filteredData} query={query} />} />
      </Routes>
    </Router>
  );
}

export default App;
