import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTimes } from '../helpers/setsSlice';
import { RootState } from '../store';
import { MomentType } from '../types/BoxType';

export default function BoxTime({ text, image }: { text: MomentType; image: string }) {
  const { time, active } = useSelector((state: RootState) => state[text]);
  const dispatch = useDispatch();

  const secondsToMinutes = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    return minutes;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const minutes = parseInt(value, 10);
    dispatch(setTimes[text].time(minutes * 60));
  };
  return (
    <div className={`flex flex-col items-center text-blue1 rounded-lg cursor-pointer border-2 bg-blue3 hover:scale-105 ${active ? 'border-green-800' : 'border-black'} md:min-h-[250px]`}>
      <div className="pt-3">
        {text.toUpperCase()}
      </div>
      <div className="w-10/12 m-auto p-2">
        <img src={image} alt={text} className="w-5/12 m-auto fill-orange2" />
      </div>
      <div className="w-10/12 m-auto p-2 flex flex-wrap">
        <input
          type="number"
          value={secondsToMinutes(time)}
          onChange={handleChange}
          className="w-5/12 m-auto flex  bg-blue3 border-2 rounded-lg text-center text-blue1 text-xl"
        />
        <p>minutos</p>
      </div>
    </div>
  );
}
