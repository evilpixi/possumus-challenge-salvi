import { configureStore } from '@reduxjs/toolkit';
import difficultyReducer from './features/difficultySlice';
import homeStatusReducer from './features/homeStatusSlice';
import currentCategoryReducer from './features/currentCategorySlice';

const store = configureStore({
  reducer: {
    currentDifficulty: difficultyReducer,
    homeStatus: homeStatusReducer,
    currentCategory: currentCategoryReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
