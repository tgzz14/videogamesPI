import load from './load.gif';
import './Loading.css'

export default function Loading(){

    return(
        <div className='container-load'>
            <img src={load} className='img-load' alt='...loading'/>
        </div>
    )

}