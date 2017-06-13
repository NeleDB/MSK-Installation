import React from 'react';
import {inject, observer} from 'mobx-react';
import {number} from 'prop-types';
import Question from '../components/Question/';

const Questions = ({currentQuestion, playersLeft, players}) => {

  return (
    <div className='startpage'>
      <div className='players'>
        <img src='../../assets/svg/people-icon.svg' height='20' alt='nrOfPlayers'></img>
        <p className='playernumber'>{players}</p>
      </div>
      <div className='homebody'>
        <div className='header'>
          <h1>Wem hier prijs!</h1>
          <p className='desc'>Selecteer een vree wijs kunstwerk en ontdek jouw kunstmatch! </p>
          {/* <p>Spelers die nog moeten antwoorden: {playersLeft}</p> */}
        </div>
        <Question id={currentQuestion} />
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
