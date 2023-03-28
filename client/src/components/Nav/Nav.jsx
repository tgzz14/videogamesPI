import SearchBar from '../SearchBar/SearchBar.jsx';
import FilterAndOrder from '../Filtrado/Filtrado.jsx';
import game from './games.png';
import {NavLink} from 'react-router-dom';
import './Nav.css'


export default function Nav(){

    return (
        <div className='nav'>
            <img className='bg' src='https://cancun.uo.edu.mx/sites/default/files/gdi-blog/marketing-videojuegos.jpg' alt='game' />
            <img className='bg' src={game} alt='title' />
            <label>Create new videogames: </label><NavLink to="/create">Click here!</NavLink>
            <SearchBar  />
            <FilterAndOrder /> 
        </div>
    )
}