import { SignUp } from "@clerk/clerk-react";
import React from "react";

const SignUpPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center h-full justify-center">
      <div className="mt-[-60px]">
        <SignUp path="/sign-up" signInUrl="/sign-in" />
      </div>
    </div>
  );
};

export default SignUpPage;
