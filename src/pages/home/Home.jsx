import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import { ReactComponent as Icon } from '../../assets/home.svg';
import { Navbar } from '../../components/navbar/Navbar';

export const Home = () => {
  const [quizPacks, setQuizPacks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchQuizPacks();
  }, []);

  const fetchQuizPacks = async () => {
    try {
      const response = await fetch('https://api.essaychecker.ai/quiz/packs/');
      const data = await response.json();
      setQuizPacks(Object.entries(data?.data) || []);
    } catch (error) {
      console.error(error);
    }
  };
  const handleStartSolvingClick = () => {
    // Scroll to the quiz packs section
    const quizPacksSection = document.getElementById('quiz-packs-section');
    quizPacksSection.scrollIntoView({ behavior: 'smooth' });
  };

  const handleStartQuiz = (packId) => {
    navigate(`/quiz/${packId}`);
  };

  return (
    <div className='home'>
      <Navbar />
      <div className='home-page'>
        <div className="home-page-left">
          <div className='home-page-left-heading'>
            <h1>Learn</h1>
            <h1>new concepts</h1>
            <h1>for each question</h1>
          </div>
          <div className='home-page-left-subheading'>
            <p>We help you prepare for exams and quizzes</p>
          </div>
          <div className='home-page-left-buttons'>
            <button className="home-button solve" onClick={handleStartSolvingClick}>
              Start Solving
            </button>
            <button className="home-button info">Know More</button>
          </div>
        </div>
        <div className="home-page-right">
          <Icon className='home-icon' />
        </div>
      </div>

      <div id="quiz-packs-section" className="quiz-packs-section">
        <h2>Quiz Packs</h2>
        <div className="quiz-packs-list">
          {quizPacks.map(([packId, pack]) => (
            <div key={packId} className="quiz-pack">
              <h3>{pack.name}</h3>
              <button className='quiz-packs-list-button' onClick={() => handleStartQuiz(packId)}>Start Quiz</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
