import { NavLink } from 'react-router-dom';
import './Card.css'


export default function Card({image, name, genres, rating, id}){
    
    return(
        <div className='container'>
            <NavLink className='link' to={`/detail/${id}`}>
                <img src={image} alt={name} className='img text' />
                <h3 className='text'>{name}</h3>
                <h5 className='text rating'>{rating}</h5>
                <ul className='ul'>
                {
                    genres && genres.map(el => (<li className='li' key={el}>{el}</li>))
                }
                </ul>
            </NavLink>
        </div>
    )
}