import React from 'react';
import book from '../images/book.svg';
import talk from '../images/talk.svg';
import write from '../images/write.svg';
import { BoxType } from '../types/BoxType';
import BoxComponent from './BoxComponent';

export default function GridComponent() {
  const grid:BoxType[] = [
    ['lectura', book],
    ['escrita', write],
    ['compartir', talk],
  ];
  return (
    <div className="w-11/12">
      <div className="grid grid-cols-3 gap-4 ">
        {grid.map(([text, image]) => (
          <BoxComponent text={text} image={image} />
        ))}
      </div>
    </div>
  );
}
