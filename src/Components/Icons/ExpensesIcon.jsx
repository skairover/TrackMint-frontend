// components/icons/ExpensesIcon.jsx

export default function ExpensesIcon({ width = 16, height = 16, className = '', ...props }) {
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
      <g data-name="recieve money">
        <circle
          cx="12"
          cy="8.16"
          r="2.86"
          strokeMiterlimit={10}
          strokeLinecap="square"
        />
        <polyline
          points="14.86 18.66 12 21.52 9.14 18.66"
          strokeMiterlimit={10}
          strokeLinecap="square"
        />
        <path
          d="M12,20.57V16.75a1.91,1.91,0,0,0-1.91-1.91H1.5V1.48h21V14.84H15.82"
          strokeMiterlimit={10}
          strokeLinecap="square"
        />
        <line
          x1="19.64"
          y1="8.16"
          x2="17.73"
          y2="8.16"
          strokeMiterlimit={10}
        />
        <line
          x1="6.27"
          y1="8.16"
          x2="4.36"
          y2="8.16"
          strokeMiterlimit={10}
        />
      </g>
    </svg>
  );
}
