import JobCard from "./JobCard.jsx";

/**
 * Job Card List
 *
 * Props:
 jobs
  {
    jobs: [job,...]
  }
 *
 * State: none
 *
 * Effects: none
 *
 * JobList -> { JobCardList }  -> [JobCard,...]
 */

function JobCardList({ jobs = [] }) {
  console.log("JobCardList");

  return (
    <div className="JobCardList">
      {jobs.map(
        job => (
          <JobCard key={job.id} job={job} />
        )
      )}
    </div>
  );
};

export default JobCardList;