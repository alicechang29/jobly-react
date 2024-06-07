
import { BrowserRouter, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import RoutesList from "./RoutesList.jsx";
import Navigation from "./Navigation.jsx";
import JoblyApi from "../api.js";
import userContext from "./userContext.js";
import { decodeToken } from "react-jwt";

/**
 * App
 *
 * Handles user authentication
 *
 * State:
 * userData ->
 * {
    user: {
      username,
      firstName,
      lastName,
      email,
      isAdmin,
      jobs
    },
    isLoading: true,
    errors: []
  }
 *
 * token -> "user's token" (default: null)
 *
 * Props: None
 *
 * Effect:
 *  Rerender the app when token state changes
 *
 * App -> RoutesList -> [UserLoginForm, UserRegistrationForm, UserProfileForm]
 */

function App() {
  console.log("App");
  const tokenTest = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
    "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
    "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";



  const initialUserData = {
    user: {
      username: null,
      firstName: null,
      lastName: null,
      email: null,
      isAdmin: null,
      jobs: null
    },
    isLoading: false,
    errors: []
  }

  const [userData, setUserData] = useState(initialUserData);

  const [token, setToken] = useState(null);
  const jwtInfo = decodeToken(token);
        console.log({jwtInfo})

  /** Rerenders app when token state changes setting userData state
   * to the correct userData
   */
  useEffect(function fetchChangedUserData() {
    console.log("USE EFFECT: fetchChangedUserData");
    console.log("USE EFFECT: fetchChangedUserData USER INFO", userData.user);
    console.log("USE EFFECT: fetchChangedUserData token", token);

    async function fetchUserData() {
      const username = jwtInfo?.username
      try {

        const data = await JoblyApi.getUserData(username);
        console.log("EFFECT DATA VALUES", data);
        setUserData(
          {
            user: data,
            isLoading: false,
            errors: [],
          }
        );
      } catch (err) {
        console.log("ERR EFFECT");
        setUserData(
          {
            user: userData.user,
            isLoading: false,
            errors: err,
          }
        );
      }
    }

    if (token) {
      fetchUserData();
    } else {
      setUserData(currData => ({
        ...currData,
        isLoading: false
      }));
    }

  }, [token]);

  /** handle user registeration
   * user -> { username, password, firstName, lastName, email }
  */
  async function handleUserRegistration(user) {
    console.log("handleUserRegistration");

    const token = await JoblyApi.registerUser(user);
    console.log("handleUserRegistration", { token });

    setToken(token);
  }

  /** handle user login */
  async function handleUserLogin({ username, password }) {
    console.log("handleUserLogin");
    //make a fetch to login route
    const token = await JoblyApi.authenticateUser({ username, password });
    console.log("handleUserLogin", { token });

    setToken(token);
  }

  /** Logout user, resetting userData and context */
  function logout() {
    console.log("log out:", { username, firstName });

    setUserData(initialUserData);
  }

  if (userData.isLoading) {
    return <div className="UserLogin-loading">Loading...</div>;
  }

  return (
    <div className="App">
      <BrowserRouter>

        <userContext.Provider
          value={
            {
              firstName: userData.user.firstName,
              username: userData.user.username,
              token: token
            }
          }>
          <Navigation logOut={logout} />
          <RoutesList
            handleUserLogin={handleUserLogin}
            handleUserRegistration={handleUserRegistration}
          />
        </userContext.Provider>

      </BrowserRouter>
    </div>
  );
}

export default App;
