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
 companyData ->{
    company:
     {
        handle,
        name,
        description,
        numEmployees,
        logoUrl,
        jobs:  [{ id, title, salary, equity }, ...]
     },
    isLoading: bool,
    errors: [],
  }

 * Effects: fetch and set company on first initiation

 *  App -> RoutesList -> CompanyDetail

 */

function CompanyDetail() {
  console.log("CompanyDetail");
  const { handle } = useParams();

  const [companyData, setCompanyData] = useState({
    company: null,
    isLoading: true,
    errors: [],
  });


  /**fetches company data by name on initial render */
  useEffect(function fetchCompanyByName() {
    console.log("USE EFFECT: fetchCompanyByName");

    async function fetchCompanyData() {
      try {
        const data = await JoblyApi.getCompany(handle);
        setCompanyData({
          company: data,
          isLoading: false,
          errors: null,
        });
      } catch (err) {
        console.log({err})
        setCompanyData({
          company: null,
          isLoading: false,
          errors: err,
        })
      }
    }

    fetchCompanyData();
  }, []);

  return (
    <div className="CompanyDetail">
      {
      companyData.errors &&
      <div>
        {companyData.errors.map(
          err => (
            <h1> 404: {err} </h1>
          )
        )}
      </div>
      }
      <JobCardList />
    </div>
  );
}

export default CompanyDetail;
