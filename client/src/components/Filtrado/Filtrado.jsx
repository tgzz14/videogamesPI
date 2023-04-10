/* eslint-disable react-hooks/exhaustive-deps */
import { filterByGenre, alphabeticOrder, filterBySource, orderByRating, getGenres, setCurrentPage, getVideogames } from '../../redux/action.js';
import { useDispatch, useSelector } from 'react-redux';
import {useEffect, useState} from 'react';
import './Filtrado.css'

export default function FilterAndOrder() {
    const dispatch = useDispatch();
    const {genres} = useSelector(state => state)
    const [select, setSelect] = useState({
        source: '',
        alphabetic: '',
        genre: '',
        rating: ''
    })

    const handleClick = () => {
        setSelect({
            source: '',
            alphabetic: '',
            genre: '',
            rating: ''
        })
        dispatch(getVideogames())
        dispatch(setCurrentPage(1))
    }

    useEffect(() => {
        dispatch(getGenres())
    },[])

    const handleBySource = (e) => {
        setSelect({...select, source: e.target.value})
        dispatch(filterBySource(e.target.value)); 
        dispatch(setCurrentPage(1))
        
    }

    const handleAlphabetic = (e) => {
        setSelect({...select, alphabetic: e.target.value})
        dispatch(alphabeticOrder(e.target.value)); 
        dispatch(setCurrentPage(1))
        
    }

    const handleByGenre = (e) => {
        setSelect({...select, genre: e.target.value})
        dispatch(filterByGenre(e.target.value)); 
        dispatch(setCurrentPage(1))
        
    }

    const handleByRating = (e) => {
        setSelect({...select, rating: e.target.value})
        dispatch(orderByRating(e.target.value));
        dispatch(setCurrentPage(1))
        
    }

    return(
        <div className='filter'>
                <label>Filter by create: 
                <select className='select' onChange={handleBySource} value={select.source}>
                    <option disabled value=''>Filter by create</option>
                    <option value='API'>By API</option>
                    <option value='DB'>By BD</option>
                </select>
                </label>
                <label>Filter by rating:
                <select className='select' onChange={handleByRating} value={select.rating}>
                    <option disabled value=''>Order by create</option>
                    <option value='High'>+ rating</option>
                    <option value='Low'>- rating</option>
                </select>
                </label>
                <label>Order Alphabetic: 
                <select className='select' onChange={handleAlphabetic} value={select.alphabetic}>
                <option disabled value=''>Order Alphabetic</option>
                    <option value='Asc'>Order A-Z</option>
                    <option value='Desc'>Order Z-A</option>
                </select>
                </label>
                <label>Filter by genre:
                <select className='select' onChange={handleByGenre} value={select.genre}>
                    <option value='' >Filter by Genre</option>
                    {
                        genres?.map(genre => <option value={genre} key={genre}>{genre}</option>)
                    }
                </select>
                </label>
                <button className='btn' onClick={handleClick}>Reset</button>
        </div>
    )

}