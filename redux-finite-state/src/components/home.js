import React from 'react';
import Quote from './quote';
import { getQuotes } from '../actions/getQuotes';
import { connect } from 'react-redux';


const Home = (props) => {
    const quoteArry = props.quotesAquired;
    console.log('this is quoteArry', quoteArry)
    return(
        <div>
            <h1>Welcome to Our Quote Generator</h1>
            <button onClick={props.getQuotes}>
                Get a quote!
            </button>
            {!props.quotesAquired.length > 0 && !props.quotesLoading && (
                <h2>Get your first quote!</h2>
            )}
            {props.quotesLoading && (
                <h2>Retrieving Quotes....</h2>
            )}
            {props.quotesAquired && !props.quotesLoading && quoteArry.map(quote => {
                return <Quote quote={quote} key={quote._id}/>
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        quotesLoading: state.quotesLoading,
        quotesAquired: state.quotesAquired,
        error: state.error
    }
}

export default connect(mapStateToProps,{ getQuotes })(Home);