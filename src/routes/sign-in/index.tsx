import { SignIn } from "@clerk/clerk-react";
import React from "react";

const SignInPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center h-full justify-center">
      <div className="mt-[-60px]">
        <SignIn path="/sign-in" signUpUrl="/sign-up" />
      </div>
    </div>
  );
};

export default SignInPage;
