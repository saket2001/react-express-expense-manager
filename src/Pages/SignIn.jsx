import React from "react";
import { Link } from "react-router-dom";
import { InputGroup } from "../Components/InputGroup";
import { MainLogo } from "../Components/MainLogo";
import { useDispatch } from "react-redux";
import { authActions } from "../Store/AuthSlice";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

export const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      let errors = {};

      if (values.email === "") errors.email = "Email Is Required";
      if (values.password === "") errors.password = "Password Is Required";

      return errors;
    },
    onSubmit: (values) => {
      const userData = {
        email: values.email,
        password: values.password,
      };

      console.log(userData);

      if (userData) handleSignIn();
    },
  });

  const handleSignIn = () => {
    dispatch(authActions.toggleLogin());
    navigate("/dashboard");
  };

  return (
    <form
      onSubmit={Formik.handleSubmit}
      className="w-full min-h-screen bg-gray-100 text-gray-800 flex flex-col p-2"
    >
      {/* logo */}
      <MainLogo />
      {/* heading */}
      <h2 className="lg:text-2xl text-xl font-medium px-2 m-1 mt-2">
        Sign In <span className="font-bold text-blue-800">MRM</span>
      </h2>
      {/* heading p */}
      <p className="text-base lg:text-lg px-2 py-1 m-1 text-gray-600">
        Welcome Back! Sign in back to access your stored data.
      </p>
      {/* google oauth button */}
      <button className="mx-2 rounded-md border-2 border-gray-800 px-3 py-2 my-2 text-base lg:text-lg flex gap-2 items-center justify-center">
        <i class="fab fa-google"></i>
        Sign In With Google
      </button>
      {/* divider */}
      <div className="flex items-center gap-2 px-2 my-2">
        <div className="bg-gray-400 w-1/2 h-1 rounded-lg"></div>
        <p className="text-center">OR</p>
        <div className="bg-gray-400 w-1/2 h-1 rounded-lg"></div>
      </div>
      {/* email input */}
      <InputGroup
        label={"Email"}
        name="email"
        onChange={Formik.handleChange}
        onBlur={Formik.handleBlur}
        isBlur={Formik.touched.email}
        error_msg={Formik.errors.email}
        value={Formik.values.name}
        placeholder={"@gmail.com"}
      />
      {/* password input */}
      <InputGroup
        label={"Password"}
        name="password"
        onChange={Formik.handleChange}
        onBlur={Formik.handleBlur}
        value={Formik.values.password}
        isBlur={Formik.touched.password}
        error_msg={Formik.errors.password}
        placeholder={"**********"}
      />

      {/* sign up button */}
      <button
        type="submit"
        className="m-1 my-3 px-4 py-2 rounded-lg bg-blue-800 text-gray-50 text-lg border-2 font-normal text-center"
      >
        Sign In
      </button>
      {/* sign in page link */}
      <p className="text-lg px-2 py-1 mx-2 my-4">
        Dont't have an account?
        <Link className="w-auto text-blue-800 underline ml-2" to="/sign-up">
          Sign Up
        </Link>
      </p>
    </form>
  );
};
