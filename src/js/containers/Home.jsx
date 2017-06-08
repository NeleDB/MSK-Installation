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
    <div>
      <h1>How many players? {players}</h1>
      <Link to='/questions' onClick={handleClick}>Start!</Link>
      <Link to='/vote' target='_blank' onClick={handleJoin}>Join!</Link>
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
