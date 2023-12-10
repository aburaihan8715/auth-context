import { useState } from "react";
import { useUserAuth } from "../hooks/useUserAuth";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

const RegisterForm = () => {
  const [registerError, setRegisterError] = useState("");
  const [registerLoading, setRegisterLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const {
    createUserUserUsingEmailAndPassword,
    updateUserProfile,
    emailVerification,
    user,
  } = useUserAuth();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    setRegisterLoading(true);
    setRegisterError("");
    e.preventDefault();
    const userName = e.target[0].value;
    const userEmail = e.target[1].value;
    const userPassword = e.target[2].value;

    if (!userName || !userEmail || !userPassword) {
      setRegisterError("input should not be empty!!");
      setRegisterLoading(false);
      return;
    }
    if (userPassword?.length < 6) {
      setRegisterError("Password should be at least 6 character!!");
      setRegisterLoading(false);
      return;
    }

    // create user
    try {
      await createUserUserUsingEmailAndPassword(userEmail, userPassword);
      await updateUserProfile(userName);
      await emailVerification();
      setRegisterLoading(false);
      toast.success("User created successfully!");
      e.target.reset();
      navigate("/login");
    } catch (error) {
      setRegisterError(error.message);
      setRegisterLoading(false);
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      {/* error message */}
      {registerError && (
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
          <span>{registerError}</span>
        </div>
      )}

      {/* name input */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          placeholder="Enter name"
          className="input-bordered input w-full"
        />
      </div>

      {/* email input */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          placeholder="Enter email"
          className="input-bordered input w-full"
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
            className="input-bordered input w-full"
          />
          <span
            onClick={() => setIsVisible(!isVisible)}
            className="absolute right-6 top-1/2 -translate-y-1/2 cursor-pointer text-2xl"
          >
            {isVisible ? <BsEyeFill /> : <BsEyeSlashFill />}
          </span>
        </div>
      </div>

      {/* form submit button */}
      <div className="mt-4">
        <button
          className={`btn-secondary btn-block btn ${
            user && "cursor-not-allowed"
          }`}
          type="submit"
        >
          {registerLoading && (
            <span className="loading loading-spinner text-primary" />
          )}
          <span>register</span>
        </button>
        <Toaster position="top-center" reverseOrder={true} />
      </div>
    </form>
  );
};

export default RegisterForm;
