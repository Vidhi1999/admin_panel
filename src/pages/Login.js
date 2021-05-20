import React from "react";
import Otpverification from "./Otpverification";
import { useState } from "react";
import logo from "../images/logo.svg";
import fb from "../images/facebook-circular-logo.svg";
import google from "../images/search.svg";
import "./Login.scss";
import "./LoginPages.scss";
import { Link } from "react-router-dom";

//MAIN COMPONENT
const Login = () => {
  const [type, setType] = useState(true); ///true phone , false - email
  const [response, setResponse] = useState(false); //response from server whether the otp is sent to the user or not
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const changePhone = (val) => {
    setPhone(val);
  };

  const changeEmail = (val) => {
    setEmail(val);
  };
  const changeType = (val) => {
    setType(val);
  };

  const changeResponse = (val) => {
    setResponse(val);
    if (val === false) {
      setPhone("");
      setEmail("");
    }
  };

  const HandleSubmit = () => {
    console.log("Handle submit executed");

    if (phone || email) {
      // POST SERVER SIDE REQUEST TO SEND OTP ON GIVEN MAIL/PHONE NUMBER
      //Write Server side code here
      console.log(phone);
      console.log(email);
      return true; //SERVER RESPONSE;
    } else {
      alert("Incomplete Fields");
    }
  };

  return (
    <>
      {!response && (
        <div className="login-container">
          <div className="loginCard">
            <img src={logo} alt="logo" className="logo" />

            <UserInput
              response={response}
              changeResponse={changeResponse}
              type={type}
              changeType={changeType}
              HandleSubmit={HandleSubmit}
              phone={phone}
              changePhone={changePhone}
              email={email}
              changeEmail={changeEmail}
            />

            <div className="lower-image">
              <img src={fb} alt="fb" id="fb-icon" />
              <img src={google} alt="google" id="google-icon" />
            </div>
          </div>
        </div>
      )}
      {response && (
        <Otpverification
          changeResponse={changeResponse}
          userinput={phone || email}
        />
      )}
    </>
  );
};

export default Login;

const Phone = ({ phone, changePhone }) => {
  return (
    <div className="chooseOption">
      {/* <label htmlFor="tel">Mobile Number: </label> */}
      <input
        type="number"
        id="phone-option"
        className="form-input-box"
        name="tel"
        value={phone}
        maxLength={10}
        placeholder="Mobile Number"
        onChange={(e) => changePhone(e.target.value)}
      />
    </div>
  );
};

const Email = ({ email, changeEmail }) => {
  return (
    <div className="chooseOption">
      {/* <label htmlFor="email">Email: </label> */}
      <input
        type="email"
        id="email-option"
        className="form-input-box"
        name="email"
        value={email}
        placeholder="Email"
        onChange={(e) => changeEmail(e.target.value)}
      />
    </div>
  );
};

const UserInput = ({
  type,
  response,
  changeResponse,
  changeType,
  HandleSubmit,
  phone,
  changePhone,
  email,
  changeEmail,
}) => {
  return (
    <div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            changeResponse(HandleSubmit);
            console.log(response);
          }}
        >
          {type === true ? (
            <Phone phone={phone} changePhone={changePhone} />
          ) : (
            <Email email={email} changeEmail={changeEmail} />
          )}

          <button type="submit" className="blue-btn">
            Get OTP
          </button>
        </form>
        <h6 className="horizontal-line">
          <span id="para-or">OR</span>
        </h6>
      </div>
      <button
        type="button"
        className="blue-btn"
        onClick={() => changeType(!type)}
      >
        Continue with {type === true ? "email" : "phone number"}
      </button>
    </div>
  );
};
