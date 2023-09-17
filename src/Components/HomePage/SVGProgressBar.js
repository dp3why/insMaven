import React from "react";

const SVGProgressBar = ({ percentage }) => {
  const viewBox = "0 0 100 10"; // Adjust the viewBox dimensions as needed

  return (
    <svg
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
    >
      {/* Background rectangle */}
      <rect x="0" y="0" width="100" height="5" fill="#ccc" />

      {/* Progress bar */}
      <rect x="0" y="0" width={percentage} height="5" fill="#007bff" />
    </svg>
  );
};

export default SVGProgressBar;
