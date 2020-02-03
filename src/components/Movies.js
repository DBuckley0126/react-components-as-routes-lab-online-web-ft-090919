import React from 'react';
import { movies } from '../data';

const Movies = () => {

  return (
    <div>
        <h1>Movies Page</h1>
        { movies.map(({ title, time, genres }, index ) => 
        <div key={index} className="movie" >
          <h3>
            { title } - { time } mins
          </h3>
          <ul>
            {genres.map((genre, index) => {
              return <li key={ index }>{genre}</li>;
              }
            )}
          </ul>
        </div>
          )}
    </div>
  );
};

export default Movies;
