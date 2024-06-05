import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import JobCardList from "./JobCardList";
import JoblyApi from "../api.js";

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

 *  App -> RoutesList -> CompanyDetail


 */

function CompanyDetail() {
  console.log("CompanyDetail");
  //FIXME: missing useParams

  const [companyData, setCompanyData] = useState({
    company: null,
    isLoading: true
  });


  /**fetches company data by name on initial render */
  useEffect(function fetchCompanyByName() {
    console.log("USE EFFECT: fetchCompanyByName");

    async function fetchCompanyData() {
      const data = await JoblyApi.getCompany();
      setCompanyData({ company: data, isLoading: false });
    }
    fetchCompanyData();
  }, []);


  return (
    <div className="CompanyDetail">
      <JobCardList />
    </div>
  );
}

export default CompanyDetail;
