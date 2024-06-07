import userContext from "./userContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

/**
 * Homepage
 *
 * Props: None
 *
 * State: None
 *
 * Effects: None
 *
 * App -> RoutesList -> Homepage
 */

function Homepage() {
  console.log("Homepage");
  const { firstName } = useContext(userContext);

  return (
    <div className="Homepage">

      <h2>Jobly</h2>
      <p>All the jobs in one, convenient place.</p>
      {
        firstName
          ? <h1>Welcome Back, {firstName}</h1>
          : <>
            <Link className="btn btn-primary" to="/login">Log in</Link>
            <Link className="btn btn-primary" to="/signup">Sign up</Link>
          </>
      }



    </div>
  );
}

export default Homepage;
