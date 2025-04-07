import NoteCard from "./NoteCard";

const NotesList = ({ notes, deleteNote }) => {
  return (
    <div className="pixel-notes-container">
      <h2 className="pixel-subtitle">
        <span className="pixel-icon">🌈</span> Notes List<span className="pixel-icon">🌈</span>
      </h2>
      
      {notes.length > 0 ? (
        <div className="pixel-notes-grid">
          {notes.map((note) => (
            <NoteCard key={note.id} note={note} deleteNote={deleteNote} />
          ))}
        </div>
      ) : (
        <div className="pixel-empty-state">
          <div className="pixel-empty-icon">🤷‍♀️</div>
          <p className="pixel-empty-text">No notes yet!</p>
          <p className="pixel-empty-subtext">Create your first note above</p>
        </div>
      )}
    </div>
  );
};

export default NotesList;