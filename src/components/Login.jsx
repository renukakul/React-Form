import { useRef, useState } from "react";

export default function Login() {
  // const [enteredInput, setEnteredInput] = useState({email : '', password : ''});
  const email = useRef();
  const password =useRef();



  function handleLoginButton(event){
    event.preventDefault();

    const eneteredEmail = email.current.value;
    const eneteredPassword = password.current.value;

    console.log("User email : " + eneteredEmail)
    console.log("User password : " + eneteredPassword)
    console.log("submitted")
  }

  function handleInputChange(identifier, value) {
    setEnteredInput((prevInputs) => ({
      ...prevInputs, 
      [identifier] : value
    }))
  }

  return (
    <form onSubmit={handleLoginButton}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" 
            ref={email}
          // onChange={(event) => handleInputChange('email', event.target.value)} value={enteredInput.email} 
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" 
            ref={password}
          // onChange={(event) => handleInputChange('password',event.target.value)} value={enteredInput.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}