import React from 'react';
import {Link} from 'react-router-dom';
import {inject, observer} from 'mobx-react';
import {func, number} from 'prop-types';

const Home = ({players, handleJoin}) => {

  const handleClickJoin = () => {
    handleJoin();
  };

  return (
    <div>
      <h1>How many players? {players}</h1>
      <Link to='/questions'>Start!</Link>
      <Link to='/vote' target='_blank' onClick={handleClickJoin}>Join!</Link>
    </div>
  );

};

Home.propTypes = {
  players: number.isRequired,
  handleJoin: func.isRequired
};


export default inject(
  ({store}) => {
    const {players, handleJoin} = store;
    return {players, handleJoin};
  }
)(
  observer(Home)
);
