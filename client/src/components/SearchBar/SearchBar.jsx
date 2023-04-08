import { findByName, setCurrentPage } from '../../redux/action.js';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import './SearchBar.css'

export default function SearchBar(){

    const dispatch = useDispatch()
    const [name, setName] = useState("");
    const handleChange = (e) => setName(e.target.value);

    const onSearch = () => {

        if(!name) {
            alert('the field is empty')
        } else {
            dispatch(findByName(name));
            setName('')
            dispatch(setCurrentPage(1))
        }
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