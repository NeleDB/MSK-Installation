import React from 'react';
import {inject, observer} from 'mobx-react';
import {number, func} from 'prop-types';
import Question from '../components/Question/';
import io from 'socket.io-client';

const Questions = ({currentQuestion, nextQuestion, playersLeft, players}) => {
  const socket = io(window.location.host);
  const handleClick = e => {
    e.preventDefault();
    nextQuestion();
  };

  socket.on(`handleTotal`, () => {if (playersLeft === 0) nextQuestion();});

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
        <button onClick={handleClick} >Next</button>
        <p>players who need to answer {playersLeft}</p>
      </div>
    </div>
  );

};

Questions.propTypes = {
  currentQuestion: number.isRequired,
  nextQuestion: func.isRequired,
  playersLeft: number.isRequired,
  players: number.isRequired
};

export default inject(
  ({store}) => {
    const {currentQuestion, nextQuestion, playersLeft, players} = store;
    return {currentQuestion, nextQuestion, playersLeft, players};
  }
)(
  observer(Questions)
);
