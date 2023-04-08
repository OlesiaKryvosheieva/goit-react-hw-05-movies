import { getReviewsOfFilm } from 'components/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getReviewsOfFilm(movieId)
      .then(response => response.json())
      .then(data => setReviews(data.results));
  }, [movieId]);

  return (
    <>
      {reviews.length !== 0 ? (
        reviews.map(review => (
          <div key={review.id}>
            <li className={css.author}>Author: {review.author}</li>
            <p>{review.content}</p>
          </div>
        ))
      ) : (
        <p>Sorry, we can't find any reviews</p>
      )}
    </>
  );
};

export default Reviews;
