import { useState } from "react";
import Alert from "./Alert.jsx";

/**
 * UserLoginForm
 *
 * Props: { handleUserLogin }
 *
 * State: formData {username, password, errors}
 *
 * RoutesList -> UserLogin -> UserLoginForm
 */

function UserLoginForm({ handleUserLogin }) {
  console.log("UserLoginForm");

  const [formData, setFormData] = useState({
    username,
    password,
    errors
  });


  /** Handle submission of login form, passes a term */
  function handleSubmit(evt) {
    evt.preventDefault();
    console.log("UserLoginForm: handleSubmit", { formData });

    try {
      handleUserLogin({ username: formData.username, password: formData.password });
    } catch (err) {
      setFormData(formData => ({
        ...formData,
        errors: err
      }));
    }
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
    <div className="UserLoginForm">
      <h1>Login</h1>
      <form className="UserLoginForm-form" onSubmit={handleSubmit}>
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
        <Alert alerts={formData.alerts} />
        <button>Login</button>
      </form>
    </div>

  );
}

export default UserLoginForm;