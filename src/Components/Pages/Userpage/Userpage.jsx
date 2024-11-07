import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Loginpage from "../Loginpage/Loginpage";
import "./style.css";

const Userpage = ({ userCredentials , setIsLoggedIn}) => {
  const [isEditing, setIsEditing] = useState(false);   
  const [newPassword, setNewPassword] = useState(userCredentials.password);
  
  const navigate= useNavigate();
  
  const handleChangePassword = () => {
    setIsEditing(true); 
  };

  const handleSavePassword = () => {
    setIsEditing(false); 
    alert("Password changed successfully!"); 
  };

  const handleLogout=()=>{
    setIsLoggedIn(false);
    navigate("/login");
  }

  return (
    <div className="userContainer">
      <div>
        <p className="user">Username: {userCredentials.username}</p>
        <p className="user">
          Password:{" "}
          {isEditing ? (
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)} 
            />
          ) : (
            userCredentials.password
          )}
        </p>
      </div>

      <div className="buttonContainer">
        {isEditing ? (
          <button onClick={handleSavePassword}>Save Password</button> 
        ) : (
          <button onClick={handleChangePassword}>Change Password</button> 
        )}
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Userpage;
