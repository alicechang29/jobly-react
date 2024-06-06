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
  const [jobsData, setJobsData] = useState(
    {
      jobs: [],
      isLoading: true,
      searchTerm: "",
      errors: []
    }
  );

  /** Sets and fetches the filtered jobs */
  async function handleSearch(term) {
    console.log("handleSearch", { term });

    try {
      const data = term !== ""
        ? await JoblyApi.getJobsBySearch(term)
        : await JoblyApi.getJobs();

      const errors = data.length === 0
        ? ["Sorry, no results were found!"]
        : [];

      setJobsData({
        jobs: data,
        isLoading: false,
        searchTerm: term,
        errors,
      });
    } catch (err) {
      setJobsData({
        jobs: [],
        isLoading: false,
        searchTerm: "",
        errors: err,
      });
    }
  }


  /** fetches and sets all jobs data on initial render */
  useEffect(function fetchAllJobs() {
    console.log("USE EFFECT: fetchAllJobs");

    async function fetchJobsData() {
      try {
        const data = await JoblyApi.getJobs();
        setJobsData({
          jobs: data,
          isLoading: false,
          searchTerm: "",
          errors: [],
        });
      } catch (err) {
        setJobsData({
          jobs: [],
          isLoading: false,
          searchTerm: "",
          errors: err,
        });
      }
    }

    fetchJobsData();
  }, []);


  if (jobsData.isLoading) {
    console.log("isloading", jobsData.isLoading);
    return <div className="JobList-loading">Loading...</div>;
  }

  return (
    <div className="JobList">
      <SearchForm handleSearch={handleSearch} />
      {jobsData.searchTerm === ""
        ? <h1>All Jobs</h1>
        : <h1>Search results for "{jobsData.searchTerm}"</h1>
      }

      {
        jobsData.errors.length > 0 &&
        <div><Error errors={jobsData.errors} /></div>
      }

      <JobCardList jobs={jobsData.jobs} />
    </div>
  );
}

export default JobList;
