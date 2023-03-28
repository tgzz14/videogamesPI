/* eslint-disable jsx-a11y/anchor-is-valid */
import { useSelector, useDispatch } from 'react-redux';
import {setCurrentPage} from '../../redux/action.js'
import "./Paginado.css";

export default function Paginado({videogamePerPage, videogames, paginado}){

    const dispatch = useDispatch();
    const currentPage = useSelector(state => state.currentPage)
    const pageNumbers = [];
    const next = () => dispatch(setCurrentPage(currentPage + 1))
    const prev = () => dispatch(setCurrentPage(currentPage - 1))

    for( let i = 0; i < Math.ceil(videogames/videogamePerPage); i++){
        pageNumbers.push(i + 1)
    }

   

    return(
        <div className="div">
{/* {            <ul className='page'>
            {
                pageNumbers && pageNumbers.map(num =>
                    <li key={num}>
                        <a  onClick={() => paginado(num)}>{num}</a>
                    </li>
                )
            }
            </ul> }   */}
          
            {
                currentPage === 1 && pageNumbers.length ?
                ( <>
                  <span> {currentPage} de {pageNumbers.length}</span>
                  <a className='next' onClick={next}> next </a>
                </>) 
                : currentPage < pageNumbers.length && currentPage !== 1 ? 
                ( <>
                <a className='prev' onClick={prev}> previous </a> 
                <span>{currentPage} de {pageNumbers.length}</span>
                <a  className='next' onClick={next}> next </a>
                </>) 
                : pageNumbers.length ? 
                <>
                <a className='prev' onClick={prev}> previous </a><span>{currentPage} de {pageNumbers.length}</span>
                </> : ''
            }
           

        </div>
    )
}