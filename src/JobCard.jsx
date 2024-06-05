
/**
 * Job Card
 *
 * Props:
 * job -> { id, title, salary, equity, companyName, companyHandle }
 *
 * State: none
 *
 * Effects: none
 *
 * App -> RoutesList -> JobList/CompanyDetail -> JobCardList -> JobCard
 */

function JobCard({ job }) {
  console.log("JobCard");
  const {
    title,
    salary = null,
    equity = null,
    companyName = null,
    companyHandle = null
  } = job;

  return (
    <div className="JobCard">

      <div class="card">
        <div class="card-header">
          <b>{companyName}</b>
        </div>
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">Salary: {salary}</p>
          <p class="card-text">Equity: {equity}</p>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
