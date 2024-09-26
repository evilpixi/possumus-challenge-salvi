import React from 'react';
import { useDispatch } from 'react-redux';
import { setHomeStatus } from '../features/homeStatusSlice';
import { HomeStatus } from '../enums/homeStatusEnum';

import './playButton.css';

const HomeSplashArtPanel: React.FC = () =>
{
  const dispatch = useDispatch();

  const handleStart = () =>
  {
    dispatch(setHomeStatus(HomeStatus.CategorySelection));
  };

  return (
    <div>
      <h2>The trivia for you and your friends</h2>
      <button className="big-button" onClick={handleStart}>Play!</button>
    </div>
  );
};

export default HomeSplashArtPanel;