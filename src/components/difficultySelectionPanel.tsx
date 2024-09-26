import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Difficulties } from '../enums/difficulties';
import { setDifficulty } from '../features/difficultySlice';
import { RootState } from '../store';

const DifficultySelectionPanel: React.FC = () =>
{
  const dispatch = useDispatch();

  const difficulty = useSelector((state: RootState) => state.currentDifficulty.selectedDifficult);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
  {
    dispatch(setDifficulty(e.target.value as Difficulties));
  };

  return (
    <div>
      <label htmlFor="difficulty-select">Select Difficulty: </label>
      <select id="difficulty-select" value={difficulty} onChange={handleChange}>
        <option value={Difficulties.Easy}>Easy</option>
        <option value={Difficulties.Medium}>Medium</option>
        <option value={Difficulties.Hard}>Hard</option>
        <option value={Difficulties.Any}>Any!</option>
      </select>
      <p>Selected Difficulty: {difficulty}</p>

      <button onClick={() => { }}>PLAY</button>
    </div>
  );
};

export default DifficultySelectionPanel;