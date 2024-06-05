import { NavLink } from "react-router-dom";
import "./Navigation.css";

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

function Navigation() {
  console.log("Navigation");

  return (
    <nav className="Navigation">
      <NavLink to="" end>
        Jobly
      </NavLink>
      <NavLink to="/companies" end>
        Companies
      </NavLink>
      <NavLink to="/jobs" end>
        jobs
      </NavLink>
    </nav>
  );
}

export default Navigation;
