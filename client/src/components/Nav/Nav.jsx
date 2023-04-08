import SearchBar from '../SearchBar/SearchBar.jsx';
import FilterAndOrder from '../Filtrado/Filtrado.jsx';
import { NavLink } from 'react-router-dom';
import game from './games.png';
import './Nav.css'

export default function Nav(){


      
      function closeNav() {
        document.getElementById("nav").style.width = "0";
        document.getElementById("cards").style.marginLeft= "0";
        document.getElementById("open").style.display= "inline";
      }

    return (
        <div className='nav' id='nav'>
            
            <button onClick={closeNav} className='btn-close' ><label>☰ CLOSE MENU</label></button>
            <img className='bg' src='https://cancun.uo.edu.mx/sites/default/files/gdi-blog/marketing-videojuegos.jpg' alt='game' />
            <img className='bg' src={game} alt='title' />
            <label>Create new videogames: <NavLink to="/create">Click here!</NavLink> </label>
            <SearchBar  />
            <FilterAndOrder /> 
        </div>
    )
}