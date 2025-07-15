
import React from "react";

export const ImdbLogo = ({ className = "", style = {} }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 392 136"
    width="96"
    height="48"
    className={className}
    style={style}
  >
    <rect width="392" height="136" rx="20" fill="#000" />
    <text
      x="196"
      y="90"
      textAnchor="middle"
      fontFamily="Arial Black, Arial, Helvetica, sans-serif"
      fontWeight="bold"
      fontSize="80"
      fill="#F5C518"
      letterSpacing="-8"
    >
      IMDb
    </text>
  </svg>
);
