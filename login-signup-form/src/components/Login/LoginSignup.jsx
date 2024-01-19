import { useState } from "react";
import Email_Icon from "../../assets/email.png";
import Password_Icon from "../../assets/password.png";
import User_Icon from "../../assets/person.png";
import "./LoginSignup.css";
export default function LoginSignup() {
  const [action, setAction] = useState("Sign Up");
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={User_Icon} alt="" />
          <input type="text" placeholder="Name" />
        </div>
        <div className="input">
          <img src={Email_Icon} alt="" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img src={Password_Icon} alt="" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      <div className="forgot-password">
        Lost Password? <span>Click Here!</span>
      </div>
      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => setAction("Sign Up")}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => setAction("Login")}
        >
          Login
        </div>
      </div>
    </div>
  );
}
