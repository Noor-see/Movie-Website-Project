import { useState } from 'react'
import { useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Moves from './Components/Moves';
import Headerr from './Components/Headerr';
import Watchlist from './Components/Watchlist';
import Watched from './Components/Watched';
function App() {
  const [Movies,setMovies]=useState([]);
  const [Loading,setLoading]=useState(false);
  const [Error,setError]=useState("");
  const [Searchvalue,setSearchvalue]=useState("")
  
  useEffect(() => {
    const getData = async () => {

      if(!Searchvalue.trim()){
        setMovies([]);
        return;
      }

      try{
        setLoading(true);
        const res = await fetch(`https://www.omdbapi.com/?s=${Searchvalue}&apikey=bbdfac18`);
        if(res.status===200){
          const data = await res.json();
          console.log(data)
          setLoading(false)
          setMovies(data.Search || [])
        }else{
          setLoading(false);
          console.log("somethink went wrong");
        }
      }catch(error){
        setLoading(false);
        setError("somethink went wrong");
        console.log(error);
      }
    }
    getData();

  },[Searchvalue]);

  return (
    <>
    <HashRouter>
      <Headerr/>
      <Routes>
        <Route path="/" element={<Watchlist/>}/>
        <Route path="/watched" element={<Watched/>}/>
        <Route path="add" element={<Moves Movies={Movies} Searchvalue={{Searchvalue,setSearchvalue}} Loading={Loading} Error={Error}/>}/>

      </Routes>
    
    </HashRouter>
    </>
  )
}

export default App
