import { useLocation } from "react-router-dom";

export default function EditTaskData() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const editTaskId = queryParams.get("editTask");
  console.log(editTaskId);
  return <div>EditTaskData</div>;
}
