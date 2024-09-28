import React, { useEffect, useState } from 'react';

interface AnswersContainerProps
{
  answers: string[];
}

const shuffleArray = (array: string[]) =>
{
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--)
  {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const AnswersContainer: React.FC<AnswersContainerProps> = ({ answers }) =>
{
  const [shuffledAnswers, setShuffledAnswers] = useState<string[]>([]);

  useEffect(() =>
  {
    setShuffledAnswers(shuffleArray([...answers]));
  }, [answers]);

  return (
    <div>
      {shuffledAnswers.map((answer, index) => (
        <button key={index}>{answer}</button>
      ))}
    </div>
  );
};

export default AnswersContainer;