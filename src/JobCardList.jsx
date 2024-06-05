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

function JobCardList({ jobs = [{ id: 1, title: "teacher" }] }) {
  console.log("JobCardList");

  return (
    <div className="JobCardList">
      Jobs Card List
      {jobs.map(
        job => (
          <JobCard key={job.id} job={job} />
        )
      )}
    </div>
  );
};

export default JobCardList;