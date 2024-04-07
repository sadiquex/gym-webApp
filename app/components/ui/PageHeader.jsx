export default function PageHeader({ pageTitle }) {
  return (
    <div
      className={`w-full h-[30vh] object-cover flex flex-col gap-4 items-center justify-center`}
      style={{
        backgroundImage: `url('/assets/pageHeader-bg.jpg')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        // backgroundAttachment: "fixed",
      }}
    >
      <h2 className="text-white font-semibold text-3xl">{pageTitle}</h2>
    </div>
  );
}
