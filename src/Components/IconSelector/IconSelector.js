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

const IconSelector = (props) => {
  return (
    <div className='allIconsContainer'>
      <h2>Select an icon:</h2>
      <div className='iconContainer' >{icons.map(ico=><Icon name={ico} key={ico} selectIco={props.selectIco}/>)}</div>
    </div>
  );
};

export default IconSelector;
