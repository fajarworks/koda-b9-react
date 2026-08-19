import React from "react";
import { useReducer } from "react";
import UserContext from "./userContext.js";

const initialState = {
  login: null,
};
const authReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN":
      return {
        login: { username: payload.username },
      };
    case "LOGOUT":
      return initialState;
    case "UPDATE":
      return {
        login: {
          username: payload.username,
          photo_profile: payload.photo_profile,
        },
      };
    default:
      return state;
  }
};

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

export default AuthProvider;
