import React from 'react';
import './icon.css';

const Icon = ({ name }) => {
  const onValueChange = () => {};

  return (
    <div className="icon">
      <h3>{name}</h3>
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
