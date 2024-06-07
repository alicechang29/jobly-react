
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

  /** Rerenders app when token state changes setting userData state
   * to the correct userData
   */
  useEffect(function fetchChangedUserData() {
    console.log("USE EFFECT: fetchChangedUserData");
    console.log("USE EFFECT: fetchChangedUserData USER INFO", userData.user);
    console.log("USE EFFECT: fetchChangedUserData token", token);

    async function fetchUserData() {
      try {
        //FIXME: DECODE the token so that we can get the username here
        const data = await JoblyApi.getUserData({ username: userData.user.username });
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
    //FIXME: how do we stop this on initial load?
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

    //TODO:
    setUserData(currData => (
      {
        ...currData,
        user,
      }
    ));
    setToken(token);
  }

  /** handle user login */
  async function handleUserLogin({ username, password }) {
    console.log("handleUserLogin");
    //make a fetch to login route
    const token = await JoblyApi.authenticateUser({ username, password });
    console.log("handleUserLogin", { token });

    //FIXME: only use handleUserLogin/Register to get and set token

    setUserData(currData => (
      {
        ...currData,
        user: {
          ...currData.user,
          username //only updating username in user object
        }
      }
    ));
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
