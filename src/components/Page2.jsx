import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Page2.css';
import HomeLogo from '../imgs/Home_Logo.png';

function Page2() {
  const navigate = useNavigate();
  const [selectedPart, setSelectedPart] = useState('');

  const handleNext = () => {
    if (selectedPart) {
      navigate('/page3');
    }
  };

  const bodyParts = [
    'upper half of the body', 'lower half of the body'
  ];

  return (
    <div className="container">
      <button className="info-button">?</button>
      <button className="home-button" onClick={() => navigate('/')}>
        <img src={HomeLogo} alt="Home" className="home-logo" />
        Home
      </button>
      <div className='question'>
        <h1>Which part? (1)</h1>
      </div>

      <div className="progress">
        <div className="progress-step active">1</div>
        <div className="progress-step active">2</div>
        <div className="progress-step">3</div>
        <div className="progress-step">4</div>
        <div className="progress-step">5</div>
      </div>

      <div className="part-buttons">
        {bodyParts.map((part, index) => (
          <button
            key={index}
            className={`part-button ${selectedPart === part ? 'selected' : ''}`}
            onClick={() => setSelectedPart(part)}
          >
            {part}
          </button>
        ))}
      </div>

      <div className="navigation-buttons">
        <button className="nav-button" onClick={() => navigate('/page1')}>Previous</button>
        <button className="nav-button next-button" onClick={handleNext}>Next</button>
        <button className="nav-button" onClick={() => navigate('/page3')}>Skip</button>
      </div>

      <footer className="footer">
        <h5>Tag-Doctor</h5>
      </footer>
      
    </div>
  );
}

export default Page2;
