import { twMerge } from "tailwind-merge";

const Button = ({ text, className }) => (
  <button
    className={twMerge(
      "bg-blue-500 text-white p-2 cursor-pointer rounded-lg font-medium hover:bg-blue-600 transition mt-4",
      className
    )}
  >
    {text}
  </button>
);

export default Button;
