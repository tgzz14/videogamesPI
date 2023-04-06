//import React, { useEffect } from 'react';
//import { useDispatch } from 'react-redux';
//import { getVideogames, setLoading } from '../../redux/action.js';
import { useNavigate } from 'react-router-dom';
import './Lading.css'


export default function Landing() {
   //const dispatch = useDispatch()
    const navigate = useNavigate()
//     useEffect(()=>{
//         dispatch(getVideogames()).then(() => dispatch(setLoading(false)))
// //eslint-disable-next-line react-hooks/exhaustive-deps
// },[]) 

 
    return(
        <div className='container-landing'>
                <button className='btn-landing' onClick={() => navigate("/home")}><span className='span-landing'>GET START</span> </button>
        </div>
    )
}