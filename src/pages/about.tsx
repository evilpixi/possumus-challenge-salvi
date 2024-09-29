import React from 'react';
import '../App.css'
import './about.css';

const About: React.FC = () =>
{
  return (
    <div className='about-page-container'>
      <div className='about-page'>
        <h1>About Pixi Trivia</h1>

        <p>Welcome to <strong>Pixi Trivia</strong>—the ultimate destination for trivia lovers! Test your knowledge across a variety of categories, from general knowledge to pop culture, science, history, and more.</p>

        <h2>How it Works:</h2>
        <ol>
          <li><strong>Choose a Category</strong>: Pick from a wide selection of trivia categories that suit your interests.</li>
          <li><strong>Select Difficulty</strong>: Whether you're a trivia master or just starting out, we offer difficulties ranging from easy to hard.</li>
          <li><strong>Answer Questions</strong>: Answer a series of questions and challenge yourself or your friends. Earn points for each correct answer!</li>
          <li><strong>Track Your Progress</strong>: After completing each game, see how well you did and compare your score with others.</li>
        </ol>

        <h2>Why Pixi Trivia?</h2>
        <ul>
          <li><strong>Engaging Gameplay</strong>: Thought-provoking questions keep you on your toes!</li>
          <li><strong>Variety of Topics</strong>: From classic trivia to niche categories, there's something for everyone.</li>
          <li><strong>Easy to Play</strong>: Simple, intuitive design means you can jump into the game right away.</li>
          <li><strong>Learn While Having Fun</strong>: Not only do you get to test your knowledge, but you also learn new things along the way.</li>
        </ul>

        <h2>Technologies Used</h2>
        <ul className="tech-list">
          <li>React</li>
          <li>Redux</li>
          <li>TypeScript</li>
          <li>Plain CSS</li>
          <li>Git+Vercel</li>
        </ul>

        <h2>Trivia API</h2>
        We use the Open Trivia Database API to fetch trivia questions. For more information, visit the API documentation at:
        <a href='https://opentdb.com/api_config.php'>https://opentdb.com/api_config.php</a>
      </div>
    </div>
  );
};

export default About;