import { Link } from "react-router-dom";
import SocialLogin from "../components/SocialLogin";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div className="py-4">
      <div className="mx-auto max-w-md rounded-md border p-4 shadow-lg">
        <div>
          <h1 className="mb-4 text-center text-3xl uppercase">
            firebase auth Login
          </h1>
        </div>

        <div>
          <LoginForm />
        </div>

        <div className="divider">OR</div>

        <div>
          <SocialLogin />
        </div>

        <div className="mt-3 space-x-1 rounded-md border p-3 text-center">
          <span>New here?</span>
          <span>
            <Link className="font-bold text-orange-600" to="/register">
              Register
            </Link>
          </span>
          <span>please.</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
