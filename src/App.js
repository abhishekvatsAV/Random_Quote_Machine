import React, { useState, useEffect } from "react";
import "./styles.scss";
import { FaTwitterSquare } from "react-icons/fa";
import useGenerateRandomColor from "./components/useGenerateRandomColor";
import Quote from "./components/Quote";
import axios from "axios";
import { SkeletonTheme } from "react-loading-skeleton";

const App = () => {
  const { color, generateColor } = useGenerateRandomColor();
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--user-color", color);
  }, [color]);

  const options = {
    method: "GET",
    url: "https://quotes15.p.rapidapi.com/quotes/random/",
    headers: {
      "X-RapidAPI-Key": `${process.env.REACT_APP_RAPIDAPI_KEY}`,
      "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
    },
    // get the evn key from here https://rapidapi.com/martin.svoboda/api/quotes15/
  };

  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = async () => {
    generateColor();
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setQuote(response.data.content);
      setAuthor(response.data.originator.name);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div>
      <div id="quote-box">
        <div id="text">
          <SkeletonTheme color="#202020" highlightColor={color}>
            <Quote quote={quote} author={author} isLoading={isLoading} />
          </SkeletonTheme>
        </div>

        <div className="buttons">
          <a href="https://twitter.com/intent/tweet">
            <button id="tweet" style={{ display: "none" }}>
              Twitter
            </button>
            <label htmlFor="twitter">
              <FaTwitterSquare className="twitter" />
            </label>
          </a>
          <button id="new-quote" onClick={handleClick}>
            New Quote
          </button>
        </div>
      </div>
      <p style={{ color: "#fff", textAlign: "center" }}>By Virus</p>
    </div>
  );
};

export default App;
