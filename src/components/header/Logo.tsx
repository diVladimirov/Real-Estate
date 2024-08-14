import Image from "next/image";
import logo from "../../../public/logo-real-estate1.png";

export default function Logo() {
  return (
    <div className="flex flex-shrink-0 items-center justify-between">
      <Image
        src={logo}
        alt="logo"
        className="mr-2"
        width={60}
        height={30}
        priority
      />
      <span className="text-sm tracking-tight text-white">Real Estate</span>
    </div>
  );
}
