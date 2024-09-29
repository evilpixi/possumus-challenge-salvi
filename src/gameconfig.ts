interface GameConfig
{
  amount: number;
  type: string;
  api: string;
}

const gameConfig: GameConfig = {
  amount: 5,
  type: 'multiple',
  api: 'https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple'
};

export default gameConfig;