import { SignIn } from "@clerk/clerk-react";
import React from "react";

import "./Signin.css";
import Header from "./Header";
const Signin = () => {
  return (
    <div className="containe">
      <Header></Header>
      <div className="side">
        <div className="sign">
          <SignIn></SignIn>
        </div>
      </div>
    </div>
  );
};

export default Signin;
