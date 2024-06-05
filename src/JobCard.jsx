
/**
 * Job Card
 *
 * Props:
 * job -> { title, salary, equity, companyHandle }
 *
 * State: none
 *
 * Effects: none
 */

function JobCard({ job }) {
  console.log("JobCard");
  const { title, salary = null , equity= null, companyHandle = null } = job;

  return (
    <div className="JobCard">
      JobCard
    </div>
  );
}

export default JobCard;
