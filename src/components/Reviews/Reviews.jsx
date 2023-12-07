import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { getReviews } from 'components/Api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const movieReviews = await getReviews(id);

      setReviews(movieReviews);
      setIsLoading(false);
    })();
  }, [id]);

  if (isLoading) {
    return <p>Loading reviews...</p>;
  }

  return (
    <ul>
      {reviews.length > 0 ? (
        reviews.map(({ id, author, content }) => (
          <li key={id}>
            <h3 style={{ marginBottom: '5px', marginTop: '20px' }}>
              Author: {author}
            </h3>
            <p>{content}</p>
          </li>
        ))
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </ul>
  );
};

export default Reviews;
