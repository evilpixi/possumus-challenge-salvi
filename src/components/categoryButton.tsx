import React from 'react';
import './categoryButton.css';

interface CategoryButtonProps
{
  text: string;
  onClick: () => void;
  extraClass?: string;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ text, onClick, extraClass }) =>
{
  return (
    <button className={"category-button " + extraClass} onClick={onClick}>
      {text}
    </button>
  );
};

export default CategoryButton;