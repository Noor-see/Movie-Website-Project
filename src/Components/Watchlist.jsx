import React from 'react'
import WatchlistCard from './WatchlistCard'
import { callContext } from './Context/MainContext'
import './WatchList.css'


const Watchlist = () => {
  const Context=callContext()
  return (
    <div>
      <div className="WatchList-hero">
        <div className="Title">
          <h1>My <span>WatchList</span></h1>
          <p>Move I want to watch</p>
        </div>
        <div className="Counter">
          <h2>{Context.watchlist.length}</h2>
          <p>{Context.watchlist.length===1?"Movie":Context.watchlist.length===0?"No movies":"Moves"}</p>
        </div>
      </div>
      <div className="WatchList-Moves">
        {Context.watchlist.map((adder)=>(
          <WatchlistCard key={adder.imdbID} Move={adder} type="watchlist"/>
        ))}
      </div>
    </div>
  )
}

export default Watchlist
