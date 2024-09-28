import React from 'react';
import { Question } from '../dto/question';

interface CurrentQuestionPanelProps
{
  question: Question;
}

const CurrentQuestionPanel: React.FC<CurrentQuestionPanelProps> = ({ question }) =>
{
  console.log(question);
  return (
    <div className="current-question-panel">
      {question.question}
    </div>
  );
};

export default CurrentQuestionPanel;