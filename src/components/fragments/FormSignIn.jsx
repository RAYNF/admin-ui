import Button from "../elements/Button";
import CheckBox from "../elements/Checkbox";
import LabelInput from "../elements/LabelInput";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useContext } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { NotifContext } from "../../context/notifContext";

const FormSignIn = () => {
  const { setMsg, setOpen, setIsLoading } = useContext(NotifContext);
  const { setIsLoggedIn, setName } = useContext(AuthContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });
  const onErrors = (errors) => console.error(errors);

  const onFormSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://jwt-auth-eight-neon.vercel.app/login",
        {
          email: data.email,
          password: data.password,
        }
      );
      // console.log(response);
      setIsLoading(false);
      setOpen(true);
      setMsg({ severity: "success", desc: "Login Success" });

      setIsLoggedIn(true);
      localStorage.setItem("refreshToken", response.data.refreshToken);

      const decode = jwtDecode(response.data.refreshToken);
      localStorage.setItem("user",decode.name)
      setName(decode.name);

      navigate("/");
    } catch (error) {
      setIsLoading(false);
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
        variant={`${
          !isValid ? "bg-gray-05" : "bg-primary zoom-in"
        } w-full text-white`}
        type="submit"
        disabled={!isValid ? "disabled" : ""}
      >
        Login
      </Button>
      {/* </Link> */}
      {/* <div className="mt-3 text-center text-red-500">{msg}</div> */}

      {/* {msg && (
        <CustomizedSnackbars
          severity={msg.severity}
          message={msg.desc}
          open={open}
          setOpen={setOpen}
        />
      )} */}
    </form>
  );
};

export default FormSignIn;
