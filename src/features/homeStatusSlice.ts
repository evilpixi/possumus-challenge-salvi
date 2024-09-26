import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HomeStatus } from '../enums/homeStatusEnum';

interface HomeState
{
  homeStatus: HomeStatus;
}

const initialState: HomeState = {
  homeStatus: HomeStatus.SplashArt,
};

const homeStatusSlice = createSlice({
  name: 'homeStatus',
  initialState,
  reducers: {
    setHomeStatus: (state, action: PayloadAction<HomeStatus>) =>
    {
      state.homeStatus = action.payload;
    }
  },
});

export const { setHomeStatus } = homeStatusSlice.actions;
export default homeStatusSlice.reducer;