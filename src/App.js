import React  from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Series from './Series';
import Movies from './Movies';
import Cardss from './components/Cards/Cardss';
function App() {
 
 return (
    <BrowserRouter>
    <div className="App">
     <Routes>
      <Route path="/" element = {<Movies />}></Route>
      <Route path="/Series" element = {<Series />}></Route>
      <Route path="/Cards" element = {<Cards />}></Route>
      <Route path="/Cardss" element = {<Cardss />}></Route>
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
