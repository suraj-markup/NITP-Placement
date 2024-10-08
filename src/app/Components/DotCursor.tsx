"use client"
import React, { useEffect, useState } from "react";

const DotCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);

  // Parallax factor: smaller values create more lag
  const parallaxFactor = 0.5;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const animateCursor = () => {
      setDotPosition((prev) => {
        const dx = mousePosition.x - prev.x;
        const dy = mousePosition.y - prev.y;
        
        // Only update if there's a movement
        if (dx !== 0 || dy !== 0) {
          return {
            x: prev.x + dx * parallaxFactor,
            y: prev.y + dy * parallaxFactor,
          };
        }

        return prev;
      });

      if (isMoving) {
        requestAnimationFrame(animateCursor);
      }
    };

    animateCursor();
  }, [mousePosition, isMoving]);

  return (
    <div
      className="fixed w-6 h-6 rounded-full bg-red-500 pointer-events-none z-50 transition-transform duration-75 ease-linear"
      style={{
        left: `${dotPosition.x}px`,
        top: `${dotPosition.y}px`,
        transform: "translate(-50%, -50%)", // Centers the dot on the cursor
      }}
    ></div>
  );
};

export default DotCursor;
