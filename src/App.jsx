
import { BrowserRouter, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import RoutesList from "./RoutesList.jsx";
import Navigation from "./Navigation.jsx";
import JoblyApi from "../api.js";
import userContext from "./userContext.js";

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

  const [userData, setUserData] = useState({
    user: {
      username: null,
      firstName: null,
      lastName: null,
      email: null,
      isAdmin: null,
      jobs: null
    },
    isLoading: true,
    errors: []
  });

  const [token, setToken] = useState(null);

  //FIXME: how do we use our token correctly?
  /** Rerenders app when token state changes setting userData state
   * to the correct userData
   */
  useEffect(function fetchChangedUserData() {
    console.log("USE EFFECT: fetchChangedUserData");

    async function fetchUserData() {
      try {
        // JoblyApi.token = token; <-- TODO: is this how we would set the token
        // on the class?
        //TODO: Is userData.username the most up to date information for this?
        const data = await JoblyApi.getUserData({ username: userData.username });
        setUserData({
          user: data,
          isLoading: false,
          errors: err,
        });
      } catch (err) {
        setUserData(
          {
            user: userData.user,
            isLoading: false,
            errors: err,
          }
        );
      }
    }

    fetchUserData();
  }, [token]);

  /** handle user login */
  async function handleUserLogin({ username, password }) {
    //make a fetch to login route
    const token = await JoblyApi.authenticateUser({ username, password });
    setToken(token);
  }

  /** Logout user, resetting userData and context */
  function logout() {
    console.log("log out:", { username, firstName });

    setUserData({
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
    });
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
          <RoutesList handleUserLogin={handleUserLogin}/>
        </userContext.Provider>

      </BrowserRouter>
    </div>
  );
}

export default App;
