import { useState } from 'react';

function ScoreTracker() {
  const [score, setScore] = useState(50);

  const addMarks = () => {
    setScore(score + 5);
  };

  const removeMarks = () => {
    if (score >= 5) {
      setScore(score - 5);
    }
  };

  const resetScore = () => {
    setScore(50);
  };

  return (
    <section className="card">
      <h1>Score Tracker</h1>

      <p className="description">
        Manage your current study score using React state.
      </p>

      <div className="score-box">
        <span>Current Score</span>
        <strong>{score}</strong>
      </div>

      <div className="button-row">
        <button onClick={addMarks}>
          Add 5
        </button>

        <button onClick={removeMarks}>
          Remove 5
        </button>

        <button onClick={resetScore}>
          Reset
        </button>
      </div>

      <p className="status">
        {score >= 80
          ? 'Excellent performance!'
          : score >= 50
          ? 'Keep working hard!'
          : 'More practice is needed.'}
      </p>
    </section>
  );
}

export default ScoreTracker;