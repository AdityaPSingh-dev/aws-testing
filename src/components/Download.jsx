const Download = () => {
  return (
    <section className="bg-dark py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Download FarmVest app
              <br />
              and invest in your future
            </h2>
            <p className="text-lg opacity-80 mb-8">
              Join thousands of investors already using FarmVest to invest in
              agriculture and secure their financial future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-dark-light rounded-lg hover:bg-opacity-80 transition-colors"
              >
                <img src="/app-store.svg" alt="App Store" className="h-8" />
                <span>App Store</span>
              </a>
              <a
                href="#"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-dark-light rounded-lg hover:bg-opacity-80 transition-colors"
              >
                <img src="/play-store.svg" alt="Play Store" className="h-8" />
                <span>Play Store</span>
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="/mobile-app.png"
              alt="FarmVest Mobile App"
              className="max-w-sm lg:max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
