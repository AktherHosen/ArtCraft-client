import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import Lottie from "lottie-react";
import registrationAni from "../../public/registrationAni.json";

const Register = () => {
  const { createUser } = useAuth();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    if (password.length < 6) {
      toast.error("Your password must contains at least 6 character");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error("Your password must contain at least one uppercase letter");
      return;
    }
    if (!/[a-z]/.test(password)) {
      toast.error("Your password must contain at least one lowercase letter");
      return;
    }
    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        updateProfile(res.user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => toast.success("profile updated"))
          .catch((error) => toast.error(error));

        e.target.reset();
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  return (
    <div>
      <div className="h-full md:h-[550px] flex justify-center items-center">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="w-full md:w-1/2 ">
            <Lottie
              animationData={registrationAni}
              className="h-full md:h-[500px] w-full"
              loop={true}
            />
          </div>
          <div className="w-full md:w-1/2 lg:max-w-lg  border rounded-md px-4 py-6">
            <div className="flex flex-col justify-center items-center mb-2">
              <h1 className="text-textsecondary font-semibold text-2xl">
                Register
              </h1>
              <p className="italic">Enter your information to register</p>
            </div>
            <form onSubmit={handleRegister} className="w-full">
              <div className="flex gap-2">
                <div className="w-1/2">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="input input-bordered w-full"
                    name="name"
                  />
                </div>
                <div className="w-1/2">
                  <label className="label">
                    <span className="label-text">PhotoURL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter photo url"
                    className="input input-bordered w-full"
                    name="photo"
                  />
                </div>
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                  name="email"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="input input-bordered w-full"
                  name="password"
                />
              </div>
              <div className="form-control mt-6">
                <button className=" bg-bgprimary text-white font-bold p-3 rounded-md">
                  Register
                </button>
              </div>
            </form>
            <div className="flex justify-between my-2">
              <h3>Already have an account? </h3>
              <Link to="/login" className="font-semibold hover:underline">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
