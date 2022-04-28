import React, { MouseEvent, useEffect, useState } from 'react';
import { setLocalStorage } from '../helpers/localStorage';

export default function TitleComponent() {
  const [title, setTitle] = useState('...');
  const [edition, setEdition] = useState(false);

  useEffect(() => {
    const localTitle = localStorage.getItem('title');
    if (localTitle) {
      setTitle(JSON.parse(localTitle));
    }
  }, []);

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    if (edition) {
      setLocalStorage('title', title);
    }
    setEdition(!edition);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <div className="flex items-center pt-10  ">
      <div className="text-center p-2 flex">
        <div>
          <div className="bg-bottom bg-contain bg-bg-cup">
            <p className="text-6xl josefin-font">CAFÉ</p>
            <p className="text-4xl josefin-font -translate-y-3.5">-con-</p>
          </div>
          <div className="flex justify-center josefin-font font-extrabold text-orange2 drop-shadow-2xl">
            {edition ? (
              <input
                type="text"
                value={title}
                className="w-6/12 px-5 py-2 text-black focus:outline-none focus:bg-white border-2 border-gray-300 rounded-lg text-7xl text-center flex"
                onChange={handleChange}
              />
            ) : (
              <p className="text-6xl -translate-y-3.5">{title.toUpperCase()}</p>
            )}
          </div>

        </div>
        <button type="submit" className="text-black px-2" onClick={handleClick}>
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
  );
}
