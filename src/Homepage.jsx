import userContext from "./userContext";
import { useContext } from "react";

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
  //FIXME:
  //const { firstName } = useContext();

  return (
    <div className="Homepage">

      <h2>Jobly</h2>
      {/* <h1>Welcome Back, {firstName}</h1> */}
    </div>
  );
}

export default Homepage;
