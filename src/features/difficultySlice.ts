import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Difficulties } from '../enums/difficulties';

interface DifficultyState
{
  selectedDifficult: Difficulties;
}

const initialState: DifficultyState = {
  selectedDifficult: Difficulties.Any,
};

const difficultySlice = createSlice({
  name: 'difficulty',
  initialState,
  reducers: {
    setDifficulty: (state, action: PayloadAction<Difficulties>) =>
    {
      state.selectedDifficult = action.payload;
    }
  },
});

export const { setDifficulty } = difficultySlice.actions;

export default difficultySlice.reducer;