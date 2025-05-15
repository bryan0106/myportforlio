import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface randomjokeapi {
  setup: string;
  punchline : string;
  id: number;
}

const JokeAPi: React.FC = ({setans}) => {
  const [randomjoke, setrandomjoke] = useState<string | null>(null);
   const [punchline, setpunchline] = useState<string | null>(null);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJoke = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get<randomjokeapi>('https://official-joke-api.appspot.com/random_joke');
        setrandomjoke(response.data.setup);
        setpunchline(response.data.punchline);
      } catch (error: any) {
        setError('Failed to fetch cat fact.');
        console.error('Error fetching cat fact:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJoke();
  }, []); // Empty dependency array means this effect runs once after the initial render

  if (loading) {
    return <p>Fetching a purr-fect fact...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>Oops! {error}</p>;
  }

  return (
    <div>
      <h3>Here's a Joke for You:</h3>
      {randomjoke ? <h4>{randomjoke}</h4> : <h4>No Joke for today</h4>}

      {setans >= "80" ? <h3>{punchline}  ..... &#128514; ha ha ha </h3> : <h3>...</h3>}
    </div>
  );
};

export default JokeAPi;