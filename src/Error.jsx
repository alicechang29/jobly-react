
/**
 * Errors Card
 *
 * Props:
 * erros -> [msg, msg,...]
 *
 * State: none
 *
 * Effects: none
 *
 */

function Error({ errors = [] }) {
  console.log("Error");

  return (
    <div className="Error">
      {
        <div>
          {errors.map(
            err => (
              <h1> 404: {err} </h1>
            )
          )}
        </div>
      }
    </div>
  );
}

export default Error;
