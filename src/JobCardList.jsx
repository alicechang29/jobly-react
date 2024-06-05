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
 * JobCardList -> [JobCard, JobCard]
 */

function JobCardList({ jobs = [] }) {
  console.log("JobCardList");

  return (
    <div className="JobCardList">
      Jobs List
      {jobs.map(
        job => (
          <JobCard key={job.id} />
        )
      )}
    </div>
  );
};

export default JobCardList;