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
    <div>
      <div>
        <p>Café con</p>
        <div>
          <button type="button" className="text-black" onClick={handleClick}>
            {edition
              ? <p className="text-black"><i className="fa-solid fa-check" /></p> : <p className="text-black"><i className="fa-solid fa-pen-to-square" /></p>}
          </button>
          {edition ? (
            <input type="text" value={title} onChange={handleChange} />
          ) : (
            <p>{title}</p>
          )}
        </div>
      </div>
      <div>
        <img src={coffeeIcon} alt="coffee icon" />
      </div>
    </div>
  );
}
