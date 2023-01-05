import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import './Saved.css';

const Saved = () => {
let [items, setItems] = useState(() => {
    const data = localStorage.getItem('myItem');
    return data ? JSON.parse(data) : false
});

let [localSavedItems] = useState(() => {
    const data = localStorage.getItem("savedItems");
    return data ? JSON.parse(data) : [ ]
});

const handleClick = (name, key) => {
    
    let index = items.findIndex(i => i.id === name);
    items.splice(index,1);
    localStorage.setItem('myItem', JSON.stringify(items));

    let localValue = JSON.parse(localStorage.getItem('myItem'));


    localSavedItems[key] = false; 
    delete localSavedItems[key];

    localStorage.setItem('savedItems', JSON.stringify(localSavedItems));

    setItems(localValue);

 }
    return ( 
        <div>
            <Navbar />
            {items && <p></p>}
          {items && <div className="card-container-saved"> 
           {items.map(obj => (
           <div className="card-saved" key={obj.keyt}>
           <img src = {`https://image.tmdb.org/t/p/w500`+ obj.patht} alt="poster"></img>
           <h2>{obj.id}</h2>
           <button onClick={()=> handleClick(obj.id, obj.keyt)} className='save-button'><img alt="svgImg" style={{width: "24px", height: "24px"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAAgklEQVQ4je2SsQ2DUAxEzxRRmkiswQpUmSQrZAoyCWVGSsMOKNJP82gI+oqEv0NFwUlubN/zFZZ2JeABJNaVgC732A8gSToV7iQzO68BiCQ1s8VXRQyeDkAZ8JlrE2CQdJXUSnqF4mQf9wTqrH8B+u/QA7yBuzO/AaMHaAIpizt/aQJtZ2ZdvfR18QAAAABJRU5ErkJggg=="/></button>
           </div>
           ))}
        </div>}
        </div>
     )
}
 
export default Saved;