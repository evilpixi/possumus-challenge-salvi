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

const BASE_URL = `https://opentdb.com/api.php?amount=${gc.amount}&type=${gc.type}`;

const Game: React.FC = () =>
{
  const dispatch = useDispatch();

  const [isLoaded, setIsLoaded] = useState(false);
  const [gameQuery, setGameQuery] = useState(BASE_URL);

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

    setGameQuery(gameUrl)

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

        console.log(questions, currentQuestion)
        dispatch(setQuestions(decodedQuestions))
        setIsLoaded(true)
      })
      .catch((error) =>
      {
        console.error('Error fetching data:', error);
      })
  }, [])

  return (
    <div>
      {isLoaded
        ? <div>
          <h1>Game</h1>
          {gameQuery}
          <GameStatusPanel />
          <CurrentQuestionPanel question={questions[currentQuestion]} />
        </div>
        : <div>
          loading questions...
          <Loader />
        </div>}
    </div>
  );
};

export default Game;