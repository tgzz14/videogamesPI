import Card from '../Card/Card.jsx';
import NotFound from '../Not found/NotFound.jsx'

import './Cards.css'

export default function Cards({videogames}){

    function openNav() {
        document.getElementById("nav").style.width = "25vw";
        document.getElementById("cards").style.marginLeft = "25vw";
        document.getElementById("open").style.display= "none";
      }

    return(
        <div className='container-card' id='cards'>
            <button class="btn-open" id='open' onClick={openNav}><label>☰ OPEN MENU</label></button>  
            { 
               videogames.length? videogames.map(vg => <Card name={vg.name} image={vg.image} genres={vg.genres} key={vg.name} rating={vg.rating} id={vg.id} />) 
               : 
              <NotFound />
              
            }
        </div>)
    
}