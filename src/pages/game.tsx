import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Loader from '../components/loader';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Difficulties } from '../enums/difficulties';
import { Question } from '../dto/question';
import he from 'he';

const BASE_URL = 'https://opentdb.com/api.php?amount=5&type=multiple';

const Game: React.FC = () =>
{
  const [isLoaded, setIsLoaded] = useState(false);
  const [questions, setQuestions] = useState([]);
  //const [currentQuestion, setCurrentQuestion] = useState(0);
  //const [matchedAnswers, setMatchedAnswers] = useState([]);
  const [gameQuery, setGameQuery] = useState(BASE_URL);

  const category = useSelector((state: RootState) => state.currentCategory.currentCategory);
  const difficulty = useSelector((state: RootState) => state.currentDifficulty.selectedDifficult);

  useEffect(() =>
  {
    let query = BASE_URL
    if (category) query += `&category=${category}`
    console.log('category:', category)
    if (difficulty && difficulty !== Difficulties.Any) query += `&difficulty=${difficulty}`
    console.log('difficulty:', difficulty)

    console.log(query)
    console.log(he)
    setGameQuery(query)

    axios.get(query)
      .then((res) =>
      {
        console.log(res.data)
        setIsLoaded(true)
        setQuestions(res.data.results)
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
          {questions.map((question: Question, index: number) =>
          {
            return (
              <div key={index}>
                <h2>{he.decode(question.question)}</h2>
                {he.decode(question.question)}
              </div>
            )
          })}
        </div>
        : <div>
          loading questions...
          <Loader />
        </div>}
    </div>
  );
};

export default Game;