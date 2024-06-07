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
 * Props: none
 *
 * State: none
 *
 * Effects: none
 *
 *  App -> RoutesList
 */

function RoutesList() {
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
              element={<UserLoginForm />}
            />
            <Route
              path="/signup"
              element={<UserRegistrationForm />}
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
