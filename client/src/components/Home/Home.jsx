/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Paginado from '../Paginado/Paginado.jsx';
import { getVideogames, setLoading } from '../../redux/action.js';
import Loading from '../Loading/Loading.jsx'
import Cards from '../Cards/Cards.jsx';
import Nav from '../Nav/Nav.jsx'
import './Home.css'


export default function Home(){
    const dispatch = useDispatch()
    const {videogames, currentPage, isLoading} = useSelector(state => state);
    const videogamePerPage = 15;
    const indexOfLastVideogame = currentPage * videogamePerPage ;
    const indexOfFirstVideogame = indexOfLastVideogame - videogamePerPage;
    const currentVideogames = videogames?.slice(indexOfFirstVideogame, indexOfLastVideogame);

    useEffect(()=> {
        if( !videogames.length ){
            dispatch(getVideogames()).then(() => dispatch(setLoading(false)))
        }
    },[]) 

    return(
        <div className='container-home'>
            <Nav />
        {    isLoading ? <Loading />: 
            ( <>
            <Paginado videogames={videogames?.length} videogamePerPage={videogamePerPage}  /> 
            <Cards videogames={currentVideogames} />
            </>
       )}
        </div>
    )
}