import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Forms.css';

const Forms = () => {
  const [genres, setGenres] = useState('');
  const [language, setLanguage] = useState('en');
  const [year, setYear] = useState('0');
  const navigate = useNavigate();
  const location = useLocation();
const handleSubmit = (e) => {
  e.preventDefault();
  if(location.pathname==='/')
  {
    navigate('/Cards', {state:{gen : genres, id: language, ye: year}});
  }
  else{
    navigate('/Cardss', {state:{gen : genres, id: language, ye: year}});
  }
}
if(location.pathname === '/'){
  return ( 
    <div className='background'> 
    <div className="create-form">
      <h1>Movies</h1>
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
       <button type="submit" className='button'>Generate</button>
      </form>
    </div>
    </div>
  );
}
else{
  return ( 
    <div className='background'> 
    <div className="create-form">
    <h1>Series</h1>
      <form onSubmit={handleSubmit}>
        <label>Genres</label>
        <select value = {genres}
        onChange={(e)=> setGenres(e.target.value)}> 
          <option value="0">All</option>
          <option value="10759">Action & Adventure</option>
          <option value="16">Animation</option>
          <option value="35">Comedy</option>
          <option value="80">Crime</option>
          <option value="99">Documentary</option>
          <option value="18">Drama</option>
          <option value="10751">Family</option>
          <option value="10762">Kids</option>
          <option value="10765">Fantasy & Sci-Fi</option>
          <option value="10764">Reality</option>
          <option value="9648">Mystery</option>
          <option value="10766">Soap</option>
          <option value="10763">News</option>
          <option value="10767">Talk</option>
          <option value="10768">War & Politics</option>
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
       <button type="submit" className='button'>Generate</button>
      </form>
    </div>
    </div>
  );
}
  
}
 
export default Forms;