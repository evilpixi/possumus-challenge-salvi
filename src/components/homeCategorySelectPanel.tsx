import React from 'react';
import axios from 'axios';
import { Category } from '../dto/category';
import { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { setHomeStatus } from '../features/homeStatusSlice';
import { HomeStatus } from '../enums/homeStatusEnum';

import Loader from './loader';
import CategoryList from './categoryList';

import './homeCategorySelectPanel.css';



const HomeCategorySelectionPanel: React.FC = () =>
{
  const [categories, setCategories] = useState<Category[]>([]);
  const dispatch = useDispatch();

  const handleGoBack = () =>
  {
    dispatch(setHomeStatus(HomeStatus.SplashArt));
  }

  useEffect(() =>
  {
    axios.get('https://opentdb.com/api_category.php')
      .then((res) =>
      {
        const categoryList: Category[] = res.data.trivia_categories

        console.table(categoryList)
        setCategories(categoryList)
      })
      .catch((error) =>
      {
        console.error('Error fetching data:', error);
      })
  }, [])

  return (
    <div>
      {categories.length === 0
        ? <div className="loading">
          loading categories...
          <Loader />
        </div>
        : <div>
          <CategoryList categories={categories} />
          <button onClick={() => handleGoBack()}>Back</button>
        </div>}
    </div>
  );
};

export default HomeCategorySelectionPanel;