import { useEffect, useState } from "react";
import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";
import { Link } from "react-router-dom";
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
    isLoading
  }
 *
 * Effects: fetch and set companies on first initiation
 *
 * App -> RoutesList -> CompanyList
 */

function CompanyList() {
  console.log("CompanyList");
  // const [companyData, setCompanyData] = useState();

  //State

  //useEffect

  //handleSearch fn

  // need make a map for companylist
  // add a to property for link

  //Make sure to pass the props

  // if (companyData.isLoading) {
  //   return <div className="CompanyList-loading">Loading...</div>;
  // }

  return (
    <div className="CompanyList">
      Company List
      <SearchForm />
      <Link to="http://localhost:5173/companies/anderson-arias-morrow"><CompanyCard /></Link>
    </div >
  );


}

export default CompanyList;
