export default function AddNoteForm() {
  return (
    <form onSubmit={() => {}} className="space-y-3" noValidate>
      <div>
        <label className="font-bold" htmlFor="content">
          Create Note
        </label>
        <input
          id="content"
          type="text"
          placeholder="Content of the note"
          className="w-full p-3 border border-gray-300"
        />
      </div>

      <input
        type="submit"
        value="Create Note"
        className="bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-2 text-white font-black cursor-pointer "
      />
    </form>
  );
}
