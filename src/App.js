import React, { useState } from 'react';
import IconSelector from './Components/IconSelector/IconSelector';
import Header from './Components/Header/Header';
import ButtonOptions from './Components/ButtonOptions/ButtonOptions';
import Preview from './Components/Preview/Preview';
import GeneratedPage from './Components/GeneratedPage/GeneratedPage';
import './App.css';

function App() {
  const [pickedIcon, setPickedIcon] = useState(null);
  const [userName, setUserName] = useState(null);
  const [repName, setRepName] = useState(null);
  const [formColor, setFormColor] = useState(null);
  const [genPageShown, setGenPageShown] = useState(false);

  const dataUrl = `https://api.github.com/repos/${userName}/${repName}`;
  const contributorsUrl = `https://api.github.com/repos/${userName}/${repName}/contributors?q=contributions&order=desc`;
  const [contributorsList, setContributorsList] = useState([]);
  const [starsNumber, setStarsNumber] = useState();
  const [description, setDescription] = useState();

  const [badRequest, setBadRequest] = useState(null);

  const pickIconHandler = value => {
    setPickedIcon(value);
    setBadRequest(null);
  };
  const setUserNameHandler = value => {
    setUserName(value);
    setBadRequest(null);
  };
  const setRepNameHandler = value => {
    setRepName(value);
    setBadRequest(null);
  };
  const setColorHandler = value => {
    setFormColor(value);
    setBadRequest(null);
  };

  const closeGenPageHandler = () => {
    setGenPageShown(false);

    setUserName(null);
    setRepName(null);
    setPickedIcon(null);
    setContributorsList(null);
    setDescription(null);
    setStarsNumber(null);

    if (badRequest === 'error') alert('error');
  };

  const getDataHandler = () => {
    fetch(contributorsUrl)
      .then(res => {
        if (res.ok) {
          setBadRequest('Ok');
          return res.json();
        }
      })
      .then(userData => {
        setContributorsList(
          userData.slice(0, 10).map(usr => {
            const newObj = {};
            newObj.id = usr.id;
            newObj.name = usr.login;
            return newObj;
          }),
        );
      })
      .catch(error => {
        setBadRequest('error');
        closeGenPageHandler();
      });

    fetch(dataUrl)
      .then(res => {
        if (res.ok) {
          setBadRequest('Ok');
          return res.json();
        }
      })
      .then(userData => {
        setDescription(userData.description);
        setStarsNumber(userData.stargazers_count);
      })
      .catch(error => {
        setBadRequest('error');
        closeGenPageHandler();
      });

      if ( badRequest === 'Ok'){
      setGenPageShown(true);
    }
  };

  return (
    <div className="App">
      {genPageShown && (
        <GeneratedPage
          icoName={pickedIcon}
          uName={userName}
          repName={repName}
          formColor={formColor}
          closeGenPage={closeGenPageHandler}
          contributorsList={contributorsList}
          starsNumber={starsNumber}
          description={description}
        />
      )}
      {!genPageShown && (
        <div className="startPage">
          <Header />
          <IconSelector selectIco={pickIconHandler} />
          <div className="bodyPage">
            <ButtonOptions
              uName={setUserNameHandler}
              repName={setRepNameHandler}
              formColor={setColorHandler}
            />
            <Preview
              icoName={pickedIcon}
              uName={userName}
              repName={repName}
              formColor={formColor}
              showGenPage={getDataHandler}
              badRequest={badRequest}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
