import Button from "../elements/Button";
import CheckBox from "../elements/Checkbox";
import LabelInput from "../elements/LabelInput";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useContext } from "react";
import CustomizedSnackbars from "../elements/SnackBar";
import { jwtDecode } from "jwt-decode";
import { AuthContext } from "../../context/authContext";

const FormSignIn = () => {
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");
  const [open, setOpen] = useState(true);
  const { setIsLoggedIn, setName } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });
  const onErrors = (errors) => console.error(errors);

  const onFormSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://jwt-auth-eight-neon.vercel.app/login",
        {
          email: data.email,
          password: data.password,
        }
      );
      // console.log(response);
      const decode = jwtDecode(response.data.refreshToken);
      console.log(decode);

      setOpen(true);
      setMsg({ severity: "success", desc: "Login succes" });
      localStorage.setItem("refreshToken", response.data.refreshToken);

      setIsLoggedIn(true);
      setName(decode.name);

      navigate("/");
    } catch (error) {
      if (error.response) {
        // console.log(error.response);
        setOpen(true);
        setMsg({ severity: "error", desc: error.response.data.msg });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit, onErrors)}>
      <div className="mb-6">
        <LabelInput
          label="Email address"
          type="email"
          placeholder="hello@example.com"
          name="email"
          register={{
            ...register("email", {
              required: "Email address is required",
              pattern: {
                // value: /^[A-Z0-9._%+-]+@[A-Z0-9,-]+\.[A-Z]{2,}$/i,
                message: "Invalid email addredss format",
              },
            }),
          }}
        />
        {errors?.email && (
          <div className="text-center text-red-500">{errors.email.message}</div>
        )}
      </div>
      <div className="mb-6">
        <LabelInput
          label="password"
          type="password"
          placeholder="*****"
          name="password"
          register={{
            ...register("password", { required: "password is required" }),
          }}
        />
        {errors?.password && (
          <div className="text-center text-red-500">
            {errors.password.message}
          </div>
        )}
      </div>
      <div className="mb-3">
        <CheckBox label="Keep me signed in" name="status" />
      </div>
      {/* <Link to="/"> */}
      <Button
        variant={
          !isValid
            ? "bg-gray-05 w-full text-white"
            : "bg-primary w-full text-white"
        }
        type="submit"
        disabled={!isValid ? "disabled" : ""}
      >
        Login
      </Button>
      {/* </Link> */}
      {/* <div className="mt-3 text-center text-red-500">{msg}</div> */}
      {msg && (
        <CustomizedSnackbars
          severity={msg.severity}
          message={msg.desc}
          open={open}
          setOpen={setOpen}
        />
      )}
    </form>
  );
};

export default FormSignIn;
