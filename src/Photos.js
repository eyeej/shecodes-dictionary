import React from "react";
import "./Photos.css";

export default function Photos({ images }) {
  if (!images || images.length === 0) return <p>No images found</p>;

  return (
    <div className="Photos">
      <h3>Related Images</h3>
      <div className="photos-grid">
        {images.map((photo) => (
          <div key={photo.id} className="photo-item">
            <a href={photo.links.html} target="_blank" rel="noopener noreferrer">
              <img
                src={photo.urls.small}                     // correct Unsplash property
                alt={photo.alt_description || "Image"}    // alt text
                style={{ width: "100%", borderRadius: "8px" }}
              />
            </a>
            <p style={{ fontSize: "12px", marginTop: "5px" }}>
              Photo by {photo.user?.name || "Unknown"} on Unsplash
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}