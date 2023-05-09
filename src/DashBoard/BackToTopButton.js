import React from 'react';
import '../App.css';
import { IconContext } from 'react-icons';
import { FcUp } from 'react-icons/fc';

const BackToTopButton = () => {
  const handleButtonClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <IconContext.Provider value={{ size: '2em' }}>
      <div className='FaArrowCircleUp' onClick={handleButtonClick}>
        <FcUp size={'45'} />
      </div>
    </IconContext.Provider>
  );
};

export default BackToTopButton;