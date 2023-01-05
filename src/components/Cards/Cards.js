import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { BrowserView, MobileView } from "react-device-detect";
import Navbar from "../Navbar/Navbar";
import './Cards.css';

const Cards = () => {
    const location = useLocation();
    const [movies, setMovies] = useState([]);
    let [items, setItems] = useState(() => {
      const data = localStorage.getItem('myItem');
      return data ? JSON.parse(data) : [ ]
    });
    let [pageIndex, setPageIndex] = useState(1);
    let [movieIndex , setMovieIndex] = useState(0);
    const [activeState, setActiveState] = useState(() => {
      const data = localStorage.getItem('savedItems');
      return data ? JSON.parse(data) : [ ]
    });
    let [errorMessage, setErrorMessage] = useState("")
  


    const handleClick = (name, overview, vote, path, key) => {
      var index = items.findIndex(i => i.id === name);
     


    if(index >= 0){
      items.splice(index,1);

      localStorage.setItem('myItem', JSON.stringify(items));

      setActiveState({...activeState,
          [key] : !activeState[key]
      })

        localStorage.setItem('savedItems', JSON.stringify(activeState));

       
    }
    

    else if(index === -1){
      setActiveState({
         ...activeState,
         [key] : !activeState[key]
        });


        localStorage.setItem('savedItems', JSON.stringify({...activeState,
        [key] : !activeState[key]}));

         setItems([...items, {
            id: name,
            view: overview,
            votet: vote,
            patht: path,
            keyt : key
         }]);
             localStorage.setItem('myItem', JSON.stringify([
               ...items, {
                  id: name,
                  view: overview,
                  votet: vote,
                  patht: path,
                  keyt: key
               }
             ]));
    }
    }
     const handlePress = () => {
       if(movieIndex === 16){
            pageIndex = pageIndex + 1;
          setPageIndex(pageIndex);
          movieIndex = 0;
          setMovieIndex(movieIndex);
          console.log(pageIndex);
          }
          else{
            movieIndex = movieIndex + 4;
            setMovieIndex(movieIndex);
          }
     }

     const spaceEvent = (e) => {
      if(e.key === ' '){
         e.preventDefault();
         handlePress();
        }
     }

     useEffect(() => {
      window.addEventListener('keypress', spaceEvent);

      return () => {
         window.removeEventListener('keypress', spaceEvent);
      }

     }, [])

     
     useEffect(() => {
            async function getdata() { 
               try{
                const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=b64240118eb5bcd92feae0701121fc7f&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=${pageIndex}&with_genres=${location.state.gen}&with_original_language=${location.state.id}&with_watch_monetization_types=flatrate`);
                const data = await response.json();
                let res = data.results;
                setMovies(res);
               }
               catch(e){
                  console.log(e.message);
                  setErrorMessage(e.message);
               }
              }
              getdata();
      }, [pageIndex]);

      
    return ( 
      <>
      {errorMessage && <div><p>{errorMessage}</p></div>}
      {!errorMessage &&  <div>
            <Navbar />
            <BrowserView><h2>Press Space bar to Generate</h2></BrowserView>
            <div className="card-container">
            {movies.slice(movieIndex, movieIndex+4).map(obj => (
               <div className="card"  key={obj.id}>
            <img src = {`https://image.tmdb.org/t/p/w500`+ obj.poster_path} alt="movieposter"></img>
            <p className="text">{obj.overview}</p>
            <div className="card-details">
            <h2>{obj.title}</h2>
            <button onClick={()=> handleClick(obj.title, obj.overview, obj.vote_average, obj.poster_path, obj.id)} className='save-button'><img alt="svgImg" style={{width: "24px", height: "24px"}} src={(!activeState[obj.id] ? "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQiIGhlaWdodD0iMjQiCnZpZXdCb3g9IjAgMCAyNCAyNCIKc3R5bGU9ImZpbGw6I0ZGRkZGRjsiPgogICAgPHBhdGggZD0iTTE3LDR2MTQuOTY3bC00LjIxMi0xLjgwNUwxMiwxNi44MjRsLTAuNzg4LDAuMzM4TDcsMTguOTY3VjRIMTcgTTE3LDJIN0M1LjksMiw1LDIuOSw1LDR2MThsNy0zbDcsM1Y0QzE5LDIuOSwxOC4xLDIsMTcsMiBMMTcsMnoiPjwvcGF0aD4KPC9zdmc+" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAAgklEQVQ4je2SsQ2DUAxEzxRRmkiswQpUmSQrZAoyCWVGSsMOKNJP82gI+oqEv0NFwUlubN/zFZZ2JeABJNaVgC732A8gSToV7iQzO68BiCQ1s8VXRQyeDkAZ8JlrE2CQdJXUSnqF4mQf9wTqrH8B+u/QA7yBuzO/AaMHaAIpizt/aQJtZ2ZdvfR18QAAAABJRU5ErkJggg==")}/></button>
            <h5>Rating : {obj.vote_average}</h5>
            </div>
            </div>
            ))}
            </div>
            <MobileView>
            <div className="mobile-generate-button">
            <button onClick={handlePress} className="button">Generate</button>
            </div>
            </MobileView>
        </div>}
      </>
     );
}
 
export default Cards;