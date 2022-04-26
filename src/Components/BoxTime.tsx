import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setTimeCompartir, setTimeLeftCompartir } from '../store/compartirSlice';
import { setTimeEscrita, setTimeLeftEscrita } from '../store/escritaSlice';
import { setTimeLectura, setTimeLeftLectura } from '../store/lecturaSlice';

export default function BoxTime({ text, image }: { text: 'lectura' | 'escrita' | 'compartir'; image: string }) {
  const { time, active } = useSelector((state: RootState) => state[text]);
  const dispatch = useDispatch();
  const setTimes = {
    lectura: {
      time: setTimeLectura,
      timeLeft: setTimeLeftLectura,
    },
    escrita: {
      time: setTimeEscrita,
      timeLeft: setTimeLeftEscrita,
    },
    compartir: {
      time: setTimeCompartir,
      timeLeft: setTimeLeftCompartir,
    },
  };
  const secondsToMinutes = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    return minutes;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const minutes = parseInt(value, 10);
    dispatch(setTimes[text].time(minutes * 60));
    dispatch(setTimes[text].timeLeft(minutes * 60));
  };
  return (
    <div className={`flex flex-col items-center cursor-pointer border-2 shadow-2xl hover:scale-105 ${active ? 'border-green-800' : 'border-black'}`}>
      <div>
        {text.toUpperCase()}
      </div>
      <div className="w-10/12 m-auto p-2">
        <img src={image} alt={text} className="w-5/12 m-auto" />
      </div>
      <div className="w-10/12 m-auto p-2 flex ">
        <input
          type="number"
          value={secondsToMinutes(time)}
          onChange={handleChange}
          className="w-5/12 m-auto"
        />
        <p>minutos</p>
      </div>
    </div>
  );
}
