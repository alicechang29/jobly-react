
/** UserProfileForm
 *
 * Props: { handleProfileUpdate }
 *
 * State: formData {username, password, fName, lName, email, errors}
 *
 * RoutesList -> UserProfileForm
 */
function UserProfileForm({ handleProfileUpdate }) {
  console.log("UserProfileForm");

  const [formData, setFormData] = useState({
    username,
    password,
    fName,
    lName,
    email,
    errors: []
  });


  /** Handle submission of login form, passes form data */
  function handleSubmit(evt) {
    evt.preventDefault();
    console.log("UserProfileForm: handleSubmit", { formData });
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
    <div className="UserProfileForm">
      <h1>Login</h1>
      <form className="UserProfileForm-form" onSubmit={handleSubmit}>
        <label htmlFor="UserProfileForm-username">Username</label>
        <input
          id="UserProfileForm-username"
          value={formData.username}
          placeholder={formData.username}
          disabled
        />
        <label htmlFor="UserProfileForm-password">Password</label>
        <input
          id="UserProfileForm-password"
          value={formData.password}
          required
          type="password"
          onChange={handleChange}
        />
        <label htmlFor="UserProfileForm-fname">First Name</label>
        <input
          id="UserProfileForm-fname"
          value={formData.fName}
          required
          onChange={handleChange}
        />
        <label htmlFor="UserProfileForm-lname">Last Name</label>
        <input
          id="UserProfileForm-lname"
          value={formData.lName}
          required
          onChange={handleChange}
        />c
        <label htmlFor="UserProfileForm-email">Email</label>
        <input
          id="UserProfileForm-email"
          value={formData.email}
          required
          onChange={handleChange}
        />
        <Alert alerts={formData.errors} />
        <button>Update Profile</button>
      </form>
    </div>

  );
}

export default UserProfileForm;