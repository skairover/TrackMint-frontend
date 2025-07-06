import React from 'react';

function SettingsIcon({ width = 16, height = 16, color = '#ffffff', className = '' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      width={width}
      height={height}
      color={color}
      className={className}
    >
      <defs>
        <style>
          {`.gear-stroke { fill: none; stroke: currentColor; stroke-miterlimit: 10; }`}
        </style>
      </defs>
      <path
        className="gear-stroke"
        d="M20.59,12a8.12,8.12,0,0,0-.15-1.57l2.09-1.2-2.87-5-2.08,1.2a8.65,8.65,0,0,0-2.72-1.56V1.5H9.14V3.91A8.65,8.65,0,0,0,6.42,5.47L4.34,4.27l-2.87,5,2.09,1.2a8.29,8.29,0,0,0,0,3.14l-2.09,1.2,2.87,5,2.08-1.2a8.65,8.65,0,0,0,2.72,1.56V22.5h5.72V20.09a8.65,8.65,0,0,0,2.72-1.56l2.08,1.2,2.87-5-2.09-1.2A8.12,8.12,0,0,0,20.59,12Z"
      />
      <circle className="gear-stroke" cx="12" cy="12" r="3.82" />
    </svg>
  );
}

export default SettingsIcon;
