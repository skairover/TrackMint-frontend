import React from 'react';

const ArrowDownIcon = ({ width = 16, height = 16, color = '#ffffff', className='',...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      width={width}
      height={height}
      color={color}
      className={className}
      {...props}
    >
      <style>{`
        .download-icon-stroke {
          fill: none;
          stroke: currentColor;
          stroke-miterlimit: 10;
        }
      `}</style>
      <circle className="download-icon-stroke" cx="12" cy="12" r="10.5" />
      <line className="download-icon-stroke" x1="12" y1="6.27" x2="12" y2="17.73" />
      <polyline
        className="download-icon-stroke"
        points="16.77 12.96 12 17.73 7.23 12.96"
      />
    </svg>
  );
};

export default ArrowDownIcon;
