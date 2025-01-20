import { isAxiosError } from "axios";
import api from "@/lib/axios";
import { NoteFormData, Project, Task } from "../types";

type NoteAPIType = {
  formData: NoteFormData;
  projectId: Project["_id"];
  taskId: Task["_id"];
};

export async function createNote({
  projectId,
  taskId,
  formData,
}: Pick<NoteAPIType, "projectId" | "taskId" | "formData">) {
  try {
    const url = `/projects/${projectId}/tasks/${taskId}/notes`;
    const { data } = await api.post<string>(url, formData);
    return data;
    return;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}
