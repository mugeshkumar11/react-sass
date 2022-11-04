import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import {statecontext} from '../context/Context';
import "./header.scss"
const Header = () => {
  const state = useContext(statecontext);
  console.log('state', state);



  
  return (
    <div className='headerpoint' >
     header
     <h1>html</h1>
     <h1>html</h1>
     <h1>html</h1>
     <h1>html</h1>
    </div>
  )
}

export default Header