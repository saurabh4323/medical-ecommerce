import React from "react";
import { UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import "./head.css";

const Header = () => {
  const { isSignedIn } = useUser();

  return (
    <div className="header">
      <div className="left">
        <img src="logo.svg" alt="" />
      </div>
      <div className="mid">
        <h2></h2>
      </div>

      <div className="rig">
        {isSignedIn ? (
          <UserButton />
        ) : (
          <Link to="/sign">
            <button className="buton">Sign In</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
