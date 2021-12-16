import React, {useState, useEffect} from "react";
import "./GeneratedPage.css";
import axios from "axios"

const GeneratedPage = ({icoName, uName, repName, formColor, showGenPage}) => {
  const dataUrl = `https://api.github.com/repos/${uName}/${repName}`;
  const contributorsUrl = `https://api.github.com/repos/${uName}/${repName}/contributors?q=contributions&order=desc`;
  const [contributorsList, setContributorsList] = useState([]);
  const [starsNumber, setStarsNumber] = useState();
  const [description, setDescription] = useState();
  const [errorContributorsUrl, setErrorContributorsUrl] = useState(null);
  const [errorDataUrl, setErrorDataUrl] = useState(null);

  useEffect(() => {
    async function FetchMyAPI() {
      try {
        const res = await axios.get(contributorsUrl);
        if (res.status === 200) {
          setContributorsList(res.data?.slice(0, 10).map(user => user.login));
        }
      } catch (error) {
        setErrorContributorsUrl(error.message);
      }
    }

    FetchMyAPI();
  }, [contributorsUrl]);

  useEffect(() => {
    async function FetchMyAPI() {
      try {
        const res = await axios.get(dataUrl);
        if (res.status === 200) {
          setDescription(res.data.description);
          setStarsNumber(res.data.stargazers_count);
        }
      } catch (error) {
        setErrorDataUrl(error.message)
      }
    }

    FetchMyAPI()
  }, [dataUrl]);
  return (
    <>
      {
        errorContributorsUrl === null || errorDataUrl === null
          ? <div className="generatedPage">
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
                  <li key={Math.random()}>{el}</li>
                ))}
              </ol>
              <button className="cardButton">Star repository</button>
              <button className="cardButton" onClick={() => showGenPage()}>
                Close
              </button>
            </div>
          </div>
          : <p>Oops.. error</p>
      }
    </>
  );
};
export default GeneratedPage;
