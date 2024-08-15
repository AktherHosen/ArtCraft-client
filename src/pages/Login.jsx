import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import Lottie from "lottie-react";
import loginAni from "../../public/login.json";
const Login = () => {
  const { loggedInUser, googleSignIn, githubSignIn } = useAuth() || {};
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loggedInUser(email, password)
      .then((res) => {
        toast.success("User logged in successfully!");
        e.target.reset();
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        toast.success("User logged in successfully!");
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  const handleGithubSignIn = () => {
    githubSignIn()
      .then((res) => {
        toast.success("User logged in successfully!");
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  return (
    <>
      <div className="h-full md:h-[550px]">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center">
          <div className="w-full md:w-1/2 lg:max-w-lg  border rounded-md px-4 py-6">
            <div className="text-center flex items-center flex-col gap-2 ">
              <h2 className="font-semibold text-2xl text-textsecondary">
                You must sign in to join
              </h2>
              <button
                onClick={handleGoogleSignIn}
                className="btn btn-outline w-fit btn-sm"
              >
                <FaGoogle /> Sign in with Google
              </button>
              <button
                onClick={handleGithubSignIn}
                className="btn btn-outline  w-fit btn-sm"
              >
                <FaGithub /> Sign in with GitHub
              </button>
              <p>___________________or___________________</p>
            </div>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                  name="password"
                />
              </div>
              <div className="form-control mt-6">
                <button className=" bg-bgprimary text-white font-bold p-3 rounded-md">
                  Login
                </button>
              </div>
            </form>
            <div className="flex justify-between my-2">
              <h3>Don't have an account? </h3>
              <Link to="/register" className="font-semibold hover:underline">
                Register
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 ">
            <Lottie
              animationData={loginAni}
              className="h-full md:h-[600px] w-full"
              loop={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
