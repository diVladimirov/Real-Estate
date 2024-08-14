import { HOW_IT_WORKS } from "@/constants";
import { CircleCheckBig } from "lucide-react";

export default function HowItWorks() {
  return (
    <div className="container mx-auto my-10 border-b pd-10">
      <h2 className="text-center text-3xl tracking-tighter sm:text-4xl lg:5xl">
        {HOW_IT_WORKS.title}
      </h2>
      <p className="mx-auto my-10 max-w-4xl text-center text-neutral-800">
        {HOW_IT_WORKS.content}
      </p>
      <div className="works relative h-[700px] rounded-xl">
        <ul className="absolute left-0 top-0 h-full overflow-y-hidden p-10 md:p-20">
          {HOW_IT_WORKS.steps.map((step, index) => (
            <li key={index}>
              <div className="flex items-center">
                <CircleCheckBig className="mr-4 text-green-400" />
                <h6 className="font-medium  uppercase text-neutral-50">
                  {step.title}
                </h6>
              </div>
              <p className="my-2 max-w-80 p-2 text-neutral-100">{step.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
