import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Loginpage = ({ setIsLoggedIn , setUserCredentials}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validationError, setValidationError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Reset error messages
    setValidationError("");

    // Credentials validation
    if (username === "admin" && password === "password") {
        setUserCredentials({ username, password });
        setIsLoggedIn(true);
        navigate("/");
      } else {
        setValidationError("Invalid username or password");
      }

    if (!username) {
        setValidationError("Username cannot be empty.");
        return;
      }
  
      if (!password) {
        setValidationError("Password cannot be empty.");
        return;
      }

    // Username validation
    if (username.length < 5) {
      setValidationError("Username must be at least 5 characters long.");
      return;
    }

    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
      setValidationError("Password must be at least 8 characters, including an uppercase letter, a lowercase letter, and a number.");
      return;
    }

    
  };


  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {validationError && <p className="error">{validationError}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Loginpage;
