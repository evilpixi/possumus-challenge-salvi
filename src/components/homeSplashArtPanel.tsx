import React from 'react';
import { useDispatch } from 'react-redux';
import { setHomeStatus } from '../features/homeStatusSlice';
import { HomeStatus } from '../enums/homeStatusEnum';
import CoolButton from './coolButton';

import './homeSplashArtPanel.css'
import '../App.css';

const HomeSplashArtPanel: React.FC = () =>
{
  const dispatch = useDispatch();

  const handleStart = () =>
  {
    dispatch(setHomeStatus(HomeStatus.CategorySelection));
  };

  return (
    <div className="centered-view">
      <div className="home">
        <h1 className="main-title">PIXI TRIVIA</h1>
        <CoolButton onClick={handleStart} text={"PLAY"} />
      </div>
    </div>
  );
};

export default HomeSplashArtPanel;