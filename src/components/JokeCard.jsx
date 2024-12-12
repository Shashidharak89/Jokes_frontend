import React from 'react';
import '../styles/JokeCard.css';

const JokeCard = ({ title, content }) => {
  return (
    <div className="joke-card">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default JokeCard;
