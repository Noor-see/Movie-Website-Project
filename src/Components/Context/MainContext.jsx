import React, { createContext, useReducer,useContext,useEffect } from 'react'
import {reducer} from "./Reducer"
export const MainContextt=createContext();
const MainContext = ({children}) => {
    const initialvalue={
      watchlist:localStorage.getItem("watchlist")?JSON.parse(localStorage.getItem("watchlist")):[],
      watched:localStorage.getItem("watched")?JSON.parse(localStorage.getItem("watched")):[],
    };


    const[state,dispatch]=useReducer(reducer,initialvalue);
    useEffect(()=>{
      localStorage.setItem("watchlist",JSON.stringify(state.watchlist))
      localStorage.setItem("watched",JSON.stringify(state.watched))
    },[state])
  return (
    <div>
      <MainContextt.Provider value={{
        watchlist:state.watchlist,
        watched:state.watched,
        MovesDispatch:dispatch
      }}>
        {children}
      </MainContextt.Provider>
    </div>
  )
}

export default MainContext

export const callContext=()=>{
  return useContext(MainContextt);
}
