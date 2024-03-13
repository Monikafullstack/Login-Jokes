import React, { useState, useEffect } from 'react';

const Homepage = ({ onLogout }) => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetchJokes();
  }, []);

  const fetchJokes = async () => {
    try {
      const response = await fetch(
        'https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=en&amount=10'
      );
      const data = await response.json();
      setJokes(data.jokes);
    } catch (error) {
      console.error('Error fetching jokes:', error);
    }
  };

  const handleFetchJokes = () => {
    fetchJokes();
    console.log('Enjoy! You have fetched more Jokes')
  };

  const handleLogout = () => {
    onLogout(); 
    console.log('You are logged out. Login again to have fun')
  };

  return (
    <div className="container">
      <h2 className="jokes-heading">Jokes</h2>
      <table className="table">
        <thead>
          <tr>
            <th className="id-content">ID</th>
            <th className="joke-content">Joke</th>
          </tr>
        </thead>
        <tbody>
          {jokes.map((joke, index) => (
            <tr key={index}>
              <td className="id-content">{index + 1}</td>
              <td className="joke-content">{joke.joke}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="footer-container d-flex justify-content-between">
        <button className="btn btn-info" onClick={handleFetchJokes}>
          Fetch Jokes
        </button>
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Homepage;
