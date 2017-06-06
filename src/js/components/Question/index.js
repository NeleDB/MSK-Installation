/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {number} from 'prop-types';
import data from '../../../assets/data/questions.json';
import Answer from './Answer';

const Question = ({id}) => {
  return (
    <div>
      <h1>{data.questions[id].question}</h1>
      <ul>
        {data.questions[id].answers.map(a => <Answer key={a} content={a} />)}
      </ul>
    </div>
  );
};

Question.propTypes = {
  id: number.isRequired
};

export default Question;
