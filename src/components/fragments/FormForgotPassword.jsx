import LabelInput from "../elements/LabelInput";
import Button from "../elements/Button";

const FormForgotPassword = () => {
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
      <Button variant="bg-primary w-full text-white" type="submit">
        Password Reset
      </Button>
    </form>
  );
};

export default FormForgotPassword;
