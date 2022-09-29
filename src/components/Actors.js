import React from "react";
import { actors } from "../data";

const actorsFunction = actors.map((actor) => {
  return <div key = {actor.name}>
    Name: {actor.name}
    Movies: <ul> {actor.movies.map((movie) => {
       return <li key ={movie}>{movie}</li>
    })}
    </ul>
  </div>
})

function Actors() {
  return <div>{/*{code here}*/}
  <h1>Actors Page</h1>
  {actorsFunction}
  </div>;
}

export default Actors;
