"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import { Button } from "../ui/button";

export default function MobileMenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      <div className="flex-col justify-end text-white md:flex lg:hidden">
        <button onClick={handleToggleMenu}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="fixed top-16 left-4 right-4 z-40 rounded-md bg-black lg:hidden">
          <ul className="flex flex-col items-center">
            {NAV_LINKS.map((link, index) => (
              <li key={index} className="py-6">
                <Link
                  href={link.url}
                  className="text-sm text-white hover:text-neutral-500"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-center  text-white lg:hidden pb-8">
            <Button variant="outline" className="mr-2 bg-black">
              Sign in
            </Button>
            <Button className="bg-slate-800">Sign up</Button>
          </div>
        </div>
      )}
    </>
  );
}
