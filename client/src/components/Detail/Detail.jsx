/* eslint-disable react-hooks/exhaustive-deps */
import { getDetail, cleanDetail } from '../../redux/action.js';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../Loading/Loading.jsx'
import './Detail.css'

export default function Detail(){
    const {detailId} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { detail } = useSelector( state => state)
    

    useEffect(() => {

        dispatch(getDetail(detailId))
        
        return () => dispatch(cleanDetail())
    },[detailId])

    return(
        <div>
            
            {
                 detail.id ?  ( 
                <div className='container-detail'>
                <n1 className='h1-home' onClick={() =>{navigate(-1)}}>Go home... </n1>
                <h1 className='title-detail'>{detail.id}</h1>
                <h1 className='title-detail'>{detail.name?.toUpperCase()} <span className='rating' >{detail.rating}</span></h1>
                <img className='img-detail' src={detail.image} alt={detail.name} />
                <h3>released date: {detail.released}</h3>
                <p>{detail.description}</p>
                Platforms:
                <ul className='ul-detail'>
                {
                    detail.platforms?.map(platform => <li className='li-detail' key={platform}>{platform}</li>)
                }
                </ul>
                Genres: 
                <ul className='ul-detail'>
                {
                    detail.Genres? detail.Genres.map(genre => <li className='li-detail' key={genre.name}>{genre.name}</li>) : (detail.genres?.map(genre => <li className='li-detail' key={genre}>{genre}</li>))
                }
                </ul>
                </div>
                ) : <Loading /> 
            }

        </div>
    )    
}