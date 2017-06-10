import React from 'react';
import {inject, observer} from 'mobx-react';
import {number} from 'prop-types';
import Question from '../components/Question/';

const Questions = ({currentQuestion, playersLeft, players}) => {

  return (
    <div className='startpage'>
      <div className='players'>
        <img src='../../assets/img/nrOfPlayers.png' alt='nrOfPlayers'></img>
        <p className='playernumber'>{players}</p>
      </div>
      <div className='homebody'>
        <div className='header'>
          <h1>Vind awen match!</h1>
          <p>Selecteer een vree wijs kunstwerk en ontdek jouw kunstmatch! </p>
        </div>
        <Question id={currentQuestion} />
        <button >Next</button>
        <p>players who need to answer {playersLeft}</p>
      </div>
    </div>
  );

};

Questions.propTypes = {
  currentQuestion: number.isRequired,
  playersLeft: number.isRequired,
  players: number.isRequired
};

export default inject(
  ({store}) => {
    const {currentQuestion, playersLeft, players} = store;
    return {currentQuestion, playersLeft, players};
  }
)(
  observer(Questions)
);
