import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'compartir',
  initialState: {
    active: false,
    time: 1500,
    timeLeft: 1500,
  },
  reducers: {
    setActiveCompartir(state, { payload }) {
      return { ...state, active: payload };
    },
    setTimeCompartir(state, { payload }) {
      return { ...state, time: payload, timeLeft: payload };
    },
    setTimeLeftCompartir(state) {
      return { ...state, timeLeft: state.timeLeft - 1 };
    },
  },
});

export const { setActiveCompartir, setTimeCompartir, setTimeLeftCompartir } = slice.actions;

export default slice.reducer;
