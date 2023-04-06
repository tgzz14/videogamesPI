import './NotFound.css';
import notFound from './nf.jpg'

export default function NotFound() {

    return(
        <div className='nf-container'>
            <img src={notFound} className='img-nf' alt='not found' />
            <h1 className='h1-nf'>NOT FOUND</h1>
        </div>
    )
}