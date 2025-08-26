import React from 'react';

interface CodeCraftLogoProps {
  className?: string;
  animated?: boolean;
}

export const CodeCraftLogo: React.FC<CodeCraftLogoProps> = ({ 
  className = "w-40 h-40", 
  animated = true 
}) => {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Gradient definitions */}
      <defs>
        <linearGradient id="tealGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#14b8a6" />
          <stop offset="100%" stopColor="#00b4b4" />
        </linearGradient>
        
        <linearGradient id="tealGradientDark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0d9488" />
          <stop offset="100%" stopColor="#00b4b4" />
        </linearGradient>

        {/* Glow filter */}
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Outer hexagon container */}
      <g transform="translate(100, 100)">
        {/* Animated outer ring */}
        {animated && (
          <circle
            r="85"
            fill="none"
            stroke="url(#tealGradient)"
            strokeWidth="2"
            opacity="0.3"
            strokeDasharray="10 5"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 0 0"
              to="360 0 0"
              dur="20s"
              repeatCount="indefinite"
            />
          </circle>
        )}

        {/* Main hexagon shape */}
        <polygon
          points="0,-70 60.6,-35 60.6,35 0,70 -60.6,35 -60.6,-35"
          fill="none"
          stroke="url(#tealGradient)"
          strokeWidth="3"
          filter="url(#glow)"
        />

        {/* Inner hexagon */}
        <polygon
          points="0,-50 43.3,-25 43.3,25 0,50 -43.3,25 -43.3,-25"
          fill="none"
          stroke="url(#tealGradientDark)"
          strokeWidth="2"
          opacity="0.6"
        />

        {/* Code brackets < > */}
        <g transform="scale(1.2)">
          {/* Left bracket */}
          <path
            d="M -25,-15 L -35,0 L -25,15"
            stroke="url(#tealGradient)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          >
            {animated && (
              <animate
                attributeName="stroke-width"
                values="4;5;4"
                dur="2s"
                repeatCount="indefinite"
              />
            )}
          </path>

          {/* Right bracket */}
          <path
            d="M 25,-15 L 35,0 L 25,15"
            stroke="url(#tealGradient)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          >
            {animated && (
              <animate
                attributeName="stroke-width"
                values="4;5;4"
                dur="2s"
                repeatCount="indefinite"
              />
            )}
          </path>
        </g>

        {/* Center dots representing craft/creation */}
        <g>
          <circle cx="-8" cy="0" r="3" fill="url(#tealGradient)">
            {animated && (
              <animate
                attributeName="opacity"
                values="0.3;1;0.3"
                dur="1.5s"
                repeatCount="indefinite"
              />
            )}
          </circle>
          <circle cx="0" cy="0" r="3" fill="url(#tealGradient)">
            {animated && (
              <animate
                attributeName="opacity"
                values="0.3;1;0.3"
                dur="1.5s"
                begin="0.5s"
                repeatCount="indefinite"
              />
            )}
          </circle>
          <circle cx="8" cy="0" r="3" fill="url(#tealGradient)">
            {animated && (
              <animate
                attributeName="opacity"
                values="0.3;1;0.3"
                dur="1.5s"
                begin="1s"
                repeatCount="indefinite"
              />
            )}
          </circle>
        </g>

        {/* Floating particles for animation */}
        {animated && (
          <>
            <circle r="2" fill="#14b8a6" opacity="0.6">
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0; 30,-40; -30,-40; 0,0"
                dur="6s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0;0.6;0.6;0"
                dur="6s"
                repeatCount="indefinite"
              />
            </circle>
            <circle r="2" fill="#00b4b4" opacity="0.6">
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0; -30,40; 30,40; 0,0"
                dur="6s"
                begin="2s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0;0.6;0.6;0"
                dur="6s"
                begin="2s"
                repeatCount="indefinite"
              />
            </circle>
          </>
        )}
      </g>
    </svg>
  );
};

export default CodeCraftLogo;