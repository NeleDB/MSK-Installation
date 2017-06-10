import React from 'react';
import {string, number} from 'prop-types';
import {inject, observer} from 'mobx-react';


const Answer = ({image, value, art}) => {


  const handleAnswer = e => {
    e.preventDefault();
  };

  return (
    <li onClick={handleAnswer}>
      <div className='container-image'>
        <h1 className='abc'>{art}</h1>
        <img className='image' src={`../../../assets/img/${image}.jpg`} />
        <h2 className='vote-value'>{value}</h2>
      </div>
    </li>
  );
};

Answer.propTypes = {
  image: string.isRequired,
  art: string.isRequired,
  value: number.isRequired
};

export default inject(
  ({store}) => {
    const {addAnswer} = store;
    return {addAnswer};
  }
)(
  observer(Answer)
);
