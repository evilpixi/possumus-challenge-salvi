import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDifficulty } from '../features/difficultySlice'
import { Difficulties } from '../enums/difficulties';
import { RootState } from '../store';
import './difficultySelectionPanel.css';

interface DifficultyButtonProps
{
  difficulty: Difficulties;
}

const DifficultyButton: React.FC<DifficultyButtonProps> = ({ difficulty }) =>
{
  const dispatch = useDispatch();
  const currentDifficulty = useSelector((state: RootState) => state.currentDifficulty.selectedDifficult);

  return (
    <button
      onClick={() => dispatch(setDifficulty(difficulty))}
      className={`btn-diff ${currentDifficulty === difficulty ? 'selected' : ''}`}
    >
      {difficulty}
    </button>
  );
};

export default DifficultyButton;
