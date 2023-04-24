import React from "react";
import { Link, useLocation } from "react-router-dom";
import Reactplayer from 'react-player'

const Description = () => {
  const location = useLocation();
  const { movie } = location.state;

  return (
    <div>
      <Link to="/">
        <div className="buutt">
          <button>home</button>
        </div>
      </Link>
      <div className="hdesc">
        <img src={movie.image} />
        <div className="desc">
          <h1>{movie.name}</h1>
          <h5>{movie.description}</h5>
          <Reactplayer url={movie.trailer} playing='true'/>

        </div>
      </div>
    </div>
  );
};

export default Description;
