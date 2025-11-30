import React from "react";
import "./Photos.css";

export default function Photos({ images }) {
  if (!images || images.length === 0) return <p>No images found</p>;

  return (
    <div className="Photos">
      <h3>Related Images</h3>
      <div className="photos-grid">
        {images.map((photo, index) => (
          <div key={index} className="photo-item">
            <a href={photo.url} target="_blank" rel="noopener noreferrer">
              <img
                src={photo.src.medium}
                alt={photo.photographer}
                style={{ width: "100%", borderRadius: "8px" }}
              />
            </a>
            <p style={{ fontSize: "12px", marginTop: "5px" }}>
              Photo by {photo.photographer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}