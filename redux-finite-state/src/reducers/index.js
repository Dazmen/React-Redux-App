import { GET_QUOTES, QUOTES_RECIEVED, QUOTES_NOT_RECIEVED } from '../actions/getQuotes';

const initialState = {
    quotesLoading: false,
    quotesAquired: [],
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type){
        case GET_QUOTES:
            return {
                ...state,
                quotesLoading: true
            };
        case QUOTES_RECIEVED:
            return {
                ...state,
                quotesAquired: [action.payload, ...state.quotesAquired],
                quotesLoading: false
            }
        case QUOTES_NOT_RECIEVED:
            return {
                ...state,
                quotesLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default reducer;