
import { BrowserRouter } from "react-router-dom";

import RoutesList from "./RoutesList.jsx";
import Navigation from "./Navigation.jsx";

/**
 * App
 *
 */

function App() {

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
