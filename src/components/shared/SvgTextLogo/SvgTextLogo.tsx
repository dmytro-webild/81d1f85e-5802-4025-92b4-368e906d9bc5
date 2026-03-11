import React from 'react';

interface SvgTextLogoProps {
  text: string;
  className?: string;
}

const SvgTextLogo: React.FC<SvgTextLogoProps> = ({ text, className = '' }) => {
  return (
    <svg
      width="200"
      height="60"
      viewBox="0 0 200 60"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="32"
        fontWeight="bold"
        fill="currentColor"
      >
        {text}
      </text>
    </svg>
  );
};

export default SvgTextLogo;
