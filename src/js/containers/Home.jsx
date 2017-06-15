import React from 'react';
import {Link} from 'react-router-dom';
import {inject, observer} from 'mobx-react';
import {number} from 'prop-types';

const Home = ({players}) => {

  return (

    <div className='startpage'>
      <div className='players'>
        <img src='../../assets/svg/people-icon.svg' height='20' alt='nrOfPlayers'></img>
        <p className='playernumber'>{players}</p>
      </div>
      <div className='homebody'>
        <div className='header'>
          <h1>Vind awen match!</h1>
          <p className='desc'>Scan deze QR code met jouw mobiele telefoon om mee te doen</p>
          <img className='qr-img' src='../../assets/img/qr-code-circle.png' width='320' height='320' />
        </div>
        <div className='buttons'>
          <Link to='/questions' className='button'>Start!</Link>
        </div>
      </div>
    </div>
  );

};

Home.propTypes = {
  players: number.isRequired
};


export default inject(
  ({store}) => {
    const {players} = store;
    return {players};
  }
)(
  observer(Home)
);
