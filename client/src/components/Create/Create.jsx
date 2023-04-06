/* eslint-disable react-hooks/exhaustive-deps */
import { getGenres, cleanVideogames, setLoading, setCurrentPage } from '../../redux/action.js';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { validate } from './validate.js';
import create from './create.jpg'
import axios from 'axios';
import './Create.css';

export default function Create(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const genresDB = useSelector(state => state.genres)
    const [genres, setGenres] = useState([])
    const [platforms, setPlatforms] = useState([])
    const [form, setForm] = useState({
        name: '',
        description: '',
        platforms: [],
        released: '',
        rating: 0,
        image: '',
        genres: []
    })
    const [errors, setErrors] = useState({
        name: '',
        description: '',
        platforms: '',
        released: '',
        rating: '',
        image: '',
        genres: ''
    })

    const handleInputChange= (e) => {
        if([e.target.name].includes('genres')){
            if(genres.indexOf(e.target.value) === -1)
                setGenres([...genres, e.target.value]);
                setErrors(validate({...form, [e.target.name]: e.target.value })) 
        } else if([e.target.name].includes('platforms')){
            if(platforms.indexOf(e.target.value) === -1)
                setPlatforms([...platforms, e.target.value]);
                setErrors(validate({...form, [e.target.name]: e.target.value })) 
        }else {
                setForm({...form, [e.target.name]: e.target.value})
                setErrors(validate({...form, [e.target.name]: e.target.value }))
        }
    }

    const handleClick = async (e) => {
        e.preventDefault()
        if(errors.name || errors.description || errors.platforms || errors.genres || errors.rating || errors.image || errors.released || !form.name || !form.description || !form.platforms || !form.genres || !form.rating || !form.image || !form.released){
            alert('complete the form correctly')
        } else {
            await axios.post('http://localhost:3001/videogames', form )
            alert('GAME CREATE SUCCEFULLY!')
            dispatch(cleanVideogames());
            dispatch(setCurrentPage(1))
            dispatch(setLoading(true));
            navigate('/home');
        }
    }

    const handleHomeClick = (e) => {
        e.preventDefault()
        navigate('/home')
    }

    useEffect(() => {
        
        dispatch(getGenres())
        setForm({...form, 
            genres: genres,
            platforms: platforms
        })
    },[genres, platforms])
    
    return(
        <div className='container-form' >
            <form>
                <label htmlFor='name'>Name:&nbsp;&nbsp;&nbsp;</label>
                <input type='text' name='name' id='name' className='input-form' onChange={handleInputChange} />
                <p className='p'>{errors.name}</p>
                
                <label htmlFor='released'>Released date: </label>
                <input type='date' name='released' id='released' className='input-form' onChange={handleInputChange} />
                <p className='p'>{errors.released}</p>

                <label htmlFor='rating'>Rating:&nbsp;&nbsp;</label>
                <input type='number' name='rating' id='rating' className='input-form' onChange={handleInputChange} />
                <p className='p'>{errors.rating}</p>

                <label htmlFor='image'>Image:&nbsp;&nbsp;</label>
                <input type="text" name='image' id='image' className='input-form' onChange={handleInputChange} />
                <br/>
                <label htmlFor='platforms'>Platforms:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <select className='select-form' onChange={handleInputChange} name='platforms' id='platforms' multiple>
                    <option value='PC'>PC</option>
                    <option value='Playstation'>Playstation</option>
                    <option value='Xbox'>Xbox</option>
                    <option value='Linux'>Linux</option>
                    <option value='iOs'>iOs</option>
                    <option value='Web'>Web</option>
                    <option value='Nintendo'>Nintendo</option>
                    <option value='Atari'>Atari</option>
                </select>
                <p className='p'>{errors.platforms}</p>
                <br />
                <label htmlFor='genres'>Genres: </label>
                <select className='select-form' onChange={handleInputChange} name='genres' id='genres' multiple>
                {   
                    genresDB?.map(genre => (
                        <option  value={genre} key={genre}>{genre}</option>))
                    
                }               
                </select>
                <p className='p'>{errors.genres}</p>

                <label htmlFor='description'>Description: </label>
                <br/>
                <textarea name='description' id='description' className='input-form description' onChange={handleInputChange} />
                <p className='p'>{errors.description}</p>

            <button className='btn' onClick={handleClick}>created</button>
            <button className='btn' onClick={handleHomeClick}>Go home</button>
            </form>
            <img src={create} className='img-create' alt='create' />
        </div>
    )
}