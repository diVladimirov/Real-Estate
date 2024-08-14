import Logo from "./header/Logo";
import Links from "./header/Links";
import Auth from "./header/Auth";
import MobileMenu from "./header/MobileMenu";

export default function Navbar() {
  return (
    <nav className="fixed top-2 z-50 w-screen px-4">
      <div className="container flex items-center  justify-between rounded-lg bg-black py-3">
        <Logo />
        <Links />
        <Auth />
        <MobileMenu />
      </div>
    </nav>
  );
}
