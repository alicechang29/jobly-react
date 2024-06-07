
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
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

  //Can just have user: null
  const noLoggedUserData = {
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
  };

  const [userFetchData, setUserData] = useState(noLoggedUserData);

  //const [token, setToken] = useState(null);

  /** Set the userData by by fetching with username */
  async function setFetchUserData(username) {
    console.log("fetchUserData", { username });

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
      console.log("ERR EFFECT", err);
      setUserData(
        {
          user: userFetchData.user,
          isLoading: false,
          errors: err,
        }
      );
    }
  }

  /** handle user registeration
   * user -> { username, password, firstName, lastName, email }
  */
  async function handleUserRegistration(user) {
    console.log("handleUserRegistration", { user });

    await JoblyApi.registerUser(user);
    await setFetchUserData(user.username);
    console.log("User registered!");
  }

  /** handle user login */
  async function handleUserLogin({ username, password }) {
    console.log("handleUserLogin", { username, password });

    await JoblyApi.authenticateUser({ username, password });
    await setFetchUserData(username);
    console.log("Logged in!");
  }

  /** Logout user, resetting userData and context */
  function logout() {
    console.log("log out");

    setUserData(noLoggedUserData);
    JoblyApi.logoutUser();
  }

  if (userFetchData.isLoading) {
    return <div className="UserLogin-loading">Loading...</div>;
  }

  return (
    <div className="App">
      <BrowserRouter>

        <userContext.Provider
          value={
            {
              firstName: userFetchData.user.firstName,
              username: userFetchData.user.username,
            }
          }
        >
          <Navigation logout={logout} />
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
