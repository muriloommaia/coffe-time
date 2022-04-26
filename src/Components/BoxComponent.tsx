import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

export default function BoxComponent({ text, image }: { text: 'lectura' | 'escrita' | 'compartir'; image: string }) {
  const { time, timeLeft, active } = useSelector((state: RootState) => state[text]);
  console.log(time);
  const secondsToMinutes = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    return `${minutes}:${secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft}`;
  };
  return (
    <div className={`flex flex-col items-center cursor-pointer border-2 shadow-2xl hover:scale-105 ${active ? 'border-green-800' : 'border-black'}`}>
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
    </div>
  );
}
