import React from 'react';
import './App.css';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Show from './Components/Show';


function App() {

  return (
    <BrowserRouter>

    <Routes>
      <Route index element={<Home />}/>
      <Route path="home" element={<Home />} />
      <Route path="show/:id" element={<Show />} />
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
