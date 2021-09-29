import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import moviesApi from '../../services/Api';
import s from './Review.module.css';

export default function Review() {
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(null);

  const { moviesId } = useParams();

  useEffect(() => {
    moviesApi.fetchMovieReviews(moviesId).then(response => {
      if (response.results.length === 0) {
        setError(`There are no reviews for this movie`);
        return;
      }
      setReviews(response.results);
    });
  }, [moviesId]);

  return (
    <div>
      <p>{error}</p>
      <ul className={s.reviewList}>
        {reviews &&
          reviews.map(review => (
            <li key={review.id}>
              <p className={s.textBold}>{review.author} :</p>
              <p className={s.text}>{review.content}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
