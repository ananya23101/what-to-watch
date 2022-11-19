import React, {useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Forms from './components/Forms/Forms';
import Cards from './components/Cards/Cards';
 let genre_id = 10751;
const API_URl = `https://api.themoviedb.org/3/discover/movie?api_key=b64240118eb5bcd92feae0701121fc7f&language=en-US&region=US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_genres=${genre_id}&with_watch_monetization_types=flatrate`

function App() {
 
  // useEffect(()=>{
  //   fetch(API_URl)
  //   .then((res)=>res.json())
  //   .then((data)=>{
  //     console.log(data);
  //   })
  // })

  return (
    <div className="App">
     <Navbar />
     <h2>Press spacebar to generate</h2>
     <Forms />
    </div>
  );
}

export default App;
