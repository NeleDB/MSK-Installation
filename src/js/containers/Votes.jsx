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
      <h1>Join the quiz</h1>
      <button value='a' onClick={ClickAnswer}>A</button>
      <button value='b' onClick={ClickAnswer}>B</button>
      <button value='c' onClick={ClickAnswer}>C</button>

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
