import React, {  useState,useEffect } from 'react'
import "./styles.scss"
import { FaQuoteLeft, FaTwitterSquare } from "react-icons/fa";
import useGenerateRandomColor from './components/useGenerateRandomColor';
import Quote from './components/Quote';

const App = () => {

    const { color, generateColor } = useGenerateRandomColor();
    useEffect(() => {
        const root = document.documentElement;
        root.style.setProperty('--user-color', color);
    }, [color]);

    return (

        <div>
            <div id="quote-box">
                <div id="text">
                    <Quote />
                </div>
                
                <div className="buttons">
                    <a href='https://twitter.com/intent/tweet' >
                        <button id='tweet' style={{ display: 'none' }}>Twitter</button>
                        <label htmlFor='twitter'>
                            <FaTwitterSquare className='twitter' />
                        </label>
                    </a>
                    <button id="new-quote" onClick={generateColor}>
                        New Quote
                    </button>
                </div>
            </div>
            <p style={{ color: '#fff', textAlign: 'center' }}>By Virus</p>
        </div>
    )
}


export default App