import React from 'react';
import './IconSelector.css';
import Icon from '../Icon/Icon';

const icons = [
  'open-book',
  'information-button',
  'pair-of-gears',
  'palm-of-hand',
  'pair-of-bills',
  'world-wide-web',
  'star-with-five-points',
  'water-drop',
  'car-repair',
  'smartphone',
  'delivery-time',
  'social-group',
  'price-tag',
];

const IconSelector = () => {
  return (
    <div>
      <h3>Select an icon: </h3>
      <div className='iconContainer' >{icons.map(ico=><Icon name={ico} key={ico}/>)}</div>
    </div>
  );
};

export default IconSelector;
