import { useEffect } from 'react';
import { useState } from 'react';
import './Forms.css';

const Forms = () => {
  const [genres, setGenres] = useState('');
  const [language, setLanguage] = useState('en');
  const [year, setYear] = useState('0');
  const [movies, setMovies] = useState([]);

// async function fetchdata() {
//   const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=b64240118eb5bcd92feae0701121fc7f&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_genres=${genres}&with_original_language=${language}&with_watch_monetization_types=flatrate`);
//   const data = await response.json();
//   let res = data.results;
//   console.log(res);
//   setMovies(res);
//   console.log(movies);
// }
// useEffect(()=>{
//   fetchdata();
// },[])

const handleSubmit = (e) => {
  e.preventDefault();
  async function fetchdata() {
      const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=b64240118eb5bcd92feae0701121fc7f&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_genres=${genres}&with_original_language=${language}&with_watch_monetization_types=flatrate`);
      const data = await response.json();
      let res = data.results;
      console.log(res);
      setMovies(res);
      console.log(movies);
    }
fetchdata();

  // fetch(`https://api.themoviedb.org/3/discover/movie?api_key=b64240118eb5bcd92feae0701121fc7f&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_genres=${genres}&with_original_language=${language}&with_watch_monetization_types=flatrate`)
  // .then((res)=>res.json())
  // .then((data)=>setMovies(data.results));
  // console.log(movies);

}
  return (  
    <div className="create-form">
      <form onSubmit={handleSubmit}>
        <label>Genres</label>
        <select value = {genres}
        onChange={(e)=> setGenres(e.target.value)}> 
          <option value="0">All</option>
          <option value="28">Action</option>
          <option value="12">Adventure</option>
          <option value="16">Animation</option>
          <option value="35">Comedy</option>
          <option value="80">Crime</option>
          <option value="99">Documentary</option>
          <option value="18">Drama</option>
          <option value="10751">Family</option>
          <option value="14">Fantasy</option>
          <option value="36">History</option>
          <option value="27">Horror</option>
          <option value="10402">Music</option>
          <option value="9648">Mystery</option>
          <option value="10749">Romance</option>
          <option value="878">Science Fiction</option>
          <option value="10770">TV Movie</option>
          <option value="53">Thriller</option>
          <option value="10752">War</option>
          <option value="37">Western</option>
        </select>
      
        <label>Language</label>
        <select value={language}
        onChange={(e) => setLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="es">Spanish</option>
          <option value="pa">Punjabi</option>
          <option value="ja">Japanese</option>
          <option value="ko">Korean</option>
          <option value="zh">Mandarin</option>
        </select>
       <label>Year</label>
       <select value={year}
       onChange={(e)=>setYear(e.target.value)}>
        <option value="0">All</option>
        <option value="1900">Movies between 1900 to 1950</option>
        <option value="1950">Movies between 1950 to 2000</option>
        <option value="2000">Movies between 2000 to 2010</option>
        <option value="2010">Movies between 2010 to 2020</option>
        <option value="2020">Movies after 2020</option>
       </select>
       <button type="submit">Generate</button>
      </form>
    </div>
  );
}
 
export default Forms;