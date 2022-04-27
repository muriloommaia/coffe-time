import { setActiveCompartir, setTimeCompartir, setTimeLeftCompartir } from '../store/compartirSlice';
import { setActiveCurrent, setMomentCurrent, setTimeLeftCurrent } from '../store/currentSlice';
import { setActiveEscritura, setTimeEscritura, setTimeLeftEscritura } from '../store/escrituraSlice';
import { setActiveLectura, setTimeLectura, setTimeLeftLectura } from '../store/lecturaSlice';

export const setTimes = {
  lectura: {
    time: setTimeLectura,
    timeLeft: setTimeLeftLectura,
    active: setActiveLectura,
  },
  escritura: {
    time: setTimeEscritura,
    timeLeft: setTimeLeftEscritura,
    active: setActiveEscritura,
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
