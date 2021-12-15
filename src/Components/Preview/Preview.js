import React, { useState, useEffect } from 'react';
import './Preview.css';

const Preview = ({ icoName, uName, repName, formColor, showGenPage }) => {
  const [icon, setIcon] = useState(icoName);

  useEffect(() => {
    setIcon(icoName);
  }, [icoName]);

  // const fetchData = () => {
  //   fetch(`https://api.github.com/users/${uName}`)
  //     .then(response => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //       throw new Error();
  //     })
  //     .then(data => console.log(data));
  // };

  let genLinkText = '<a href';
  if (icon !== null) genLinkText += ` chosen icon = ${icon}`;
  genLinkText +=
    ', user name: ' + uName + ', repository name: ' + repName + ', chosen form color: ' + formColor;

  return (
    <div className="previewContainer">
      <h2 className="formTitle">Preview and code</h2>
      <p>Try out your button, then copy and paste the code below into the HTML of your site.</p>
      <button className="tryButton" onClick={() => showGenPage()}>
        <img className="buttonImg" src={`/img/${icon}.png`} alt=""></img>
        {icon}
      </button>
      <input className="generatedLinkField" type="text" value={genLinkText + '>'} readOnly />
    </div>
  );
};

export default Preview;
