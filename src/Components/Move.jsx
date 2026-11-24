import React from 'react'
import * as actions from './Context/DispatchesReducer'
import { callContext } from './Context/MainContext';
import './Move.css'

const Move = ({Move}) => {
    const Context=callContext();
    const storedMoveWatchlist=Context.watchlist.find((e)=>e.imdbID===Move.imdbID);
    const storedMoveWatched=Context.watched.find((e)=>e.imdbID===Move.imdbID)
    const watchlistDisable=storedMoveWatchlist?true:storedMoveWatched?true:false;
    const watchedDisable=storedMoveWatched?true:false;

  return (
    <div>
        <div className="Move-information">

            <div className="Move-image">
                <img
                src={Move.Poster}
                alt={Move.Title}
                className='Move-img'
                />
            </div>

            <div className="Move-title">
                <h3>{Move.Title}</h3>
                <p>{Move.Year}</p>
            </div>

            <div className="Move-button">
                <button className='WatchList-btn'
                onClick={()=>
                    Context.MovesDispatch({
                        type:actions.AddToWatchList,payload:Move
                    })
                }
                disabled={watchlistDisable}
                >WatchList</button>

                <button className='Watched-btn'
                onClick={()=>
                    Context.MovesDispatch({
                        type:actions.WatchListToWatched,payload:Move
                    })
                }
                disabled={watchedDisable}
                >Watched</button>
            </div>
            
        </div>
    </div>
  )
}

export default Move
