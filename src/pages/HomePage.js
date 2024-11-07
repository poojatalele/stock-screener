import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'

function HomePage() {
  const navigate = useNavigate();

  const handleCreateNewScreen = () => {
    navigate('/query');
  };

  return (
    <div className="home-page">
      <button onClick={handleCreateNewScreen} className="create-screen-button">
        Create New Screen
      </button>
    </div>
  );
}

export default HomePage;
