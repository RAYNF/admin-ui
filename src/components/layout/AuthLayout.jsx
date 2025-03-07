import { Link } from "react-router-dom";
import Logo from "../elements/logo";
import { useContext } from "react";
import { BaseThemeContext } from "../../context/baseThemeContext";
import { NotifContext } from "../../context/notifContext";
import SimpleBackdrop from "../elements/Backdrop";
import CustomizedSnackbars from "../elements/SnackBar";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import * as motion from "motion/react-client";
import { useState } from "react";

const AuthLayout = (props) => {
  const { children, type } = props;
  const { msg, setMsg, open, setOpen, isLoading, setIsLoading } = useContext(NotifContext);
  const { baseTheme, toggleTheme } = useContext(BaseThemeContext);

  return (
    <div
      className={`flex justify-center min-h-screen items-center ${baseTheme.bgcolor}`}
    >
      {isLoading && (
        <SimpleBackdrop isLoading={isLoading} setIsLoading={setIsLoading} />
      )}
      {msg && (
        <CustomizedSnackbars
          severity={msg.severity}
          message={msg.desc}
          open={open}
          setOpen={setOpen}
        />
      )}
      {/* container start */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
        className="w-full max-w-sm"
      >
        {/* logo start */}
        <Logo />
        {/* logo end */}
        {/* text-forgot start*/}
        {type == "forgot" && (
          <>
            <div className="flex flex-col items-center mt-4">
              <h1 className="text-lg font-bold ">Forgot Password?</h1>
            </div>
            <div className="flex flex-col items-center space-y-1">
              <p className="text-gray-02 text-sm font-medium mt-2">
                Enter your email address to get the
              </p>
              <p className="text-gray-02 text-sm font-medium ">
                password reset link
              </p>
            </div>
          </>
        )}
        {/* text-forgot end */}

        {/* form start */}
        {type != "forgot" ? (
          <div className="mt-16">{children}</div>
        ) : (
          <div className="mt-6">{children}</div>
        )}
        {/* form end */}

        {type != "forgot" && (
          <>
            {/* teks start */}
            <div className="my-9 px-7 flex justify-center text-xs text-gray-03 items-center flex-col static">
              <div className="border border-gray-05 w-full"></div>
              <div className="px-2 bg-special-mainBg absolute">
                or sign in with
              </div>
            </div>
            {/* teks end */}

            {/* sign in with google start */}
            <div className="mb-8">
              <button
                className="h-12 flex items-center justify-center rounded-md text-sm w-full bg-gray-05 text-gray-01"
                type="button"
              >
                <svg
                  className="h-6 w-6 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="800px"
                  height="800px"
                  viewBox="-0.5 0 48 48"
                  version="1.1"
                >
                  {" "}
                  <title>Google-color</title> <desc>Created with Sketch.</desc>{" "}
                  <defs> </defs>{" "}
                  <g
                    id="Icons"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    {" "}
                    <g
                      id="Color-"
                      transform="translate(-401.000000, -860.000000)"
                    >
                      {" "}
                      <g
                        id="Google"
                        transform="translate(401.000000, 860.000000)"
                      >
                        {" "}
                        <path
                          d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                          id="Fill-1"
                          fill="#FBBC05"
                        >
                          {" "}
                        </path>{" "}
                        <path
                          d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                          id="Fill-2"
                          fill="#EB4335"
                        >
                          {" "}
                        </path>{" "}
                        <path
                          d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                          id="Fill-3"
                          fill="#34A853"
                        >
                          {" "}
                        </path>{" "}
                        <path
                          d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                          id="Fill-4"
                          fill="#4285F4"
                        >
                          {" "}
                        </path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>{" "}
                </svg>
                <span>Continue with Google</span>
              </button>
            </div>
            {/* sign in with google end */}
          </>
        )}

        {/* link start */}
        <div className="flex justify-center">
          {type == "sign up" ? (
            <>
              <span className="text-sm text-gray-03">
                Already have an account?&nbsp;
              </span>
              <Link to="/login" className="text-primary text-sm font-bold">
                Sign In Here
              </Link>
            </>
          ) : type == "sign in" ? (
            <div className="flex flex-col items-center space-y-2">
              <Link to="/register" className="text-primary text-sm font-bold">
                Create an acount
              </Link>
              <Link className="text-xs text-gray-03 font-bold" to="/forgot">
                Forgot Password
              </Link>
            </div>
          ) : (
            <>
              <Link to="/login" className="text-gray-02 text-sm font-bold mt-5">
                Back to Login
              </Link>
            </>
          )}
        </div>
        {/* link end */}
        {/* button theme start */}
        <button
          className={`h-12 flex items-center justify-center rounded-md text-sm w-auto bg-gray-05 text-gray-01 mt-5 mx-auto p-5`}
          type="submit"
          onClick={toggleTheme}
        >
          <DarkModeIcon />
        </button>
        {/* button theme finish */}
      </motion.div>
      {/* container end */}
    </div>
  );
};

export default AuthLayout;
