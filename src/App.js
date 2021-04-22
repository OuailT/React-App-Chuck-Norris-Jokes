import './App.css';
import React,{useState, useEffect} from 'react';
import axios from 'axios';

function App() {

const [jokes, setJokes] = useState();

//function to display what jokes on the UI
useEffect(() => {

  const getFetchJokes = async () => {
      const res = await fetchJokes(); 
      setJokes(res);
      console.log(res);
  }
  getFetchJokes();
 
}, [])


// Function to fetch jokes and use it on Click event handler
const fetchJokes = async () => {
    const getJokes = await axios.get('https://api.chucknorris.io/jokes/random');
    const {value} = getJokes.data;
    setJokes(value);
    return value;

}

  return (
      <div className="container">
        <div className="card-center">
         <h4>Chuck Norris Jokes</h4>
        <h1 className="title">{jokes}</h1>
        <button className="btn" onClick={fetchJokes}>New Joke</button>
        </div>
      </div>
  );
}

export default App;
