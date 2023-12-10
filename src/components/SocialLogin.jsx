import { useState } from "react";
import { useUserAuth } from "../hooks/useUserAuth";
import { Link } from "react-router-dom";

const SocialLogin = () => {
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
          <span className="inline-block  rounded-md bg-white p-2">
            <img
              className="rounded-full"
              src="/google.png"
              alt="google"
              width={30}
              height={30}
            />
          </span>
          <span className="flex flex-1 items-center justify-center self-stretch font-semibold uppercase text-white">
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
          <span className="inline-block rounded-md bg-white p-2">
            <img
              className="rounded-full"
              src="/github.png"
              alt="github"
              width={30}
              height={30}
            />
          </span>
          <span className="flex flex-1 items-center justify-center self-stretch font-semibold uppercase text-white">
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
          <span className="inline-block rounded-md bg-white p-2">
            <img
              className="rounded-full"
              src="/facebook.png"
              alt="github"
              width={30}
              height={30}
            />
          </span>
          <span className="flex flex-1 items-center justify-center self-stretch  font-semibold uppercase text-white">
            login with facebook
          </span>
        </button>
      </div>

      {/* phone button */}
      <div>
        <Link to="/phone-input">
          <button className="flex w-full items-center gap-1 rounded-md border border-[#06b6d4] bg-[#06b6d4]">
            <span className="inline-block rounded-md bg-white p-2">
              <img
                className="rounded-full"
                src="/call.jpg"
                alt="github"
                width={30}
                height={30}
              />
            </span>
            <span className="flex flex-1 items-center justify-center self-stretch font-semibold uppercase text-white">
              login with phone
            </span>
          </button>
        </Link>
      </div>

      {/* gmail button */}
      <div>
        <Link to="/email-link">
          <button className="flex w-full items-center gap-1 rounded-md border border-[#06b6d4] bg-[#06b6d4]">
            <span className="inline-block rounded-md bg-white p-2">
              <img
                className="rounded-full"
                src="/gmail.png"
                alt="github"
                width={30}
                height={30}
              />
            </span>
            <span className="flex flex-1 items-center justify-center self-stretch font-semibold uppercase text-white">
              login with email link
            </span>
          </button>
        </Link>
      </div>

      {/* error message */}
      {socialLoginError && (
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
          <span>{socialLoginError}</span>
        </div>
      )}
    </div>
  );
};

export default SocialLogin;
