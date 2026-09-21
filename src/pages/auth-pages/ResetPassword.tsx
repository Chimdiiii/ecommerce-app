import { RiDoorLockFill } from "react-icons/ri";
import AuthCard from "../../components/auth-components/AuthCard";
import { ResetInputs } from "../../components/auth-components/Inputs";
import Layout from "../../components/auth-components/AuthLayout";

const ResetPasswordPage = () => {
  return (
      <Layout
        text="Remember your password?"
        linkText="Login"
        linkTo="/login"
      >

      <div className="flex min-h-screen items-center justify-center px-4">
        <AuthCard
          icon={<RiDoorLockFill className="h-5 w-5 text-gray-500" />}
        >
          <ResetInputs />
        </AuthCard>
      </div>
    </Layout>
  );
};

export default ResetPasswordPage;