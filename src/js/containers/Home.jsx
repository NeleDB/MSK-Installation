import React from 'react';
import {Link} from 'react-router-dom';
import {inject, observer} from 'mobx-react';
import {func, number} from 'prop-types';

const Home = ({setPlayers, players}) => {

  let $inputnumber;

  const handleClick = () => {
    setPlayers($inputnumber.value);
  };

  const handleChange = () => {
    setPlayers($inputnumber.value);
  };

  return (
    <div>
      <h1>How many players?</h1>
      <input type='number' max='10' ref={$el => $inputnumber = $el} onChange={handleChange} />
      <Link to='/questions' onClick={handleClick} disabled={players === 0 ? `disabled` : ``}>Start!</Link>
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
