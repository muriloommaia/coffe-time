import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'current',
  initialState: {
    active: false,
    moment: '',
    timeLeft: 0,
  },
  reducers: {
    setActiveCurrent(state, { payload }) {
      return { ...state, active: payload };
    },
    setMomentCurrent(state, { payload }) {
      return { ...state, moment: payload };
    },
    setTimeLeftCurrent(state, { payload }) {
      return { ...state, timeLeft: payload };
    },
  },
});

export const { setActiveCurrent, setMomentCurrent, setTimeLeftCurrent } = slice.actions;

export default slice.reducer;
