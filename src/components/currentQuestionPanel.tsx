import React from 'react';
import { Question } from '../dto/question';
import AnswersContainer from './answersContainer';
import '../pages/game.css';
import '../App.css';

interface CurrentQuestionPanelProps
{
  question: Question;
}

const CurrentQuestionPanel: React.FC<CurrentQuestionPanelProps> = ({ question }) =>
{
  return (
    <div className="current-question-panel">

      <span className="question">
        {question.question}
      </span>
      <AnswersContainer question={question} />
    </div>
  );
};

export default CurrentQuestionPanel;