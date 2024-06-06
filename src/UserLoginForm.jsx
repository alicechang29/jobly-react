import { useState } from "react";

/**
 * UserLoginForm
 *
 * Props: { alerts: [alert, ...], handleSave }
 *
 * State: formData
 *
 * RoutesList -> UserLogin -> UserLoginForm
 */

function UserLoginForm({ alerts = [], handleSave }) {
  console.log("UserLoginForm");

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    alerts
  });


  /** Handle submission of search form, passes a term */
  function handleSubmit(evt) {
    evt.preventDefault();
    console.log("UserLoginForm: handleSubmit", { formData });

    handleSave(formData);
  }

  /** Handle change for form inputs */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value,
    }));
  }

  return (
    <form className="UserLoginForm" onSubmit={handleSubmit}>
      <label htmlFor="UserLoginForm-username">Username</label>
      <input
        id="UserLoginForm-username"
        value={formData.username}
        onChange={handleChange}
      />
      <label htmlFor="UserLoginForm-password">Password</label>
      <input
        id="UserLoginForm-password"
        value={formData.password}
        type="password"
        onChange={handleChange}
      />
      <button>Login</button>
    </form>
  );
}

export default UserLoginForm;