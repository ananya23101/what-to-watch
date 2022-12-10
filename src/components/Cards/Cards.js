import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import './Cards.css';

const Cards = () => {
    const location = useLocation();
    const [movies, setMovies] = useState([]);
    const [items, setItems] = useState(() => {
      const data = localStorage.getItem('myItem');
      return data ? JSON.parse(data) : [ ]
    })
    let [pi, setPi] = useState(1);
    let [mi , setMi] = useState(0);
    const handleClick = (name, overview, vote, path) => {
      setItems([...items, {
         id: name,
         view: overview,
         votet: vote,
         patht: path
      }]);
          localStorage.setItem('myItem', JSON.stringify([
            ...items, {
               id: name,
               view: overview,
               votet: vote,
               patht: path
            }
          ]));
    }
     const handlePress = () => {
       if(mi === 16){
            pi = pi + 1;
          setPi(pi);
          mi = 0;
          setMi(mi);
          console.log(pi);
          }
          else{
            mi = mi + 4
            setMi(mi);
          }
     }
     useEffect(() => {
      window.addEventListener('keypress', e => {
         if(e.key === ' '){
          e.preventDefault();
          handlePress();
         }
      }); 
     }, [])

     useEffect(() => {
            async function getdata() { 
                const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=b64240118eb5bcd92feae0701121fc7f&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=${pi}&with_genres=${location.state.gen}&with_original_language=${location.state.id}&with_watch_monetization_types=flatrate`);
                const data = await response.json();
                let res = data.results;
                setMovies(res);
              }
              getdata();
      }, [pi]);

      let mov = movies.filter(obj => obj.release_date > location.state.ye);
    return ( 
        <div>
            <Navbar />
            <h2>Press Space bar to Generate</h2>
            <div className="card-container">
            {mov.slice(mi, mi+4).map(obj => (
               <div className="card"  key={obj.id}>
            <img src = {`https://image.tmdb.org/t/p/w500`+ obj.poster_path} alt="movieposter" style={{width: "240px"}}></img>
            <h2>{obj.title}</h2>
            <h3>{mi}</h3>
           <button onClick={()=> handleClick(obj.title, obj.overview, obj.vote_average, obj.poster_path)} className='save-button'><img alt="svgImg" style={{width: "24px", height: "24px"}} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQiIGhlaWdodD0iMjQiCnZpZXdCb3g9IjAgMCAyNCAyNCIKc3R5bGU9ImZpbGw6I0ZGRkZGRjsiPgogICAgPHBhdGggZD0iTTE3LDR2MTQuOTY3bC00LjIxMi0xLjgwNUwxMiwxNi44MjRsLTAuNzg4LDAuMzM4TDcsMTguOTY3VjRIMTcgTTE3LDJIN0M1LjksMiw1LDIuOSw1LDR2MThsNy0zbDcsM1Y0QzE5LDIuOSwxOC4xLDIsMTcsMiBMMTcsMnoiPjwvcGF0aD4KPC9zdmc+"/></button>
            <h5>Rating : {obj.vote_average}</h5>
            <p className="text">{obj.overview}</p>
            </div>
            ))}
            </div>
        </div>
     );
}
 
export default Cards;