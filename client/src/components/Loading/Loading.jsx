import load from './load.gif';
import './Loading.css'

export default function Loading(){

    return(
        <div className='container-load'>
            <img src={load} alt='...loading'/>
            <h1 className='info-load'>LOADING</h1>
        </div>
    )

}