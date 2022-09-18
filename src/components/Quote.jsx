import React, { useState } from 'react'
import axios from 'axios'
import { FaQuoteLeft } from "react-icons/fa";


const Quote = () => {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");

    // copied from rapidapi https://rapidapi.com/martin.svoboda/api/quotes15/
    const options = {
        method: 'GET',
        url: 'https://quotes15.p.rapidapi.com/quotes/random/',
        headers: {
            'X-RapidAPI-Key': `${process.env.REACT_APP_RAPIDAPI_KEY}`,
            'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
        }
    };
    
    axios.request(options).then(function (response) {
        setQuote(response.data.content);
        setAuthor(response.data.originator.name);

    }).catch(function (error) {
        console.error(error);
    });

    return (
        <div>
            <FaQuoteLeft style={{ marginRight: '10px' }} />
            {quote}
            <div id="author">
                <p>- {author}</p>
            </div>
        </div>

    )
}

export default Quote