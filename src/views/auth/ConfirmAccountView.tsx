import { Link } from "react-router-dom";

export default function ConfirmAccountView() {
  return (
    <>
      <h1 className="text-5xl font-black text-white">Confirm your account</h1>
      <p className="text-2xl font-light text-white mt-5">
        Enter the code you received {""}
        <span className=" text-fuchsia-500 font-bold"> by Email</span>
      </p>
      <form className="space-y-8 p-10 bg-white mt-10">
        <label className="font-normal text-2xl text-center block">
          6 digit code
        </label>
      </form>

      <nav className="mt-10 flex flex-col space-y-4">
        <Link
          to="/auth/new-code"
          className="text-center text-gray-300 font-normal"
        >
          Request a new Code
        </Link>
      </nav>
    </>
  );
}
