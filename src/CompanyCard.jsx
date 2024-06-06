
/**
 * Company Card
 *
 * Props:
 * company -> { handle, name, description, numEmployees, logoUrl }
 * Only uses name, description, and possibly logoUrl if provided
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
    name,
    description,
    logoUrl = null,
  } = company;


  return (
    <div className="CompanyCard">
      <div className="card">
        <div className="card-header">
          <b>{name}</b>
        </div>
        <div className="card-body">
          <p className="card-text">{description}</p>
          {
            logoUrl !== null &&
            <img src={logoUrl} alt="logo" width="100" height="100"></img>
          }
        </div>
      </div>
    </div>
  );
}

export default CompanyCard;
