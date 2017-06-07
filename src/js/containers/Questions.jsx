import React from 'react';
import {inject, observer} from 'mobx-react';
import {number, func} from 'prop-types';
import Question from '../components/Question/';


const Questions = ({currentQuestion, nextQuestion, playersLeft, players}) => {

  const handleClick = e => {
    e.preventDefault();
    nextQuestion();
  };

  return (
    <div>
      <Question id={currentQuestion} />
      <p>players:{players}</p>
      <button onClick={handleClick} >Next</button>
      <p>players who need to answer {playersLeft}</p>
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
