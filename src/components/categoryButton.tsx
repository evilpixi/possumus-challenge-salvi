import React from 'react';
import './categoryButton.css';

interface CategoryButtonProps
{
  text: string;
  onClick: () => void;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ text, onClick }) =>
{
  return (
    <button className="category-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default CategoryButton;