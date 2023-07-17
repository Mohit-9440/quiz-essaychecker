import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './quiz.css';

import { Navbar } from '../../components/navbar/Navbar';

export const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const totalQuestions = questions.length;
  const [isOptionSubmitted, setIsOptionSubmitted] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetchQuizData();
  }, []);

  const fetchQuizData = async () => {
    try {
      const response = await fetch('https://api.essaychecker.ai/quiz/packs/?id=pack_1');
      const data = await response.json();
      setQuestions(Object.values(data?.data) || []);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOptionSelect = (optionKey) => {
    if (isOptionSubmitted) {
      return;
    }

    setSelectedOption(optionKey);
    setIsOptionSubmitted(true);
    setShowResult(true);

    const currentQuestionData = questions[currentQuestion];
    if (optionKey === currentQuestionData.ans) {
      setIsCorrect(true);
      setScore((prevScore) => prevScore + 1);
    } else {
      setIsCorrect(false);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption('');
      setShowResult(false);
      setIsOptionSubmitted(false);
    } else {
      setShowResult(true);
      navigate(`/result?score=${score}&totalQuestions=${totalQuestions}`);
    }
  };

  const currentQuestionData = questions[currentQuestion] || null;

  return (
    <div>
      <Navbar />
      <div className="quiz-page">
        <div className="quiz-page-qna"></div>
        {currentQuestionData && (
          <div>
            <div className="quiz-page-top">
              <h1>{currentQuestionData.q}</h1>
              <h1>{currentQuestionData.word}</h1>
            </div>
            <div className="quiz-page-center">
              {Object.entries(currentQuestionData.options || {}).map(([optionKey, option]) => (
                <div
                  key={optionKey}
                  className={`quiz-options ${selectedOption === optionKey && 'selected'}`}
                  onClick={() => handleOptionSelect(optionKey)}
                >
                  {option.word}
                </div>
              ))}
            </div>
            <div className="quiz-page-bottom">
              {showResult && (
                <div className="result">
                  {isCorrect ? 'Correct option!' : 'Wrong option!'}
                  <div className="answer">
                    Correct answer: {currentQuestionData.options[currentQuestionData.ans]?.word}
                  </div>
                </div>
              )}
              <button className='next-question' onClick={handleNextQuestion}>Next Question</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
