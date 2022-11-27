import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const Cards = () => {
    const location = useLocation();
    const [movies, setMovies] = useState([]);
   
    let pi = 1;
    let [mi , setMi] = useState(0);
       useEffect(()=>{
         async function fetchdata() {
            const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=b64240118eb5bcd92feae0701121fc7f&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_genres=${location.state.gen}&with_original_language=${location.state.id}&with_watch_monetization_types=flatrate`);
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
          if(mi === 16){
          pi = pi + 1;
          mi = 0;
          }
          else{
            mi = mi + 4;
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
                const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=b64240118eb5bcd92feae0701121fc7f&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=${pi}&with_genres=${location.state.gen}&with_original_language=${location.state.id}&with_watch_monetization_types=flatrate`);
                const data = await response.json();
                let res = data.results;
                setMovies(res);
              }
              getdata();
           }
        });
      }, []);
      let mov = movies.filter(obj => obj.release_date > location.state.ye)

    return ( 
        <div>
            <Navbar />
            <h2>Press Space bar to Generate</h2>
            {mov.slice(mi, mi+4).map(obj => (
                <div className="card"  key={obj.id}>
            <img src = {`https://image.tmdb.org/t/p/w500`+ obj.poster_path} alt="movieposter" style={{width: "100px"}}></img>
            <p>{obj.title}</p>
            </div>))}
        </div>
     );
}
 
export default Cards;