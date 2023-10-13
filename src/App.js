import './CSS Components/App.css';
import React from 'react';


function App() {
  const divStyle = {
    backgroundColor: 'purple',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',

  };

  const highScores = [
    { name: 'Player 1', score: 100 },
    { name: 'Player 2', score: 85 },
    { name: 'Player 3', score: 33 },
    { name: 'Player 4', score: 50 },
    { name: 'Player 5', score: 76 },
    { name: 'Player 6', score: 76 },
    { name: 'Player 7', score: 76 },
    { name: 'Player 8', score: 76 },
    { name: 'Player 9', score: 76 },
    { name: 'Player 10', score: 76 },
    { name: 'Player 11', score: 76 },
    { name: 'Player 12', score: 76 },
    { name: 'Player 13', score: 76 },
    { name: 'Player 14', score: 76 },
    { name: 'Player 15', score: 76 },
  ];

  return (
    <div style={divStyle}>
      <h1>QUIZ JS!</h1>
      <button className="rectangle-button" onClick={handleStartClick}>START</button>
      <button className="rectangle-button" onClick={handleInstructionsClick}>INSTRUCTIONS</button>
      <div className="score-box">
        <h2>High Score</h2>
        <div className="score-columns">
          <div className="score-column">
            {highScores.slice(0, 5).map((score, index) => (
              <div key={index} className="score-row">
                <span className="player-name">{score.name}</span>
                <span className="player-score">{score.score}</span>
              </div>
            ))}
          </div>
          <div className="score-column">
            {highScores.slice(5, 10).map((score, index) => (
              <div key={index} className="score-row">
                <span className="player-name">{score.name}</span>
                <span className="player-score">{score.score}</span>
              </div>
            ))}
          </div>
          <div className="score-column">
            {highScores.slice(10, 15).map((score, index) => (
              <div key={index} className="score-row">
                <span className="player-name">{score.name}</span>
                <span className="player-score">{score.score}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


function handleStartClick() {
}

function handleInstructionsClick() {
}


export default App;

