import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'escritura',
  initialState: {
    active: false,
    time: 1500,
    timeLeft: 1500,
  },
  reducers: {
    setActiveEscritura(state, { payload }) {
      return { ...state, active: payload };
    },
    setTimeEscritura(state, { payload }) {
      return { ...state, time: payload, timeLeft: payload };
    },
    setTimeLeftEscritura(state) {
      return { ...state, timeLeft: state.timeLeft - 1 };
    },
  },
});

export const { setActiveEscritura, setTimeEscritura, setTimeLeftEscritura } = slice.actions;

export default slice.reducer;
