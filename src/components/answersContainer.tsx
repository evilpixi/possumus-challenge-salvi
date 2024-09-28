import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Question } from '../dto/question';
import { answerQuestion, nextQuestion } from '../features/gameSlice';
import AnswerButton from './answerButton';
import { ButtonStatus } from '../enums/buttonStatus';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../store';

interface AnswersContainerProps
{
  question: Question;
}

const shuffleArray = (array: string[]) =>
{
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--)
  {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const AnswersContainer: React.FC<AnswersContainerProps> = ({ question }) =>
{
  const [shuffledAnswers, setShuffledAnswers] = useState<string[]>([]);
  const [replied, setReplied] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null); // Guarda la respuesta seleccionada
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const gameEnd = useSelector((state: RootState) => state.game.gameEnd);

  const handleCheckAnswer = (answer: string) =>
  {
    setSelectedAnswer(answer);
    dispatch(answerQuestion({ answer: answer }));
    setReplied(true);
  };


  const handleNext = () =>
  {
    setSelectedAnswer(null);
    setReplied(false);
    dispatch(nextQuestion());

  };

  useEffect(() =>
  {
    const answers = [question.correct_answer, ...question.incorrect_answers];
    setShuffledAnswers(shuffleArray([...answers]));
    setReplied(false);
    console.log("render!")
  }, [question]);

  useEffect(() =>
  {
    if (gameEnd)
    {
      navigate('/gameend');
    }
  }, [gameEnd, navigate]);

  return (
    <div>
      {shuffledAnswers.map((answer, index) =>
      {
        let status: ButtonStatus = ButtonStatus.Default;

        if (replied)
        {
          if (answer === question.correct_answer)
          {
            status = ButtonStatus.Correct // La respuesta correcta se pone verde
          } else if (answer === selectedAnswer)
          {
            status = ButtonStatus.Incorrect; // La respuesta incorrecta seleccionada se pone roja
          }
        }

        return (
          <div key={index}>
            <AnswerButton
              label={(index + 1) + ". " + answer}
              status={status} // Envía el estado actual del botón
              onClick={() => handleCheckAnswer(answer)}
              replied={replied}
            />
          </div>
        );
      })}

      {replied && <button onClick={handleNext}>Next</button>}
    </div>
  );
};

export default AnswersContainer;