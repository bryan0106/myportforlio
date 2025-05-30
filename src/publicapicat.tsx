import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

interface randomjokeapi {
  setup: string;
  punchline : string;
  id: number;

}

const JokeAPi: React.FC = () => {
  const [randomjoke, setrandomjoke] = useState<string | null>(null);
   const [punchline, setpunchline] = useState<string | null>(null);
const [showpun , setshowpun] = useState(false);

useEffect(()=>{
const timer = setTimeout(() => {
  setshowpun(true);
}, 8000);
return()=> clearTimeout(timer);
},[]);

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
        setError('Sorry NO Joke for today.');
        console.error('Error fetching cat fact:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJoke();
  }, []); // Empty dependency array means this effect runs once after the initial render

  if (loading) {
    return <p>Fetching Random Joke..</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>Oops! {error}</p>;
  }

  return (
    <div className='joke'>
      <h3>Here's a Joke for You:</h3>
      {randomjoke ? <h4>{randomjoke}</h4> : <h4>No Joke for today</h4>}

      { showpun? <h3>{punchline}  ..... &#128514; ha ha ha </h3>:<h3> . . . wait </h3> }
    </div>
  );
};

export default JokeAPi;