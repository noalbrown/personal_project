import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './home.css';

const Home = (props) => {
  const [gameInput, setGameInput] = useState([]);

  const gameListUrl = 'https://rawg-video-games-database.p.rapidapi.com/games';
  console.log(process.env.REACT_APP_API_KEY)
  useEffect(() => {
    axios
      .get(`${gameListUrl}`, {
        headers: {
          "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_API_KEY,
          "useQueryString": true
        }
      })
      .then((res) => {
        setGameInput(res.data.results)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addGame = () => {
    axios
      .post('/api/addGame', {
        user_games: gameInput,
      })
      .then((res) => { })
      .catch((err) => {
        alert("Cannot Add Game");
      });
  };
  console.log(gameInput)
  return (
    <div className='home-container'>
      <section>
        {gameInput.map((el, i) =>
          <ul key={i}>
            <li id='home-img-container'>
              <img alt='Game Cover' src={el.background_image} style={{ height: 100 }} />
            </li>
            <li>{el.name}</li>
            <button onClick={addGame}>ADD</button>
          </ul>
        )}
      </section>
    </div>
  )
}

export default Home;