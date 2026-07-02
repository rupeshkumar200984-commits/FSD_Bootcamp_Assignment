import { useState } from "react";

const MAX_BALLS = 6;

function ScoreBoard() {
  const [stats, setStats] = useState({ balls: 0, runs: 0 });
  const [isGameOver, setIsGameOver] = useState(false);

  const hitBall = () => {
    if (stats.balls >= MAX_BALLS - 1) {
      setIsGameOver(true);
    }

    const randomRun = Math.floor(Math.random() * 7);

    setStats((prev) => ({
      ...prev,
      balls: prev.balls + 1,
      runs: prev.runs + randomRun,
    }));
  };

  const resetGame = () => {
    setStats({ balls: 0, runs: 0 });
    setIsGameOver(false);
  };

  return (
    <div className="container">
      <div className="scoreboard">
        <h1>Cricket Score Board</h1>
        <h2>Balls: {stats.balls}</h2>
        <h2>Runs: {stats.runs}</h2>
      </div>

      <p>
        {isGameOver 
          ? "Over finished! Reset the game to play again." 
          : `You have ${MAX_BALLS - stats.balls} balls remaining.`}
      </p>

      <button onClick={hitBall} disabled={isGameOver}>
        Click to hit the ball
      </button>

      <button onClick={resetGame} style={{ marginLeft: '10px' }}>
        Reset Game
      </button>
    </div>
  );
}

export default ScoreBoard;