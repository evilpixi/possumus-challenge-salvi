import React from 'react';
import { RootState } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { Difficulties } from '../enums/difficulties';
import { setDifficulty } from '../features/difficultySlice';
import { setHomeStatus } from '../features/homeStatusSlice';
import { HomeStatus } from '../enums/homeStatusEnum';
import { useNavigate } from 'react-router-dom';


const DifficultySelectionPanel: React.FC = () =>
{
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const difficulty = useSelector((state: RootState) => state.currentDifficulty.selectedDifficult);

  const handleGoBack = () =>
  {
    dispatch(setHomeStatus(HomeStatus.CategorySelection));
  }

  const handlePlay = () =>
  {
    navigate('/game');
  };

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

      <button onClick={handleGoBack}>BACK</button>
      <button onClick={handlePlay}>PLAY</button>
    </div>
  );
};

export default DifficultySelectionPanel;