import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Page3.css';
import HomeLogo from '../imgs/Home_Logo.png';
import logo from '../imgs/Logo.png';

function Page3() {
  const navigate = useNavigate();
  const [selectedPart, setSelectedPart] = useState('');

  const handleNext = () => {
    if (selectedPart) {
      navigate('/page4');
    }
  };

  const bodyParts = [
    'Face', 'Abdomen', 'Arm', 'Chest',
    'Head', 'Back'
  ];

  return (
    <div className="container">
      <img src={logo} alt="Logo" className="logo" />
      <button className="home-button" onClick={() => navigate('/')}>
        <img src={HomeLogo} alt="Home" className="home-logo" />
        Home
      </button>
      <div className='question'>
        <h1>Which part? (2)</h1>
      </div>

      <div className="progress">
        <div className="progress-step active">1</div>
        <div className="progress-step active">2</div>
        <div className="progress-step active">3</div>
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
        <button className="nav-button" onClick={() => navigate('/page2')}>Prev</button>
        <button className="nav-button next-button" onClick={handleNext}>Next</button>
        <button className="nav-button" onClick={() => navigate('/page4')}>Skip</button>
      </div>

      <footer className="footer">
        <h5>Tag-Doctor</h5>
      </footer>
    </div>
  );
}

export default Page3;
