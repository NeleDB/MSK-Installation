import React from 'react';
import {inject, observer} from 'mobx-react';
import {func} from 'prop-types';


const Votes = ({handleAnswer}) => {

  const ClickAnswer = e => {
    handleAnswer(e.currentTarget.value);
    e.preventDefault();
  };

  return (
    <div>
      <div className='phone-vote'>
        <h1 className='phone-title'>Vree wijs gasten!</h1>
        <p className='desc-mobile'>Welk kunstwerk vind jij het wijste? Selecteer hieronder! </p>
      </div>
      <div className='answer-btn-container'>
        <button className='answer-btn' value='a' onClick={ClickAnswer}>één</button>
        <button className='answer-btn' value='b' onClick={ClickAnswer}>twee</button>
        <button className='answer-btn' value='c' onClick={ClickAnswer}>drie</button>
      </div>
    </div>
  );

};

Votes.propTypes = {
  handleAnswer: func.isRequired
};

export default inject(
  ({store}) => {
    const {handleAnswer} = store;
    return {handleAnswer};
  }
)(
  observer(Votes)
);
