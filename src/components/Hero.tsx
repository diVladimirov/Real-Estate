import SearchForm from "./hero/SearchForm";

export default function Hero() {
  return (
    <div className="hero flex min-h-screen items-center justify-center">
      <div className="flex max-w-4xl flex-col items-center gap-6 pb-10">
        <div className="space-y-4">
          <h1 className="m-4 text-center text-4xl text-white md:text-5xl lg:text-6xl">
            Discover Your Ideal Home here!
          </h1>
          <p className="p-4 text-center text-slate-300">
            Discover your dream home with our real estate services. Whether
            you're looking to buy, sell, or rent, we're here to help.
          </p>
        </div>
        <SearchForm />
      </div>
    </div>
  );
}
