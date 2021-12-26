import React from "react";
import "./GeneratedPage.css";

const GeneratedPage = ({icoName, uName, repName, formColor, closeGenPage, contributorsList, description, starsNumber}) => {

 

  return (
        <div className="generatedPage">
            <div className="card" style={{backgroundColor: `${formColor}`}}>
              <h1 className="cardTitle">UserName: {uName}</h1>
              <h1 className="cardTitle">Repository title: {repName}</h1>
              <h2 className="cardTitle">Repository description:</h2>
              <p className="description">{description}</p>
              <img className="cardImage" src={`/img/${icoName}.png`} alt={icoName}></img>
              <h2 className="cardTitle">Number of Stars: {starsNumber}</h2>
              <h2 className="cardTitle">Top 10 contributors:</h2>
              <ol className="contributorsList">
                {contributorsList?.map(el => (
                  <li key={el.id}>{el.name}</li>
                ))}
              </ol>
              <button className="cardButton">Star repository</button>
              <button className="cardButton" onClick={() => {closeGenPage()}}>
                Close
              </button>
            </div>
          </div>
  );
};
export default GeneratedPage;
