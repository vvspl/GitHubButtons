import React from 'react';
import './icon.css';

const Icon = ({ name, selectIco }) => {
  const onValueChange = (event) => {
    selectIco(event.target.value);
  };

  return (
    <div className="icon">
      <h3 className='icoName'>{name}</h3>
      <div className={`ico+${name}`}>
        <input
          className="radioIco"
          type="radio"
          value={name}
          name="icons"
          onChange={onValueChange}
        />
        <img className="image" src={`/img/${name}.png`} alt={name} />
      </div>
    </div>
  );
};

export default Icon;
