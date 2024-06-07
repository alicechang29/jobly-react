import { Routes, Route, Navigate } from "react-router-dom";
import JobList from "./JobList.jsx";
import CompanyList from "./CompanyList.jsx";
import CompanyDetail from "./CompanyDetail.jsx";
import Homepage from "./Homepage.jsx";
import UserLoginForm from "./UserLoginForm.jsx";
import UserRegistrationForm from "./UserRegistrationForm.jsx";
import UserProfileForm from "./UserProfileForm.jsx";
import { useContext } from "react";
import userContext from "./userContext.js";

/**
 * RoutesList
 *
 * Props:
 * Callback functions from App ->
 * handleUserLogin: cb
 * handleProfileUpdate: cb
 * handleUserRegistration: cb
 *
 * State: none
 *
 * Effects: none
 *
 *  App -> RoutesList
 */

function RoutesList({ handleUserLogin, handleUserRegistration }) {
  console.log("RoutesList");

  const { token } = useContext(userContext);

  return (
    <div className="RoutesList">

      <Routes>
        <Route
          path="/"
          element={<Homepage />}
        />

        {/* LOGGED IN ROUTES */}
        {token &&
          <>
            <Route
              path="/jobs"
              element={<JobList />}
            />
            <Route
              path="/companies"
              element={<CompanyList />}
            />
            <Route
              path="/companies/:handle"
              element={<CompanyDetail />}
            />
            <Route
              path="/profile"
              element={<UserProfileForm />}
            />
          </>
        }

        {/* LOGGED OUT ROUTES */}
        {!token &&
          <>
            <Route
              path="/login"
              element={<UserLoginForm handleUserLogin={handleUserLogin} />}
            />
            <Route
              path="/signup"
              element={
                <UserRegistrationForm
                  handleUserRegistration={handleUserRegistration}
                />
              }
            />
          </>
        }

        <Route
          path="*"
          element={<Navigate to="/" />}
        />
      </Routes>
    </div>
  );
}

export default RoutesList;
