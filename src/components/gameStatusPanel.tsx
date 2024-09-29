import React from 'react';
import { RootState } from '../store';
import { useSelector } from 'react-redux';
import '../pages/game.css';

interface QuestionIconProps
{
  qs: boolean | null;
}

const QuestionIcon: React.FC<QuestionIconProps> = ({ qs }) =>
{
  return (
    <span className={qs === null ? '' : (qs ? 'icon-correct' : 'icon-bad')}>
      {qs === null ? '--' : (qs ? '☑️' : '❎')}
    </span>
  );
}

const GameStatusPanel: React.FC = () =>
{
  const questionsHistory = useSelector((state: RootState) => state.game.answerHistory);
  const totalQuestions = useSelector((state: RootState) => state.game.questions.length);
  const answeredQuestions = questionsHistory.filter(q => q !== null).length;

  return (
    <div className='game-status-panel'>
      {`Question ${answeredQuestions} of ${totalQuestions}`}
      <div className='game-status-panel-container'>
        {questionsHistory.map((q, index) => (
          <span key={index} style={{ width: '50px' }}>
            <QuestionIcon qs={q} />
            {index < questionsHistory.length - 1 && ' '}
          </span>
        ))}
      </div>
    </div>
  );
};

export default GameStatusPanel;