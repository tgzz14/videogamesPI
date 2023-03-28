import Card from '../Card/Card.jsx';
//import {  useSelector } from 'react-redux';
import './Cards.css'

export default function Cards({videogames}){
    //const isLoading = useSelector(state => state.isLoading);


    return(
        <div className='container-card'>

            { 
               videogames?.map(vg => <Card name={vg.name} image={vg.image} genres={vg.genres} key={vg.name} rating={vg.rating} id={vg.id} />)
            }
        </div>)
    
}