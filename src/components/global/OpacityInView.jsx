"use client";

export default function OpacityInView({ children, className }) {
  return (
    <div className={`realtive overflow-hidden ${className}`}>
      {children}
      <div className={`pointer-events-none fixed inset-0 fade-overlay`}></div>
    </div>
  );
}
