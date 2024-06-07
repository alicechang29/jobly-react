import { NavLink } from "react-router-dom";
import { useContext } from "react";
import "./Navigation.css";
import userContext from "./userContext.js";

/**
 * Navigation
 *
 * Props: none
 *
 * State: none
 *
 * Effects: none
 *
 *  App -> Navigation
 */

function Navigation({ logout }) {

  const { firstName, username } = useContext(userContext);
  console.log("Navigation", { firstName, username });

  return (
    <nav className="Navigation">
      <NavLink to="/" end>
        Jobly
      </NavLink>

      {/* LOGGED IN LINKS */}
      {
        username &&
        <>
          <NavLink to="/companies" end>
            Companies
          </NavLink>
          <NavLink to="/jobs" end>
            Jobs
          </NavLink>
          <NavLink to="/profile" end>
            Profile
          </NavLink>
          <NavLink to="/" onClick={logout} end>
            Log out {username}
          </NavLink>
        </>
      }

      {/* LOGGED OUT ONLY LINKS */}
      {
        !username &&
        <>
          <NavLink to="/signup" end>
            Sign Up
          </NavLink>
          <NavLink to="/login" end>
            Login
          </NavLink>
        </>
      }


    </nav>
  );
}

export default Navigation;
