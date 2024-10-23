import FormForgotPassword from "../components/fragments/FormForgotPassword";
import AuthLayout from "../components/layout/AuthLayout";

const ForgotPassword = () => {
  return (
    <AuthLayout type="forgot">
      <FormForgotPassword />
    </AuthLayout>
  );
};

export default ForgotPassword;
