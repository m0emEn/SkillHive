import React from "react";

const UserIcon = ({ color, size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 5C14 7.20914 12.2091 9 10 9C7.79086 9 6 7.20914 6 5C6 2.79086 7.79086 1 10 1C12.2091 1 14 2.79086 14 5Z"
      stroke={color}
      strokeWidth="2"
    />
    <path
      d="M16.4977 18.9992H3.50231C3.59508 15.4883 6.4678 12.6704 10 12.6659C13.5322 12.6704 16.4049 15.4883 16.4977 18.9992Z"
      stroke={color}
      strokeWidth="2"
    />
  </svg>
);
export default UserIcon;
