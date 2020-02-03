import React from 'react';
import { directors } from '../data';

const Directors = () => {

return (
<div>
  <h1>Directors Page</h1>
  { directors.map(({ name, movies }, index ) => 
  <div key={ index } >
      {name}
      <ul>
        {movies.map((movie, index) => {
          return (
            <li key={index}>{movie}</li>
          )
        })
        }
      </ul>
  </div>

)}
</div>
);
}

export default Directors
