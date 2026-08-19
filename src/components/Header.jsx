// import React from 'react'
import { useContext } from "react";
import { Link } from "react-router";
import userContext from "../contexts/userContext.js";
const Header = () => {
  const { state, dispatch } = useContext(userContext);

  return (
    <header className="bg-amber-700 ">
      <nav className="flex justify-between p-2 text-white font-medium">
        <div>{state.login?.username}</div>
        <ul className="flex gap-2">
          <li>
            {" "}
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            {" "}
            <Link to={"/counter"}>Counter Button</Link>
          </li>
          <li>
            {" "}
            <Link to={"/product"}>Input Product</Link>
          </li>
          <li>
            {" "}
            <Link to={"/pokemon"}>Fetch Pokemon</Link>
          </li>
          <li>
            {" "}
            <Link to={"/profile"}>Profile</Link>
          </li>

          {state.login?.username ? <span className="cursor-pointer bg-white text-orange-500" onClick={()=>dispatch({type:"LOGOUT"})}>Sign Out</span> : <Link className=" bg-white text-orange-500 rounded-full py-0.5 px-1" to="/login">Sign In</Link>}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
