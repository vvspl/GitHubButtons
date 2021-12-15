import React, { useState, useEffect } from 'react';
import './GeneratedPage.css';

const GeneratedPage = ({ icoName, uName, repName, formColor, showGenPage }) => {
  const dataUrl = `https://api.github.com/repos/${uName}/${repName}`;
  const contributorsUrl = `https://api.github.com/repos/${uName}/${repName}/contributors?q=contributions&order=desc`;

  const [contributorsList, setContributorsList] = useState([]);
  const [starsNumber, setStarsNumber] = useState();
  const [description, setDescription] = useState();

  useEffect(() => {
    fetch(contributorsUrl)
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        throw new Error();
      })
      .then(userData => {
        setContributorsList(userData.slice(0, 10).map(usr => usr.login));
      });
  }, [contributorsUrl]);

  useEffect(() => {
    fetch(dataUrl)
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        throw new Error();
      })
      .then(userData => {
        setDescription(userData.description);
        setStarsNumber(userData.stargazers_count);
      });
  }, [dataUrl]);

  return (
    <div className="generatedPage">
      <div className="card" style={{ backgroundColor: `${formColor}` }}>
        <h1 className="cardTitle">UserName: {uName}</h1>
        <h1 className="cardTitle">Repository title: {repName}</h1>
        <h2 className="cardTitle">Repository description:</h2>
        <p className='description'>{description}</p>
        <img className="cardImage" src={`/img/${icoName}.png`} alt={icoName}></img>
        <h2 className="cardTitle">Number of Stars: {starsNumber}</h2>
        <h2 className="cardTitle">Top 10 contributors:</h2>
        <ol className="contributorsList">
          {contributorsList.map(el => (
            <li key={Math.random()}>{el}</li>
          ))}
        </ol>
        <button className="cardButton">Star repository</button>
        <button className="cardButton" onClick={() => showGenPage()}>
          Close
        </button>
      </div>
    </div>
  );
};

export default GeneratedPage;
