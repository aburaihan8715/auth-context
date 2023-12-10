import { useState } from "react";
import { Link } from "react-router-dom";
import { useUserAuth } from "../hooks/useUserAuth";
import toast, { Toaster } from "react-hot-toast";

const ForgetPasswordForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { passwordResetEmail } = useUserAuth();
  const passwordResetHandler = async (e) => {
    e.preventDefault();
    setError("");
    const email = e.target[0].value;
    if (!email) return setError("input valid email!!");

    try {
      setLoading(true);
      await passwordResetEmail(email);
      setLoading(false);
      setError("");
      toast.success("Please check email!", { duration: 5000 });
      e.target.reset();
    } catch (error) {
      setError(error.message);
      setLoading(false);
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

      {/* form for input OTP */}
      <form onSubmit={passwordResetHandler}>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Enter email</span>
          </label>
          <input
            type="email"
            placeholder="Enter email"
            className="input-bordered input w-full"
          />
        </div>

        {/*action buttons */}
        <div className="mt-2 flex justify-end gap-2">
          <Link className="btn-error btn" to="/login">
            cancel
          </Link>

          <div className="inline-block">
            <button className="btn-secondary btn">
              {loading && (
                <span className="loading loading-spinner text-primary" />
              )}
              <span>submit</span>
            </button>
            <Toaster position="top-center" reverseOrder={false} />
          </div>
        </div>
      </form>
    </>
  );
};

export default ForgetPasswordForm;
