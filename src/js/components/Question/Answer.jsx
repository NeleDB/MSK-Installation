import React from 'react';
import {string} from 'prop-types';

const Answer = ({content}) => {
  console.log(content);
  return (
    <li>{content}</li>
  );
};

Answer.propTypes = {
  content: string.isRequired
};
export default Answer;
