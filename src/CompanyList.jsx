import { useEffect } from "react";
import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";
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
 * Effects: fetch and set companies on first initiation []
 */

function CompanyList() {
  console.log("CompanyList");

  //State

  //useEffect

  //handleSearch fn

  //Make sure to pass the props
  return (
    <div className="CompanyList">
      <SearchForm />
      <CompanyCard />
    </div>
  );


}

export default CompanyList;
