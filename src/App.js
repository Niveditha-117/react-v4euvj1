import React from 'react';
import './style.css';
import Firstpage from './Firstpage.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Secondpage from './Secondpage.js';
import Thirdpage from './Thirdpage.js';
import {useNavigate} from 'react-router-dom';

export default function App() {


  
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Firstpage />} />
          <Route path="/secondpage" element={<Secondpage />} />
          <Route path="/thirdpage" element={<Thirdpage />} />
        </Routes>
      </Router>
    </div>
  );
}
