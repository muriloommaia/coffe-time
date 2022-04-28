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
    <div className="w-full bg-blue3 h-8 rounded-xl flex items-center border-4 border-blue3">
      <div className="h-5 bg-orange2 rounded-xl text-center text-blue1 bg-bg-progressBar" style={{ width: `${progress()}%` }}>
        { ' ' }
        {`${progress()}%`}
      </div>
    </div>
  );
}
