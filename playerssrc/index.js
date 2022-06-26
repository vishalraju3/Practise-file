import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PlayersList from './playersList';
import PlayersAdd from './PlayersAdd';
import App from './App';
import Menu from './Menu';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Menu/>
    <BrowserRouter>
    <Routes>
      
    <Route path='/' element={<App />}></Route>

    <Route path='/Players/List' element={<PlayersList />}></Route>

    <Route path='/products/form' element={<Products />}></Route>

    <Route path='/Players/Add' element={<PlayersAdd/>}></Route>
    </Routes>

    </BrowserRouter>


  </React.StrictMode>
);

