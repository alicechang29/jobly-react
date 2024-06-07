
import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import RoutesList from "./RoutesList.jsx";
import Navigation from "./Navigation.jsx";
import JoblyApi from "../api.js";

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
      username,
      firstName,
      lastName,
      email,
      isAdmin,
      jobs
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
            user: data,
            isLoading: false,
            errors: err,
          }
        );
      }
    }

    fetchUserData();
  }, [token]);

  /** handle user login */
  async function handleUserLogin(username, password) {
    //make a fetch to login route
    const result = await JoblyApi.authenticateUser({ username, password });
    //if no errors, set the token
    //TODO:

    //if errors, send list of errors back to UserLoginForm


  }

  if (formFieldsData.isLoading) {
    return <div className="UserLogin-loading">Loading...</div>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;
