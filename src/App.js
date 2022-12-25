import axios from "axios";
import React, { useState } from "react";
import "./App.css";

function App() {
  let [hitMovies, setHitMovies] = useState([]);

  let getHitMoviesList = async () => {
    console.log(process.env.REACT_APP_PATH);
    console.log(process.env.NODE_ENV);
    let response = await axios.get(`${process.env.REACT_APP_PATH}/hitMovies`);
    setHitMovies(response.data);
  };

  return (
    <div className="App">
      <h1>Version 4.2</h1>
      <button
        onClick={() => {
          getHitMoviesList();
        }}
      >
        Get Hit Movies
      </button>
      {hitMovies.map((name) => {
        return <h1>{name}</h1>;
      })}
    </div>
  );
}

export default App;
