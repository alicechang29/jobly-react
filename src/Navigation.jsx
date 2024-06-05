import { NavLink } from "react-router-dom"

/**
 * Navigation
 *
 * Props: none
 *
 * State: none
 *
 * Effects: none
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
