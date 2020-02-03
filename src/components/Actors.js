import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
        <h1>Actors Page</h1>
        { actors.map(({ name, movies }, index) =>
          <div key={ index }>
            { name }
            <ul>
            { movies.map((movie, index) => {
                return (
                  <li key={ index }>
                    { movie }
                  </li>
                )
            })}            
            </ul>
          </div>
        )}
    </div>
  );
};

export default Actors;
