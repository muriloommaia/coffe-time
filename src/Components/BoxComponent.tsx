import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrent, setTimes } from '../helpers/setsSlice';
import { RootState } from '../store';

export default function BoxComponent(
  { text, image }: { text: 'lectura' | 'escrita' | 'compartir'; image: string },
) {
  const { timeLeft, active } = useSelector((state: RootState) => state[text]);
  const { active: activeGeneral } = useSelector((state: RootState) => state.current);
  const dispatch = useDispatch();
  const [time, setTime] = React.useState(timeLeft);

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
            return 0;
          }
          return prev;
        });
      }, 500);
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
    controlTime();
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
        {secondsToMinutes(time)}
      </div>
    </button>
  );
}
