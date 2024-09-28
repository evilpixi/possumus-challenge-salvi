import { configureStore } from '@reduxjs/toolkit';
import difficultyReducer from './features/difficultySlice';
import homeStatusReducer from './features/homeStatusSlice';
import currentCategoryReducer from './features/currentCategorySlice';
import gameReducer from './features/gameSlice';

const store = configureStore({
  reducer: {
    currentDifficulty: difficultyReducer,
    homeStatus: homeStatusReducer,
    currentCategory: currentCategoryReducer,
    game: gameReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
