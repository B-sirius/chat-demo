import { Link, Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div className="bg-black text-white h-screen flex flex-col">
      <header className="h-[60px] flex items-center bg-gray-800 px-4 shrink-0">
        <Link to="/">
          <span>LAMA AI</span>
        </Link>
      </header>
      <main className="grow">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
