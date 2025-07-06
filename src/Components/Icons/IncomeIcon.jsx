// components/icons/IncomeIcon.jsx

export default function IncomeIcon({ width = 16, height = 16, className = '', ...props }) {
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
      <g data-name="graphic money">
        <circle
          cx="12"
          cy="15.82"
          r="2.86"
          strokeMiterlimit={10}
          strokeLinecap="square"
        />
        <polyline
          points="17.73 2.46 13.91 6.27 12 4.36 6.27 9.14 1.5 9.14 1.5 22.5 22.5 22.5 22.5 9.14 12 9.14"
          strokeMiterlimit={10}
          strokeLinecap="square"
        />
        <line
          x1="19.64"
          y1="15.82"
          x2="17.73"
          y2="15.82"
          strokeMiterlimit={10}
        />
        <line
          x1="6.27"
          y1="15.82"
          x2="4.36"
          y2="15.82"
          strokeMiterlimit={10}
        />
        <polyline
          points="14.86 1.5 18.68 1.5 18.68 5.32"
          strokeMiterlimit={10}
          strokeLinecap="square"
        />
      </g>
    </svg>
  );
}
