import { RiMailCheckFill } from "react-icons/ri";
import AuthCard from "../../components/auth-components/AuthCard";
import { VerifyInputs } from "../../components/auth-components/Inputs";
import AuthLayout from "../../components/auth-components/AuthLayout";

const EmailVerificationPage = () => {
  return (
      <AuthLayout
        text="Back to login?"
        linkText="Login"
        linkTo="/login"
      >

      <div className="flex min-h-screen items-center justify-center px-4">
        <AuthCard
          icon={<RiMailCheckFill className="h-8 w-8 text-gray-500" />}
        >
          <VerifyInputs />
        </AuthCard>
      </div>
    </AuthLayout>
  );
};

export default EmailVerificationPage;