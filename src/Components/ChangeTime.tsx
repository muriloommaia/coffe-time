import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrent, setTimes } from '../helpers/setsSlice';
import { RootState } from '../store';
import { setTimeChange } from '../store/currentSlice';
import { MomentType } from '../types/BoxType';

type currentSelect = {
  active: boolean;
  timeChange: boolean
  moment: MomentType;
};

export default function ChangeTime() {
  const dispatch = useDispatch();
  const { active, moment, timeChange } = useSelector((state:RootState) => state.current as currentSelect);
  const handleClick = () => {
    if (active) {
      dispatch(setCurrent.active(false));
      clearInterval(+JSON.parse(localStorage.getItem('interval') as string));
      dispatch(setTimes[moment].active(false));
    } else {
      dispatch(setTimeChange(!timeChange));
    }
  };
  return (
    <div>
      { !active
        ? (
          <button
            type="button"
            className="bg-blue-500 hover:border-white1 hover:scale-105 text-white font-bold py-2 px-4 rounded-full border-2 border-orange2 bg-orange2 m-0"
            onClick={handleClick}
          >
            <p className="translate-y-0.5">
              Cambiar tiempo
            </p>
          </button>
        )
        : (
          <button
            type="button"
            className="bg-blue-500 hover:border-white1 hover:scale-105 text-white font-bold py-2 px-4 rounded-full border-2 border-orange2 bg-orange2 m-0"
            onClick={handleClick}
          >
            <p className="translate-y-0.5">
              Pause
            </p>
          </button>
        )}
    </div>
  );
}
