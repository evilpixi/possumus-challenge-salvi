import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { HomeStatus } from '../enums/homeStatusEnum'
import HomeCategorySelectionPanel from '../components/homeCategorySelectPanel';
import HomeSplashArtPanel from '../components/homeSplashArtPanel';
import DificultySelectionPanel from '../components/difficultySelectionanel';


// Home component
const Home: React.FC = () =>
{
  const homeStatus = useSelector((state: RootState) => state.homeStatus.homeStatus);

  return (< div >
    {
      homeStatus === HomeStatus.SplashArt &&
      <HomeSplashArtPanel />
    }

    {
      homeStatus === HomeStatus.CategorySelection &&
      <HomeCategorySelectionPanel />
    }

    {
      homeStatus === HomeStatus.DificultySelection &&
      <DificultySelectionPanel />
    }
  </div >)
};

export default Home;