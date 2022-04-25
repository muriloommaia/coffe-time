import React, { useState } from 'react';
import coffeeIcon from '../images/coffee-icon-svgrepo-com.svg';

export default function TitleComponent() {
  const [title, setTitle] = useState('...');
  const [edition, setEdition] = useState(false);

  const handleClick = () => {
    setEdition(!edition);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <div className="flex items-center">
      <div className="text-center p-2">
        <p className="text-6xl josefin-font">Café con</p>
        <div className="flex justify-center square-font">
          {edition ? (
            <input
              type="text"
              value={title}
              className="w-6/12 px-5 py-2 text-black focus:outline-none focus:bg-white border-2 border-gray-300 rounded-lg text-7xl text-center"
              onChange={handleChange}
            />
          ) : (
            <p className="text-8xl">{title}</p>
          )}
          <button type="button" className="text-black px-2" onClick={handleClick}>
            {edition
              ? (
                <p className="text-black">
                  <i className="fa-solid fa-check" />
                </p>
              )
              : (
                <p className="text-black">
                  <i className="fa-solid fa-pen-to-square" />
                </p>
              )}
          </button>
        </div>
      </div>
      <div>
        <img src={coffeeIcon} alt="coffee icon" width="50px" />
      </div>
    </div>
  );
}
