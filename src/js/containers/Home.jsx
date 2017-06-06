import React from 'react';
import data from '../../assets/data/questions.json';
import {inject, observer} from 'mobx-react';
import {number, func} from 'prop-types';


const Home = ({currentQuestion, nextQuestion}) => {


  const handleClick = e => {
    e.preventDefault();
    nextQuestion();
  };

  return (
    <div>
      {data.questions.map(q => {
        if (q.id === currentQuestion) {
          console.log(q.question);
        }
      })}
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
