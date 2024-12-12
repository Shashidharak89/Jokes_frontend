import React, { useEffect, useState } from 'react';
import axios from 'axios';
import JokeCard from './JokeCard';

const JokeList = () => {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch jokes from the API
    axios.get('https://backend-test-ci6u.onrender.com/api/jokes')
      .then(response => {
        setJokes(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching jokes:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading jokes...</p>;
  }

  return (
    <div className="joke-list">
      {jokes.map(joke => (
        <JokeCard key={joke.id} title={joke.title} content={joke.content} />
      ))}
    </div>
  );
};

export default JokeList;
