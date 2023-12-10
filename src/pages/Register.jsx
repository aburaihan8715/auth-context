import { Link } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";
import SocialLogin from "../components/SocialLogin";

const Register = () => {
  return (
    <div className="py-4">
      <div className="mx-auto max-w-md rounded-md border p-4 shadow-lg">
        <div>
          <h1 className="mb-4 text-center text-3xl uppercase">
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

        <div className="mt-3 space-x-1 rounded-md border p-3 text-center">
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
