import { Note } from "@/types/index";
import { formatDate } from "@/utils/utils";

type NoteDetailProps = {
  note: Note;
};

export default function NoteDetail({ note }: NoteDetailProps) {
  return (
    <div className="p-1 flex justify-between items-center">
      <div>
        <p>
          {note.content}{" "}
          <span className="font-bold">by: {note.createdBy.name}</span>
        </p>
        <p className="text-xs text-slate-500">{formatDate(note.createdAt)}</p>
      </div>
    </div>
  );
}
