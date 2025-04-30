const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Investor",
      image: "/testimonial1.jpg",
      text: "FarmVest has revolutionized the way I invest in agriculture. The platform is user-friendly and the returns have been amazing!",
    },
    {
      name: "Michael Chen",
      role: "Farm Owner",
      image: "/testimonial2.jpg",
      text: "As a farm owner, FarmVest has helped me connect with investors and grow my agricultural business significantly.",
    },
  ];

  return (
    <section className="bg-dark-light py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Customers have to say
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            See what our valued customers are saying about their experience with
            FarmVest.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-dark p-6 rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-primary">{testimonial.role}</p>
                </div>
              </div>
              <p className="opacity-80 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="px-8 py-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors">
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
