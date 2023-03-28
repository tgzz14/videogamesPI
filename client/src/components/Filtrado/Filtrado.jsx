/* eslint-disable react-hooks/exhaustive-deps */
import { filterByGenre, alphabeticOrder, filterBySource, orderByRating, getGenres, setCurrentPage } from '../../redux/action.js';
import { useDispatch, useSelector } from 'react-redux';
import {useEffect} from 'react';
import './Filtrado.css'

export default function FilterAndOrder() {
    const dispatch = useDispatch();
    const genres = useSelector(state => state.genres)

    useEffect(() => {
        dispatch(getGenres())
    },[])
    

    const handleBySource = (e) => {
        dispatch(filterBySource(e.target.value)); 
        dispatch(setCurrentPage(1))
    }

    const handleAlphabetic = (e) => {
        dispatch(alphabeticOrder(e.target.value)); 
        dispatch(setCurrentPage(1))
    }

    const handleByGenre = (e) => {
        dispatch(filterByGenre(e.target.value)); 
        dispatch(setCurrentPage(1))
    }

    const handleByRating = (e) => {
        dispatch(orderByRating(e.target.value));
        dispatch(setCurrentPage(1))
    }

    return(
        <div className='filter'>
                <label>Filter by create:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <select className='select' onChange={handleBySource}>
                    <option value='API'>By API</option>
                    <option value='DB'>By BD</option>
                </select>
                </label>
                <label>Filter by rating:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <select className='select' onChange={handleByRating}>
                    <option value='High'>+ rating</option>
                    <option value='Low'>- rating</option>
                </select>
                </label>
                <label>Order Alphabetic:&nbsp; 
                <select className='select' onChange={handleAlphabetic}>
                    <option value='Asc'>Order A-Z</option>
                    <option value='Desc'>Order Z-A</option>
                </select>
                </label>
                <label>Filter by genre:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <select className='select' onChange={handleByGenre}>
                    {
                        genres?.map(genre => <option value={genre} key={genre}>{genre}</option>)
                    }
                </select>
                </label>
        </div>
    )

}