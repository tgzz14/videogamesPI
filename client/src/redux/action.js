import axios from 'axios';

export const getVideogames = () => {
    return async function (dispatch) {
        try {
            let result = await axios.get('http://localhost:3001/videogames');
            dispatch({
                type: "GET_VIDEOGAMES",
                payload: result.data
            })
            
        } catch (error) {
            console.log(error.message)
        }
    }
}

export const filterByGenre = (genre) => {
    return {
        type: 'FILTER_BY_GENRE',
        payload: genre
    }

}

export const alphabeticOrder = (value) => {
    return {
        type: 'ORDER_ALPHA',
        payload: value
    }

}

export const filterBySource = (value) => {
    return {
        type: 'FILTER_BY_SOURCE',
        payload: value
    }
}

export const findByName = (value) => {
    return async function(dispatch){
        try {
            let result = await axios.get(`http://localhost:3001/videogames?name=${value}`);
            dispatch({
                type: 'FIND_BY_NAME',
                payload: result.data
            })
            
        } catch (error) {
            alert(error.response.data)
        }
    }
}

export const orderByRating = (value) => {
    return {
        type: 'ORDER_BY_RATING',
        payload: value
    }

}

export const getDetail = (id) => {
    return async function (dispatch){
        try {
            let result = await axios.get(`http://localhost:3001/videogames/${id}`);
            dispatch({
                type: 'GET_DETAIL',
                payload: result.data
            })
            
        } catch (error) {
            alert(error.response.data)
        }

    }
}

export const getGenres = () => {
    return async function (dispatch){
        try {
            let result = await axios.get(`http://localhost:3001/genres`)
            dispatch({
                type: 'GET_GENRES',
                payload: result.data
            })
        } catch (error) {
            alert(error.response.data)
        }
    }
}

export const setLoading = (boolean) => {
    return {
        type: 'LOADING',
        payload: boolean
    }
}

export const cleanDetail = () => {
    return {
        type: 'CLEAN_DETAIL'
    }
}

export const setCurrentPage = (value) => {
    return {
        type: 'SET_CURRENT_PAGE',
        payload: value
    }
}

export const cleanVideogames = () => {
    return {
        type: 'CLEAN_VIDEOGAMES'
    }
}
