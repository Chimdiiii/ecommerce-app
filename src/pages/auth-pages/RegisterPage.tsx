import { RiUserAddFill } from "react-icons/ri";
import AuthCard from "../../components/auth-components/AuthCard";
import NewInputs from "../../components/auth-components/Inputs";
import AuthLayout from "../../components/auth-components/AuthLayout";

const RegisterPage = () => {
  return (
      <AuthLayout
        text="Already have an account?"
        linkText="Login"
        linkTo="/login"
      >
      <div className="flex min-h-screen items-center justify-center px-4">
        <AuthCard
          icon={<RiUserAddFill  className="h-8 w-8 text-gray-500" />}
        >
          <NewInputs />
        </AuthCard>
      </div>
    </AuthLayout>
  );
};

export default RegisterPage;