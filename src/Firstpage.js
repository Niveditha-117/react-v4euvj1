import React from 'react';
import {useNavigate} from 'react-router-dom';


const Firstpage = () => {

  const navigate = useNavigate();
  const navigating = () => {
   
    {navigate(`/secondpage`)}

  }
  return (
    <div>
      <h1>Firstpage</h1>
      <button onClick={navigating}>Next</button>
      
    </div>
  );
};

export default Firstpage;
