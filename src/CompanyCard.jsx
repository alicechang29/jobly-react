
/**
 * Company Card
 *
 * Props: { company, logoUrl }
 *
 * State: none
 *
 * Effects: none
 *
 * App -> RoutesList -> CompanyList -> CompanyCard
 */

function CompanyCard({ company }) {
  console.log("CompanyCard");

  const {
    handle,
    name,
    description,
    numEmployees,
    logoUrl = null
  } = company;


  return (
    <div className="CompanyCard">
      <div className="card">
        <div className="card-header">
          <b>{name}</b>

        </div>
        <div className="card-body">
          <p className="card-text">{description}</p>
          <img src={logoUrl} alt="logo" width="100" height="100"></img>
        </div>
      </div>
    </div>
  );
}

export default CompanyCard;
