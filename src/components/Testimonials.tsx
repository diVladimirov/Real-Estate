import { TESTIMONIALS } from "@/constants";
import Image from "next/image";

export default function Testimonials() {
  return (
    <div className="container mx-auto my-20 border-b pb-10">
      <h2 className="mb-20 text-center text-3xl tracking-tighter sm:text-4xl lg:text-5xl">
        What Our Clients Said
      </h2>
      <ul className="flex flex-wrap">
        {TESTIMONIALS.map((item, index) => (
          <li
            key={index}
            className="flex flex-col w-full p-2 md:w-1/2 lg:w-1/4 "
          >
            <div className="rounded-xl border p-4 flex flex-col h-full justify-between">
              <div className="flex items-center">
                <Image
                  className="mr-4 rounded-full border-4 border-neutral-400"
                  src={item.image}
                  width={80}
                  height={80}
                  alt={item.name}
                />
                <div>
                  <h4 className="w-full">{item.name}</h4>
                  <span className="text-sm text-neutral-600">
                    {item.instagram}
                  </span>
                </div>
              </div>
              <p className="p-4">{item.feedback}</p>
              <p className="text-sm text-neutral-400 ">{item.city_country}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
