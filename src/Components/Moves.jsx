import React from 'react'
import Move from './Move'
import "./Moves.css"
import { Search } from 'lucide-react'

const Moves = ({Movies,Searchvalue,Loading,Error}) => {
  return (
    <div>
      <div className="section">
        <div className="section-title">
          <h1 className='h1-1'>Discover<span> Movies</span></h1>
          <p>search for your favorite movies and add them <br />
          to your lists</p>
        </div>

        <div className="input-search">
          <span><Search className='Search' size={25}/></span>
          <input
          type='text'
          name='Search-input'
          id='Search-input'
          placeholder='Enter To Search...'
          value={Searchvalue.Searchvalue}
          onChange={(e)=>Searchvalue.setSearchvalue(e.target.value)}/>
        </div>
     </div>

      <div className="Loading">
        {Loading&&<p>Loading...</p>}
        {!Loading&&Error&&<p>{Error}</p>}
      </div>

      <div className="Moves">
      {Movies.map((adder) => (
        <Move key={adder.imdbID} Move={adder}/>
      ))}
      </div>

    </div>
  )
}

export default Moves
