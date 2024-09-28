import React from 'react';
import './coolButton.css';

interface CoolButtonProps
{
  text: string;
  onClick: () => void;
}

const CoolButton: React.FC<CoolButtonProps> = ({ text, onClick }) =>
{
  return (
    <button className="cool-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default CoolButton;