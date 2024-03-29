import { useState } from "react";
import { useUserAuth } from "../hooks/useUserAuth";
import { Link, useNavigate } from "react-router-dom";

const SocialLogin = ({ from }) => {
  const navigate = useNavigate();
  const {
    authenticationUsingGoogle,
    authenticationUsingGithub,
    authenticationUsingFacebook,
    user,
  } = useUserAuth();
  const [socialLoginError, setSocialLoginError] = useState("");
  // google
  const loginWithGoogleHandler = async () => {
    setSocialLoginError("");
    try {
      await authenticationUsingGoogle();
      setSocialLoginError("");
      navigate(from);
    } catch (error) {
      setSocialLoginError(error.message);
      console.error(error);
    }
  };

  // github
  const loginWithGithubHandler = async () => {
    setSocialLoginError("");
    try {
      await authenticationUsingGithub();
      setSocialLoginError("");
      navigate(from);
    } catch (error) {
      setSocialLoginError(error.message);
      console.error(error);
    }
  };

  // facebook
  const loginWithFacebookHandler = async () => {
    setSocialLoginError("");
    try {
      await authenticationUsingFacebook();
      setSocialLoginError("");
      navigate(from);
    } catch (error) {
      setSocialLoginError(error.message);
      console.error(error);
    }
  };

  return (
    <div className="space-y-4">
      {/* google button */}
      <div>
        <button
          onClick={loginWithGoogleHandler}
          className={`flex w-full items-center rounded-md border border-[#06b6d4] bg-[#06b6d4] ${
            user && "cursor-not-allowed"
          }`}
        >
          <span className="inline-block p-2 bg-white rounded-md">
            <img
              className="rounded-full"
              src="/google.png"
              alt="google"
              width={30}
              height={30}
            />
          </span>
          <span className="flex items-center self-stretch justify-center flex-1 font-semibold text-white uppercase">
            login with google
          </span>
        </button>
      </div>

      {/* github button */}
      <div>
        <button
          onClick={loginWithGithubHandler}
          className={`flex w-full items-center gap-1 rounded-md border border-[#06b6d4] bg-[#06b6d4] ${
            user && "cursor-not-allowed"
          }`}
        >
          <span className="inline-block p-2 bg-white rounded-md">
            <img
              className="rounded-full"
              src="/github.png"
              alt="github"
              width={30}
              height={30}
            />
          </span>
          <span className="flex items-center self-stretch justify-center flex-1 font-semibold text-white uppercase">
            login with github
          </span>
        </button>
      </div>

      {/* facebook button */}
      <div>
        <button
          onClick={loginWithFacebookHandler}
          className={`flex w-full items-center gap-1 rounded-md border border-[#06b6d4] bg-[#06b6d4] ${
            user && "cursor-not-allowed"
          }`}
        >
          <span className="inline-block p-2 bg-white rounded-md">
            <img
              className="rounded-full"
              src="/facebook.png"
              alt="github"
              width={30}
              height={30}
            />
          </span>
          <span className="flex items-center self-stretch justify-center flex-1 font-semibold text-white uppercase">
            login with facebook
          </span>
        </button>
      </div>

      {/* phone button */}
      <div>
        <Link to="/phone-input">
          <button className="flex w-full items-center gap-1 rounded-md border border-[#06b6d4] bg-[#06b6d4]">
            <span className="inline-block p-2 bg-white rounded-md">
              <img
                className="rounded-full"
                src="/call.jpg"
                alt="github"
                width={30}
                height={30}
              />
            </span>
            <span className="flex items-center self-stretch justify-center flex-1 font-semibold text-white uppercase">
              login with phone
            </span>
          </button>
        </Link>
      </div>

      {/* gmail button */}
      <div>
        <Link to="/email-link">
          <button className="flex w-full items-center gap-1 rounded-md border border-[#06b6d4] bg-[#06b6d4]">
            <span className="inline-block p-2 bg-white rounded-md">
              <img
                className="rounded-full"
                src="/gmail.png"
                alt="github"
                width={30}
                height={30}
              />
            </span>
            <span className="flex items-center self-stretch justify-center flex-1 font-semibold text-white uppercase">
              login with email link
            </span>
          </button>
        </Link>
      </div>

      {/* error message */}
      {socialLoginError && (
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
          <span>{socialLoginError}</span>
        </div>
      )}
    </div>
  );
};

export default SocialLogin;
