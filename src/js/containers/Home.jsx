import React from 'react';
import {Link} from 'react-router-dom';
import {inject, observer} from 'mobx-react';
import {func, number} from 'prop-types';

import io from 'socket.io-client';

const Home = ({players, setPlayers}) => {

  const socket = io(window.location.host);
  socket.on(`usersAmount`, clients => setPlayers(clients));

  const handleClick = () => {


  };

  const handleJoin = () => {
    socket.emit(`newUser`);
  };

  return (
    <div className='startpage'>
      <div className='players'>
        <img src='../../assets/img/nrOfPlayers.png' alt='nrOfPlayers'></img>
        <p className='playernumber'>{players}</p>
      </div>
      <div className='homebody'>
        <div className='header'>
          <h1>Vind awen match!</h1>
          <p>Scan deze QR code met jouw mobiele telefoon om mee te doen 1234</p>
        </div>
        <div className='buttons'>
          <Link to='/vote' target='_blank' className='button' onClick={handleJoin}>Join</Link>
          <Link to='/questions' className='button' onClick={handleClick}>Start!</Link>
        </div>
      </div>
    </div>
  );

};

Home.propTypes = {
  setPlayers: func.isRequired,
  players: number.isRequired
};


export default inject(
  ({store}) => {
    const {setPlayers, players} = store;
    return {setPlayers, players};
  }
)(
  observer(Home)
);
