import { Link, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logo from "@/components/logo";
import NavMenu from "@/components/NavMenu";

export default function AppLayout() {
  return (
    <>
      <header className="bg-gray-800 py-5">
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between items-center">
          <div className="w-64 ml-20">
            <Link to={"/"}>
              <Logo />
            </Link>
          </div>

          <NavMenu />
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

      <ToastContainer pauseOnHover={false} pauseOnFocusLoss={false} />
    </>
  );
}
