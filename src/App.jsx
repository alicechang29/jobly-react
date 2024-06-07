
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import RoutesList from "./RoutesList.jsx";
import Navigation from "./Navigation.jsx";
import JoblyApi from "../api.js";

/**
 * App
 *
 * Handles user authentication
 *
 * State:
 *
 * Props: None
 *
 * App -> RoutesList -> UserLoginForm/UserRegistrationForm/UserProfileForm
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
    isLoading: true
  });

  const [token, setToken] = useState(null);

  /** handle user login */
  async function handleUserLogin(username, password) {
    //make a fetch to login route
    const result = await JoblyApi.authenticateUser(username, password);
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
