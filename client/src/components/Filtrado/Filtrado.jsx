/* eslint-disable react-hooks/exhaustive-deps */
import { filterByGenre, alphabeticOrder, filterBySource, orderByRating, getGenres, setCurrentPage } from '../../redux/action.js';
import { useDispatch, useSelector } from 'react-redux';
import {useEffect} from 'react';
import './Filtrado.css'

export default function FilterAndOrder() {
    const dispatch = useDispatch();
    const {genres} = useSelector(state => state)

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
                <label>Filter by create:
                <select className='select' onChange={handleBySource} defaultValue=''>
                    <option disabled value=''>Select one</option>
                    <option value='API'>By API</option>
                    <option value='DB'>By BD</option>
                </select>
                </label>
                <label>Filter by rating:
                <select className='select' onChange={handleByRating} defaultValue=''>
                    <option disabled value=''>Select one</option>
                    <option value='High'>+ rating</option>
                    <option value='Low'>- rating</option>
                </select>
                </label>
                <label>Order Alphabetic: 
                <select className='select' onChange={handleAlphabetic} defaultValue=''>
                <option disabled value=''>Select one</option>
                    <option value='Asc'>Order A-Z</option>
                    <option value='Desc'>Order Z-A</option>
                </select>
                </label>
                <label>Filter by genre:
                <select className='select' onChange={handleByGenre} defaultValue=''>
                    <option value='' >Select one</option>
                    {
                        genres?.map(genre => <option value={genre} key={genre}>{genre}</option>)
                    }
                </select>
                </label>
        </div>
    )

}