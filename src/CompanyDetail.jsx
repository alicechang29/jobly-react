import { useParams } from "react-router-dom";
import { useEffect } from "react";
import JobCardList from "./JobCardList";

/**
 * Company Detail
 *
 * Props: None
 *
 * State: company
 {
    company:
     {
        handle,
        name,
        description,
        numEmployees,
        logoUrl,
        jobs:  [{ id, title, salary, equity }, ...]
     },
    isLoading
  }

 * Effects: fetch and set company on first initiation
 */

function CompanyDetail() {
  console.log("CompanyDetail");
  //useParams
  //useEffect


  return (
    <div className="CompanyDetail">
      <JobCardList />
    </div>
  );
}

export default CompanyDetail;
