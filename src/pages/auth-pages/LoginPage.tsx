import { RiUserFill } from "react-icons/ri";
import AuthCard from "../../components/auth-components/AuthCard";
import {LoginInputs} from "../../components/auth-components/Inputs";
import AuthLayout from "../../components/auth-components/AuthLayout";
const LoginPage = () => {
  return (
      <AuthLayout
        text="Don't have an account?"
        linkText="Sign up"
        linkTo="/signup"
      >
      <div className="flex min-h-screen items-center justify-center px-4">
        <AuthCard
          icon={<RiUserFill className="h-8 w-8 text-gray-500" />}
        >
          <LoginInputs />
        </AuthCard>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;