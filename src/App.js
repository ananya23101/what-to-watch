import React, {useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Forms from './components/Forms/Forms';
import Cards from './components/Cards/Cards';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Series from './Series';
import Movies from './Movies';
 let genre_id = 10751;
const API_URl = `https://api.themoviedb.org/3/discover/movie?api_key=b64240118eb5bcd92feae0701121fc7f&language=en-US&region=US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_genres=${genre_id}&with_watch_monetization_types=flatrate`

function App() {
 
 return (
    <BrowserRouter>
    <div className="App">
     <Routes>
      <Route path="/" element = {<Movies />}></Route>
      <Route path="/Series" element = {<Series />}></Route>
      <Route path="/Cards" element = {<Cards />}></Route>
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
