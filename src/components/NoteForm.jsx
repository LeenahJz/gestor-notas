import { useState } from "react";

const NoteForm = ({ addNote }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      alert("Please fill both title and content!");
      return;
    }

    addNote(title, content, image, location);
    setTitle("");
    setContent("");
    setImage("");
    setLocation(null);
  };

  const captureImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const getLocation = async () => {
    setIsLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          setIsLoading(false);
        },
        (error) => {
          console.error("Error getting location:", error);
          alert("Failed to get location!");
          setIsLoading(false);
        }
      );
    } else {
      alert("Geolocation not supported in this browser");
      setIsLoading(false);
    }
  };

  return (
    <div className="pixel-form-container">
      <form onSubmit={handleSubmit} className="pixel-form">
        <div className="pixel-input-group">
          <input
            type="text"
            className="pixel-input"
            placeholder="Note title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        
        <div className="pixel-input-group">
          <textarea
            className="pixel-textarea"
            placeholder="Write your note here..."
            rows="4"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        
        <div className="pixel-button-group">
          <label className="pixel-file-label">
            <input 
              type="file" 
              accept="image/*" 
              onChange={captureImage}
              className="pixel-file-input"
            />
            <span className="pixel-button pixel-button-secondary">
              <span className="pixel-icon">🖼️</span> Add Image
            </span>
          </label>
          
          <button 
            type="button" 
            onClick={getLocation}
            className={`pixel-button pixel-button-secondary ${isLoading ? "pixel-loading" : ""}`}
            disabled={isLoading}
          >
            <span className="pixel-icon">{isLoading ? "⏳" : "📍"}</span>
            {isLoading ? "Locating..." : "Add Location"}
          </button>
        </div>
        
        {image && (
          <div className="pixel-image-preview">
            <img src={image} alt="Preview" className="pixel-image" />
            <button 
              type="button"
              onClick={() => setImage("")}
              className="pixel-close-button"
            >
              ✖
            </button>
          </div>
        )}
        
        {location && (
          <div className="pixel-location-display">
            <span className="pixel-icon">📍</span>
            {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
            <button 
              type="button"
              onClick={() => setLocation(null)}
              className="pixel-close-button"
            >
              ✖
            </button>
          </div>
        )}
        
        <button 
          type="submit" 
          className="pixel-button pixel-button-primary"
        >
          <span className="pixel-icon">➕</span> Create Note
        </button>
      </form>
    </div>
  );
};

export default NoteForm;