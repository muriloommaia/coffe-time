import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrent, setTimes } from '../helpers/setsSlice';
import { RootState } from '../store';

export default function BoxComponent({ text, image }: { text: 'lectura' | 'escrita' | 'compartir'; image: string }) {
  const { time, timeLeft, active } = useSelector((state: RootState) => state[text]);
  const { active: activeGeneral } = useSelector((state: RootState) => state.current);
  console.log(time);
  const dispatch = useDispatch();
  const secondsToMinutes = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    return `${minutes}:${secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft}`;
  };
  const handleClick = () => {
    dispatch(setTimes[text].active(!active));
    dispatch(setCurrent.active(!activeGeneral));
  };
  return (
    <button
      type="button"
      className={`flex flex-col items-center cursor-pointer border-2 shadow-2xl hover:scale-105 ${active ? 'border-green-800' : 'border-black'}`}
      onClick={handleClick}
      disabled={(activeGeneral && !active)}
    >
      <div>
        {text.toUpperCase()}
      </div>
      <div className="w-10/12 m-auto p-2">
        <img src={image} alt={text} className="w-5/12 m-auto" />
      </div>
      <div>
        Faltan:
        { ' '}
        {secondsToMinutes(timeLeft)}
      </div>
    </button>
  );
}
