import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

// Home component
const GameEnd: React.FC = () =>
{
  const gameEnded: boolean = useSelector((state: RootState) => state.game.gameEnd);
  const history = useSelector((state: RootState) => state.game.answerHistory);
  const score: number = history.filter((answer) => answer).length;
  return (
    <div>
      {
        gameEnded
          ? <div>
            <h1>Game Over!</h1>
            you got a score of {score} of {history.length}
            <br />
            <a href="/">Play Again</a>
          </div>
          : "the game is not over yet"
      }
    </div>
  );
};

export default GameEnd;