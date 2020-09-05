import React, { useState, useEffect } from 'react';
import { gameImgStyle } from './HomeStyle'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import axios from 'axios';
import './home.css';

const Home = (props) => {
  const [gameInput, setGameInput] = useState([]);
  const [searchInput, setSearchInput] = useState('');

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

  const addGame = (id) => {
    console.log(props)
    axios
      .post('/api/addGame', {
        user_games: id,
        email: props.user.email
      })
      .then((res) => {
        props.history.push('/user');
      })
      .catch((err) => {
        alert("Cannot Add Game");
      });
  };

  const handleSearchInput = (searchInput) => {
    const searchArr = gameInput.filter(el => (el.name.toLowerCase().includes(searchInput.toLowerCase())) ? el : null)
    setGameInput(searchArr)
  }

  return (
    <div className='home-container'>
      <header>
        <div>
          <input id='home-search-input'
            name='search'
            placeholder='Game Name'
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        <div>
          <button onClick={() => handleSearchInput(searchInput)} id='home-search-button'>Find Game</button>
        </div>
      </header>
      <section>
        {gameInput.map((el, i) =>
          <ul key={i}>
            <li id='home-img-container'>
              <img alt='Game Cover' src={el.background_image} style={gameImgStyle} />
            </li>
            <li>{el.name}</li>
            <button onClick={() => addGame(el.id)}>ADD</button>
          </ul>
        )}
      </section>
    </div>
  )
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(withRouter(Home));