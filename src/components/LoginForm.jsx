import { useState } from "react";
import { useUserAuth } from "../hooks/useUserAuth";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

const LoginForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const { loginUsingEmailAndPassword, user } = useUserAuth();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    setLoginLoading(true);
    setLoginError("");
    e.preventDefault();

    const userEmail = e.target[0].value;
    const userPassword = e.target[1].value;

    if (!userEmail || !userPassword) {
      setLoginError("input should not be empty!!");
      setLoginLoading(false);
      return;
    }
    if (userPassword?.length < 6) {
      setLoginError("Password should be at least 6 character!!");
      setLoginLoading(false);
      return;
    }

    // login
    try {
      await loginUsingEmailAndPassword(userEmail, userPassword);
      setLoginLoading(false);
      toast.success("Login success!");
      e.target.reset();
      navigate("/");
    } catch (error) {
      setLoginError(error.message);
      setLoginError(false);
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="">
        {/* error message */}
        {loginError && (
          <div className="rounded-md alert alert-error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 stroke-current shrink-0"
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
            <span>{loginError}</span>
          </div>
        )}
        {/* email input */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Enter email"
            className="w-full input-bordered input"
          />
        </div>

        {/* password input */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className="relative">
            <input
              maxLength="10"
              minLength="6"
              type={isVisible ? "text" : "password"}
              placeholder="Enter password (6-10) character"
              className="w-full input-bordered input"
            />
            <span
              onClick={() => setIsVisible(!isVisible)}
              className="absolute text-2xl -translate-y-1/2 cursor-pointer right-6 top-1/2"
            >
              {isVisible ? <BsEyeFill /> : <BsEyeSlashFill />}
            </span>
          </div>
        </div>

        {/* password reset link */}
        <div className="text-right">
          <Link to="/forget-password" className="link-error link">
            Forget password?
          </Link>
        </div>

        {/* form submit button */}
        <div className="mt-4">
          <button
            className={`btn-secondary btn-block btn ${
              user && "cursor-not-allowed"
            }`}
            type="submit"
          >
            {loginLoading && (
              <span className="loading loading-spinner text-primary" />
            )}
            <span>login</span>
          </button>
          <Toaster position="top-center" reverseOrder={true} />
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
