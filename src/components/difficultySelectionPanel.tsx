import React from 'react';
import { RootState } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { Difficulties } from '../enums/difficulties';
import { setHomeStatus } from '../features/homeStatusSlice';
import { HomeStatus } from '../enums/homeStatusEnum';
import { useNavigate } from 'react-router-dom';
import HomeControlPanel from './homeControlPanel';
import DifficultyButton from './difficultyButton';
import '../App.css';
import './difficultySelectionPanel.css';


const DifficultySelectionPanel: React.FC = () =>
{
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const category = useSelector((state: RootState) => state.currentCategory);

  const difficulty = useSelector((state: RootState) => state.currentDifficulty.selectedDifficult);

  const handleGoBack = () =>
  {
    dispatch(setHomeStatus(HomeStatus.CategorySelection));
  }

  const handlePlay = () =>
  {
    navigate('/game');
  };

  return (
    <div className='difficulty-panel'>
      <h2 className='title'>Choose a difficulty</h2>
      <p>Selected category:</p>
      <p>{category.currentCategoryName}</p>

      <div className="difficulty-buttons-container">
        <div className="main-difficulty-buttons-container">
          <DifficultyButton difficulty={Difficulties.Easy} />
          <DifficultyButton difficulty={Difficulties.Medium} />
          <DifficultyButton difficulty={Difficulties.Hard} />
        </div>
        <DifficultyButton difficulty={Difficulties.Any} />
      </div>
      <p>Selected Difficulty: {difficulty}</p>

      <HomeControlPanel
        showBack={true}
        onBack={handleGoBack}
        showNext={true}
        onNext={handlePlay}
        nextText={`Play on ${difficulty} Difficulty`} />
    </div>
  );
};

export default DifficultySelectionPanel;