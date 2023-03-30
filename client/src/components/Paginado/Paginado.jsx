/* eslint-disable jsx-a11y/anchor-is-valid */
import { useSelector, useDispatch } from 'react-redux';
import {setCurrentPage} from '../../redux/action.js'
import "./Paginado.css";

export default function Paginado({videogamePerPage, videogames}){

    const dispatch = useDispatch();
    const currentPage = useSelector(state => state.currentPage)
    const next = () => dispatch(setCurrentPage(currentPage + 1))
    const prev = () => dispatch(setCurrentPage(currentPage - 1))
    const lengthPage = Math.ceil(videogames/videogamePerPage)

    return(
        <div className="div">

          
            {   currentPage === 1 && !lengthPage ? false :
                currentPage === 1 && lengthPage === 1  ?
                ( <>
                  <span> {currentPage} de {lengthPage}</span>
                </>) 
                : currentPage === 1 && lengthPage > 1 ?
                 ( <>
                    <span> {currentPage} de {lengthPage}</span>
                    <a className='next' onClick={next}> next </a>
                  </>) 
                : currentPage < lengthPage && currentPage !== 1 ? 
                ( <>
                <a className='prev' onClick={prev}> previous </a> 
                <span>{currentPage} de {lengthPage}</span>
                <a  className='next' onClick={next}> next </a>
                </>) 
                : 
                <>
                <a className='prev' onClick={prev}> previous </a><span>{currentPage} de {lengthPage}</span>
                </> 
            }
           

        </div>
    )
}