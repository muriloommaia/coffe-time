import { setActiveCompartir, setTimeCompartir, setTimeLeftCompartir } from '../store/compartirSlice';
import { setActiveCurrent, setMomentCurrent, setTimeLeftCurrent } from '../store/currentSlice';
import { setActiveEscrita, setTimeEscrita, setTimeLeftEscrita } from '../store/escritaSlice';
import { setActiveLectura, setTimeLectura, setTimeLeftLectura } from '../store/lecturaSlice';

export const setTimes = {
  lectura: {
    time: setTimeLectura,
    timeLeft: setTimeLeftLectura,
    active: setActiveLectura,
  },
  escrita: {
    time: setTimeEscrita,
    timeLeft: setTimeLeftEscrita,
    active: setActiveEscrita,
  },
  compartir: {
    time: setTimeCompartir,
    timeLeft: setTimeLeftCompartir,
    active: setActiveCompartir,
  },
};

export const setCurrent = {
  active: setActiveCurrent,
  moment: setMomentCurrent,
  timeLeft: setTimeLeftCurrent,
};
