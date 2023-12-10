import { useState } from "react";
import { useUserAuth } from "../hooks/useUserAuth";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const UpdateProfileForm = () => {
  const [updaterError, setUpdateError] = useState("");
  const [updateLoading, setUpdateLoading] = useState(false);
  const { updateUserProfile } = useUserAuth();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setUpdateError("");
    setUpdateLoading(true);
    const userName = e.target[0].value;
    const userImage = e.target[1].value;

    if (!userName || !userImage) {
      setUpdateError("input should not be empty!!");
      setUpdateLoading(false);
      return;
    }

    // create user
    try {
      await updateUserProfile(userName, userImage);
      setUpdateLoading(false);
      toast.success("Profile updated!");
      e.target.reset();
      navigate("/");
    } catch (error) {
      setUpdateError(error.message);
      setUpdateLoading(false);
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      {/* error message */}
      {updaterError && (
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
          <span>{updaterError}</span>
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

      {/* image input */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Image Url</span>
        </label>
        <input
          type="url"
          placeholder="Enter image url"
          className="input-bordered input w-full"
        />
      </div>

      {/* form submit button */}
      <div className="mt-4">
        <button className="btn-secondary btn-block btn" type="submit">
          {updateLoading ? "loading..." : "update"}
        </button>
      </div>
      <Toaster position="top-center" reverseOrder={true} />
    </form>
  );
};

export default UpdateProfileForm;
