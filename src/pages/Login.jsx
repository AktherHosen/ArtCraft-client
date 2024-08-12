import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import loginImg from "../assets/login.jpg";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
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
      <div className="flex flex-col-reverse md:flex-row gap-4 items-center justify-center py-4">
        <div className="card bg-base-100 w-full h-[450px] lg:max-w-lg flex justify-center  shadow-md">
          <div className="card-body">
            <div className="text-center flex items-center flex-col gap-2 ">
              <h2 className="font-semibold text-2xl">
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
              <p>__________or__________</p>
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
        </div>
        <div className="lg:max-w-lg">
          <img src={loginImg} className="h-[500px] w-full" alt="" />
        </div>
      </div>
    </>
  );
};

export default Login;
