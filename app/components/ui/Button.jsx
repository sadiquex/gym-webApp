export default function Button({
  children,
  onClick,
  bgColor,
  textColor,
  otherStyles,
}) {
  return (
    <button
      className={`h-full whitespace-nowrap flex justify-center items-center gap-1 py-4 px-8 cursor-pointer transition-all duration-300 ${
        bgColor ? `bg-${bgColor}` : "bg-primaryColor"
      }
      ${textColor ? `text-${textColor}` : "text-darkAsh"}
      ${otherStyles}
       `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
