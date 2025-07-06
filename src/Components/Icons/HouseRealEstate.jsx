export default function HouseRealEstate({ className = '', ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      width={16}
      height={16}
      stroke="currentColor"
      fill="none"
      className={className}
      {...props}
    >
      <polyline
        points="20 8.5 20 22.5 4 22.5 4 8.5"
        strokeMiterlimit={10}
      />
      <polyline
        points="23 10.5 12 1.5 1 10.5"
        strokeMiterlimit={10}
      />
    </svg>
  );
}
