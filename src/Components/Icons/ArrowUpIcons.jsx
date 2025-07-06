import React from 'react';

const ArrowUpIcon = ({ width = 16, height = 16, color = '#ffffff',className='', ...props }) => {
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
        .upload-icon-stroke {
          fill: none;
          stroke: currentColor;
          stroke-miterlimit: 10;
        }
      `}</style>
      <circle className="upload-icon-stroke" cx="12" cy="12" r="10.5" />
      <line className="upload-icon-stroke" x1="12" y1="17.73" x2="12" y2="6.27" />
      <polyline
        className="upload-icon-stroke"
        points="7.23 11.04 12 6.27 16.77 11.04"
      />
    </svg>
  );
};

export default ArrowUpIcon;
