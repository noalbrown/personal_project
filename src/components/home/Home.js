import React from 'react';
import './home.css';

const Home = (props) => {
  // const baseUrl = '';
  // const gameListUrl = `{baseUrl}`;
  // const gameDetailsUrl = `{baseUrl}`;

  // const getGame = async gameId => {
  //   const result = await axios
  //     .get(`${gameListUrl + gameId}.json`)
  //     .then(({ data }) => data);
  //   return result;
  // };

  return (
    <div className='home-container'>
      <ul>
        <li>Some Game Name</li>
        <button>ADD</button>
      </ul>
    </div>
  )
}

export default Home;