import Button from "../elements/Button";
import CheckBox from "../elements/Checkbox";
import LabelInput from "../elements/LabelInput";
import { Link } from "react-router-dom";

const FormSignIn = () => {
  return (
    <form action="">
      <div className="mb-6">
        <LabelInput
          label="Email address"
          type="email"
          placeholder="hello@example.com"
          name="email"
        />
      </div>
      <div className="mb-6">
        <LabelInput
          label="password"
          type="password"
          placeholder="*****"
          name="password"
        />
      </div>
      <div className="mb-3">
        <CheckBox label="Keep me signed in" name="status" />
      </div>
      <Link to="/">
        <Button variant="bg-primary w-full text-white" type="submit">
          Login
        </Button>
      </Link>
    </form>
  );
};

export default FormSignIn;
