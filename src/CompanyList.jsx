import { useEffect, useState } from "react";
import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";
import { Link } from "react-router-dom";
import JoblyApi from "../api";

/**
 * Company List
 *
 * Props:None
 *
 * State:
 {
    companies: [
     {
        handle,
        name,
        description,
        numEmployees,
        logoUrl
     }, ...],
    isLoading,
    searchTerm: "",
    errors: []
  }
 *
 * Effects: fetch and set companies on first initiation
 *
 * App -> RoutesList -> CompanyList
 */

function CompanyList() {
  console.log("CompanyList");

  const [companiesData, setCompaniesData] = useState(
    {
      companies: [],
      isLoading: true,
      searchTerm: "",
      errors: []
    }
  );

  /** Sets and fetches the filtered companies */
  async function handleSearch(term) {
    console.log("handleSearch", { term });

    try {
      const data = term !== ""
        ? await JoblyApi.getCompaniesBySearch(term)
        : await JoblyApi.getCompanies();

      const errors = data.length === 0
        ? ["Sorry, no results were found!"]
        : [];

      setCompaniesData({
        companies: data,
        isLoading: false,
        searchTerm: term,
        errors,
      });
    } catch (err) {
      setCompaniesData({
        companies: [],
        isLoading: false,
        searchTerm: "",
        errors: err,
      });
    }
  }


  /** fetches and sets all companies data on initial render */
  useEffect(function fetchAllCompanies() {
    console.log("USE EFFECT: fetchAllCompanies");

    async function fetchCompaniesData() {
      try {
        const data = await JoblyApi.getCompanies();
        setCompaniesData({
          companies: data,
          isLoading: false,
          searchTerm: "",
          errors: [],
        });
      } catch (err) {
        setCompaniesData({
          companies: [],
          isLoading: false,
          searchTerm: "",
          errors: err,
        });
      }
    }

    fetchCompaniesData();
  }, []);


  if (companiesData.isLoading) {
    console.log("isloading", companiesData.isLoading);
    return <div className="CompanyList-loading">Loading...</div>;
  }

  return (
    <div className="CompanyList">
      <SearchForm handleSearch={handleSearch} />
      {companiesData.searchTerm === ""
        ? <h1>All Companies</h1>
        : <h1>Search results for "{companiesData.searchTerm}"</h1>
      }

      {
        companiesData.errors.length > 0 &&
        <div><Error errors={companiesData.errors} /></div>
      }

      {companiesData.companies.map(
        company => (
          <Link key={company.handle} to={`/companies/${company.handle}`}>
            <CompanyCard company={company} />
          </Link>
        )
      )}

    </div >
  );


}

export default CompanyList;
