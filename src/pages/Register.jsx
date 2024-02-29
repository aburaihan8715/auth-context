import { Link, Navigate } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";
import SocialLogin from "../components/SocialLogin";
import { useUserAuth } from "../hooks/useUserAuth";

const Register = () => {
  const { user } = useUserAuth();

  if (user) return <Navigate to="/" replace={true} />;
  return (
    <div className="py-4">
      <div className="max-w-md p-4 mx-auto border rounded-md shadow-lg">
        <div>
          <h1 className="mb-4 text-3xl text-center uppercase">
            firebase auth Register
          </h1>
        </div>

        <div>
          <RegisterForm />
        </div>

        <div className="divider">OR</div>

        <div>
          <SocialLogin />
        </div>

        <div className="p-3 mt-3 space-x-1 text-center border rounded-md">
          <span>Already user?</span>
          <span>
            <Link className="font-bold text-orange-600" to="/login">
              Login
            </Link>
          </span>
          <span>here.</span>
        </div>
      </div>
    </div>
  );
};

export default Register;
