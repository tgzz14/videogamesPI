import { useState } from 'react';
import { findByName } from '../../redux/action.js';
import { useDispatch } from 'react-redux';
import './SearchBar.css'

export default function SearchBar(){

    const dispatch = useDispatch()

    const [name, setName] = useState("");
    const handleChange = (e) => setName(e.target.value);
    const onSearch = (e) => {
        e.preventDefault()
        dispatch(findByName(name))
    }

    return(
        <div className='container-sb'>
            <input
            className='input-sb'
            type='search'
            value={name}
            placeholder='looking for name...'
            onChange={handleChange}
             />
             <button className='btn-sb' onClick={onSearch}>search</button>
        </div>
    )
}