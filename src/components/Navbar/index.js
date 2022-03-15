import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="navbar bg-dark navbar-dark">
        <Link to={"/"} className="navbar-brand ml-9"> 
        {/* obviously this links no where */}
          Lyle Tilley's WeUsthem Tech Test 2022
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
