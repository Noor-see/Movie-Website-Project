import React from 'react'
import Control from './Control'
import './WatchListCard.css'

const WatchlistCard = ({Move,type}) => {
  return (
    <div>
      <div className="WatchList-card">
        {Move.Poster?(<img src={Move.Poster} alt={Move.Title}/>):
        <div className="nothink"></div>}
        <h3>{Move.Title}</h3>
        <p>{Move.Year}</p>
        <Control Move={Move} type={type}/>
      </div>
    </div>
  )
}

export default WatchlistCard
