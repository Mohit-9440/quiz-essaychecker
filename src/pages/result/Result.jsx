import { useSearchParams } from 'react-router-dom';
import './result.css';

export const Result = () => {
  const [searchParams] = useSearchParams();
  const score = parseInt(searchParams.get('score'), 10) || 0;
  const totalQuestions = parseInt(searchParams.get('totalQuestions'), 10) || 0;

  return (
    <div className="result-page">
      <h1 className="result-heading">Quiz Result</h1>
      <div className="result-container">
        <div className="score-card">
          <h2 className="score-title">Your Score</h2>
          <div className="score">{score}</div>
          <div className="out-of">out of {totalQuestions}</div>
        </div>
      </div>
    </div>
  );
};
