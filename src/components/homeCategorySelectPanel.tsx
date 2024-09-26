import React from 'react';
import './playButton.css';
import axios from 'axios';
import { Category } from '../dto/category';
import { useState, useEffect } from 'react';

import Loader from './loader';
import CategoryList from './categoryList';



const HomeCategorySelectionPanel: React.FC = () =>
{
  const [categories, setCategories] = useState<Category[]>([]);

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
        ? <div>
          loading categories...
          <Loader />
        </div>
        : <div>
          <CategoryList categories={categories} />
          <button onClick={() =>
          {
            window.location.href = '/';
          }}>Back</button>
        </div>}
    </div>
  );
};

export default HomeCategorySelectionPanel;