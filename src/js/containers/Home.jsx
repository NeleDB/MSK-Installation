import React from 'react';
import {Link} from 'react-router-dom';
import {inject, observer} from 'mobx-react';
import {func, number} from 'prop-types';

const Home = ({players, handleJoin}) => {

  const handleClickJoin = () => {
    handleJoin();
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
          <p>Scan deze QR code met jouw mobiele telefoon om mee te doen</p>
          <img className='qr-code' src='../../assets/img/qr-code-circle.png' width='324' height='324' />
        </div>
        <div className='buttons'>
          <Link to='/vote' target='_blank' className='button' onClick={handleClickJoin}>Join</Link>
          <Link to='/questions' className='button'>Start!</Link>
        </div>
      </div>
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
