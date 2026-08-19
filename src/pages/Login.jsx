import  { useContext } from "react";
import { useState } from "react";
import userContext from "../contexts/userContext.js";
import { useNavigate } from "react-router";
function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);


  const { state, dispatch } = useContext(userContext);
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    if (!name && !password) {
      setError(true);
      return;
    }
    setError(false);
    dispatch({ type: "LOGIN", payload: { username: name } });

    console.log(state);
    navigate("/")
  };

  const handleInputName = (e) => {
    setName(e.target.value);
  };
  const handleInputPassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col min-w-3xl p-30">
        <h1 className="text-center">SILAKAN LOGIN</h1>
        <form onSubmit={handleLogin} className="flex flex-col w-full gap-3">
          <label htmlFor="username">Username :</label>
          <input
            onChange={handleInputName}
            className="border border-orange-500 focus:outline-none text-orange-700 py-1"
            type="text"
            id="username"
            name="username"
          />
          <label htmlFor="password">Password</label>
          <input
            onChange={handleInputPassword}
            className="border border-orange-500 focus:outline-none text-orange-700 py-1"
            type="password"
            name="password"
            id="password"
          />
          <button className="w-full bg-orange-500 text-white">LOGIN</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
