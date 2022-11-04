import React  from "react";
import { useState,useContext} from "react";
import { Link } from "react-router-dom";
import {statecontext} from '../context/Context';
import "./login.scss";

function Login() {
 


const {state, dispatch} = useContext(statecontext)
console.log("staecontext",state);




 

const updateAge = () =>{
dispatch({ type:"increment age"})
}

  return (
   <div className="container">
    <div className="colorcode">
      <Link to={"/header"} className="headerlink">go to header</Link>
      <Link to={"/context"}>go to context</Link>
      <Link to={"/Reduce"}>go to reduce</Link>
         <h2>login page</h2>
      <h1>{state?.age}</h1>
      <button onClick={() =>updateAge()}>Increment age</button>
    </div>
    </div>
  );
}

export default Login;
