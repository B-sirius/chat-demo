import { Link, Outlet } from "react-router";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { useEffect } from "react";

// Import Clerk Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const title: string = import.meta.env.VITE_APP_TITLE || "LAMA AI";

const RootLayout = () => {
  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <div className="bg-black text-white h-screen flex flex-col">
        <header className="h-[60px] flex items-center justify-between bg-gray-800 px-4 shrink-0">
          <Link to="/">
            <span>LAMA AI</span>
          </Link>
          <div>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </header>
        <main className="grow">
          <Outlet />
        </main>
      </div>
    </ClerkProvider>
  );
};

export default RootLayout;
