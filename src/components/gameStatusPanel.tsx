import React from 'react';
import { RootState } from '../store';
import { useSelector } from 'react-redux';

interface QuestionIconProps
{
  qs: boolean | null;
}

const QuestionIcon: React.FC<QuestionIconProps> = ({ qs }) =>
{
  return (
    <span>{qs === null ? '⬛' : (qs ? '✅' : '❌')}</span>
  );
}

const GameStatusPanel: React.FC = () =>
{
  const questionsHistory = useSelector((state: RootState) => state.game.answerHistory);

  return (
    <div>
      <p>
        [ {questionsHistory.map((q, index) => (
          <span key={index}>
            <QuestionIcon qs={q} />
            {index < questionsHistory.length - 1 && ' '}
          </span>
        ))} ]
      </p>
    </div>
  );
};

export default GameStatusPanel;