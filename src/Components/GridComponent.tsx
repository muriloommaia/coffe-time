import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrent, setTimes } from '../helpers/setsSlice';
import book from '../images/book.svg';
import talk from '../images/talk.svg';
import write from '../images/write.svg';
import { RootState } from '../store';
import { BoxType, MomentType } from '../types/BoxType';
import BoxComponent from './BoxComponent';
import BoxTime from './BoxTime';

type currentSelect = {
  active: boolean;
  moment: MomentType;
};

export default function GridComponent() {
  const grid:BoxType[] = [
    ['lectura', book],
    ['escritura', write],
    ['compartir', talk],
  ];
  const dispatch = useDispatch();
  const [timeChange, setTimeChange] = React.useState(false);
  const { active, moment } = useSelector((state:RootState) => state.current as currentSelect);
  const handleClick = () => {
    if (active) {
      dispatch(setCurrent.active(false));
      clearInterval(+JSON.parse(localStorage.getItem('interval') as string));
      dispatch(setTimes[moment].active(false));
    } else {
      setTimeChange(!timeChange);
    }
  };

  function renderBoxes() {
    return grid.map(([text, image]) => <BoxComponent text={text} image={image} key={text} />);
  }

  function renderTime() {
    return grid.map(([text, image]) => <BoxTime text={text} image={image} key={text} />);
  }
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-11/12">
        <div className="grid grid-cols-3 gap-4 ">
          { timeChange ? renderTime() : renderBoxes() }
        </div>
      </div>
      <div className="pt-6">
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
    </div>
  );
}
