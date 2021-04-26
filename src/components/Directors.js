import React from "react";
import { directors } from "../data";

const Directors = () => {
  console.log(directors);
  return (
    <div>
      <h1>Directors Page</h1>
      <div>
        {directors.map((director) => {
          return (
            <div>
              <h3>{`Name: ${director.name}`}</h3>
              <p>Movies:</p>
              <ul>
                {director.movies.map((movie) => {
                  return <li>{movie}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Directors;
