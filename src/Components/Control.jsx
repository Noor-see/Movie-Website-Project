import React from 'react'
import { Eye, EyeOff, X } from "lucide-react";
import * as actions from './Context/DispatchesReducer'
import { callContext } from './Context/MainContext'
import './Controrl.css'

const Control = ({Move,type}) => {
    const Context=callContext();
  return (
    <div>
        <div className="WatchList-Control">
            {
                type==="watchlist"&&(
                    <>
                    <button className='Eye-btn' onClick={()=>Context.MovesDispatch({
                        type:actions.WatchListToWatched,
                        payload:Move
                    })}>
                        <Eye size={20}/>
                    </button>

                    <button className='X-btn' onClick={()=>Context.MovesDispatch({
                        type:actions.removeFromWatchList,
                        payload:Move.imdbID,
                    })}>
                        <X size={20}/>
                    </button>
                    </>
                )
            }
        </div>

        <div className="Watched-Control">
            {
                type==="watched"&&(
                    <>
                    <button className='Eye-btn' onClick={()=>Context.MovesDispatch({
                        type:actions.WatchedToWatchList,
                        payload:Move,
                    })}>
                        <EyeOff size={20}/>
                    </button>

                    <button className='X-btn' onClick={()=>Context.MovesDispatch({
                        type:actions.removeFromWatched,
                        payload:Move.imdbID
                    })}>
                        <X size={20}/>
                    </button>
                    </>
                )
            }
        </div>
    </div>
  )
}

export default Control
