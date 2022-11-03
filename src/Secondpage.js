import React from 'react';
import { useNavigate } from 'react-router-dom';

const Secondpage = () => {
  const navi = useNavigate();

  const backto = () => {
    {
      navi(`/`);
    }
  };

  return (
    <div>
      <h1>second page</h1>
      <button onClick={backto}>Back</button>
    </div>
  );
};

export default Secondpage;
