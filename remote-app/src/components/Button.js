import React from 'react';

export default function Button({ label, onButtonClick }) {
  return (
    <button
      style={{
        background: "#6a1b9a",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "6px",
        fontSize: "16px",
        cursor: "pointer",
      }}
      onClick={onButtonClick}
    >
      {label}
    </button>
  );
}
