/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {number} from 'prop-types';
import Answer from './Answer';
import data from '../../../assets/data/questions.json';
import {inject, observer} from 'mobx-react';


const Question = ({id, a, b, c}) => {

  return (
    <div>
      <ul className='list-images'>
          <Answer art='a' value={a} image={data.questions[id].answers[0].image} />
          <Answer art='b' value={b} image={data.questions[id].answers[1].image} />
          <Answer art='c' value={c} image={data.questions[id].answers[2].image} />
      </ul>
    </div>
  );
};

Question.propTypes = {
  id: number.isRequired,
  a: number.isRequired,
  b: number.isRequired,
  c: number.isRequired
};

export default inject(
  ({store}) => {
    const {a, b, c} = store.pictures;
    return {a, b, c};
  }
)(
  observer(Question)
);
