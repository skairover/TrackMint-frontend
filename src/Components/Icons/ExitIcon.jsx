// components/icons/DashboardIcon.jsx

export default function ExitIcon({ width = 16, height = 16, className = '', ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      width={width}
      height={height}
      stroke="currentColor"
      fill="none"
      className={className}
      {...props}
    >
      <polygon
        points="11.5 22.5 1.5 22.5 1.5 3.5 11.5 1.5 11.5 22.5"
        strokeMiterlimit={10}
      />
      <rect
        x="11.5"
        y="3.5"
        width="4"
        height="19"
        strokeMiterlimit={10}
      />
      <path
        d="M9.5,11.5h0Z"
        strokeMiterlimit={10}
      />
      <polyline
        points="19.5 9.5 22.48 12.47 19.5 15.45"
        strokeMiterlimit={10}
      />
      <line
        x1="15.5"
        y1="12.5"
        x2="22.5"
        y2="12.5"
        strokeMiterlimit={10}
      />
    </svg>
  );
}
