import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Secondpage.css'

const Secondpage = () => {
  const navi = useNavigate();

  const backto = () => {
    {
      navi(`/`);
    }
  };

  const nextto = () => {

    {navi(`/thirdpage`)}
  }

  return (
    <div>
      <h1>second page</h1>
      <button className='button'onClick={backto}>Back</button>
      <button className='button' onClick={nextto}>Next</button>
    </div>
  );
};

export default Secondpage;
