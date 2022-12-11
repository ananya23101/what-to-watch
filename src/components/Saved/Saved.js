import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import './Saved.css';

const Saved = () => {
const [items] = useState(() => {
    const data = localStorage.getItem('myItem');
    return data ? JSON.parse(data) : false
})

    return ( 
        <div>
            <Navbar />
            <div className="card-container-saved"> 
           {items.map(obj => (
           <div className="card-saved">
           <img src = {`https://image.tmdb.org/t/p/w500`+ obj.patht} alt="poster"></img>
           <h2>{obj.id}</h2>
           </div>

           ))}
        </div>
        </div>
     )
}
 
export default Saved;