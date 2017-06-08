import React from 'react';
import io from 'socket.io-client';

const Votes = () => {

  const socket = io(window.location.host);

  const handleAnswer = e => {
    e.preventDefault();
    socket.emit(`userAnswer`, {id: socket.id, answer: e.currentTarget.value});
    socket.emit(`checkTotalAnswers`);
  };

  return (
    <div>
      <h1>Join the quiz</h1>
      <button value='a' onClick={handleAnswer}>A</button>
      <button value='b' onClick={handleAnswer}>B</button>
      <button value='c' onClick={handleAnswer}>C</button>

    </div>
  );

};

Votes.propTypes = {

};

export default Votes;
