import React from 'react'
import { callContext } from './Context/MainContext';
import WatchlistCard from './WatchlistCard'
import './Watched.css'

const Watched = () => {
  const Context=callContext();
  return (
    <div>
      <div className="Watched-hero">
        <div className="Title">
          <h1>Watched<span>Moves</span></h1>
          <p>Movies I have olready watched</p>
        </div>
        <div className="Counter">
          <h2>{Context.watched.length}</h2>
          <p>{Context.watched.length===1?"Movie":Context.watchlist.length===0?"No movies":"Moves"}</p>
        </div>
      </div>

      <div className="Moves">
        {Context.watched.map((adder)=>(
          <WatchlistCard key={adder.imdbID} Move={adder} type="watched"/>
        ))}
      </div>
    </div>
  )
}

export default Watched
