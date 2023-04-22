import React from 'react';
import './App.css';
import AddClient from './components/addClient/addClient';
import Credit from './components/credit/credit';
import Search from './components/home/search';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Search/>} />
          <Route path='/client' element={<AddClient/>} />
          <Route path="/credit" element={<Credit/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
