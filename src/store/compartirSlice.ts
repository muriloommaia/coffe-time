import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'compartir',
  initialState: {
    active: false,
    time: 1200,
    timeLeft: 1200,
  },
  reducers: {
    setActiveCompartir(state, { payload }) {
      return { ...state, active: payload };
    },
    setTimeCompartir(state, { payload }) {
      return { ...state, time: payload };
    },
    setTimeLeftCompartir(state, { payload }) {
      return { ...state, timeLeft: payload };
    },
  },
});

export const { setActiveCompartir, setTimeCompartir, setTimeLeftCompartir } = slice.actions;

export default slice.reducer;
