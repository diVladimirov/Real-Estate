import Link from "next/link";
import { NAV_LINKS } from "@/constants";

export default function Links() {
  return (
    <div className="hidden lg:flex">
      <ul className="flex items-center gap-4">
        {NAV_LINKS.map((link, index) => (
          <li key={index}>
            <Link
              href={link.url}
              className="text-sm text-white hover:text-neutral-500"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
