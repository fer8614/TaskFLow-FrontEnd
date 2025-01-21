import { useAuth } from "@/hooks/useAuth";
import { Note } from "@/types/index";
import { formatDate } from "@/utils/utils";
import { useMemo } from "react";

type NoteDetailProps = {
  note: Note;
};

export default function NoteDetail({ note }: NoteDetailProps) {
  const { data, isLoading } = useAuth();
  const canDelete = useMemo(() => data?._id === note.createdBy._id, [data]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="p-1 flex justify-between items-center">
      <div>
        <p>
          {note.content}{" "}
          <span className="font-bold">by: {note.createdBy.name}</span>
        </p>
        <p className="text-xs text-slate-500">{formatDate(note.createdAt)}</p>
      </div>
      {canDelete && (
        <button className="bg-red-400 hover:bg-red-500 p-2 text-xs text-white font-bold cursor-pointer transition-colors">
          Delete
        </button>
      )}
    </div>
  );
}
