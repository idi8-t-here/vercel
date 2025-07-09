import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div className="App">
      <div 
        className={`container ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="emoji">🚀</div>
        <h1>Vercel Preview URL Test</h1>
        <p>This is a React app to test the Get-Vercel-preview-url GitHub Action.</p>
        
        <div className="status">
          <h3>Status: Deployed Successfully</h3>
          <p>This React app was deployed via Vercel and the preview URL was fetched using the GitHub Action.</p>
        </div>

        <div className="env-info">
          <h4>Environment Variables:</h4>
          <div className="env-grid">
            <div className="env-item">
              <strong>NODE_ENV:</strong> {process.env.NODE_ENV || 'Not set'}
            </div>
            <div className="env-item">
              <strong>REACT_APP_VERSION:</strong> {process.env.REACT_APP_VERSION || '1.0.0'}
            </div>
            <div className="env-item">
              <strong>REACT_APP_BUILD_TIME:</strong> {process.env.REACT_APP_BUILD_TIME || 'Development'}
            </div>
            <div className="env-item">
              <strong>VERCEL_PROJECT_ID:</strong> {process.env.REACT_APP_VERCEL_PROJECT_ID || 'prj_D0RGWUScSp3tMLR1xo9BlcDVcFW7'}
            </div>
            <div className="env-item">
              <strong>VERCEL_TEAM_ID:</strong> {process.env.REACT_APP_VERCEL_TEAM_ID || 'null'}
            </div>
          </div>
        </div>

        <div className="timestamp">
          Last updated: {currentTime.toLocaleString()}
        </div>

        <div className="features">
          <h4>Features:</h4>
          <ul>
            <li>✅ React 18 with Hooks</li>
            <li>✅ Environment Variables</li>
            <li>✅ Modern CSS with Animations</li>
            <li>✅ Real-time Clock</li>
            <li>✅ Interactive UI Elements</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App; 