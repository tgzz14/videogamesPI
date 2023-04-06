import SearchBar from '../SearchBar/SearchBar.jsx';
import FilterAndOrder from '../Filtrado/Filtrado.jsx';
import game from './games.png';
import {useDispatch} from 'react-redux'
import { NavLink } from 'react-router-dom';
import './Nav.css'
import { setCurrentPage, getVideogames } from '../../redux/action.js';

export default function Nav(){
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(getVideogames())
        dispatch(setCurrentPage(1))
    }

    return (
        <div className='nav'>
            <img className='bg' src='https://cancun.uo.edu.mx/sites/default/files/gdi-blog/marketing-videojuegos.jpg' alt='game' />
            <img className='bg' src={game} alt='title' />
            <label>Create new videogames: </label><NavLink to="/create">Click here!</NavLink>
            <SearchBar  />
            <FilterAndOrder /> 
            <button className='btn' onClick={handleClick}>Reset</button>
        </div>
    )
}