import React from 'react';
import JokeList from './components/JokeList';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Joke App</h1>
      </header>
      
      <JokeList />
    </div>
  );
}

export default App;
