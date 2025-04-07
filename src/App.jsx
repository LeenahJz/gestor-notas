import { useState, useEffect } from "react";
import NotesList from "./components/NotesList";
import NoteForm from "./components/NoteForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [pixelEffect, setPixelEffect] = useState(false);

  // Load notes from localStorage
  const loadNotes = () => {
    const savedNotes = localStorage.getItem("pixel-notes");
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  };

  // Save notes to localStorage
  useEffect(() => {
    loadNotes();
  }, []);

  useEffect(() => {
    localStorage.setItem("pixel-notes", JSON.stringify(notes));
  }, [notes]);

  // Add new note
  const addNote = (title, content, image, location) => {
    const newNote = { 
      id: Date.now(), 
      title, 
      content,
      image,
      location,
      createdAt: new Date().toISOString()
    };
    setNotes([newNote, ...notes]);
    triggerPixelEffect();
  };

  // Delete note
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
    triggerPixelEffect();
  };

  // Pixel animation effect
  const triggerPixelEffect = () => {
    setPixelEffect(true);
    setTimeout(() => setPixelEffect(false), 300);
  };

  return (
    <div className={`pixel-app ${pixelEffect ? "pixelate" : ""}`}>
      <div className="pixel-container">
        <h1 className="pixel-title">
         <span className="pixel-icon">🌸</span> My Notes <span className="pixel-icon">🌸</span>
        </h1>
        <NoteForm addNote={addNote} />
        <NotesList notes={notes} deleteNote={deleteNote} />
      </div>
      
      {/* Pixel art flower decorations */}
      <div className="pixel-flower pixel-flower-1"></div>
      <div className="pixel-flower pixel-flower-2"></div>
      <div className="pixel-flower pixel-flower-3"></div>
      <div className="pixel-flower pixel-flower-4"></div>
    </div>
  );
};

export default App;