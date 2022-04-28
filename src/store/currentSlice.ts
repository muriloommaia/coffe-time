import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'current',
  initialState: {
    active: false,
    moment: '',
    timeLeft: 0,
    timeChange: false,
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
    setTimeChange(state, { payload }) {
      return { ...state, timeChange: payload };
    },
  },
});

export const { setActiveCurrent, setMomentCurrent, setTimeLeftCurrent, setTimeChange } = slice.actions;

export default slice.reducer;
