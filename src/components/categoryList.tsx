import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentCategory } from '../features/currentCategorySlice';
import { setHomeStatus } from '../features/homeStatusSlice';
import { HomeStatus } from '../enums/homeStatusEnum';
import CategoryButton from './categoryButton';
import './homeCategorySelectPanel.css';

interface CategoryListProps
{
  categories: { id: number; name: string }[];
}



const CategoryList: React.FC<CategoryListProps> = ({ categories }) =>
{
  const dispatch = useDispatch();

  const handleCategorySelect = (category: number | null) =>
  {
    dispatch(setCurrentCategory(category));
    dispatch(setHomeStatus(HomeStatus.DificultySelection));
  }

  return (
    <div>
      <h2 className='title'>Choose a category</h2>
      <ul className='category-list'>
        {categories.map((category) => (

          <CategoryButton
            key={category.id}
            text={category.name}
            onClick={() => handleCategorySelect(category.id)}
          />
        ))}
        <div key={-1}>
          <button onClick={() => handleCategorySelect(null)}>All!</button>
        </div>
      </ul>
    </div >
  );
};

export default CategoryList;