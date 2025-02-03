import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Tugas6 from './tugas6/tugas6.js';
import Tugas7 from './tugas7/tugas7.js';
import Tugas8 from './tugas8/tugas8.js';
import Tugas9 from './tugas9/tugas9.js';
import Tugas10 from './tugas10/tugas10.js';
import Tugas11 from './tugas11/tugas11.js';
import Navbar from './tugas12/tugas12.js';

const App = () => {
  // return (
  //   <>
  //     <Tugas6 />
  //     <Tugas7 name="Naufal Hafizh Nugraha" batch="Batch 58" email="nugrahanaufalhafizh@gmail.com" />
  //     <Tugas8 />
  //     <Tugas9 />
  //     <Tugas10 />
  //     <Tugas11 />
  //   </>
  // );

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Tugas6 />} />
          <Route path='/tugas7' element={<Tugas7 name="Naufal Hafizh Nugraha" batch="Batch 58" email="nugrahanaufalhafizh@gmail.com" />} />
          <Route path='/tugas8' element={<Tugas8 />} />
          <Route path='/tugas9' element={<Tugas9 />} />
          <Route path='/tugas10' element={<Tugas10 />} />
          <Route path='/tugas11' element={<Tugas11 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
