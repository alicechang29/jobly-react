import { Routes, Route } from "react-router";
import JobList from "./JobList.jsx";
import CompanyList from "./CompanyList.jsx";
import CompanyDetail from "./CompanyDetail.jsx";
import Homepage from "./Homepage.jsx";

/**
 * RoutesList
 *
 * Props: none
 *
 * State: none
 *
 * Effects: none
 */

function RoutesList() {
  console.log("RoutesList");

  return (
    <div className="RoutesList">
      <Routes>
      <Route
          path=""
          element={<Homepage />}
        />
        <Route
          path="/jobs"
          element={<JobList />}
        />
        <Route
          path="/companies"
          element={<CompanyList />}
        />
        <Route
          path="/companies/:name"
          element={<CompanyDetail />}
        />
        <Route
          path="*"
          element={<Homepage />}
        />
      </Routes>
    </div>
  );
}

export default RoutesList;
