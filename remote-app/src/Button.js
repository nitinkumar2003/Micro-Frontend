import React from 'react';
export default function Button(){
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
      onClick={() => alert("Yeh button REMOTE app se aaya hai!")}
    >
      Remote Button 🚀
    </button>
}