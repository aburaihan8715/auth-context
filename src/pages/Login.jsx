import { Link, Navigate, useLocation } from "react-router-dom";
import SocialLogin from "../components/SocialLogin";
import LoginForm from "../components/LoginForm";
import { useUserAuth } from "../hooks/useUserAuth";

const Login = () => {
  const { user } = useUserAuth();
  const location = useLocation();

  if (user) return <Navigate to="/" replace={true} />;

  const from = location.state?.from?.pathname || "/";

  return (
    <div className="py-4">
      <div className="max-w-md p-4 mx-auto border rounded-md shadow-lg">
        <div>
          <h1 className="mb-4 text-3xl text-center uppercase">
            firebase auth Login
          </h1>
        </div>

        <div>
          <LoginForm from={from} />
        </div>

        <div className="divider">OR</div>

        <div>
          <SocialLogin from={from} />
        </div>

        <div className="p-3 mt-3 space-x-1 text-center border rounded-md">
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
