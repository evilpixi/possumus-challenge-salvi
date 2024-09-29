import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import '../App.css';
import CoolButton from '../components/coolButton';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetGame } from '../features/gameSlice';

// Home component
const GameEnd: React.FC = () =>
{
  const gameEnded: boolean = useSelector((state: RootState) => state.game.gameEnd);
  const history = useSelector((state: RootState) => state.game.answerHistory);
  const score: number = history.filter((answer) => answer).length;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlePlayAgain = () =>
  {
    navigate('/');
    dispatch(resetGame());
  }

  return (
    <div className='centered-view'>
      {
        gameEnded
          ? <div>
            <h1>Game Over!</h1>
            you got a score of {score} of {history.length}
            <br />
            <CoolButton onClick={handlePlayAgain} text={'Play Again'} />
          </div>
          : "the game is not over yet"
      }
    </div>
  );
};

export default GameEnd;