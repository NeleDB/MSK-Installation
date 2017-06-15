import React from 'react';
import {inject, observer} from 'mobx-react';
import {func} from 'prop-types';
import {Link} from 'react-router-dom';


const End = ({handleAgain}) => {

  const handleClickAgain = () => {
    handleAgain();
  };

  return (
    <div className='header end-div'>
      <h1 className='end-title'>Einde quiz</h1>
      <Link to='/' className='button-end' onClick={handleClickAgain}>Opnieuw</Link>
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
