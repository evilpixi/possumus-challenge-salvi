import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Loader from '../components/loader';
import GameStatusPanel from '../components/gameStatusPanel';
import CurrentQuestionPanel from '../components/currentQuestionPanel';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { Difficulties } from '../enums/difficulties';
import { Question } from '../dto/question';
import he from 'he';
import gc from '../gameconfig';
import { resetGame, setQuestions } from '../features/gameSlice';
import './game.css';
import '../App.css';

const BASE_URL = `https://opentdb.com/api.php?amount=${gc.amount}&type=${gc.type}`;

const Game: React.FC = () =>
{
  const dispatch = useDispatch();

  const [isLoaded, setIsLoaded] = useState(false);

  const category = useSelector((state: RootState) => state.currentCategory.currentCategory);
  const difficulty = useSelector((state: RootState) => state.currentDifficulty.selectedDifficult);
  const questions = useSelector((state: RootState) => state.game.questions);
  const currentQuestion = useSelector((state: RootState) => state.game.currentQuestionIndex);

  useEffect(() =>
  {
    dispatch(resetGame())

    let gameUrl = BASE_URL
    if (category) gameUrl += `&category=${category}`
    if (difficulty && difficulty !== Difficulties.Any) gameUrl += `&difficulty=${difficulty}`

    axios.get(gameUrl)
      .then((res) =>
      {
        const decodedQuestions = res.data.results.map((q: Question) =>
        {
          return {
            ...q,
            question: he.decode(q.question),
            correct_answer: he.decode(q.correct_answer),
            incorrect_answers: q.incorrect_answers.map((a: string) => he.decode(a))
          }
        })

        dispatch(setQuestions(decodedQuestions))
        setIsLoaded(true)
      })
      .catch((error) =>
      {
        console.error('Error fetching data:', error);
      })
  }, [])

  return (
    <div className='centered-view'>
      {isLoaded
        ? <div className='game-container'>
          <GameStatusPanel />
          <CurrentQuestionPanel question={questions[currentQuestion]} />
        </div>
        : <div className='centered-view'>
          loading questions...<br /><br />
          <Loader />
        </div>}
    </div>
  );
};

export default Game;