import React, { MouseEvent, useEffect, useState } from 'react';
import { setLocalStorage } from '../helpers/localStorage';
import InputString from './InputString';
import { FlexDiv } from './Utils';

export default function TitleComponent() {
  const [title, setTitle] = useState('...');
  const [subTitle, setSubTitle] = useState('...');
  const [edition, setEdition] = useState(false);

  useEffect(() => {
    const localTitle = localStorage.getItem('title');
    const localSubTitle = localStorage.getItem('subTitle');
    if (localTitle) {
      setTitle(JSON.parse(localTitle));
    }
    if (localSubTitle) {
      setSubTitle(JSON.parse(localSubTitle));
    }
  }, []);
  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        setEdition(false);
      }
    });
  }, []);

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    if (edition) {
      setLocalStorage('subTitle', subTitle);
      setLocalStorage('title', title);
    }
    setEdition(!edition);
  };

  const handleChange = (type: 'title' | 'subTitle', e: React.ChangeEvent<HTMLInputElement>) => {
    const usedFunction = {
      title: setTitle,
      subTitle: setSubTitle,
    };
    usedFunction[type](e.target.value);
  };

  return (
    <div className="flex items-center pt-10  ">
      <div className="text-center p-2 flex">
        <div>
          <FlexDiv flexDirection="column" alignItems="center" className="bg-bottom bg-contain">
            {edition ? (
              <InputString className="mb-4" handleChange={handleChange} value={title} type="title" />
            ) : (
              <p className="text-6xl josefin-font">{title.toUpperCase()}</p>

            )}
            <p className="text-4xl josefin-font -translate-y-3.5">-con-</p>
          </FlexDiv>
          <div className="flex justify-center josefin-font font-extrabold text-orange2 drop-shadow-2xl">
            {edition ? (
              <InputString handleChange={handleChange} value={subTitle} type="subTitle" />
            ) : (
              <p className="text-6xl -translate-y-3.5">{subTitle.toUpperCase()}</p>
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
