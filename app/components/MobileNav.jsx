import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNav({ navLinks, onClose }) {
  const pathname = usePathname();

  return (
    <div className="absolute top-16 left-0 bg-white text-black w-full h-screen flex items-center justify-center">
      <ul className="flex flex-col gap-4 items-center text-2xl">
        {navLinks.map((link, i) => (
          <li key={i}>
            <Link
              className={`${
                pathname === link.url ? "text-primaryColor font-semibold" : ""
              }`}
              href={link.url}
              onClick={onClose}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
