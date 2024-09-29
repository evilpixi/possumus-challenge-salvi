import React from 'react';
import axios from 'axios';
import { Category } from '../dto/category';
import { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { setHomeStatus } from '../features/homeStatusSlice';
import { HomeStatus } from '../enums/homeStatusEnum';

import Loader from './loader';
import CategoryList from './categoryList';
import HomeControlPanel from './homeControlPanel';

import './homeCategorySelectPanel.css';
import '../App.css';



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
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {categories.length === 0
        ? <div className="loading">
          loading categories...
          <Loader />
        </div>
        : <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%'
        }}>
          <CategoryList categories={categories} />

        </div>}

      <HomeControlPanel
        showBack={true}
        onBack={handleGoBack}
        showNext={false} />
    </div>
  );
};

export default HomeCategorySelectionPanel;