export default function PaintBrushBg({ children, otherStyles }) {
  return (
    <div
      className={`flex items-center justify-center p-4 text-white text-lg font-semibold ${otherStyles}`}
      style={{
        backgroundImage: `url('/assets/paint-brush.svg')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {children}
    </div>
  );
}
