import { useState } from "react";

const NoteCard = ({ note, deleteNote }) => {
  const [isShaking, setIsShaking] = useState(false);

  const handleDelete = () => {
    setIsShaking(true);
    setTimeout(() => {
      deleteNote(note.id);
    }, 300);
  };

  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className={`pixel-note-card ${isShaking ? "pixel-shake" : ""}`}>
      <div className="pixel-note-header">
        <h3 className="pixel-note-title">{note.title}</h3>
        <button 
          className="pixel-delete-button"
          onClick={handleDelete}
        >
          <span className="pixel-icon">🗑️</span>
        </button>
      </div>
      
      <div className="pixel-note-content">
        <p className="pixel-note-text">{note.content}</p>
        
        {note.image && (
          <div className="pixel-note-image-container">
            <img 
              src={note.image} 
              alt="Note" 
              className="pixel-note-image"
            />
          </div>
        )}
        
        {note.location && (
          <div className="pixel-note-location">
            <span className="pixel-icon">🪄</span>
            {note.location.lat.toFixed(2)}, {note.location.lng.toFixed(2)}
          </div>
        )}
      </div>
      
      <div className="pixel-note-footer">
        <span className="pixel-note-date">{formatDate(note.createdAt)}</span>
        <div className="pixel-note-actions">
          <button className="pixel-small-button">
            <span className="pixel-icon">✏️</span>
          </button>
          <button className="pixel-small-button">
            <span className="pixel-icon">💗</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;