import { useForm } from "react-hook-form";
import { useState } from "react";
import { UserLoginForm } from "@/types/index";
import { useMutation } from "@tanstack/react-query";
import ErrorMessage from "@/components/ErrorMessage";
import { Link, useNavigate } from "react-router-dom";
import { authenticateUser } from "@/api/AuthAPI";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function LoginView() {
  const initialValues: UserLoginForm = {
    email: "",
    password: "",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: authenticateUser,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: () => {
      navigate("/");
    },
  });

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);

  const handleLogin = (formData: UserLoginForm) => mutate(formData);

  return (
    <>
      <h1 className="text-5xl font-black text-white">login</h1>
      <p className="text-2xl font-light text-white mt-5">
        Start planning your projects {""}
        <span className=" text-fuchsia-500 font-bold">by logging in now</span>
      </p>
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="space-y-8 mt-10 p-10 bg-white"
        noValidate
      >
        <div className="flex flex-col gap-5">
          <label className="font-normal text-2xl">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Email to register"
            className="w-full p-3  border-gray-300 border"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "E-mail not valid",
              },
            })}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </div>

        <div className="flex flex-col gap-5">
          <label className="font-normal text-2xl">Password</label>
          <div className="relative">
            <input
              type={showCurrentPassword ? "text" : "password"}
              placeholder="Password to register"
              className="w-full p-3  border-gray-300 border"
              {...register("password", {
                required: "Password is required",
              })}
            />
            <button
              type="button"
              onClick={() => setShowCurrentPassword(!showCurrentPassword)}
              className="absolute inset-y-0 right-0 p-3"
            >
              <FontAwesomeIcon
                icon={showCurrentPassword ? faEyeSlash : faEye}
              />
            </button>
          </div>
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </div>

        <input
          type="submit"
          value="Login"
          className="bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-3  text-white font-black  text-xl cursor-pointer"
        />
      </form>

      <nav className="mt-10 flex flex-col space-y-4">
        <Link
          to={"/auth/register"}
          className="text-center text-gray-300 font-normal"
        >
          Don't have an account? Create one
        </Link>

        <Link
          to={"/auth/forgot-password"}
          className="text-center text-gray-300 font-normal"
        >
          Forgot your password? Reset
        </Link>
      </nav>
    </>
  );
}
