import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { TaskFormData } from "@/types/index";
import ErrorMessage from "../ErrorMessage";

type TaskFormProps = {
  errors: FieldErrors<TaskFormData>;
  register: UseFormRegister<TaskFormData>;
};

export default function TaskForm({ errors, register }: TaskFormProps) {
  return (
    <>
      <div className="flex flex-col gap-5">
        <label className="font-normal text-2xl" htmlFor="name">
          Task Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Task Name"
          className="w-full p-3  border-gray-300 border"
          {...register("name", {
            required: "Task name is required",
          })}
        />
        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
      </div>

      <div className="flex flex-col gap-5">
        <label className="font-normal text-2xl" htmlFor="description">
          Task Description
        </label>
        <textarea
          id="description"
          placeholder="Task Description"
          className="w-full p-3  border-gray-300 border"
          {...register("description", {
            required: "Task description is required",
          })}
        />
        {errors.description && (
          <ErrorMessage>{errors.description.message}</ErrorMessage>
        )}
      </div>
    </>
  );
}
