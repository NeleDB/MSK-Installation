import React from 'react';
import {string, func, number} from 'prop-types';
import {inject, observer} from 'mobx-react';


const Answer = ({image, addAnswer, value, art}) => {

  // const socket = io(window.location.host);
  // socket.on(`didSelectCard`, data => ...user & kaartje);

  const handleAnswer = e => {
    e.preventDefault();
    addAnswer(art);
  };

  return (
    <li onClick={handleAnswer}>
      <div className='container-image'>
        <h1>{art}</h1>
        <h2>{value}</h2>
        <img className='image' src={`../../../assets/img/${image}.jpg`} />
      </div>
    </li>
  );
};

Answer.propTypes = {
  image: string.isRequired,
  addAnswer: func.isRequired,
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
