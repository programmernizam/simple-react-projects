import Email_Icon from "../../assets/email.png";
import Password_Icon from "../../assets/password.png";
import User_Icon from "../../assets/person.png";
import "./LoginSignup.css";
export default function LoginSignup() {
  return (
    <div className="container">
      <div className="header">
        <div className="text">Sing Up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={User_Icon} alt="" />
          <input type="text" />
        </div>
        <div className="input">
          <img src={Email_Icon} alt="" />
          <input type="email" />
        </div>
        <div className="input">
          <img src={Password_Icon} alt="" />
          <input type="password" />
        </div>
      </div>
    </div>
  );
}
