import { Outlet } from "react-router-dom";
import Logo from "../components/logo";

export default function AppLayout() {
  return (
    <>
      <header className="bg-gray-800 py-5">
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between items-center">
          <div className="w-64 ml-20">
            <Logo />
          </div>
        </div>
      </header>

      <section className="max-w-screen-2xl mx-auto mt-10 p-5 ml-10">
        <Outlet />
      </section>

      <footer className="p-5">
        <p className="text-center">
          All right reserved {new Date().getFullYear()}
        </p>
      </footer>
    </>
  );
}
