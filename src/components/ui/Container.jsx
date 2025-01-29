export default function Container({ children, className }) {
  return (
    <div
      className={"w-full max-w-7xl mx-auto px-4 sm:px-2 lg:px-8 " + className}
    >
      {children}
    </div>
  );
}
