import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import '../App.css';
import CoolButton from '../components/coolButton';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetGame } from '../features/gameSlice';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize'
import { setHomeStatus } from '../features/homeStatusSlice';
import { HomeStatus } from '../enums/homeStatusEnum';

// Home component
const GameEnd: React.FC = () =>
{
  const gameEnded: boolean = useSelector((state: RootState) => state.game.gameEnd);
  const history = useSelector((state: RootState) => state.game.answerHistory);
  const score: number = history.filter((answer) => answer).length;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { width, height } = useWindowSize()

  const handlePlayAgain = () =>
  {
    dispatch(resetGame());
    navigate('/game');
  }

  const handleGoHome = () =>
  {
    dispatch(resetGame());
    dispatch(setHomeStatus(HomeStatus.SplashArt));
    navigate('/');
  }

  return (
    <div className='centered-view'>
      {
        gameEnded
          ? <div>
            <h1>Game Over!</h1>
            you got a score of {score} out of {history.length}
            <br />
            <br /><br /><br />
            <CoolButton onClick={handlePlayAgain} text={'Play Again'} />
            <CoolButton onClick={handleGoHome} text={'Go To Main Menu'} />
            <Confetti
              width={width}
              height={height}
            />
          </div>
          : "the game is not over yet"
      }
    </div>
  );
};

export default GameEnd;