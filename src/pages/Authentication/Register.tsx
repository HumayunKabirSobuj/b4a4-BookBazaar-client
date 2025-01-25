import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const name = form.name.value;
  //   const email = form.email.value;
  //   const password = form.password.value;

  //   console.log({ name, email, password });
  // };

  const { handleSubmit, register } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1B1B31] via-[#2B1E36] to-[#1B1B31] px-4">
      <div className="max-w-md w-full text-white rounded-lg shadow-lg p-8 md:p-12">
        <h1 className="text-3xl font-bold text-center mb-6">Get Started</h1>
        <p className="text-center text-gray-400 mb-8">
          Unlock access to a wide range of books with just a few details!
        </p>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                {...register("name")}
                type="text"
                // name="name"
                placeholder="Enter your name..."
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                {...register("email")}
                type="email"
                // name="email"
                placeholder="Enter your email..."
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <div className="relative">
                <input
                  {...register("password")}
                  type={showPassword ? "text" : "password"}
                  // name="password"
                  placeholder="Enter your password..."
                  className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? (
                    <FaEyeSlash className="w-5 h-5" />
                  ) : (
                    <FaEye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-sm text-white font-medium border border-[#C16EFD] rounded-lg bg-[linear-gradient(105deg,_#6384FC_4.1%,_#C16EFD_54.8%,_#6384FC_92.38%)] flex items-center justify-center"
          >
            <p>Register</p>
          </button>
        </form>
        <p className="text-center text-gray-400 mt-6">
          Already have an account?{" "}
          <Link to={"/login"} className="text-blue-500 hover:underline">
           Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
