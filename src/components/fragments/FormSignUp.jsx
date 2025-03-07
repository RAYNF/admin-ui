import Button from "../elements/Button";
import LabelInput from "../elements/LabelInput";

const FormSignUp = () => {
  return (
    <form action="">
      <div className="mb-6">
        <LabelInput
          label="Name"
          type="text"
          placeholder="John Doe"
          name="name"
        />
      </div>
      <div className="mb-6">
        <LabelInput
          label="Email Address"
          type="email"
          placeholder="hello@example.com"
          name="email"
        />
      </div>
      <div className="mb-6">
        <LabelInput
          label="Password"
          type="password"
          placeholder="******"
          name="password"
        />
      </div>
      <Button variant="bg-primary w-full text-white" type="submit">
        Sign Up
      </Button>
    </form>
  );
};

export default FormSignUp;
