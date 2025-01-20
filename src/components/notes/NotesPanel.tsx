import { Task } from "@/types/index";
import AddNoteForm from "./AddNoteForm";
import NoteDetail from "./NoteDetail";

type NotePanelProps = {
  notes: Task["notes"];
};

export default function NotesPanel({ notes }: NotePanelProps) {
  return (
    <>
      <AddNoteForm />

      <div className="divide-y divide-gray-100 mt-10">
        {notes.length > 0 ? (
          <>
            <p className="font-bold text-2xl text-slate-600 my-5">Notes:</p>

            {notes.map((note) => (
              <NoteDetail />
            ))}
          </>
        ) : (
          <p className="text-gray-500 text-center pt-3">No Notes</p>
        )}
      </div>
    </>
  );
}
