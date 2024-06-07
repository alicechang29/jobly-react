import { useState } from "react";
import Alert from "./Alert.jsx";

/** UserRegistrationForm
 *
 * Props: { handleUserRegistration }
 *
 * State: formData {username, password, fName, lName, email, errors}
 *
 * RoutesList -> UserRegistrationForm
 */
function UserRegistrationForm({ handleUserRegistration }) {
  console.log("UserRegistrationForm");

  const [formData, setFormData] = useState(
    {
      user: {
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
      },
      errors: [],
    });


  /** Handle submission of registration form, passes form data */
  async function handleSubmit(evt) {
    evt.preventDefault();
    console.log("UserRegistrationForm: handleSubmit", { formData });

    try {
      await handleUserRegistration(formData.user);
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
      user: {
        ...formData.user,
        [name]: value,
      }
    }));
  }

  return (
    <div className="UserRegistrationForm">
      <h1>Sign Up</h1>
      <form
        className="UserRegistrationForm-form form-group"
        onSubmit={handleSubmit}
      >
        <label htmlFor="UserRegistrationForm-username">Username</label>
        <input
          id="UserRegistrationForm-username"
          className="form-control"
          value={formData.user.username}
          name="username"
          required
          onChange={handleChange}
        />
        <label htmlFor="UserRegistrationForm-password">Password</label>
        <input
          id="UserRegistrationForm-password"
          className="form-control"
          value={formData.user.password}
          name="password"
          required
          type="password"
          onChange={handleChange}
        />
        <label htmlFor="UserRegistrationForm-firstName">First Name</label>
        <input
          id="UserRegistrationForm-fname"
          className="form-control"
          value={formData.user.firstName}
          name="firstName"
          required
          onChange={handleChange}
        />
        <label htmlFor="UserRegistrationForm-lastName">Last Name</label>
        <input
          id="UserRegistrationForm-lname"
          className="form-control"
          value={formData.user.lastName}
          name="lastName"
          required
          onChange={handleChange}
        />
        <label htmlFor="UserRegistrationForm-email">Email</label>
        <input
          id="UserRegistrationForm-email"
          className="form-control"
          value={formData.user.email}
          name="email"
          required
          onChange={handleChange}
        />
        {formData.errors.length > 0 &&
          <Alert alerts={formData.errors} />
        }
        <button>Sign up</button>
      </form>
    </div>

  );
}

export default UserRegistrationForm;