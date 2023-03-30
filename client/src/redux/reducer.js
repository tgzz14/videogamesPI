const initialState = {
     videogames : [],
     backUpVideogames : [],
     genres: [],
     isLoading: true,
     detail: {},
     currentPage: 1
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_VIDEOGAMES":
            return {
                ...state,
                videogames: action.payload,
                backUpVideogames: action.payload,
            };
        case "FILTER_BY_GENRE":
            const filter =  state.backUpVideogames?.filter( (el) => 
            el.genres?.find(genre => genre === action.payload))
            return{
                ...state,
                videogames: [...filter]
            };
        case "ORDER_ALPHA":
           
            let orderVideogames = state.backUpVideogames?.sort((a,b) => {
                let nameA = a.name.toUpperCase();
                let nameB = b.name.toUpperCase();
                if(action.payload === 'Asc'){
                    if(nameA < nameB){
                        return -1;
                    }
                    if(nameB < nameA){
                        return 1;
                    } 
                        return 0
                } else {
                    if(nameB < nameA){
                        return -1;
                    }
                    if(nameA < nameB){
                        return 1;
                    } 
                        return 0

                    
                    }
                })
                return{
                    ...state,
                    videogames: orderVideogames
    
                };
        case 'FILTER_BY_SOURCE':
            const filterSrc = state.backUpVideogames?.filter(el => {
                if(action.payload === 'DB')  return el.createdByDB === true;
                    return el.createdByDB === false;
            })
            return{
                ...state,
                videogames: filterSrc
            };
        case 'FIND_BY_NAME':
            return{
                ...state,
                videogames: action.payload,
                backUpVideogames: action.payload,
            };
        case 'ORDER_BY_RATING':
            const orderRating = state.backUpVideogames?.sort( (a,b) => {
                if(action.payload === 'Low') {
                    return a.rating - b.rating
                } else {
                    return b.rating - a.rating
                }
            })
            return {
                ...state,
                videogames: orderRating
            };
        case 'GET_DETAIL':
            return {
                ...state,
                detail: action.payload
            };
        case 'GET_GENRES':
            let arr = action.payload.map(el => el.name)
            return {
                ...state,
                genres: arr
            };
        case 'LOADING':
            return {
                ...state,
                isLoading: action.payload
            };
        case 'CLEAN_DETAIL': 
            return {
            ...state,
            detail: {}
            };
        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.payload
            }
        case 'CLEAN_VIDEOGAMES':
            return {
                ...state,
                videogames: []
            }
        default:
            return {
                ...state,
            }
    }
}

export default rootReducer;