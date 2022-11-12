/* eslint-disable no-unused-vars */

import React from 'react';

/* eslint-disable react/react-in-jsx-scope */
type Props = {
  handleChange: (type: 'title' | 'subTitle', e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  value: string;
  type: 'title' | 'subTitle';
}

function InputString({ handleChange, value, type, className }: Props) {
  return (
    <input
      type="text"
      value={value}
      className={`${className} w-6/12 px-5 py-2 text-black focus:outline-none focus:bg-white border-2 border-gray-300 rounded-lg text-7xl text-center flex  text-orange2`}
      onChange={(e) => handleChange(type, e)}
    />
  );
}

InputString.defaultProps = {
  className: '',
};

export default InputString;
