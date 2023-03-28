/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVideogames, setLoading, setCurrentPage } from '../../redux/action.js';
import Loading from '../Loading/Loading.jsx'
import Paginado from '../Paginado/Paginado.jsx';
import Cards from '../Cards/Cards.jsx';
import Nav from '../Nav/Nav.jsx'
import './Home.css'


export default function Home(){
    const dispatch = useDispatch();
    const {videogames, isLoading, currentPage} = useSelector(state => state);
    //const [currentPage, setCurrentPage] = useState(1); // para iniciar en la pagina 1
    // eslint-disable-next-line no-unused-vars
    const videogamePerPage = 15 //videogames por pagina
    const indexOfLastVideogame = currentPage * videogamePerPage //15
    const indexOfFirstVideogame = indexOfLastVideogame - videogamePerPage
    const currentVideogames = videogames?.slice(indexOfFirstVideogame, indexOfLastVideogame)


    const paginado = (pageNumber) => {
        dispatch(setCurrentPage(pageNumber))
    }

    useEffect(()=>{
        
            dispatch(getVideogames()).then(() => dispatch(setLoading(false)))
        
    },[])
   
    console.log(isLoading)
    return(
        <div className='container-home'>
            
            <Nav />

            {
                isLoading  ? <Loading />:
           <>
            <Paginado videogames={videogames?.length} videogamePerPage={videogamePerPage} paginado={paginado} currentPage={currentPage} /> 
            <Cards videogames={currentVideogames} />
           </>
            }
        </div>
    )
}