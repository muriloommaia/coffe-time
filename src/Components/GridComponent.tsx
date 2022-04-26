import React from 'react';
import book from '../images/book.svg';
import talk from '../images/talk.svg';
import write from '../images/write.svg';
import { BoxType } from '../types/BoxType';
import BoxComponent from './BoxComponent';
import BoxTime from './BoxTime';

export default function GridComponent() {
  const grid:BoxType[] = [
    ['lectura', book],
    ['escrita', write],
    ['compartir', talk],
  ];
  const [timeChange, setTimeChange] = React.useState(false);

  const handleClick = () => {
    setTimeChange(!timeChange);
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
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={handleClick}
        >
          Cambiar tiempo
        </button>

      </div>
    </div>
  );
}
