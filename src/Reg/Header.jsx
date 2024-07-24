import React from "react";
import { UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import "./head.css";
import { UserRoundPen } from "lucide-react";
import { Plus } from "lucide-react";

const Header = () => {
  const { isSignedIn } = useUser();

  return (
    <div className="header">
      <div className="left">
        <img src="logo.svg" alt="" />
      </div>
      <div className="mid">
        <div className="boox">
          {" "}
          <Link to={"/"}>
            <l1>Home</l1>
          </Link>
          <div className="ic">
            <Plus size={20} color="#000000" strokeWidth={1.25} />
          </div>
        </div>
        <div className="boox">
          {" "}
          <Link to={"/feature"}>
            <l1>Feature</l1>
          </Link>
          <div className="ic">
            <Plus size={20} color="#000000" strokeWidth={1.25} />
          </div>
        </div>
        <div className="boox">
          {" "}
          <Link to={"/about"}>
            <l1>About Us</l1>
          </Link>
          <div className="ic">
            <Plus size={20} color="#000000" strokeWidth={1.25} />
          </div>
        </div>
        <div className="boox">
          <Link to={"/contact"}>
            <l1>Contact us</l1>
          </Link>
          <div className="ic">
            <Plus size={20} color="#000000" strokeWidth={1.25} />
          </div>
        </div>
      </div>

      <div className="rig">
        {isSignedIn ? (
          <UserButton />
        ) : (
          <Link to="/sign">
            <div className="he">
              <button className="vii">
                <UserRoundPen size={20} color="#064acb" strokeWidth={1.25} />
                <h5>Sigin here</h5>
              </button>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
