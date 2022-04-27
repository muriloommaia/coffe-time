import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

export default function ProgressBar() {
  const { escritura, compartir, lectura } = useSelector((state: RootState) => state);

  const calcPercentage = (time: number, total: number) => Math.abs(Math.ceil(((time / total) * 100) - 100));

  const progress = () => {
    const total = escritura.time + compartir.time + lectura.time;
    const left = escritura.timeLeft + compartir.timeLeft + lectura.timeLeft;
    return calcPercentage(left, total);
  };
  return (
    <div className="w-full bg-gray-200 h-5 rounded-xl">
      <div className="h-5 bg-blue-800 rounded-xl text-center" style={{ width: `${progress()}%` }}>
        { ' ' }
        {`${progress()}%`}
      </div>
    </div>
  );
}
