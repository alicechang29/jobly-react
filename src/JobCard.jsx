
/**
 * Job Card
 *
 * Props:
 * job -> { id, title, salary, equity, companyName, companyHandle }
 * companyHandle is not being used
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
  } = job;

  return (
    <div className="JobCard">

      <div className="card">
        <div className="card-header">
          <b>{companyName}</b>
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          {salary !== null &&
            <p className="card-text">Salary: {salary}</p>
          }
          {equity !== null &&
            <p className="card-text">Equity: {equity}</p>
          }
        </div>
      </div>
    </div>
  );
}

export default JobCard;
