import React from 'react';
import {inject, observer} from 'mobx-react';
import {func} from 'prop-types';
import {Link} from 'react-router-dom';


const End = ({handleAgain}) => {

  const handleClickAgain = () => {
    handleAgain();
  };

  return (
    <div className='header'>
      <h1>Einde quiz</h1>
      <Link to='/' onClick={handleClickAgain}>Opnieuw</Link>
    </div>
  );

};

End.propTypes = {
  handleAgain: func.isRequired
};

export default inject(
  ({store}) => {
    const {handleAgain} = store;
    return {handleAgain};
  }
)(
  observer(End)
);
