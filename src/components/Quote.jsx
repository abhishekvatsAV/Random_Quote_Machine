import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { FaQuoteLeft } from "react-icons/fa";

const Quote = ({ quote, author, isLoading }) => {
  return (
    <div>
      <FaQuoteLeft style={{ marginRight: "10px" }} />
      <div
        style={{
          overflow: "scroll",
          maxHeight: "300px",
        }}
      >
        {isLoading ? (
          <Skeleton count={3} width="100%" height="0.8rem" />
        ) : (
          quote
        )}
      </div>
      <div id="author">
        <p>- {isLoading ? <Skeleton height="0.5rem" /> : author}</p>
      </div>
    </div>
  );
};

export default Quote;
