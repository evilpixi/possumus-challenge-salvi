import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentCategory } from '../features/currentCategorySlice';
import { setHomeStatus } from '../features/homeStatusSlice';
import { HomeStatus } from '../enums/homeStatusEnum';

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
      <h2>Choose a category</h2>
      <ul>
        {categories.map((category) => (
          <div key={category.id}>
            <button onClick={() => handleCategorySelect(category.id)}>{category.name}</button>
          </div>
        ))}
        <div key={-1}>
          <button onClick={() => handleCategorySelect(null)}>All!</button>
        </div>
      </ul>
    </div >
  );
};

export default CategoryList;