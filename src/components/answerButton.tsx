import React, { useEffect } from 'react';
import './answerButton.css';
import { ButtonStatus } from '../enums/buttonStatus';
import { useState } from 'react';

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

const AnswerButton: React.FC<AnswerButtonProps> = ({ label, onClick, status, replied }) =>
{
  const [clicked, setClicked] = useState(false);
  const className = `${btnClasses.default} ${btnClasses[status]} ${clicked ? 'btn-clicked' : ''}`;

  useEffect(() =>
  {
    if (!replied) setClicked(false);
  }, [replied]);

  const handleClick = () =>
  {
    setClicked(true);
    onClick();
  };

  return (
    <button onClick={handleClick}
      className={className}
      disabled={replied}>
      {label}
    </button>
  );
};



export default AnswerButton;