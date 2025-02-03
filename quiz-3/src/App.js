import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/nav';
import Home from './components/home';
import ManageData from './components/manageData';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/manage-data' element={<ManageData />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
