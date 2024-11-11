import { useLocation, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getTaskById } from "@/api/TaskAPI";
import EditTaskModal from "./EditTaskModal";

export default function EditTaskData() {
  const params = useParams();
  const projectId = params.projectId!;

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const editTaskId = queryParams.get("editTask")!;

  const { data } = useQuery({
    queryKey: ["task", editTaskId],
    queryFn: () => getTaskById({ projectId, taskId: editTaskId }),
    enabled: !!editTaskId,
  });

  if (data) return <EditTaskModal data={data} />;
}
