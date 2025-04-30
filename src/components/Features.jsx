const Features = () => {
  const features = [
    {
      title: "Download FarmVest",
      description:
        "Start by downloading FarmVest app on your mobile device from the app store.",
      icon: "🌱",
    },
    {
      title: "Create Account",
      description:
        "Complete the registration process by providing your basic information.",
      icon: "👤",
    },
    {
      title: "Link Your Bank Account",
      description:
        "Connect your bank account to start investing in agriculture with ease.",
      icon: "🏦",
    },
    {
      title: "Start Investing",
      description:
        "Choose from our curated agricultural investments and start growing your portfolio.",
      icon: "💰",
    },
  ];

  return (
    <section className="bg-dark py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How FarmVest Works
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Get started with FarmVest in a few simple steps and start growing
            your agricultural investments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-dark-light hover:bg-opacity-50 transition-colors"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="opacity-80">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <img
            src="/features-image.jpg"
            alt="FarmVest Features"
            className="rounded-lg max-w-full md:max-w-lg lg:max-w-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
