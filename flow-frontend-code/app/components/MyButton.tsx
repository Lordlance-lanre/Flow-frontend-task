"use client";

import React from "react";

type MyButtonProps = {
  label: string;
};

export default function MyButton({ label }: MyButtonProps) {
  function handleClick() {
    // simple client-side behavior
    // eslint-disable-next-line no-console
    console.log(`${label} clicked`);
    // small feedback
    // use alert for demonstration; replace in production
    // eslint-disable-next-line no-alert
    alert(`${label} clicked`);
  }

  return (
    <button
      onClick={handleClick}
      style={{
        padding: "8px 12px",
        borderRadius: 6,
        border: "1px solid #ccc",
        background: "#fff",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
}
