/* eslint-disable react-hooks/exhaustive-deps */
import { getDetail, setLoading, cleanDetail } from '../../redux/action.js';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../Loading/Loading.jsx'
import './Detail.css'

export default function Detail(){
    const {detailId} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {detail, isLoading} = useSelector( state => state)
    

    useEffect(() => {
        setTimeout(() =>{
            dispatch(getDetail(detailId)).then(() => dispatch(setLoading(true)))
        },1000)
        
        return () => dispatch(cleanDetail())
    },[detailId])

    return(
        <div>
            
            {
                isLoading === false ? <Loading /> : detail.id ?  ( 
                <div className='container-detail'>
                <h1>{detail.id}</h1>
                <h1>{detail.name?.toUpperCase()} <span className='rating' >{detail.rating}</span></h1>
                <img className='img-detail' src={detail.image} alt={detail.name} />
                <h3>released date: {detail.released}</h3>
                <p>{detail.description}</p>
                <label>Platforms: </label>
                <ul className='ul-detail'>
                {
                    detail.platforms?.map(platform => <li className='li-detail' key={platform}>{platform}</li>)
                }
                </ul>
                <label>Genres: </label>
                <ul className='ul-detail'>
                {
                    detail.Genres? detail.Genres.map(genre => <li className='li-detail' key={genre.name}>{genre.name}</li>) : (detail.genres?.map(genre => <li className='li-detail' key={genre}>{genre}</li>))
                }
                </ul>
                <div className='container-button'>
                <button className='btn-detail' onClick={() =>{navigate('/home')}}>go Home!</button>
                </div>
                </div>
                ) : ''
            }

        </div>
    )    
}