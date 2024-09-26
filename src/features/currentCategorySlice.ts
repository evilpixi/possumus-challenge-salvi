import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CategoryState
{
  currentCategory: number | null;
}

const initialState: CategoryState = {
  currentCategory: null,
};


const currentCategorySlice = createSlice({
  name: 'currentCategory',
  initialState,
  reducers: {
    setCurrentCategory: (state, action: PayloadAction<number | null>) =>
    {
      console.log("setCurrentCategory", action.payload);
      state.currentCategory = action.payload;
    }
  },
});

export const { setCurrentCategory } = currentCategorySlice.actions;
export default currentCategorySlice.reducer;