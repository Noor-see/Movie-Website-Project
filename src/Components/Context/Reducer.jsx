import * as actions from"./DispatchesReducer";

export const reducer =  (state,action) =>{
    switch(action.type){
        case actions.AddToWatchList:
            return{
                ...state,
                watchlist:[action.payload,...state.watchlist]
            }
        case actions.removeFromWatchList:
            return{
                ...state,
                watchlist:state.watchlist.filter((move)=>move.imdbID!==action.payload)
            }
        case actions.WatchedToWatchList:
            return{
                ...state,
                watched:state.watched.filter((move)=>move.imdbID!==action.payload.imdbID),
                watchlist:[action.payload,...state.watchlist]
            }
        case actions.WatchListToWatched:
            return{
                ...state,
                watchlist:state.watchlist.filter((move)=>move.imdbID!==action.payload.imdbID),
                watched:[action.payload,...state.watched]
            }
        case actions.removeFromWatched:
            return{
                ...state,
                watched:state.watched.filter((move)=>move.imdbID!==action.payload)
            }
        default:
            return state;
        
    }
}

