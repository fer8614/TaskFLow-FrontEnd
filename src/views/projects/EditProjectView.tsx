import { useLinkClickHandler, useParams } from "react-router-dom";

export default function EditProjectView() {
  const params = useParams();
  const projectId = params.projectId!;
  console.log("projectId", projectId);

  return (
    <div>
      <h1>Edit Project</h1>
      <p>Project ID: {`${params.projectId}`}</p>
    </div>
  );
}
