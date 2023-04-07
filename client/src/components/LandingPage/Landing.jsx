import { useNavigate } from 'react-router-dom';
import './Lading.css'

export default function Landing() {
    const navigate = useNavigate()
 
    return(
        <div className='container-landing'>
                <button className='btn-landing' onClick={() => navigate("/home")}><span className='span-landing'>GET START</span> </button>
        </div>
    )
}