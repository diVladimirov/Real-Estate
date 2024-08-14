import { FEATURED_PROPERTIES } from "@/constants";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedProperties() {
  return (
    <div className="container mx-auto border-b py-6 pb-10">
      <h2 className="text-center text-3xl tracking-tighter sm:text-4xl lg:text-5xl">
        Featured Properties
      </h2>
      <ul className="flex flex-wrap">
        {FEATURED_PROPERTIES.map((property, index) => (
          <li
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 text-center"
          >
            <Link href="#" className="m-2 inline-block">
              <div className="p-8">
                <Image
                  alt={property.name}
                  src={property.image}
                  className="mb-8 rounded-md object-cover"
                  width={300}
                  height={300}
                />
                <div className="text-center">
                  <h6 className="mb-5 mt-2 font-medium">{property.name}</h6>
                  <span className="mb-5 mt-2">${property.price}</span>
                  <div className="mt-2 flex items-center justify-center">
                    <Star fill="gold" strokeWidth={0} className="mr-2" />
                    <span className="text-sm">
                      {property.rating} ({property.reviews} reviews)
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
