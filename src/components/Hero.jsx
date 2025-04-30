import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission
    console.log("Email submitted:", email);
  };

  return (
    <section className="min-h-screen bg-dark-light text-dark-text py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center gap-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            The easiest and fastest way to{" "}
            <span className="text-primary">invest</span> in Agriculture
          </h1>
          <p className="text-lg md:text-xl max-w-2xl opacity-80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu,
            mollis aenean sit amet, tensectetur. Tristique magna sit amet purus
            gravida quis blandit turpis.
          </p>
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md flex flex-col sm:flex-row gap-4"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full bg-dark border border-gray-600 focus:outline-none focus:border-primary"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 rounded-full bg-primary text-white font-semibold hover:bg-opacity-90 transition-colors"
            >
              Get Started
            </button>
          </form>
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <img src="/forbes.svg" alt="Forbes" className="h-8 opacity-50" />
            <img
              src="/business.svg"
              alt="Business"
              className="h-8 opacity-50"
            />
            <img
              src="/fidelity.svg"
              alt="Fidelity"
              className="h-8 opacity-50"
            />
            <img src="/cnbc.svg" alt="CNBC" className="h-8 opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
