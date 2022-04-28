import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrent, setTimes } from '../helpers/setsSlice';
import beep from '../sounds/beep.wav';
import { RootState } from '../store';
import { MomentType } from '../types/BoxType';

export default function BoxComponent(
  { text, image }: { text: MomentType; image: string },
) {
  const { timeLeft, active } = useSelector((state: RootState) => state[text]);
  const { active: activeGeneral } = useSelector((state: RootState) => state.current);
  const dispatch = useDispatch();
  const [time, setTime] = React.useState(timeLeft);
  const audio = new Audio(beep);
  const secondsToMinutes = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    return `${minutes}:${secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft}`;
  };

  const controlTime = () => {
    const second = 1000;
    let nextDate = new Date().getTime() + second;
    if (!active && !activeGeneral) {
      const interval = setInterval(() => {
        const date = new Date().getTime();
        setTime((prev) => {
          if (date > nextDate && prev > 0) {
            dispatch((setTimes[text].timeLeft()));
            nextDate = date + second;
            return prev - 1;
          }
          if (prev <= 0) {
            dispatch(setCurrent.active(false));
            dispatch(setTimes[text].active(false));
            clearInterval(interval);
            audio.play();
            return 0;
          }
          return prev;
        });
      }, 10);
      localStorage.setItem('interval', JSON.stringify(interval));
    }
    if (active && activeGeneral) {
      const interval = +JSON.parse(localStorage.getItem('interval') as string);
      clearInterval(interval);
    }
  };

  const handleClick = async () => {
    dispatch(setTimes[text].active(!active));
    dispatch(setCurrent.active(!activeGeneral));
    dispatch(setCurrent.moment(text));
    controlTime();
  };

  return (
    <button
      type="button"
      className={`flex flex-col items-center text-blue1 rounded-lg cursor-pointer border-2  ${!activeGeneral ? 'hover:scale-105 shadow-xl' : 'bg-gray-400 opacity-50'} ${active ? 'border-green-800 border-4 rounded-md shadow-2xl scale-105 opacity-100 bg-green-200 hover:scale-110' : 'border-black '} bg-blue3`}
      onClick={handleClick}
      disabled={(activeGeneral && !active)}
    >
      <div className="pt-3">
        {text.toUpperCase()}
      </div>
      <div className="w-10/12 m-auto p-2">
        <img src={image} alt={text} className="w-5/12 m-auto fill-orange2" />
      </div>
      <div className="pb-4">
        Faltan:
        { ' '}
        {secondsToMinutes(time)}
      </div>
    </button>
  );
}
