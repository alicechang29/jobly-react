
/**
 * Alerts
 *
 * Props:
 * alerts -> [msg, msg,...]
 *
 * State: none
 *
 * Effects: none
 *
 */

function Alert({ alerts = [] }) {
  console.log("Alert");

  return (
    <div className="Alert">
      {alerts.map(alert => (
        <div key={alert} className="alert alert-warning" role="alert">
          {alert}
        </div>)
      )}
    </div>
  );
}

export default Alert;
