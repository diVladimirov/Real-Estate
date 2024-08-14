import { Button } from "../ui/button";

export default function Auth() {
  return (
    <div className="hidden text-sm text-white lg:flex">
      <Button variant="outline" className="mr-2 bg-black">
        Sign in
      </Button>
      <Button className="bg-slate-800">Sign up</Button>
    </div>
  );
}
