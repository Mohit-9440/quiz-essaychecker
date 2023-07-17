import React from 'react';
import './home.css';
import { ReactComponent as Icon } from '../../assets/home.svg';
import { Navbar } from '../../components/navbar/Navbar';

export const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className='home-page'>
        <div class="home-page-left">
          <div className='home-page-left-heading'>
            <h1>Learn</h1>
            <h1>new concepts</h1>
            <h1>for each question</h1>
          </div>
          <div className='home-page-left-subheading'>
            <p>We help you prepare for exams and quizes</p>
          </div>
          <div className='home-page-left-buttons'>
              <button className="home-button solve">Start Solving</button>
              <button className="home-button info">know more</button>
          </div>
        </div>
        <div class="home-page-right"><Icon className='home-icon'/></div>
      </div>
    </div>
  )
}
