import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import './Cards.css';
const Cardss = () => {
    const location = useLocation();
    const [movies, setMovies] = useState([]);
    let pi = 1;
    let [mi , setMi] = useState(0);
       useEffect(()=>{
         async function fetchdata() {
            const response = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=b64240118eb5bcd92feae0701121fc7f&language=en-US&sort_by=popularity.desc&page=1&with_genres=${location.state.gen}&with_original_language=${location.state.id}`);
            const data = await response.json();
            let res = data.results;
            setMovies(res);
          }
          fetchdata(); 
     },[])
 
     useEffect(()=>{
      window.addEventListener('keypress', e => {
         if(e.key === ' '){
          e.preventDefault();
         //  console.log(mi);
          if(mi === 16){
          pi = pi + 1;
          mi = 0;
          console.log(pi);
          
          }
          else{
            mi = mi + 4;
            console.log(mi);
            setMi(mi);
          }
         }
      }); 
  },[])
     useEffect(() => {
        window.addEventListener('keypress', e => {
           if(e.key === ' '){
            e.preventDefault();
            async function getdata() { 
                const response = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=b64240118eb5bcd92feae0701121fc7f&language=en-US&sort_by=popularity.desc&page=${pi}&with_genres=${location.state.gen}&with_original_language=${location.state.id}`);
                const data = await response.json();
                let res = data.results;
                setMovies(res);
              }
              getdata();
           }
        });
      }, []);
    return ( 
        <div>
            <Navbar />
            <h2>Press Space bar to Generate</h2>
            <div className="card-container">
            {movies.slice(mi, mi+4).map(obj => (
               <div className="card"  key={obj.id}>
            <img src = {`https://image.tmdb.org/t/p/w500`+ obj.poster_path} alt="movieposter" style={{width: "240px"}}></img>
            <h2>{obj.original_name}</h2>
            <h5>Rating : {obj.vote_average}</h5>
            <p className="text">{obj.overview}</p>
            </div>
            ))}
            </div>
        </div>
     );
}
 
export default Cardss;