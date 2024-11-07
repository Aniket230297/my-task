
import { useState } from "react";
import Dropdown from "../Dropdown/Dropdown"
import Information from "../Information/Information";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = ()=>{
    const [selectedOption, setSelectedOption] = useState("Dropdown");

    const location = useLocation();

    const isHomePage = location.pathname === "/";

    return(
        <>
        <div className="navbarContainer">
            <ul>
                <li>Logo</li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/taskpage">Tasks</Link></li>
                <li><Link to="/userpage">User</Link></li>
            </ul>
        </div>
        {isHomePage && (<>
            <Dropdown selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
            <Information selectedOption={selectedOption}/>
        </>)}
        
        </>
    )
}

export default Navbar;