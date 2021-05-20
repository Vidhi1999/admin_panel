import React from "react";
import { useRef, useState } from "react";
import OtpInput from "react-otp-input";
import { Otp } from "react-otp-timer";
import { useHistory } from "react-router-dom";
import "./Otpverification.scss";
import "./LoginPages.scss";

import { BiArrowBack } from "react-icons/bi";

const Otpverification = ({
  changeResponse,
  userinput = "",
  isLogin,
}) => {
  const [otp, setOtp] = useState("");
  let history = useHistory();
  const [isTimerVisible, setIsTimerVisible] = useState(true);

  const resendOtp = () => {
    console.log("OTP has been sent again");
  };
  const verification = () => {
    console.log(otp);

    // After Clicking Verify button, this function will be invoked and the value of the otp will be the code that the user has entered
    // SEND THE OTP FOR SERVER SIDE AUTHENTICATION
    // This function checks whether the entered OTP matches with the sent OTP
    // true if matches, false if incorrect OTP
    // This function also checks whether the user exists on the database or not and returns a boolean value respectively
    // true if the user exists, false if user doesn't exist
    // if OTPvalue === false, give 2 more chance to re enter the OTP
    // if userExists === true , redirect to business page else, open sign up page
    //Check if user is builder i.e found in the builder table, if true, set isBuilder(true) else isBuilder(false)
    //if UserExists set isLogin(true) i.e, the user has successfully logged in
    let userExists = false;
    let userIsBuilder = true;
    if (userExists) {
      isLogin(true);
    }
    return userExists;
  };

  const handleChange = (element, index) => {};

  return (
    <div className="login-container">
      <div className="loginCard">
        <div
          id="Backicon"
          onClick={() => {
            changeResponse(false);
          }}
        >
          <BiArrowBack size={35} />
        </div>

        <p id="text-in-verification">
          We have sent a 6-digit verification code to {userinput}
        </p>
        <OtpInput
          value={otp}
          containerStyle="con-style"
          inputStyle="otp-boxes"
          onChange={(otp) => {
            setOtp(otp);
            console.log(otp);
          }}
          numInputs={6}
        />
        <button
          type="submit"
          className="blue-btn otp-verification-btn"
          onClick={() => {
            if (otp == "") {
              alert("Incomplete Fields");
            } else {
              if (verification()) {
                history.push("/home");
              } else {
                //console.log(userinput);
                history.push({
                  pathname: "/addlocation",
                  state: {
                    newuser: true,
                    userinput: userinput,
                  },
                });
              }
            }
          }}
        >
          Verify OTP
        </button>
        <br />
        <div className="lower-part">
          {isTimerVisible === true ? <Time resendOtp={resendOtp} /> : ""}
          <p>
            Didn't receive the code?{" "}
            <a
              className="resend"
              style={{ visibility: "hidden" }}
              href="#"
              onClick={
                // () => setIsTimerVisible(true)
                resendOtp
              }
            >
              Resend Now
            </a>
          </p>
          {/* After clicking the resend now, a timer will appear and will start counting back to 0 from 30 sec. */}
        </div>
      </div>
    </div>
  );
};

export const Time = (props) => {
  let style = {
    otpTimer: {
      textAlign: "center",
      fontSize: "20px",
    },
    resendBtn: {
      // display: "none",
      border: "none",
      backgroundColor: "#fff",
      color: "#a8a7a7",
      transform: "translate(327%,100%)",
    },
  };
  return (
    <Otp
      style={style}
      minutes={0.5} // Minutes ( Pass the no of minutes that you want count )
      resendEvent={props.resendOtp}
    />
  );
};

const handleClick = () => {
  console.log("Timer started");
};

export default Otpverification;
