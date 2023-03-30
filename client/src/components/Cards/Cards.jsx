import Card from '../Card/Card.jsx';
import NotFound from '../Not found/NotFound.jsx'
import './Cards.css'

export default function Cards({videogames}){

    return(
        <div className='container-card'>

            { 
               videogames.length? videogames.map(vg => <Card name={vg.name} image={vg.image} genres={vg.genres} key={vg.name} rating={vg.rating} id={vg.id} />) 
               : <NotFound />
            }
        </div>)
    
}