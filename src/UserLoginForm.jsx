import { useState } from "react";
import Alert from "./Alert.jsx";

/**
 * UserLoginForm
 *
 * Props: { handleUserLogin }
 *
 * State: formData {username, password, errors}
 *
 * RoutesList -> UserLoginForm
 */

function UserLoginForm({ handleUserLogin }) {
  console.log("UserLoginForm");

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    errors: [],
  });


  /** Handle submission of login form, passes form data */
  async function handleSubmit(evt) {
    evt.preventDefault();
    console.log("UserLoginForm: handleSubmit", { formData });

    try {
      await handleUserLogin({
        username: formData.username,
        password: formData.password
      });
    } catch (err) {
      setFormData(formData => ({
        ...formData,
        errors: err
      }));
    }
  }

  /** Handle change for form inputs */
  function handleChange(evt) {
    evt.preventDefault();
    const { name, value } = evt.target;

    setFormData(formData => ({
      ...formData,
      [name]: value,
    }));
  }

  return (
    <div className="UserLoginForm">
      <h1>Login</h1>
      <form
      className="UserLoginForm-form form-group"
      onSubmit={handleSubmit}
      >
        <label htmlFor="UserLoginForm-username">Username</label>
        <input
          id="UserLoginForm-username"
          className="form-control"
          value={formData.username}
          name="username"
          required
          onChange={handleChange}
        />
        <label htmlFor="UserLoginForm-password">Password</label>
        <input
          id="UserLoginForm-password"
          className="form-control"
          value={formData.password}
          name="password"
          required
          type="password"
          onChange={handleChange}
        />
        {formData.errors.length > 0 &&
          <Alert alerts={formData.errors} />
        }
        <button>Login</button>
      </form>
    </div>
  );
}

export default UserLoginForm;