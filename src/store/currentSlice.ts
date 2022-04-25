import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'current',
  initialState: {
    active: false,
    moment: '',
  },
  reducers: {
    setActiveCurrent(state, { payload }) {
      return { ...state, active: payload };
    },
    setMomentCurrent(state, { payload }) {
      return { ...state, moment: payload };
    },
  },
});

export const { setActiveCurrent, setMomentCurrent } = slice.actions;

export default slice.reducer;
