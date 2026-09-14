import React from 'react';
export default function Button(){

  const handleClick=()=>{
    window.dispatchEvent(
      new CustomEvent("remote-button-clicked", {
        detail: { message: "Remote button clicked!" },
      })
    )
  }
    return  <button
      style={{
        background: "#6a1b9a",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "6px",
        fontSize: "16px",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      Remote Button 🚀
    </button>
}