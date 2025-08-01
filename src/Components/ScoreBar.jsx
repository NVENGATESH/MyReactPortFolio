import React, { useEffect, useState } from "react";
import "./ScoreBar.css";

export default function ScoreBar({ score = 80, width = 100, height = 2, triggerFill = false }) {
  const [fill, setFill] = useState(0);

  useEffect(() => {
    if (triggerFill) {
      setFill(score);
    } else {
      setFill(0); // reset when not hovered
    }
  }, [triggerFill, score]);

  return (
    <div
      className="scorebar-container"
      style={{ width: `${width}px`, height: `${height}px`, borderRadius: `${height}px` }}
    >
      <div
        className="scorebar-fill"
        style={{
          width: `${fill}%`,
          height: "100%",
          borderRadius: `${height}px`,
        }}
      />
    </div>
  );
}
