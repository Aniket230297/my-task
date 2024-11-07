import { useState } from 'react';
import './App.css';
import Navbar from './Components/Modules/Navbar/Navbar';
import Homepage from './Components/Pages/Homepage/Hompage';
import Loginpage from './Components/Pages/Loginpage/Loginpage';
import Taskpage from './Components/Pages/Taskpage/Taskpage';
import Userpage from './Components/Pages/Userpage/Userpage';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userCredentials, setUserCredentials] = useState({
    username: "",
    password: "",
  });

  return (
    <Router>
      {/* Navbar should be outside of Routes, but only render if logged in */}
      {isLoggedIn && <Navbar />}

      <Routes>
        {/* Route for Login page */}
        <Route path="/login" element={<Loginpage setIsLoggedIn={setIsLoggedIn} setUserCredentials={setUserCredentials} />} />
        
        {/* Protected Routes, only accessible if logged in */}
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Homepage />} />
            <Route path="/taskpage" element={<Taskpage />} />
            <Route path="/userpage" element={<Userpage userCredentials={userCredentials} setIsLoggedIn={setIsLoggedIn} />} />
            {/* Redirect any unknown routes to homepage */}
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          // If not logged in, navigate to the login page for any unknown routes
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
