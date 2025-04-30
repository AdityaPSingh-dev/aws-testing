import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Download from "./components/Download";

function App() {
  return (
    <div className="min-h-screen bg-dark text-dark-text">
      <Hero />
      <Features />
      <Testimonials />
      <Download />
    </div>
  );
}

export default App;
