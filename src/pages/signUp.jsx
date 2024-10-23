import FormSignUp from "../components/fragments/FormSignUp";
import AuthLayout from "../components/layout/AuthLayout";

const SignUpPage = () => {
  return (
    <AuthLayout type="sign up">
      <FormSignUp />
    </AuthLayout>
  );
};

export default SignUpPage;
