import Axios from 'axios';

export const GET_QUOTES = 'GET_QUOTES';
export const QUOTES_RECIEVED = 'QUOTES_RECIEVED';
export const QUOTES_NOT_RECIEVED = 'QUOTES_NOT_RECIEVED';

export const getQuotes = () => dispatch => {
    dispatch({ type: 'GET_QUOTES' });
    console.log('does this work')
    Axios
        .get('https://quote-garden.herokuapp.com/quotes/random')
        .then(res => {
            console.log('get quote resp', res)
            dispatch({ type: 'QUOTES_RECIEVED', payload: res.data})
        })
        .catch(err => {
            console.log('data was not recieved', err)
            dispatch({ type: 'QUOTES_NOT_RECIEVED', payload: err.response})
        })
}