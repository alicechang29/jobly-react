
import { useState } from "react";
import UserLoginForm from "./UserLoginForm";

/**
 * Company Detail
 *
 * Props: saveUserData <- cb from App
 *
 * State:

    form fields -> :
     {
        username,
        password,
     },
    isLoading: bool,
    errors: [],
  }

  saveUserData

 *  RoutesList -> UserLogin -> UserLoginForm

 */

function UserLogin({ saveUserData }) {
  console.log("UserLogin");

  const [formFieldsData, setFormFields] = useState({
    formFields: { username: null, password: null },
    isLoading: true,
    errors: [],
  });

  /** save user login */
  function handleSave(){


    // no errors
    saveUserData(formFieldsData)
    setFormFields({
      formFields: { username: null, password: null },
      isLoading: false,
      errors: [],
    })
  }

  if (formFieldsData.isLoading) {
    return <div className="UserLogin-loading">Loading...</div>;
  }

  return (
    <div className="UserLogin">
      <h1>Login here!</h1>
      <UserLoginForm alerts={errors} handleSave={ handleSave } />
    </div>
  );
}

export default UserLogin;
