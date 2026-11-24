import React from 'react'
import './Header.css'
import {Link,NavLink} from 'react-router-dom'
import {
  Bookmark,
  CircleCheck,
  Plus,
} from "lucide-react";
const Headerr = () => {
  return (
    <div>
        <div className="Container">
            <div className="Logo">
                <Link className='Link-logo' to ="/">Move</Link>
            </div>

            <div className="navLinks">
                <ul className='ul-navLinks'>
                    <li className='li'>
                        <div className="link">
                            <Link className='link-in' to ="/"><Bookmark size={20}/><span>WatchList</span></Link>
                        </div>
                    </li>

                    <li className='li'>
                        <div className="link">
                         <Link className='link-in' to="/watched"><CircleCheck size={20}/><span>Watched</span></Link>
                        </div>
                    </li>

                    <li className='li'>
                        <div className="link-add">
                         <Link className='link-in-add' to = "/add"><Plus size={20}/><span>Add</span></Link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Headerr
