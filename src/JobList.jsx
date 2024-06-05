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
 *  App -> RoutesList -> JobList
 */

function JobList() {
  console.log("JobList");
  const [jobsData, setJobs] = useState(
    {
      jobs: [],
      isLoading: true,
      errors: [],
    }
  );

  /** Sets the filtered jobs */
  function handleSearch(term) {
    // fetch jobs by search

    async function fetchJobsBySearch() {
      try {
        const data = await JoblyApi.getJobs(); //FIXME: need to change the route
        setJobs({
          jobs: data,
          isLoading: false,
          errors: [],
        });
      } catch (err) {
        setJobs({
          jobs: null,
          isLoading: false,
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
          errors: [],
        });
      } catch (err) {
        setJobs({
          jobs: null,
          isLoading: false,
          errors: err,
        });
      }
    }

    fetchJobsData();
  }, []);

  return (
    <div className="JobList">
      <h1>All Jobs</h1>
      {
        jobsData.errors.length > 0 &&
        <Error errors={jobsData.errors} />
      }
      <SearchForm />
      <JobCardList jobs={jobsData.jobs} />
    </div>
  );
}

export default JobList;
