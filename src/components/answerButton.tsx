import React from 'react';
import './answerButton.css';
import { ButtonStatus } from '../enums/buttonStatus';

const btnClasses = {
  correct: 'btn-correct',
  incorrect: 'btn-incorrect',
  default: 'btn-default'
};

interface AnswerButtonProps
{
  label: string;
  onClick: () => void;
  status: ButtonStatus;
  replied: boolean;
}

const AnswerButton: React.FC<AnswerButtonProps> = ({
  label, onClick, status, replied
}) =>
{
  const className = btnClasses[status];
  return (
    <button onClick={onClick}
      className={className}
      disabled={replied}>
      {label}
    </button>
  );
};

export default AnswerButton;