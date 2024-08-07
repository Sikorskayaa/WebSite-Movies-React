import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchReviews } from "../services/Api";
import Loader from "../Loader/Loader";
import css from "./Reviews.module.css";

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchReviewsData = () => {
      try {
        const reviews = fetchReviews(movieId);
        setReviews(reviews);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReviewsData();
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {reviews && reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <h4>{review.author}</h4>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.text}>No reviews found for this movie.</p>
      )}
    </div>
  );
};
export default Reviews;
