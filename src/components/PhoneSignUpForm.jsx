import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../hooks/useUserAuth";

const PhoneSignUpForm = () => {
  const [phoneNumber, setPhoneNumber] = useState();
  const [error, setError] = useState("");
  const [otp, setOtp] = useState();
  const [flag, setFlag] = useState(false);
  const [confirmObj, setConfirmObj] = useState();
  const { setUpRecaptcha, updateUserProfile } = useUserAuth();
  const navigate = useNavigate();

  // send and get OTP
  const getOTP = async (e) => {
    e.preventDefault();
    setError("");

    if (phoneNumber === "" || phoneNumber === undefined)
      return setError("Input valid number!!");

    try {
      const response = await setUpRecaptcha(phoneNumber);
      // console.log(response);
      setConfirmObj(response);
      setFlag(true);
    } catch (error) {
      setError(error.message);
    }
  };

  // verify OTP
  const verifyOTP = async (e) => {
    e.preventDefault();
    // console.log(otp);
    if (otp === "" || otp === null) return;

    try {
      setError("");
      await confirmObj.confirm(otp);
      await updateUserProfile();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      {error && (
        <div className="alert alert-error rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{error}</span>
        </div>
      )}
      <form onSubmit={getOTP} style={{ display: !flag ? "block" : "none" }}>
        {/* error */}

        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone number</span>
          </label>
          <PhoneInput
            defaultCountry="US"
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={setPhoneNumber}
          />
        </div>

        {/* captcha container */}
        <div className="mt-2 flex justify-end" id="recaptcha-container"></div>

        <div className="mt-2 space-x-2 text-right">
          <Link to="/login">
            <button className="btn-error btn">cancel</button>
          </Link>
          <button className="btn-secondary btn">send OTP</button>
        </div>
      </form>

      {/* form for input OTP */}
      <form onSubmit={verifyOTP} style={{ display: flag ? "block" : "none" }}>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Provide OTP</span>
          </label>
          <input
            type="text"
            placeholder="Enter OTP"
            className="input-bordered input w-full"
            onChange={(e) => setOtp(e.target.value)}
          />
        </div>

        {/*action buttons */}
        <div className="mt-2 space-x-2 text-right">
          <Link to="/login">
            <button className="btn-error btn">cancel</button>
          </Link>
          <button className="btn-secondary btn">verify OTP</button>
        </div>
      </form>
    </>
  );
};

export default PhoneSignUpForm;
