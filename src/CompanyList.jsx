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
      searchTerm: ""
    }
  );

  /** Sets and fetches the filtered companies */
  async function handleSearch(term) {
    console.log("handleSearch", { term });

    let data = term !== ""
      ? await JoblyApi.getCompaniesBySearch(term)
      : await JoblyApi.getCompanies();

    setCompaniesData({
      companies: data,
      isLoading: false,
      searchTerm: term,
    });

  }


  /** fetches and sets all companies data on initial render */
  useEffect(function fetchAllCompanies() {
    console.log("USE EFFECT: fetchAllCompanies");

    async function fetchCompaniesData() {

      const data = await JoblyApi.getCompanies();
      setCompaniesData({
        companies: data,
        isLoading: false,
        searchTerm: "",
      });

    }
    fetchCompaniesData();
  }, []);


  if (companiesData.isLoading) {
    console.log("isloading", companiesData.isLoading);
    return <div className="CompanyList-loading">Loading...</div>;
  }

  //FIXME: CLEAR the search term when returning to companies list


  return (
    <div className="CompanyList">
      <SearchForm handleSearch={handleSearch} />
      {companiesData.searchTerm === ""
        ? <h1>All Companies</h1>
        : <h3>Search results for "{companiesData.searchTerm}"</h3>
      }

      {
        companiesData.companies.length === 0
          ? <p>
            Sorry, no results found.{' '}
            <Link to={`/companies/`}>Go back to companies list</Link>
          </p>
          : companiesData.companies.map(
            company => (
              <Link key={company.handle} to={`/companies/${company.handle}`}>
                <CompanyCard company={company} />
              </Link>
            )
          )
      }

    </div >
  );


}

export default CompanyList;
