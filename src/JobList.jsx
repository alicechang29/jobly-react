import SearchForm from "./SearchForm.jsx";
import JobCardList from "./JobCardList.jsx";
import JoblyApi from "../api.js";
import Error from "./Error.jsx";

import { useEffect, useState } from "react";

/**
 * Job List
 *
 * Props: none
 *
 * State:
 * jobsData ->
 *  {jobs: [job,...], isLoading: bool, erros: []}
 *  default: {jobs: null, isLoading: true, errors: []}
 *
 * Effects: fetch and set jobs on first initiation
 *
 *  RoutesList -> { JobList } -> JobCardList
 */

function JobList() {
  console.log("JobList");
  const [jobsData, setJobs] = useState(
    {
      jobs: [],
      isLoading: true,
      isSearch: false,
      errors: []
    }
  );

  /** Sets the filtered jobs */
  function handleSearch(term) {
    console.log("handleSearch", { term });

    async function fetchJobsBySearch() {
      console.log("fetchJobsBySearch");

      try {
        const data = await JoblyApi.getJobsBySearch(term);
        setJobs({
          jobs: data,
          isLoading: false,
          searchTerm: term,
          errors: []

        });
      } catch (err) {
        setJobs({
          jobs: [],
          isLoading: false,
          searchTerm: "",
          errors: err,
        });
      }
    }

    fetchJobsBySearch();
  }

  /** fetches and sets all jobs data on initial render */
  useEffect(function fetchAllJobs() {
    console.log("USE EFFECT: fetchAllJobs");

    async function fetchJobsData() {
      try {
        const data = await JoblyApi.getJobs();
        setJobs({
          jobs: data,
          isLoading: false,
          isSearch: false,
          errors: [],
        });
      } catch (err) {
        setJobs({
          jobs: [],
          isLoading: false,
          isSearch: false,
          errors: err,
        });
      }
    }

    fetchJobsData();
  }, []);

  return (
    <div className="JobList">
      {isSearch
        ? <h1>All Jobs</h1>
        : <h1>Search results for {term}</h1>
      }

      {
        jobsData.errors.length > 0 &&
        <Error errors={jobsData.errors} />
      }
      <SearchForm handleSearch={handleSearch} />
      <JobCardList jobs={jobsData.jobs} />
    </div>
  );
}

export default JobList;
