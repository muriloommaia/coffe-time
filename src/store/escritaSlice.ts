import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'escrita',
  initialState: {
    active: false,
    time: 1200,
    timeLeft: 1200,
  },
  reducers: {
    setActiveEscrita(state, { payload }) {
      return { ...state, active: payload };
    },
    setTimeEscrita(state, { payload }) {
      return { ...state, time: payload };
    },
    setTimeLeftEscrita(state, { payload }) {
      return { ...state, timeLeft: payload };
    },
  },
});

export const { setActiveEscrita, setTimeEscrita, setTimeLeftEscrita } = slice.actions;

export default slice.reducer;
