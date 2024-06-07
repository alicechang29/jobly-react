import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import JobCardList from "./JobCardList";
import JoblyApi from "../api.js";
import Error from "./Error.jsx";

/**
 * Company Detail
 *
 * Props: None
 *
 * State:
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
    company: {},
    isLoading: true,
    errors: [],
  });


  /** fetches and sets company data by name on initial render
   * and on handle dependency
  */
  useEffect(function fetchCompanyByName() {
    console.log("USE EFFECT: fetchCompanyByName");

    async function fetchCompanyData() {
      try {
        const data = await JoblyApi.getCompany(handle);
        setCompanyData({
          company: data,
          isLoading: false,
          errors: [],
        });
      } catch (err) {
        console.log({ err });
        setCompanyData({
          company: {},
          isLoading: false,
          errors: err,
        });
      }
    }

    fetchCompanyData();
  }, [handle]);

  if (companyData.isLoading) {
    return <div className="CompanyDetail-loading">Loading...</div>;
  }

  return (
    <div className="CompanyDetail">
      <h1>{companyData.company?.name}</h1>
      <h5>{companyData.company?.description}</h5>
      {
        companyData.errors.length > 0 &&
        <Error errors={companyData.errors} />
      }
      <JobCardList jobs={companyData.company.jobs} />
    </div>
  );
}

export default CompanyDetail;
