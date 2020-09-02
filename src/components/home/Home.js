import React, { useState } from 'react';
import axios from 'axios';
import './home.css';

const Home = (props) => {
  const [gameInput, setGameInput] = useState('');
  const [imgInput, setImgInput] = useState('');
  // const baseUrl = '';
  // const gameListUrl = `{baseUrl}`;
  // const gameDetailsUrl = `{baseUrl}`;

  // const getGame = async gameId => {
  //   const result = await axios
  //     .get(`${gameListUrl + gameId}.json`)
  //     .then(({ data }) => data);
  //   return result;
  // };

  const handleGameInput = (event) => {
    const { value } = event.target;
    setGameInput(value);
  };

  const handleImgInput = (event) => {
    const { value } = event.target;
    setImgInput(value);
  };

  const addGame = () => {
    axios
      .post('/api/addGame', {
        user_games: gameInput,
        game_img: imgInput,
      })
      .then((res) => { })
      .catch((err) => {
        alert("Cannot Add Game");
      });
  };

  return (
    <div className='home-container'>
      <ul>
        <li>Some Game Name</li>
        <button onCLick={addGame}>ADD</button>
      </ul>
    </div>
  )
}

export default Home;