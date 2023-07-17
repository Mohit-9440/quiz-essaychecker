import { useSearchParams } from 'react-router-dom';

export const Result = () => {
  const [searchParams] = useSearchParams();
  const score = parseInt(searchParams.get('score'), 10) || 0;
  const totalQuestions = parseInt(searchParams.get('totalQuestions'), 10) || 0;

  return (
    <div>
      <h1>Quiz Result</h1>
      <h2>Your Score: {score} out of {totalQuestions}</h2>
    </div>
  );
};
