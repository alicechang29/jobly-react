import SearchForm from "./SearchForm.jsx";
import JobCardList from "./JobCardList.jsx";

import { useEffect, useState } from "react";

/**
 * Job List
 *
 * Props: none
 *
 * State:
 * jobs ->
 *  {jobs: [job,...], isLoading: bool}
 *  default: {jobs: null, isLoading: true}
 *
 * Effects: fetch and set jobs on first initiation
 */

function JobList() {
  console.log("JobList");
  const [jobs, setJobs ] = useState({jobs: null, isLoading: true});

  /** Sets the filtered jobs */
  function handleSearch() {
    // fetch jobs by search
  }

  useEffect(function fetchAllJobs(){

    async function getJobs(){
      // fetch get jobs
      // set({jobs, isLoading: false})
    }

    getJobs();
  }, []);

  return (
    <div className="JobList">
      <h1>All Jobs</h1>
      <SearchForm />
      <JobCardList />
    </div>
  );
}

export default JobList;
