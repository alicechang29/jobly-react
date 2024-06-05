
/**
 * Job Card
 *
 * Props:
 * job -> { id, title, salary, equity, companyHandle }
 *
 * State: none
 *
 * Effects: none
 *
 * App -> RoutesList -> JobList/CompanyDetail -> JobCardList -> JobCard
 */

function JobCard({ job }) {
  console.log("JobCard");
  const { title, salary = null, equity = null, companyHandle = null } = job;

  return (
    <div className="JobCard">
      Job Card
      {title}
    </div>
  );
}

export default JobCard;
