import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'lectura',
  initialState: {
    active: false,
    time: 600,
    timeLeft: 600,
  },
  reducers: {
    setActiveLectura(state, { payload }) {
      return { ...state, active: payload };
    },
    setTimeLectura(state, { payload }) {
      return { ...state, time: payload, timeLeft: payload };
    },
    setTimeLeftLectura(state) {
      return { ...state, timeLeft: state.timeLeft - 1 };
    },
  },
});

export const { setActiveLectura, setTimeLectura, setTimeLeftLectura } = slice.actions;
export default slice.reducer;
