import React from 'react';
import {inject, observer} from 'mobx-react';
import {number, func} from 'prop-types';
import Question from '../components/Question/';


const Home = ({currentQuestion, nextQuestion}) => {


  const handleClick = e => {
    e.preventDefault();
    nextQuestion();
  };

  return (
    <div>
      <Question id={currentQuestion} />
      <button onClick={handleClick}>Click Click</button>
    </div>
  );

};

Home.propTypes = {
  currentQuestion: number.isRequired,
  nextQuestion: func.isRequired
};

export default inject(
  ({store}) => {
    const {currentQuestion, nextQuestion} = store;
    return {currentQuestion, nextQuestion};
  }
)(
  observer(Home)
);
