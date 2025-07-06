// components/icons/ProfileIcon.jsx

export default function ProfileIcon({ width = 16, height = 16, className = '', ...props }) {
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
      <circle
        cx="12"
        cy="7.25"
        r="5.73"
        strokeMiterlimit={10}
      />
      <path
        d="M1.5,23.48l.37-2.05A10.3,10.3,0,0,1,12,13h0a10.3,10.3,0,0,1,10.13,8.45l.37,2.05"
        strokeMiterlimit={10}
      />
    </svg>
  );
}
