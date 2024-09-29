import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CategoryState
{
  currentCategory: number | null;
  currentCategoryName: string | null;
}

const initialState: CategoryState = {
  currentCategory: null,
  currentCategoryName: null,
};


const currentCategorySlice = createSlice({
  name: 'currentCategory',
  initialState,
  reducers: {
    setCurrentCategory: (state, action: PayloadAction<number | null>) =>
    {
      console.log("setCurrentCategory", action.payload);
      state.currentCategory = action.payload;
    },
    setCurrentCategoryName: (state, action: PayloadAction<string | null>) =>
    {
      state.currentCategoryName = action.payload;
    }
  },
});

export const { setCurrentCategory, setCurrentCategoryName } = currentCategorySlice.actions;
export default currentCategorySlice.reducer;