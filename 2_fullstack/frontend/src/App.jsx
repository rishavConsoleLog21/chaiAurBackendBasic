import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((resposne) => setJokes(resposne.data))
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <>
      <h1>Random Joke</h1>
      <p>Jokes: {jokes.length}</p>
      {jokes.map((joke) => (
        <div key={joke.id}>
          <p>{joke.joke}</p>
        </div>
      ))}
    </>
  );
}

export default App;
