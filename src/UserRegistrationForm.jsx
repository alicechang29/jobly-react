
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

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    fName: "",
    lName: "",
    email: "",
    errors: [],
  });


  /** Handle submission of registration form, passes form data */
  function handleSubmit(evt) {
    evt.preventDefault();
    console.log("UserRegistrationForm: handleSubmit", { formData });
    //FIXME:
    try {
      handleUserLogin({
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
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value,
    }));
  }

  return (
    <div className="UserRegistrationForm">
      <h1>Login</h1>
      <form className="UserRegistrationForm-form" onSubmit={handleSubmit}>
        <label htmlFor="UserRegistrationForm-username">Username</label>
        <input
          id="UserRegistrationForm-username"
          value={formData.username}
          required
          onChange={handleChange}
        />
        <label htmlFor="UserRegistrationForm-password">Password</label>
        <input
          id="UserRegistrationForm-password"
          value={formData.password}
          required
          type="password"
          onChange={handleChange}
        />
        <label htmlFor="UserRegistrationForm-fname">First Name</label>
        <input
          id="UserRegistrationForm-fname"
          value={formData.fName}
          required
          onChange={handleChange}
        />
        <label htmlFor="UserRegistrationForm-lname">Last Name</label>
        <input
          id="UserRegistrationForm-lname"
          value={formData.lName}
          required
          onChange={handleChange}
        />c
        <label htmlFor="UserRegistrationForm-email">Email</label>
        <input
          id="UserRegistrationForm-email"
          value={formData.email}
          required
          onChange={handleChange}
        />
        <Alert alerts={formData.errors} />
        <button>Sign up</button>
      </form>
    </div>

  );
}

export default UserRegistrationForm;