import React from 'react';
import './IconSelector.css';
import Icon from '../Icon/Icon';

const icons = [
  'Follow',
  'Sponsor',
  'Watch',
  'Star',
  'Fork',
  'Issue',
  'Discuss',
  'Download',
  'Install this package',
  'Use this template',
  'Use This Action',
  'Like',
  'Share',
];

const IconSelector = () => {
  return (
    <div className='allIconsContainer'>
      <h2 className='icoTitle'>Select an icon: </h2>
      <div className='iconContainer' >{icons.map(ico=><Icon name={ico} key={ico}/>)}</div>
    </div>
  );
};

export default IconSelector;
